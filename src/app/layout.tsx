import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "INTERLEAVED — Pull Back the Curtain",
  description:
    "Official website of INTERLEAVED. New album 'Pull Back the Curtain' — Summer 2026.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "INTERLEAVED — Pull Back the Curtain",
    description:
      "Official website of INTERLEAVED. New album 'Pull Back the Curtain' — Summer 2026.",
    siteName: "INTERLEAVED",
    type: "website",
    url: "https://interleavedmusic.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-bg text-text-primary antialiased grain-overlay`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
