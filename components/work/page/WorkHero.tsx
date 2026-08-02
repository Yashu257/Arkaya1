"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, FolderGit2 } from "lucide-react";

export function WorkHero() {
  const indexItems = [
    { num: "001", label: "AI SALES AGENT", type: "AI / AUTOMATION" },
    { num: "002", label: "OPERATIONS PLATFORM", type: "SOFTWARE APP" },
    { num: "003", label: "DIGITAL EXPERIENCE", type: "WEB PLATFORM" },
    { num: "004", label: "KNOWLEDGE ASSISTANT", type: "RAG SYSTEM" },
  ];

  return (
    <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-24 bg-white overflow-hidden scroll-mt-24">
      {/* Background Subtle Tech Mesh */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.06),rgba(124,58,237,0.05),transparent_70%)]" />

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
                SELECTED WORK
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.12]"
            >
              Things we&apos;ve built. <br />
              <span className="bg-gradient-to-r from-neutral-900 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                Problems we&apos;ve solved.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl"
            >
              A collection of digital products, intelligent systems and experiments across web, software, AI and automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-neutral-800 hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Projects <ArrowDown className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: EDITORIAL PROJECT INDEX VISUAL (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative w-full min-h-[320px] sm:min-h-[360px] flex items-center justify-center"
          >
            <div className="relative w-full h-full rounded-3xl bg-neutral-950 p-6 shadow-2xl border border-neutral-800 flex flex-col justify-between overflow-hidden text-white">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="h-4 w-4 text-violet-400" />
                  <span className="text-xs font-mono font-bold tracking-wider text-neutral-300">
                    PROJECT ARCHIVE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-violet-400 bg-violet-950/80 px-2 py-0.5 rounded border border-violet-800/50">
                  ARKAYA REPO
                </span>
              </div>

              {/* Index List Items */}
              <div className="space-y-2 py-2">
                {indexItems.map((item, i) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono hover:border-violet-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-violet-400 font-bold">{item.num}</span>
                      <span className="text-neutral-200 font-semibold">{item.label}</span>
                    </div>
                    <span className="text-[10px] text-neutral-500 uppercase">{item.type}</span>
                  </motion.div>
                ))}
              </div>

              {/* Footer status */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>INDEX VERSION: 2026.1</span>
                <span className="text-emerald-400">BUILD STATUS: LIVE</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
