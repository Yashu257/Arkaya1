"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function FeatureSection({ project }: { project: Project }) {
  return (
    <section className="relative w-full py-20 md:py-32 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* INTRO */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-violet-600" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              WHAT IT DOES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Built around <br />
            the work that matters.
          </motion.h2>
        </div>

        {/* 2-COLUMN EDITORIAL FEATURE LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 border-t border-neutral-200/90 pt-8">
          {project.features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="space-y-2 group py-4 border-b border-neutral-100"
            >
              <span className="font-mono text-xs font-bold text-blue-600">
                0{i + 1}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors">
                {feat.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
