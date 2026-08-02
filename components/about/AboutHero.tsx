"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function AboutHero() {
  const complexityItems = [
    "Manual data entry",
    "Disconnected tools",
    "Repeated daily tasks",
    "Scattered information",
    "Slow approval cycles",
  ];

  const clarityItems = [
    "Connected systems",
    "24/7 Automation",
    "Context-aware AI",
    "Useful interfaces",
    "Forward motion",
  ];

  return (
    <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-24 bg-white overflow-hidden scroll-mt-24">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.06),rgba(124,58,237,0.05),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              ABOUT ARKAYA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08]"
          >
            We build technology <br />
            <span className="bg-gradient-to-r from-neutral-900 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              that gets out of the way.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-neutral-600 leading-relaxed max-w-3xl"
          >
            Arkaya is a digital technology studio building websites, applications, AI systems and automation around real business problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 border-l-2 border-blue-600 pl-4 text-sm sm:text-base font-mono text-neutral-800 font-semibold"
          >
            The goal isn&apos;t more software. It&apos;s less friction.
          </motion.div>
        </div>

        {/* INTERACTIVE FRICTION → SIMPLICITY VISUAL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 sm:mt-20 p-6 sm:p-10 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            
            {/* COMPLEXITY (4 Cols) */}
            <div className="md:col-span-4 space-y-3 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-center gap-2 pb-2 border-b border-neutral-800">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
                  COMPLEXITY
                </span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-neutral-400">
                {complexityItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-rose-400">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTER HUB: ARKAYA (4 Cols) */}
            <div className="md:col-span-4 text-center py-4 relative flex flex-col items-center justify-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/20">
                ARKAYA
              </div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-violet-400 uppercase">
                ENGINEERING HUB
              </span>
            </div>

            {/* CLARITY (4 Cols) */}
            <div className="md:col-span-4 space-y-3 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-center gap-2 pb-2 border-b border-neutral-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                  CLARITY
                </span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-neutral-300">
                {clarityItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
