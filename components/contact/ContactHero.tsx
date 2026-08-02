"use client";

import { motion } from "framer-motion";
import { Phone, ArrowDown, Sparkles } from "lucide-react";

export function ContactHero() {
  const nodes = [
    { label: "YOU", type: "ORIGIN" },
    { label: "YOUR IDEA", type: "INPUT" },
    { label: "ARKAYA", type: "HUB" },
    { label: "DESIGN / AI / AUTOMATION", type: "ENGINEERING" },
    { label: "PRODUCT", type: "RESULT" },
  ];

  return (
    <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-24 bg-white overflow-hidden scroll-mt-24">
      {/* Background Subtle Tech Mesh */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.06),rgba(124,58,237,0.05),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: HERO COPY (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
                START A PROJECT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.12]"
            >
              Have an idea? <br />
              <span className="bg-gradient-to-r from-neutral-900 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                Let&apos;s talk about it.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl"
            >
              Tell us what you&apos;re building, what you want to improve, or what you wish could run automatically.
            </motion.p>

            {/* DIRECT CALL ACTION */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-3 p-3 px-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-sm">
                <Phone className="h-4 w-4 text-blue-600" />
                <div>
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">
                    CALL US DIRECTLY
                  </span>
                  <a
                    href="tel:+916300966570"
                    className="text-sm font-bold text-neutral-900 hover:text-blue-600 transition-colors"
                  >
                    +91 63009 66570
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: SYSTEM FLOW VISUAL (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative w-full min-h-[320px] sm:min-h-[360px] flex items-center justify-center"
          >
            <div className="relative w-full h-full rounded-3xl bg-neutral-950 p-6 shadow-2xl border border-neutral-800 flex flex-col justify-between overflow-hidden text-white">
              
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <span className="text-xs font-mono font-bold tracking-wider text-neutral-300">
                  SYSTEM FLOW
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
                  READY TO BUILD
                </span>
              </div>

              <div className="space-y-2 py-2">
                {nodes.map((n, i) => (
                  <motion.div
                    key={n.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-violet-400 font-bold">0{i + 1}</span>
                      <span className="text-neutral-200 font-semibold">{n.label}</span>
                    </div>
                    <span className="text-[10px] text-neutral-500 uppercase">{n.type}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>ARKAYA ENGINEERING</span>
                <span className="text-blue-400">STATUS: ACTIVE</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
