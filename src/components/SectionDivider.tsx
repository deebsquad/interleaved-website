"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center gap-6 py-6"
    >
      <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-crimson/30" />
      <Image
        src="/logos/Interelaved-Symbol-Border-White.svg"
        alt=""
        width={28}
        height={29}
        className="opacity-15"
        aria-hidden="true"
      />
      <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-crimson/30" />
    </motion.div>
  );
}
