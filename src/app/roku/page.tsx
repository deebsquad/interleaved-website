import type { Metadata } from "next";
import Image from "next/image";
import RokuHero from "@/components/RokuHero";
import VideoTeaser from "@/components/VideoTeaser";
import RokuStreamLinks from "@/components/RokuStreamLinks";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Watch & Stream — INTERLEAVED",
  description:
    "Watch the new INTERLEAVED teaser for 'Pull Back the Curtain' and stream on Spotify, Apple Music, YouTube, and follow on Instagram.",
  alternates: {
    canonical: "/roku",
  },
};

export default function RokuLandingPage() {
  return (
    <>
      <RokuHero />

      {/* Stream Now — primary highlight, immediately in view */}
      <section id="stream" className="pt-4 pb-12 px-6 bg-bg">
        <div className="max-w-4xl mx-auto">
          <RokuStreamLinks />
        </div>
      </section>

      <SectionDivider />

      {/* Teaser video — no heading, just the video */}
      <VideoTeaser />

      <SectionDivider />

      {/* New Album panel */}
      <section id="album" className="py-16 md:py-20 px-6 bg-bg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/pbtc-cover.jpg"
                  alt="Pull Back the Curtain"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-1 border border-crimson/20 -z-10" />
            </div>

            <div className="text-center md:text-left">
              <div className="h-px w-24 mx-auto md:mx-0 bg-gradient-to-r from-transparent via-amber to-transparent mb-6 md:bg-gradient-to-r md:from-amber md:via-amber/70 md:to-transparent" />
              <h2 className="text-base md:text-lg tracking-[0.4em] uppercase text-amber font-light mb-2">
                New Album
              </h2>
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.15em] text-text-primary mb-4">
                Pull Back the Curtain
              </h1>
              <p className="text-text-secondary tracking-[0.3em] uppercase text-sm">
                Summer 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
