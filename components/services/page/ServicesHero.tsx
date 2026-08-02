"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Sparkles, Network } from "lucide-react";

export function ServicesHero() {
  const nodes = [
    { title: "WEBSITES", pos: "top-0 left-1/2 -translate-x-1/2" },
    { title: "APPLICATIONS", pos: "top-1/4 left-0" },
    { title: "AI AGENTS", pos: "top-1/4 right-0" },
    { title: "AI CHATBOTS", pos: "bottom-1/4 left-0" },
    { title: "AUTOMATION", pos: "bottom-1/4 right-0" },
    { title: "AI INTEGRATIONS", pos: "bottom-0 left-1/2 -translate-x-1/2" },
  ];

  return (
    <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-24 bg-white overflow-hidden scroll-mt-24">
      {/* Background Mesh */}
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
                OUR SERVICES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.12]"
            >
              We build the systems <br />
              <span className="bg-gradient-to-r from-neutral-900 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                behind modern businesses.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl"
            >
              From high-performance digital experiences to intelligent AI and automation, Arkaya designs and engineers technology around the way your business actually works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                href="mailto:hello@arkaya.tech"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <Link
                href="#overview"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-700 border border-neutral-200 shadow-sm transition-all duration-300 hover:bg-neutral-50 hover:text-neutral-900"
              >
                Explore Services <ArrowDown className="h-4 w-4 text-neutral-500" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: ABSTRACT SYSTEM DIAGRAM VISUAL (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative w-full min-h-[340px] sm:min-h-[380px] flex items-center justify-center"
          >
            {/* Outer Container Card */}
            <div className="relative w-full h-full rounded-3xl bg-neutral-950 p-6 shadow-2xl border border-neutral-800 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)] pointer-events-none" />

              {/* Central Hub Node */}
              <div className="relative z-20 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex flex-col items-center justify-center text-white shadow-xl shadow-violet-500/20 border-2 border-white/20">
                <Sparkles className="h-5 w-5 mb-0.5" />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
                  ARKAYA
                </span>
              </div>

              {/* Node Satellites */}
              <div className="absolute inset-6 pointer-events-none flex items-center justify-center">
                {nodes.map((node) => (
                  <div
                    key={node.title}
                    className={`absolute ${node.pos} px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] font-mono font-bold text-neutral-300 shadow-lg`}
                  >
                    {node.title}
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
