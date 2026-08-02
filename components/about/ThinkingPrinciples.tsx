"use client";

import { motion } from "framer-motion";

export function ThinkingPrinciples() {
  const principles = [
    {
      num: "01",
      title: "UNDERSTAND FIRST",
      desc: "Before choosing tools, understand the workflow, user and actual business requirement.",
    },
    {
      num: "02",
      title: "DESIGN THE SYSTEM",
      desc: "Map how information, people and technology need to move together seamlessly.",
    },
    {
      num: "03",
      title: "BUILD WHAT MATTERS",
      desc: "Avoid unnecessary features and focus engineering effort where it creates genuine value.",
    },
    {
      num: "04",
      title: "MAKE IT LAST",
      desc: "Build systems that can evolve over time instead of becoming tomorrow's technical debt.",
    },
  ];

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
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              HOW WE THINK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Start with the problem. <br />
            Then choose the technology.
          </motion.h2>
        </div>

        {/* 4 EDITORIAL ROWS */}
        <div className="space-y-6 max-w-5xl border-t border-neutral-200/90 pt-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-neutral-100 items-start group"
            >
              <div className="md:col-span-2 flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-blue-600">
                  {p.num}
                </span>
              </div>

              <div className="md:col-span-4">
                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h4>
              </div>

              <div className="md:col-span-6">
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
