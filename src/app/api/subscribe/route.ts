import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 }
    );
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const SERVER = process.env.MAILCHIMP_SERVER;

  if (!API_KEY || !AUDIENCE_ID || !SERVER) {
    return NextResponse.json(
      { error: "Newsletter service is not configured." },
      { status: 500 }
    );
  }

  const url = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ success: true });
    }

    // Already subscribed
    if (data.title === "Member Exists") {
      return NextResponse.json(
        { error: "You're already subscribed!" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: data.detail || "Something went wrong." },
      { status: response.status }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to connect to newsletter service." },
      { status: 500 }
    );
  }
}
