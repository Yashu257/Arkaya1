"use client";

import { motion } from "framer-motion";
import { DifferentiatorRow } from "./DifferentiatorRow";
import { ArkayaAsciiVisual } from "./ArkayaAsciiVisual";

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "AI-FIRST THINKING",
    description:
      "AI isn't an add-on. We identify where intelligence and automation can create meaningful value from the start.",
  },
  {
    number: "02",
    title: "PRODUCT, NOT JUST CODE",
    description:
      "We think beyond features — focusing on users, workflows and the business problem the technology needs to solve.",
  },
  {
    number: "03",
    title: "BUILT TO SCALE",
    description:
      "Clean architecture and modern technology keep your product ready for what comes next.",
  },
  {
    number: "04",
    title: "ONE TEAM, END TO END",
    description:
      "From idea and interface to engineering, AI and launch, the experience stays connected from beginning to end.",
  },
];

export function WhyArkaya() {
  return (
    <section 
      id="about" 
      className="relative w-full py-20 md:py-32 bg-[#0A0712] text-white overflow-hidden scroll-mt-24 border-t border-neutral-900"
    >
      {/* 1. Deep Violet Ambient Radial Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 70% 50%, rgba(124,58,237,0.22), transparent 45%)"
        }}
      />

      {/* 2. Visible Technical Grid Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.12] pointer-events-none z-0" />

      {/* 3. Faint Background Technical Lines & Coordinate Marks */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#7C3AED" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#2563FF" strokeWidth="1" strokeDasharray="4 8" />
          <text x="5%" y="18%" fill="#7C3AED" fontSize="10" fontFamily="monospace">COORD: 42.91° N, 71.04° W</text>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION INTRO */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3 bg-neutral-900/90 px-3.5 py-1 rounded-full border border-violet-800/80 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-violet-300">
              WHY ARKAYA
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]"
          >
            Built differently. <br />
            Built for what comes next.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl"
          >
            We combine thoughtful design, modern engineering and practical AI to build technology that works today and keeps evolving with your business.
          </motion.p>
        </div>

        {/* TWO-COLUMN EDITORIAL + ASCII LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: 4 EDITORIAL DIFFERENTIATORS (6 Cols on Desktop) */}
          <div className="lg:col-span-6 order-2 lg:order-1 border-t border-neutral-800">
            {DIFFERENTIATORS.map((item, index) => (
              <DifferentiatorRow key={item.number} item={item} index={index} />
            ))}
          </div>

          {/* RIGHT: ARKAYA ASCII ART VISUAL (6 Cols on Desktop) */}
          <div className="lg:col-span-6 order-1 lg:order-2 lg:sticky lg:top-28">
            <ArkayaAsciiVisual />
          </div>

        </div>

      </div>
    </section>
  );
}
