"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BandPhoto() {
  return (
    <section className="relative w-full overflow-hidden bg-bg">
      {/* === Background Layers === */}
      <div className="absolute inset-0">
        {/* Base dark fill */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        {/* Warm crimson ambient glow — top center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(139,26,26,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Amber accent glow — lower center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 70%, rgba(196,163,90,0.1) 0%, transparent 60%)",
          }}
        />

        {/* Spotlight behind subjects — bright center bloom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 50% 45%, rgba(139,26,26,0.15) 0%, rgba(20,20,20,0.4) 40%, transparent 70%)",
          }}
        />

        {/* Deep vignette — darkens edges dramatically */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 65% at 50% 45%, transparent 30%, rgba(10,10,10,0.85) 100%)",
          }}
        />

        {/* Subtle smoky texture via layered gradients */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 30% 50% at 20% 50%, rgba(139,26,26,0.2) 0%, transparent 70%),
              radial-gradient(ellipse 30% 50% at 80% 50%, rgba(139,26,26,0.15) 0%, transparent 70%),
              radial-gradient(ellipse 40% 30% at 50% 20%, rgba(196,163,90,0.08) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      {/* === Subject Image === */}
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <Image
            src="/images/band-photo-group.png"
            alt="INTERLEAVED — Morgan Rose, Andrew Licht, Pat Deeb"
            width={2400}
            height={1801}
            className="relative z-10 w-full max-w-5xl h-auto"
            priority={false}
            style={{
              filter: "brightness(0.92) contrast(1.08) saturate(0.85)",
            }}
          />

          {/* Soft glow directly behind subjects for depth separation */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 40%, rgba(139,26,26,0.2) 0%, transparent 60%)",
            }}
          />

          {/* Bottom fade — blends feet/legs into the dark background */}
          <div
            className="absolute bottom-0 left-0 right-0 z-20 h-1/3"
            style={{
              background:
                "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.8) 40%, transparent 100%)",
            }}
          />

          {/* Top subtle fade */}
          <div
            className="absolute top-0 left-0 right-0 z-20 h-24"
            style={{
              background:
                "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)",
            }}
          />

          {/* Left edge fade — wide and gradual */}
          <div
            className="absolute top-0 bottom-0 left-0 z-20 w-[30%]"
            style={{
              background:
                "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.6) 40%, transparent 100%)",
            }}
          />

          {/* Right edge fade — wide and gradual */}
          <div
            className="absolute top-0 bottom-0 right-0 z-20 w-[30%]"
            style={{
              background:
                "linear-gradient(to left, #0a0a0a 0%, rgba(10,10,10,0.6) 40%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
