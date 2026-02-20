"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pbtc-cover.jpg"
          alt="Pull Back the Curtain"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/30 to-bg" />
        {/* Side vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,10,0.8)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/logos/Interelaved-Symbol-Border-White.svg"
            alt=""
            width={80}
            height={83}
            className="mx-auto mb-6 drop-shadow-2xl"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src="/logos/Interelaved-Logo-White.svg"
            alt="INTERLEAVED"
            width={600}
            height={126}
            className="w-full max-w-lg mx-auto mb-8 drop-shadow-2xl"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber to-transparent mb-6" />
          <h2 className="text-lg md:text-xl tracking-[0.4em] uppercase text-amber font-light mb-2">
            New Album
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.15em] text-text-primary mb-4">
            Pull Back the Curtain
          </h1>
          <p className="text-text-secondary tracking-[0.3em] uppercase text-sm mb-10">
            Summer 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <span className="px-8 py-3 bg-text-muted/30 text-text-muted uppercase tracking-[0.2em] text-sm font-semibold cursor-not-allowed">
              Pre-Save Now
            </span>
            <span className="px-8 py-3 border border-text-muted/30 text-text-muted uppercase tracking-[0.2em] text-sm cursor-not-allowed">
              Listen
            </span>
          </div>
          <p className="text-text-secondary tracking-[0.3em] uppercase text-xs">
            Coming Soon
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#music" className="text-text-muted hover:text-amber transition-colors">
          <ChevronDown size={28} />
        </a>
      </motion.div>
    </section>
  );
}
