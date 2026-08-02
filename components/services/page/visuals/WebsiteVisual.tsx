"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe, Sparkles } from "lucide-react";

export function WebsiteVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto py-4">
      {/* Desktop Browser Frame */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl p-4 sm:p-5 relative overflow-hidden"
      >
        {/* Browser Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1 rounded-md text-[10px] font-mono text-neutral-400 border border-neutral-800">
            <Globe className="h-3 w-3 text-blue-400" />
            <span>https://arkaya.tech</span>
          </div>
          <Monitor className="h-3.5 w-3.5 text-neutral-500" />
        </div>

        {/* Browser Mockup Body */}
        <div className="space-y-3">
          <div className="h-6 w-1/2 bg-neutral-800 rounded-md animate-pulse" />
          <div className="h-3 w-3/4 bg-neutral-850 rounded" />
          <div className="h-3 w-2/3 bg-neutral-850 rounded" />
          
          <div className="pt-2 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-lg bg-neutral-900 border border-neutral-800 p-2 space-y-1">
              <div className="h-2 w-8 bg-blue-500/50 rounded" />
              <div className="h-2 w-12 bg-neutral-800 rounded" />
            </div>
            <div className="h-16 rounded-lg bg-neutral-900 border border-neutral-800 p-2 space-y-1">
              <div className="h-2 w-8 bg-violet-500/50 rounded" />
              <div className="h-2 w-12 bg-neutral-800 rounded" />
            </div>
            <div className="h-16 rounded-lg bg-neutral-900 border border-neutral-800 p-2 space-y-1">
              <div className="h-2 w-8 bg-emerald-500/50 rounded" />
              <div className="h-2 w-12 bg-neutral-800 rounded" />
            </div>
          </div>
        </div>

        {/* Overlapping Mobile Frame */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute right-3 bottom-3 w-28 sm:w-36 rounded-xl bg-neutral-900 border border-neutral-750 shadow-2xl p-2.5 space-y-2 z-20"
        >
          <div className="flex items-center justify-between border-b border-neutral-800 pb-1">
            <span className="text-[9px] font-mono text-neutral-400">MOBILE</span>
            <Smartphone className="h-3 w-3 text-violet-400" />
          </div>
          <div className="h-2 w-16 bg-blue-500/60 rounded" />
          <div className="h-2 w-20 bg-neutral-800 rounded" />
          <div className="h-8 rounded bg-gradient-to-r from-blue-600/30 to-violet-600/30 border border-blue-500/30 flex items-center justify-center text-[9px] font-mono text-blue-300">
            RESPONSIVE
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
