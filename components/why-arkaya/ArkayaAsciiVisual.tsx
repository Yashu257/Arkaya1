"use client";

import { motion } from "framer-motion";
import { AsciiArt } from "@/components/ui/ascii-art";

export function ArkayaAsciiVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full h-full flex flex-col items-center justify-center"
    >
      {/* Outer Card Wrapper */}
      <div className="relative w-full max-w-lg lg:max-w-xl rounded-3xl bg-neutral-950 p-6 sm:p-8 shadow-2xl border border-neutral-800 overflow-hidden transition-all duration-300 group-hover:border-violet-500/40">
        
        {/* Subtle Brand Ambient Backlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-violet-600/15 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

        {/* Header Label */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800/80 relative z-10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
              ARKAYA SYSTEM ARCHITECTURE
            </span>
          </div>
          <span className="text-[10px] font-mono font-semibold text-violet-400 bg-violet-950/80 px-2 py-0.5 rounded border border-violet-800/50">
            ASCII BLOCKS
          </span>
        </div>

        {/* Main ASCII Visual Area */}
        <div className="relative z-10 py-2">
          <AsciiArt
            src="/logo.png"
            resolution={55}
            charset="blocks"
            color="#a855f7"
            inverted={true}
            animated={false}
            className="group-hover:brightness-110 transition-all duration-300"
          />
        </div>

        {/* Footer Caption */}
        <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500 relative z-10">
          <span>SOURCE: ARKAYA BRAND CORE</span>
          <span className="text-neutral-400">RESOLUTION: 55px</span>
        </div>

      </div>
    </motion.div>
  );
}
