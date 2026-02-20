import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import SnipcartProvider from "@/components/SnipcartProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://interleavedmusic.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "INTERLEAVED — Pull Back the Curtain",
    template: "%s — INTERLEAVED",
  },
  description:
    "Official website of INTERLEAVED. Three-piece rock band from Louisiana. New album 'Pull Back the Curtain' — Summer 2026.",
  keywords: [
    "INTERLEAVED",
    "interleaved band",
    "interleaved music",
    "Pull Back the Curtain",
    "Louisiana rock band",
    "alternative metal",
    "post-rock",
    "Pat Deeb",
    "Andrew Licht",
    "Morgan Rose",
  ],
  authors: [{ name: "INTERLEAVED" }],
  creator: "INTERLEAVED",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "INTERLEAVED — Pull Back the Curtain",
    description:
      "Three-piece rock band from Louisiana. New album 'Pull Back the Curtain' — Summer 2026.",
    siteName: "INTERLEAVED",
    type: "website",
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INTERLEAVED — Pull Back the Curtain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INTERLEAVED — Pull Back the Curtain",
    description:
      "Three-piece rock band from Louisiana. New album 'Pull Back the Curtain' — Summer 2026.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.css"
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-bg text-text-primary antialiased grain-overlay`}
      >
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SnipcartProvider />
      </body>
    </html>
  );
}
