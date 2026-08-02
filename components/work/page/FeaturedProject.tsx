"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { AISalesAgentMockup } from "@/components/work/mockups/AISalesAgentMockup";
import { TooltipCard } from "@/components/ui/tooltip-card";

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full rounded-3xl bg-neutral-950 text-white p-6 sm:p-10 border border-neutral-800 shadow-2xl overflow-hidden mb-16 relative"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-violet-600/15 to-transparent pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* LEFT: FEATURED DETAILS (5 Cols) */}
        <div className="lg:col-span-5 space-y-5 text-left">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
              FEATURED {project.type.toUpperCase()}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {project.description}
          </p>

          {/* CHALLENGE & SOLUTION */}
          <div className="space-y-3 pt-3 border-t border-neutral-800 text-xs text-neutral-400">
            <div>
              <span className="font-mono font-bold text-neutral-300 block mb-0.5">THE CHALLENGE:</span>
              <p>{project.challenge}</p>
            </div>
            <div>
              <span className="font-mono font-bold text-violet-300 block mb-0.5">THE SOLUTION:</span>
              <p>{project.solution}</p>
            </div>
          </div>

          {/* TECHNOLOGIES USED */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            {project.technologies.map((tech) => (
              <TooltipCard
                key={tech.name}
                title={tech.name}
                description={tech.description || `Engineering component powering ${project.title}`}
                category={tech.category || "Technology"}
              >
                <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 font-mono text-[11px] text-neutral-300 hover:text-white hover:border-violet-500/50 transition-colors">
                  {tech.name}
                </span>
              </TooltipCard>
            ))}
          </div>
        </div>

        {/* RIGHT: PROJECT VISUAL (7 Cols) */}
        <div className="lg:col-span-7">
          <AISalesAgentMockup />
        </div>

      </div>
    </motion.div>
  );
}
