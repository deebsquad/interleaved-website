"use client";

import { Youtube, Instagram, Music as MusicIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const primaryLink = {
  label: "Watch on YouTube",
  href: "https://www.youtube.com/playlist?list=OLAK5uy_lGAOLNSXB6_uYaexBwXNc_TFoJzHfHDgk",
  icon: Youtube,
};

const secondaryLinks = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/1X0Bg6G7y24oJ2HgEEBP0U",
    icon: MusicIcon,
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/interleaved/1675171160",
    icon: MusicIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/interleaved.music/",
    icon: Instagram,
  },
];

export default function RokuStreamLinks() {
  const PrimaryIcon = primaryLink.icon;
  return (
    <AnimatedSection className="flex flex-col items-center gap-4">
      <a
        href={primaryLink.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-10 py-4 bg-crimson hover:bg-crimson-light text-text-primary uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
      >
        <PrimaryIcon size={20} />
        <span>{primaryLink.label}</span>
      </a>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-4">
        {secondaryLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-3 border border-text-muted hover:border-amber text-text-secondary hover:text-amber uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-300"
            >
              <Icon size={18} />
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
