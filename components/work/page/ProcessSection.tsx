"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "UNDERSTAND",
      desc: "We learn the problem, users and business context.",
    },
    {
      num: "02",
      title: "DESIGN",
      desc: "We turn requirements into clear product flows and interfaces.",
    },
    {
      num: "03",
      title: "BUILD",
      desc: "We engineer the product using the technologies that fit the problem.",
    },
    {
      num: "04",
      title: "TEST",
      desc: "We validate functionality, usability and reliability.",
    },
    {
      num: "05",
      title: "LAUNCH",
      desc: "We deploy, refine and prepare the system for real use.",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-white border-t border-neutral-100 overflow-hidden">
      {/* Background Dot Matrix Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* INTRO */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              OUR PROCESS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            From rough idea <br />
            to working product.
          </motion.h2>
        </div>

        {/* 5-STEP PROCESS PIPELINE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto text-left">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-blue-600 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {step.num}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block h-3.5 w-3.5 text-neutral-300 group-hover:text-blue-600 transition-colors" />
                  )}
                </div>

                <div>
                  <h4 className="text-base font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
