"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { Check } from "lucide-react";

export function CapabilitySection({ project }: { project: Project }) {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-neutral-50/50 border-t border-neutral-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* INTRO */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-neutral-500 block mb-2">
            WHAT WE BROUGHT TO THE BUILD
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Disciplines & Capabilities Involved
          </h3>
        </div>

        {/* CAPABILITIES GRID */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          {project.capabilities.map((cap) => (
            <div
              key={cap}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-neutral-200/90 text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm"
            >
              <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" />
              <span>{cap}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
