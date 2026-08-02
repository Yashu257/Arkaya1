"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProjectWorkflow({ project }: { project: Project }) {
  if (!project.workflow || project.workflow.length === 0) return null;

  return (
    <section className="relative w-full py-20 md:py-32 bg-neutral-950 text-white border-t border-neutral-900 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12),transparent_70%)] pointer-events-none" />

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
              HOW IT WORKS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]"
          >
            From input <br />
            to action.
          </motion.h2>
        </div>

        {/* WORKFLOW PIPELINE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          {project.workflow.map((stg, i) => (
            <motion.div
              key={stg.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3 flex flex-col justify-between hover:border-violet-500/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-violet-400">
                  STAGE 0{i + 1}
                </span>
                {i === project.workflow!.length - 1 ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <ArrowRight className="hidden lg:block h-3.5 w-3.5 text-neutral-600" />
                )}
              </div>

              <div>
                <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                  {stg.label}
                </h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  {stg.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
