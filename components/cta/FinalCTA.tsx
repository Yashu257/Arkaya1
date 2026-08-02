"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section 
      id="contact" 
      className="relative w-full py-24 md:py-36 text-neutral-900 overflow-hidden scroll-mt-24 border-t border-purple-200/80"
      style={{
        background: "linear-gradient(135deg, #DBEAFE 0%, #E0E7FF 35%, #EDE9FE 65%, #F3E8FF 100%)"
      }}
    >
      {/* 1. Large Diffused Blue & Violet Ambient Light Backlight */}
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,255,0.22),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.20),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.08] pointer-events-none z-0" />

      {/* 2. Abstract Background Orbital Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="380" fill="none" stroke="#2563FF" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="50%" cy="50%" r="520" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full border border-blue-200 shadow-2xs"
        >
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-700">
            HAVE AN IDEA?
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
          Let&apos;s build <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            what&apos;s next.
          </span>
        </motion.h2>

        {/* SUPPORTING COPY */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed max-w-2xl mx-auto font-medium"
        >
          Whether you&apos;re launching something new or improving what already exists, let&apos;s turn the idea into technology that works.
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[220px] rounded-full bg-neutral-950 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          {/* Secondary Call CTA */}
          <a
            href="tel:+916300966570"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[180px] rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-800 border border-neutral-300 shadow-sm transition-all duration-300 hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-400 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="h-4 w-4 text-blue-600" />
            +91 63009 66570
          </a>
        </motion.div>

      </div>
    </section>
  );
}
