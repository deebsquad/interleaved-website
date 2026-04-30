"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RokuHero() {
  return (
    <section
      id="hero"
      className="relative w-full px-6 pt-28 pb-8 bg-bg overflow-hidden"
    >
      {/* Subtle radial backdrop for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.08)_0%,transparent_60%)]"
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center justify-center gap-4"
        >
          <Image
            src="/logos/Interelaved-Symbol-Border-White.svg"
            alt=""
            width={44}
            height={46}
            className="drop-shadow-2xl"
            priority
          />
          <Image
            src="/logos/Interelaved-Logo-White.svg"
            alt="INTERLEAVED"
            width={400}
            height={84}
            className="h-9 md:h-11 w-auto drop-shadow-2xl"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5"
        >
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
