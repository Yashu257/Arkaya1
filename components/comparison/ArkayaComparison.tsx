"use client";

import { motion } from "framer-motion";
import { Compare } from "@/components/ui/compare";
import { ManualWorkflowVisual } from "./ManualWorkflowVisual";
import { AutomatedWorkflowVisual } from "./AutomatedWorkflowVisual";
import { Network, Zap, SlidersHorizontal } from "lucide-react";

export function ArkayaComparison() {
  return (
    <section id="comparison" className="relative w-full py-20 md:py-32 bg-neutral-50/60 border-t border-neutral-100 overflow-hidden">
      {/* Background Subtle Tech Mesh */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION INTRO */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              THE DIFFERENCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Less manual work. <br className="hidden sm:inline" />
            More intelligent execution.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl"
          >
            We connect your tools, workflows and AI into systems that keep work moving — without the constant manual effort.
          </motion.p>
        </div>

        {/* MAIN COMPARE EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-5xl"
        >
          {/* Subtle 3D Perspective container on desktop, flat on mobile */}
          <div className="perspective-dramatic transition-transform duration-500 hover:rotate-x-0 md:[transform:rotateX(2deg)]">
            <Compare
              firstContent={<ManualWorkflowVisual />}
              secondContent={<AutomatedWorkflowVisual />}
              slideMode="hover"
              autoplay={true}
              showHandlebar={true}
              className="min-h-[400px] sm:min-h-[460px] md:min-h-[500px]"
            />
          </div>
        </motion.div>

        {/* STATEMENT + 3-ITEM TRANSFORMATION COLUMNS */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-neutral-200/80">
          
          <div className="text-center mb-10">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-neutral-400 uppercase">
              SAME BUSINESS. BETTER SYSTEM.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Column 01 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-blue-600">01</span>
                <span className="text-neutral-300">/</span>
                <div className="h-7 w-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Network className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 uppercase tracking-wider">
                CONNECTED SYSTEMS
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Bring your tools and information into one intelligent workflow without manual copy-pasting.
              </p>
            </div>

            {/* Column 02 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-violet-600">02</span>
                <span className="text-neutral-300">/</span>
                <div className="h-7 w-7 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
                  <Zap className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 uppercase tracking-wider">
                AUTOMATED EXECUTION
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Let repetitive operational tasks happen automatically so your business stays responsive 24/7.
              </p>
            </div>

            {/* Column 03 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-indigo-600">03</span>
                <span className="text-neutral-300">/</span>
                <div className="h-7 w-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <SlidersHorizontal className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 uppercase tracking-wider">
                HUMAN CONTROL
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Your team stays in control and makes decisions while AI handles the repetitive operational heavy lifting.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
