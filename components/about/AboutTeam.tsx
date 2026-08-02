"use client";

import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/data/team";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export function AboutTeam() {
  return (
    <section id="team" className="relative w-full py-20 md:py-32 bg-neutral-50/50 border-t border-neutral-100 overflow-hidden">
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
            <span className="h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              THE TEAM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Meet the people <br />
            behind the work.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed"
          >
            Different disciplines. One product conversation.
          </motion.p>
        </div>

        {/* ACETERNITY ANIMATED TOOLTIP TEAM INTERACTION */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <AnimatedTooltip items={TEAM_MEMBERS} />
        </div>

        {/* TEAM MEMBER MONOGRAM GRID (7 MEMBERS) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="px-4 py-2.5 rounded-full bg-white border border-neutral-200/90 shadow-sm flex items-center gap-2.5 text-left"
            >
              <span className="h-6 w-6 rounded-full bg-blue-50 text-blue-600 font-mono text-xs font-bold flex items-center justify-center border border-blue-100">
                {member.initials}
              </span>
              <span className="text-xs font-semibold text-neutral-900">
                {member.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
