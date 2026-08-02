"use client";

import { motion } from "framer-motion";

export function WhatWeAre() {
  const pillars = [
    { title: "DESIGN", desc: "How it should work and feel." },
    { title: "ENGINEERING", desc: "How it becomes reliable software." },
    { title: "INTELLIGENCE", desc: "How systems understand context." },
    { title: "AUTOMATION", desc: "How repetitive work disappears." },
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
            <span className="h-2 w-2 rounded-full bg-violet-600" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              WHAT WE ARE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Somewhere between <br />
            a product studio and <br />
            an engineering team.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl"
          >
            We work across design, software, AI and automation because real business problems rarely fit inside one category.
          </motion.p>
        </div>

        {/* PILLARS COMPOSITION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-200/90 space-y-3 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              <span className="font-mono text-xs font-bold text-blue-600 group-hover:text-violet-400">
                0{i + 1}
              </span>
              <h4 className="text-lg font-bold tracking-tight group-hover:text-white text-neutral-900">
                {p.title}
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600 group-hover:text-neutral-300">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:text-left text-xs font-mono font-bold text-neutral-400 tracking-widest uppercase">
          DESIGN + ENGINEERING + INTELLIGENCE + AUTOMATION = <span className="text-neutral-900">ARKAYA</span>
        </div>

      </div>
    </section>
  );
}
