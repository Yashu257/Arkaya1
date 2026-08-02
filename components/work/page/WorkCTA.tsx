"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function WorkCTA() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-white overflow-hidden border-t border-neutral-100">
      {/* Background Subtle Tech Mesh */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
            HAVE SOMETHING IN MIND?
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08] max-w-4xl mx-auto"
        >
          Let&apos;s turn it <br />
          <span className="bg-gradient-to-r from-neutral-900 via-blue-600 to-violet-600 bg-clip-text text-transparent">
            into something real.
          </span>
        </motion.h2>

        {/* SUPPORTING COPY */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
        >
          Tell us what you&apos;re building and we&apos;ll help shape the right product, system or automation around it.
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[220px] rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          <a
            href="tel:+916300966570"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[180px] rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-700 border border-neutral-200 shadow-sm transition-all duration-300 hover:bg-neutral-50 hover:text-neutral-900"
          >
            <Phone className="h-4 w-4 text-blue-600" />
            +91 63009 66570
          </a>
        </motion.div>

      </div>
    </section>
  );
}
