"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Shield } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section 
      id="testimonials" 
      className="relative w-full py-20 md:py-32 text-neutral-900 overflow-hidden scroll-mt-24 border-t border-purple-200/80"
      style={{
        background: "linear-gradient(135deg, #E8E7FF 0%, #EEF4FF 45%, #F3E8FF 100%)"
      }}
    >
      {/* 1. Visible Atmospheric Diffused Light Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(79,70,255,0.18),rgba(124,58,237,0.14),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.06] pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION INTRO */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-violet-200 shadow-2xs"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-700">
              CLIENT STORIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Built together. <br className="hidden sm:inline" />
            Remembered for the result.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl"
          >
            The best technology partnerships are measured by what they make possible.
          </motion.p>
        </div>

        {/* MAIN ANIMATED TESTIMONIALS COMPONENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedTestimonials testimonials={TESTIMONIALS_DATA} />
        </motion.div>

        {/* SUBTLE TRUST STATEMENT */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-purple-200/80 flex items-center justify-center">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-neutral-600 uppercase">
            <Shield className="h-3.5 w-3.5 text-blue-600" />
            <span>PARTNERSHIPS BUILT ON CLARITY, CRAFT & DELIVERY</span>
          </div>
        </div>

      </div>
    </section>
  );
}
