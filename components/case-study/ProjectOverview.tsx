"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: OVERVIEW STATEMENT (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-neutral-400 block">
              OVERVIEW
            </span>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* RIGHT: METADATA COLUMNS (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 p-6 rounded-2xl bg-neutral-50/70 border border-neutral-200/80">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">
                CLASSIFICATION
              </span>
              <span className="text-xs font-bold text-neutral-900 block">
                {project.type}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">
                CATEGORY
              </span>
              <span className="text-xs font-bold text-blue-600 block">
                {project.categoryLabel}
              </span>
            </div>

            <div className="col-span-2 space-y-1 pt-2 border-t border-neutral-200/60">
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">
                CORE TECHNOLOGIES
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((t) => (
                  <span
                    key={t.name}
                    className="px-2 py-0.5 rounded bg-white border border-neutral-200 text-[11px] font-mono font-medium text-neutral-700"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
