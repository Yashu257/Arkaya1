"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Globe, 
  Bot, 
  LayoutGrid, 
  Zap, 
  MessageSquareText, 
  Cpu,
  ArrowUpRight
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function WhatWeBuild() {
  return (
    <section id="services" className="relative w-full py-20 md:py-32 bg-[#F3F4F6] text-neutral-900 overflow-hidden scroll-mt-24 border-t border-neutral-300/80">
      {/* 1. Large Abstract Blue Atmospheric Shape from Right Edge */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,255,0.14),transparent_65%)] pointer-events-none z-0" />
      
      {/* 2. Visible Dot-Matrix Pattern on Left */}
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.08] pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION INTRO */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3 bg-white px-3.5 py-1 rounded-full border border-neutral-300 shadow-2xs"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-600">
              WHAT WE BUILD
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Technology built around <br className="hidden sm:inline" />
            your business.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl"
          >
            From high-performance digital experiences to intelligent AI systems, we design and engineer technology that solves real business problems.
          </motion.p>
        </div>

        {/* ASYMMETRIC BENTO GRID — WHITE CARDS FLOATING OVER WARM GRAY BACKGROUND */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
        >

          {/* CARD 01 — WEBSITES (Desktop: 7 Cols, Tablet: 12 Cols, Mobile: 1 Col) */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-12 lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-neutral-200/90 p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/50 shadow-[0_10px_35px_rgba(15,23,42,0.07)] hover:shadow-2xl hover:-translate-y-1"
          >
            <Link href="/services#websites" className="block h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Globe className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  Websites
                </h3>
                <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
                  Fast, responsive and conversion-focused websites designed to turn attention into action.
                </p>
              </div>

              {/* VISUAL REPRESENTATION: MINIATURE BROWSER */}
              <div className="mt-8 relative w-full rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition-transform duration-300 group-hover:translate-y-[-2px]">
                <div className="flex items-center gap-1.5 pb-2.5 border-b border-neutral-100 mb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                  <div className="ml-2 flex-1 rounded-md bg-neutral-100 px-3 py-1 text-[10px] font-mono text-neutral-400">
                    https://arkaya.tech
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-16 rounded-lg bg-gradient-to-r from-neutral-100 via-blue-50/60 to-violet-50/60 p-3 flex items-center justify-between">
                    <div className="space-y-1.5">
                      <div className="h-2.5 w-24 rounded bg-neutral-800" />
                      <div className="h-2 w-36 rounded bg-neutral-300" />
                    </div>
                    <div className="h-6 w-16 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-lg bg-neutral-50 border border-neutral-100 p-2 space-y-1">
                      <div className="h-2 w-8 rounded bg-neutral-300" />
                      <div className="h-1.5 w-12 rounded bg-neutral-200" />
                    </div>
                    <div className="h-12 rounded-lg bg-neutral-50 border border-neutral-100 p-2 space-y-1">
                      <div className="h-2 w-8 rounded bg-neutral-300" />
                      <div className="h-1.5 w-12 rounded bg-neutral-200" />
                    </div>
                    <div className="h-12 rounded-lg bg-neutral-50 border border-neutral-100 p-2 space-y-1">
                      <div className="h-2 w-8 rounded bg-neutral-300" />
                      <div className="h-1.5 w-12 rounded bg-neutral-200" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* CARD 02 — AI AGENTS (Desktop: 5 Cols, Tablet: 12 Cols, Mobile: 1 Col) */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-12 lg:col-span-5 flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-neutral-200/90 p-6 sm:p-8 transition-all duration-300 hover:border-violet-500/50 shadow-[0_10px_35px_rgba(15,23,42,0.07)] hover:shadow-2xl hover:-translate-y-1"
          >
            <Link href="/services#ai-agents" className="block h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-violet-50 text-violet-600 border border-violet-100">
                    <Bot className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  AI Agents
                </h3>
                <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Intelligent agents that understand, decide and execute tasks across your business.
                </p>
              </div>

              {/* VISUAL REPRESENTATION: AI NETWORK GRAPH */}
              <div className="mt-8 relative h-40 w-full rounded-2xl border border-neutral-200/80 bg-white p-4 flex items-center justify-center overflow-hidden shadow-sm">
                <div className="relative w-full max-w-[240px] h-full flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full stroke-neutral-200" strokeWidth="1.5">
                    <line x1="50%" y1="50%" x2="20%" y2="25%" />
                    <line x1="50%" y1="50%" x2="80%" y2="25%" />
                    <line x1="50%" y1="50%" x2="20%" y2="75%" />
                    <line x1="50%" y1="50%" x2="80%" y2="75%" />
                  </svg>

                  <motion.div
                    className="absolute h-2 w-2 rounded-full bg-blue-500 shadow-sm"
                    animate={{
                      x: [-50, 0, 50, 0, -50],
                      y: [-30, 0, 30, 0, -30],
                      opacity: [0.2, 1, 0.2, 1, 0.2],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="absolute top-2 left-4 px-2 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-[10px] font-mono text-neutral-600">
                    CRM
                  </div>
                  <div className="absolute top-2 right-4 px-2 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-[10px] font-mono text-neutral-600">
                    Email
                  </div>
                  <div className="absolute bottom-2 left-4 px-2 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-[10px] font-mono text-neutral-600">
                    Data
                  </div>
                  <div className="absolute bottom-2 right-4 px-2 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-[10px] font-mono text-neutral-600">
                    Support
                  </div>

                  <div className="relative z-10 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20">
                    <Bot className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* CARD 03 — APPLICATIONS (Desktop: 4 Cols, Tablet: 6 Cols, Mobile: 1 Col) */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-6 lg:col-span-4 flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-neutral-200/90 p-6 sm:p-8 transition-all duration-300 hover:border-indigo-500/50 shadow-[0_10px_35px_rgba(15,23,42,0.07)] hover:shadow-2xl hover:-translate-y-1"
          >
            <Link href="/services#applications" className="block h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <LayoutGrid className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Applications
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Scalable web applications and digital products engineered around real workflows.
                </p>
              </div>

              {/* VISUAL REPRESENTATION: DASHBOARD UI */}
              <div className="mt-8 relative w-full rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition-transform duration-300 group-hover:translate-y-[-2px]">
                <div className="flex gap-2">
                  <div className="w-8 rounded-md bg-neutral-100 p-1 space-y-1.5">
                    <div className="h-2 w-full rounded bg-indigo-500" />
                    <div className="h-1.5 w-full rounded bg-neutral-300" />
                    <div className="h-1.5 w-full rounded bg-neutral-300" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-full rounded bg-neutral-100 flex items-center justify-between px-2">
                      <div className="h-1.5 w-12 rounded bg-neutral-400" />
                      <div className="h-1.5 w-4 rounded bg-indigo-400" />
                    </div>
                    <div className="h-12 w-full rounded bg-indigo-50/40 border border-indigo-100 p-2 flex items-end justify-between gap-1">
                      <div className="h-4 w-3 rounded-t bg-indigo-300" />
                      <div className="h-8 w-3 rounded-t bg-indigo-500" />
                      <div className="h-6 w-3 rounded-t bg-indigo-400" />
                      <div className="h-9 w-3 rounded-t bg-violet-600" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* CARD 04 — AUTOMATION (Desktop: 8 Cols, Tablet: 6 Cols, Mobile: 1 Col) */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-6 lg:col-span-8 flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-neutral-200/90 p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/50 shadow-[0_10px_35px_rgba(15,23,42,0.07)] hover:shadow-2xl hover:-translate-y-1"
          >
            <Link href="/services#automation" className="block h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Zap className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  Automation
                </h3>
                <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-lg">
                  Connect your tools, eliminate repetitive work and keep operations moving automatically.
                </p>
              </div>

              {/* VISUAL REPRESENTATION: WORKFLOW PIPELINE */}
              <div className="mt-8 relative w-full rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-2 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-100 md:scrollbar-none">
                  
                  <div className="flex flex-col items-center gap-1.5 min-w-[70px]">
                    <div className="h-9 w-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-700">
                      LEAD
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500">Trigger</span>
                  </div>

                  <div className="h-0.5 flex-1 bg-neutral-200 relative min-w-[20px]">
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-blue-600 shadow-sm"
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  <div className="flex flex-col items-center gap-1.5 min-w-[70px]">
                    <div className="h-9 w-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center text-xs font-semibold">
                      AI
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500">Process</span>
                  </div>

                  <div className="h-0.5 flex-1 bg-neutral-200 relative min-w-[20px]">
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-violet-600 shadow-sm"
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                  </div>

                  <div className="flex flex-col items-center gap-1.5 min-w-[70px]">
                    <div className="h-9 w-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-700">
                      CRM
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500">Update</span>
                  </div>

                  <div className="h-0.5 flex-1 bg-neutral-200 relative min-w-[20px]">
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-indigo-600 shadow-sm"
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                  </div>

                  <div className="flex flex-col items-center gap-1.5 min-w-[70px]">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center text-xs font-semibold shadow-sm">
                      ACTION
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500">Follow-up</span>
                  </div>

                </div>
              </div>
            </Link>
          </motion.div>

          {/* CARD 05 — AI CHATBOTS (Desktop: 6 Cols, Tablet: 6 Cols, Mobile: 1 Col) */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-6 lg:col-span-6 flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-neutral-200/90 p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/50 shadow-[0_10px_35px_rgba(15,23,42,0.07)] hover:shadow-2xl hover:-translate-y-1"
          >
            <Link href="/services#ai-chatbots" className="block h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <MessageSquareText className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  AI Chatbots
                </h3>
                <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Conversational AI built for customer support, lead qualification and internal knowledge.
                </p>
              </div>

              {/* VISUAL REPRESENTATION: CHAT UI */}
              <div className="mt-8 relative w-full rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm space-y-3">
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-sm bg-neutral-100 px-3.5 py-2 text-xs text-neutral-800 max-w-[80%]">
                    Can you help me choose a plan?
                  </div>
                </div>

                <div className="flex justify-start items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5">
                    A
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-blue-50 border border-blue-100 px-3.5 py-2 text-xs text-neutral-900 max-w-[85%]">
                    Absolutely. What are you looking to achieve?
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* CARD 06 — AI INTEGRATIONS (Desktop: 6 Cols, Tablet: 6 Cols, Mobile: 1 Col) */}
          <motion.div
            variants={cardVariants}
            className="group relative md:col-span-6 lg:col-span-6 flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-neutral-200/90 p-6 sm:p-8 transition-all duration-300 hover:border-violet-500/50 shadow-[0_10px_35px_rgba(15,23,42,0.07)] hover:shadow-2xl hover:-translate-y-1"
          >
            <Link href="/services#ai-integrations" className="block h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-violet-50 text-violet-600 border border-violet-100">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  AI Integrations
                </h3>
                <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Bring intelligent capabilities into the tools and products your business already uses.
                </p>
              </div>

              {/* VISUAL REPRESENTATION: HUB AND SPOKE CONNECTOR */}
              <div className="mt-8 relative h-36 w-full rounded-2xl border border-neutral-200/80 bg-white p-4 flex items-center justify-center shadow-sm">
                <div className="relative flex items-center justify-center gap-6">
                  <div className="h-10 w-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs font-mono font-bold text-neutral-600 shadow-sm">
                    API
                  </div>
                  <div className="h-0.5 w-8 bg-gradient-to-r from-neutral-300 to-blue-500" />
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-violet-500/20">
                    AI
                  </div>
                  <div className="h-0.5 w-8 bg-gradient-to-r from-violet-500 to-neutral-300" />
                  <div className="h-10 w-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs font-mono font-bold text-neutral-600 shadow-sm">
                    APP
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
