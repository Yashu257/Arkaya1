"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project, PROJECTS_DATA } from "@/data/projects";

export function NextProject({ currentProject }: { currentProject: Project }) {
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === currentProject.id);
  const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
  const nextProject = PROJECTS_DATA[nextIndex];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-neutral-950 text-white overflow-hidden border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Link href={`/work/${nextProject.slug}`} className="group block">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-violet-500/50 transition-all duration-300">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="text-violet-400 font-bold">NEXT PROJECT</span>
                <span>•</span>
                <span>0{nextIndex + 1} / 0{PROJECTS_DATA.length}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-violet-400 transition-colors">
                {nextProject.title}
              </h3>

              <p className="text-xs sm:text-sm font-mono text-neutral-400">
                {nextProject.categoryLabel}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono font-bold text-neutral-300 group-hover:text-white uppercase tracking-wider">
                EXPLORE CASE STUDY
              </span>
              <div className="h-12 w-12 rounded-full bg-violet-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>

          </div>
        </Link>

      </div>
    </section>
  );
}
