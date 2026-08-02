"use client";

import { motion } from "framer-motion";

export function GiantArkayaWord() {
  return (
    <div 
      aria-hidden="true" 
      className="relative w-full overflow-hidden flex items-end justify-center select-none pt-4 sm:pt-8"
    >
      {/* Subtle ambient violet glow behind giant text */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.12),rgba(37,99,255,0.08),transparent_70%)] pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 font-sans font-black tracking-tighter text-center uppercase leading-none text-white/5 bg-gradient-to-b from-white/10 via-white/5 to-white/0 bg-clip-text text-transparent whitespace-nowrap translate-y-[22%]"
        style={{
          fontSize: "clamp(4.5rem, 21.5vw, 22rem)",
          lineHeight: 0.85,
        }}
      >
        ARKAYA
      </motion.h1>
    </div>
  );
}
