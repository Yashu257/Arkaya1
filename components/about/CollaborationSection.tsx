"use client";

import { motion } from "framer-motion";

export function CollaborationSection() {
  const principles = [
    { title: "DIRECT COMMUNICATION", desc: "Talk directly to the people actually designing and engineering your product." },
    { title: "FAST FEEDBACK", desc: "See working progress early and shape direction as we build together." },
    { title: "CLEAR DECISIONS", desc: "Understand what we're building, why it's chosen, and how it delivers value." },
    { title: "SHARED CONTEXT", desc: "Keep product, design and technical architecture continuously aligned." },
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
              WORKING WITH ARKAYA
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
            Close collaboration.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl"
          >
            Projects work better when the people designing, building and making decisions stay close to the problem.
          </motion.p>
        </div>

        {/* 4 COLLABORATION PRINCIPLES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-neutral-200/90">
          {principles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-2 hover:border-blue-600 transition-colors"
            >
              <span className="text-xs font-mono font-bold text-blue-600">0{i + 1}</span>
              <h4 className="text-base font-bold text-neutral-900">{item.title}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
