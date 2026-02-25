"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoTeaser() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-bg">
      <div className="max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[9/16] overflow-hidden border border-border bg-bg-card shadow-2xl"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/PBTC-Teaser1-IG.webm" type="video/webm" />
            <source src="/videos/PBTC-Teaser1-IG.mp4" type="video/mp4" />
          </video>

          {/* Mute/Unmute toggle */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-10 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/10 rounded-full text-white transition-all duration-300 group"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX size={20} className="text-text-muted group-hover:text-amber transition-colors" />
            ) : (
              <Volume2 size={20} className="text-amber" />
            )}
          </button>

          {/* Subtle "tap to unmute" hint when muted */}
          {isMuted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute bottom-4 right-18 z-10 flex items-center gap-2 pointer-events-none"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted/70 bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                Tap to unmute
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
