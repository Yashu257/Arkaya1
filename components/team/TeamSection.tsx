"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/data/team";
import { AnimatedTooltip, TooltipItem } from "@/components/ui/animated-tooltip";
import { Users } from "lucide-react";

export function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<TooltipItem | null>(null);

  const capabilities = [
    { label: "STRATEGY", key: "Strategy" },
    { label: "DESIGN", key: "Design" },
    { label: "ENGINEERING", key: "Engineering" },
    { label: "AI", key: "AI" },
    { label: "AUTOMATION", key: "Automation" },
  ];

  return (
    <section id="team" className="relative w-full py-20 md:py-32 bg-[#F7F4EE] text-neutral-900 overflow-hidden scroll-mt-24 border-t border-neutral-300/80">
      {/* 1. Subtle Soft Blue/Violet Background Shape */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,255,0.08),rgba(124,58,237,0.06),transparent_60%)] pointer-events-none z-0" />
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.06] pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EDITORIAL TWO-COLUMN LAYOUT ON DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: COPY & HEADING (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-1 bg-white px-3.5 py-1 rounded-full border border-neutral-300 shadow-2xs"
            >
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-700">
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
              Small team. <br />
              Big things to build.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl"
            >
              Designers, engineers and AI builders working together to turn ambitious ideas into useful technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex items-center gap-2 text-xs font-mono text-neutral-600 uppercase tracking-widest"
            >
              <Users className="h-3.5 w-3.5 text-blue-600" />
              <span>Different disciplines. One product team.</span>
            </motion.div>
          </div>

          {/* RIGHT: ANIMATED TOOLTIP AVATAR GROUP (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-center lg:items-end text-center lg:text-right space-y-6"
          >
            <div className="w-full p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-[0_10px_35px_rgba(15,23,42,0.06)] flex flex-col items-center justify-center space-y-6">
              
              {/* Overlapping Avatars */}
              <AnimatedTooltip
                items={TEAM_MEMBERS}
                onHoverItem={(item) => setHoveredMember(item)}
              />

              {/* Hover Hint */}
              <span className="text-xs font-mono text-neutral-500">
                Hover or tap an avatar to meet the team →
              </span>

              {/* Capability Disciplines Bar */}
              <div className="pt-4 border-t border-neutral-100 w-full flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-mono font-semibold tracking-wider text-neutral-400">
                {capabilities.map((cap, i) => {
                  const isHighlighted =
                    hoveredMember &&
                    ((hoveredMember.designation && hoveredMember.designation.includes(cap.key)) ||
                      (hoveredMember.expertise && hoveredMember.expertise.includes(cap.key)));

                  return (
                    <span key={cap.label} className="flex items-center gap-3">
                      <span
                        className={`transition-colors duration-200 ${
                          isHighlighted ? "text-blue-600 font-bold" : "text-neutral-600"
                        }`}
                      >
                        {cap.label}
                      </span>
                      {i < capabilities.length - 1 && <span className="text-neutral-300">/</span>}
                    </span>
                  );
                })}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
