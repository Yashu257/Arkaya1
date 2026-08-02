"use client";

import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectShowcase } from "./ProjectShowcase";

export function SelectedWork() {
  return (
    <section id="work" className="relative w-full py-20 md:py-32 bg-[#EEF4FF] text-neutral-900 overflow-hidden scroll-mt-24 border-t border-blue-200/60">
      {/* 1. Large Pale Blue Atmospheric Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,255,0.12),rgba(124,58,237,0.08),transparent_65%)] pointer-events-none z-0" />
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.06] pointer-events-none z-0" />

      {/* 2. Abstract Background Watermark Typography */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full text-center font-mono font-black text-blue-900/[0.04] text-[12vw] tracking-tighter uppercase select-none pointer-events-none z-0 leading-none"
      >
        PROJECTS / 01 / 05
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION INTRO — EDITORIAL LAYOUT */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-3 bg-white px-3.5 py-1 rounded-full border border-blue-200 shadow-2xs"
            >
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-700">
                SELECTED WORK
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
            >
              Ideas turned into <br />
              working products.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-md lg:pb-2"
          >
            A selection of digital experiences, intelligent systems and software products designed around real business needs.
          </motion.p>
        </div>

        {/* STACKED EDITORIAL PORTFOLIO */}
        <div className="space-y-10 md:space-y-16">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
