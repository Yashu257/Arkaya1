"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";

const MESSAGES: string[] = [
  "ARKAYA TECH\nWE BUILD WHAT'S NEXT",
  "WEBSITES\nBUILT TO PERFORM",
  "AI AGENTS\nBUILT TO WORK",
  "AUTOMATION\nWITHOUT THE BUSYWORK",
  "SMARTER APPS\nBETTER EXPERIENCES",
  "YOUR IDEA\nOUR TECHNOLOGY",
];

export function Hero() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full pt-10 sm:pt-14 md:pt-20 pb-20 md:pb-28 overflow-hidden bg-[#F1F5FF] text-neutral-900 scroll-mt-24">
      {/* 1. Layered Atmospheric Radial Glows */}
      <div 
        className="pointer-events-none absolute inset-0 z-0" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 30%, rgba(59,130,246,0.25), transparent 38%),
            radial-gradient(circle at 85% 20%, rgba(139,92,246,0.25), transparent 40%),
            radial-gradient(circle at 60% 90%, rgba(99,102,241,0.16), transparent 45%)
          `
        }} 
      />

      {/* 2. Visible Technical Grid Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.08] pointer-events-none z-0" />

      {/* 3. Abstract Background Technical Graphics (Orbital Lines & Nodes) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="30%" r="280" fill="none" stroke="#2563FF" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="80%" cy="45%" r="340" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 8" />
          <circle cx="50%" cy="70%" r="200" fill="none" stroke="#4F46FF" strokeWidth="1" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-200/80 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-700">
            DIGITAL × AI × AUTOMATION
          </span>
          <span className="h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
        </motion.div>

        {/* HERO VISUAL CENTERPIECE: TEXT FLIPPING BOARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full max-w-3xl sm:max-w-4xl mb-8 sm:mb-12 relative group"
        >
          {/* Branded reflection glow underneath the board */}
          <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-r from-blue-600/20 via-indigo-600/25 to-violet-600/20 blur-2xl opacity-90 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative">
            <TextFlippingBoard text={MESSAGES[currentMessageIndex]} />
          </div>
        </motion.div>

        {/* TEXT UNDER BOARD */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed font-normal mb-8 sm:mb-10 px-2"
        >
          Websites, applications, AI agents and automation designed to turn ambitious ideas into real products.
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12 sm:mb-16"
        >
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[200px] rounded-full bg-neutral-950 px-7 py-3.5 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/work"
            className="inline-flex items-center justify-center w-full sm:w-auto min-w-[160px] rounded-full bg-white px-7 py-3.5 text-base font-semibold text-neutral-800 border border-neutral-300 shadow-sm transition-all duration-300 hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-400 hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Work
          </Link>
        </motion.div>

        {/* BOTTOM CAPABILITY LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm font-semibold tracking-widest text-neutral-600 uppercase"
        >
          <span>WEBSITES</span>
          <span className="text-neutral-400">•</span>
          <span>APPLICATIONS</span>
          <span className="text-neutral-400">•</span>
          <span>AI</span>
          <span className="text-neutral-400">•</span>
          <span>AUTOMATION</span>
        </motion.div>

      </div>
    </section>
  );
}
