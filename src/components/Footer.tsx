"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Music, Youtube, Facebook, Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/1X0Bg6G7y24oJ2HgEEBP0U",
    icon: Music,
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/interleaved/1675171160",
    icon: Music,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@interleavedofficial",
    icon: Youtube,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/interleavedmusic",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/interleaved.music/",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@interleavedmusic",
    icon: Music,
  },
  {
    label: "Email",
    href: "mailto:admin@interleavedmusic.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-24 md:py-32 px-6 bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <Image
            src="/logos/Interelaved-Symbol-Border-White.svg"
            alt="INTERLEAVED"
            width={40}
            height={42}
            className="mx-auto mb-6 opacity-30"
          />
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.15em] text-text-primary mb-4">
            Connect
          </h2>
          <p className="text-text-secondary tracking-[0.2em] uppercase text-sm">
            Follow us everywhere
          </p>
        </AnimatedSection>

        {/* Social Links */}
        <AnimatedSection className="flex flex-wrap items-center justify-center gap-6 mb-16">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex flex-col items-center gap-2"
                aria-label={link.label}
              >
                <div className="w-12 h-12 border border-border group-hover:border-crimson flex items-center justify-center transition-all duration-300 group-hover:bg-crimson/10">
                  <Icon
                    size={20}
                    className="text-text-muted group-hover:text-crimson transition-colors duration-300"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted group-hover:text-text-secondary transition-colors">
                  {link.label}
                </span>
              </a>
            );
          })}
        </AnimatedSection>

        {/* Newsletter / VIP List */}
        <AnimatedSection className="max-w-md mx-auto text-center mb-16">
          <h3 className="text-sm uppercase tracking-[0.3em] text-text-secondary mb-4">
            Join the VIP List
          </h3>
          <p className="text-text-muted text-xs tracking-[0.1em] mb-6 leading-relaxed">
            Be the first to know about new music, tour dates, and exclusive content.
          </p>
          <a
            href="https://fans.interleavedmusic.com/vip-list-1?source=website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-crimson hover:bg-crimson-light text-text-primary uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300"
          >
            Sign Up Now
          </a>
        </AnimatedSection>

        {/* Bottom */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/Interelaved-Symbol-Border-White.svg"
              alt=""
              width={20}
              height={21}
              className="opacity-40"
            />
            <Image
              src="/logos/Interelaved-Logo-White.svg"
              alt="INTERLEAVED"
              width={100}
              height={21}
              className="h-4 w-auto opacity-40"
            />
          </div>
          <p className="text-text-muted text-xs tracking-[0.15em]">
            &copy; {new Date().getFullYear()} INTERLEAVED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
