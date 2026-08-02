"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { TooltipCard } from "@/components/ui/tooltip-card";

export function TechnologySection({ project }: { project: Project }) {
  return (
    <section className="relative w-full py-20 md:py-32 bg-white border-t border-neutral-100 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

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
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              TECHNOLOGY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Chosen for what <br />
            the product needs.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto"
          >
            Technology decisions follow the product, workflow and scale requirements — not the other way around.
          </motion.p>
        </div>

        {/* TECHNOLOGY LIST WITH ACETERNITY TOOLTIP CARDS */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {project.technologies.map((t) => (
            <TooltipCard
              key={t.name}
              title={t.name}
              description={t.description}
              category={t.category}
            >
              <div className="px-5 py-3 rounded-full bg-neutral-900 text-white font-mono text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer select-none border border-neutral-800">
                {t.name}
              </div>
            </TooltipCard>
          ))}
        </div>

        <span className="text-xs font-mono text-neutral-400 mt-6 block">
          Hover or tap any technology tag to view architectural role in this build →
        </span>

      </div>
    </section>
  );
}
