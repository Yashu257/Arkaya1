"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/data/services";
import { TooltipCard } from "@/components/ui/tooltip-card";

export function TechnologyStack() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-neutral-950 text-white overflow-hidden border-t border-neutral-900">
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* INTRO */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-400">
              ENGINEERING FOUNDATION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]"
          >
            Technology, chosen <br />
            for the problem.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto"
          >
            We use modern technologies based on what the product needs — not because a tool happens to be trending.
          </motion.p>
        </div>

        {/* TECHNOLOGY TAGS GRID WITH ACETERNITY TOOLTIP CARDS */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <TooltipCard
                title={tech.tooltipTitle}
                description={tech.tooltipText}
                category={tech.category}
              >
                <div className="px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs sm:text-sm font-mono font-medium hover:border-violet-500/50 hover:bg-neutral-850 hover:text-white transition-all cursor-pointer select-none">
                  {tech.name}
                </div>
              </TooltipCard>
            </motion.div>
          ))}
        </div>

        <span className="text-xs font-mono text-neutral-500 mt-8 block">
          Hover or tap any technology tag to view architectural role →
        </span>

      </div>
    </section>
  );
}
