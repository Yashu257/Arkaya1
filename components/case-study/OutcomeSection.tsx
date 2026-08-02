"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ShieldCheck } from "lucide-react";

export function OutcomeSection({ project }: { project: Project }) {
  return (
    <section className="relative w-full py-20 md:py-32 bg-white border-t border-neutral-100 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-1"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              WHAT IT ENABLES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            A better system <br />
            for moving work forward.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto text-left"
          >
            {project.outcome}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
