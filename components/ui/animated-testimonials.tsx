"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/data/testimonials";

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay || isHovered || shouldReduceMotion) return;
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, [autoplay, isHovered, shouldReduceMotion, handleNext]);

  const current = testimonials[active];

  return (
    <div
      className={cn("mx-auto max-w-6xl py-4 sm:py-8", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* LEFT: EDITORIAL PORTRAIT IMAGE CONTAINER (40% Desktop / 12 Cols Mobile) */}
        <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800/80 group">
          {/* Ambient Glow behind portrait */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-600/10 to-transparent pointer-events-none z-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              {current.src ? (
                <Image
                  src={current.src}
                  alt={`${current.name} portrait`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white p-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center font-mono text-2xl font-bold border-2 border-white/20 shadow-xl">
                    {current.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="mt-3 text-xs font-mono text-neutral-400">
                    {current.company}
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Demo / Concept Indicator Tag if placeholder */}
          {current.isPlaceholder && (
            <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
              CONCEPT STORY
            </div>
          )}
        </div>

        {/* RIGHT: TESTIMONIAL QUOTE & DETAILS (60% Desktop / 12 Cols Mobile) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:pl-2">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Oversized Quote Icon */}
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-violet-600/20 text-violet-700 border border-violet-300/80 shadow-sm">
                <Quote className="h-6 w-6 transform -scale-x-100 text-violet-700" />
              </div>

              {/* Large Quote Typography */}
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 leading-[1.25] tracking-tight">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Client Name & Company Details */}
              <div className="pt-3 border-t border-purple-200/80">
                <h4 className="text-lg sm:text-xl font-bold text-neutral-900">
                  {current.name}
                </h4>
                <p className="text-xs sm:text-sm font-mono text-neutral-600 mt-1">
                  {current.designation} &bull; <span className="text-neutral-900 font-semibold">{current.company}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION CONTROLS */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="flex items-center justify-center h-11 w-11 rounded-full bg-white border border-neutral-300 text-neutral-800 shadow-sm transition-all hover:bg-neutral-950 hover:text-white hover:border-neutral-950 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                onClick={handleNext}
                className="flex items-center justify-center h-11 w-11 rounded-full bg-white border border-neutral-300 text-neutral-800 shadow-sm transition-all hover:bg-neutral-950 hover:text-white hover:border-neutral-950 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <span className="font-mono text-xs sm:text-sm font-bold text-neutral-700">
              0{active + 1} / 0{testimonials.length}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
