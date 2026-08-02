"use client";

import { motion } from "framer-motion";

export function AboutClosing() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-neutral-950 text-white border-t border-neutral-900 overflow-hidden text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            BUILD LESS NOISE. <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              BUILD BETTER SYSTEMS.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-6 font-sans text-xl sm:text-2xl font-bold tracking-widest text-neutral-400 uppercase"
          >
            ARKAYA
          </motion.div>
        </div>

      </div>
    </section>
  );
}
