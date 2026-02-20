"use client";

import Script from "next/script";

export default function SnipcartProvider() {
  const apiKey = process.env.NEXT_PUBLIC_SNIPCART_API_KEY;

  if (!apiKey || apiKey === "YOUR_SNIPCART_PUBLIC_API_KEY_HERE") {
    return null;
  }

  return (
    <>
      <Script
        src="https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.js"
        strategy="afterInteractive"
      />
      <div
        hidden
        id="snipcart"
        data-api-key={apiKey}
        data-config-modal-style="side"
        data-currency="usd"
      />
    </>
  );
}
