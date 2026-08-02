"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ValuesSection() {
  const [activeValue, setActiveValue] = useState<string>("CLARITY");

  const values = [
    {
      id: "CLARITY",
      label: "CLARITY",
      desc: "People should understand what they're looking at and what happens next.",
    },
    {
      id: "USEFULNESS",
      label: "USEFULNESS",
      desc: "Technology should solve something real, not just demonstrate capability.",
    },
    {
      id: "CRAFT",
      label: "CRAFT",
      desc: "Details matter — in interfaces, system architecture and code implementation.",
    },
    {
      id: "PERFORMANCE",
      label: "PERFORMANCE",
      desc: "Fast, responsive products feel better and work better across devices.",
    },
    {
      id: "SIMPLICITY",
      label: "SIMPLICITY",
      desc: "Complex backend engineering should not create a complex user experience.",
    },
    {
      id: "RELIABILITY",
      label: "RELIABILITY",
      desc: "Products need to work consistently outside controlled demo environments.",
    },
    {
      id: "CURIOSITY",
      label: "CURIOSITY",
      desc: "New technology matters when it creates a fundamentally better solution.",
    },
  ];

  const current = values.find((v) => v.id === activeValue) || values[0];

  return (
    <section className="relative w-full py-20 md:py-32 bg-neutral-50/50 border-t border-neutral-100 overflow-hidden">
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

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
              WHAT MATTERS TO US
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Good technology has <br />
            a few things in common.
          </motion.h2>
        </div>

        {/* INTERACTIVE TYPOGRAPHY WORD SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 border-t border-neutral-200/90">
          
          {/* WORDS LIST (7 Cols) */}
          <div className="lg:col-span-7 flex flex-wrap gap-3 sm:gap-4 text-left">
            {values.map((v) => {
              const isActive = activeValue === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveValue(v.id)}
                  aria-pressed={isActive}
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight transition-all duration-200 focus:outline-none ${
                    isActive
                      ? "text-neutral-900 scale-105"
                      : "text-neutral-300 hover:text-neutral-600"
                  }`}
                >
                  {v.label}
                  <span className="text-blue-600 ml-1">.</span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE VALUE DESCRIPTION DISPLAY (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase block">
              VALUE / {current.label}
            </span>
            <p className="text-base sm:text-lg text-neutral-200 font-medium leading-relaxed">
              {current.desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
