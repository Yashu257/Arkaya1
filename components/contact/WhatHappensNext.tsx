"use client";

import { motion } from "framer-motion";

export function WhatHappensNext() {
  const steps = [
    {
      num: "01",
      title: "WE UNDERSTAND",
      desc: "We review the idea, workflow and business requirement.",
    },
    {
      num: "02",
      title: "WE SHAPE",
      desc: "We identify the right product, technology and project scope.",
    },
    {
      num: "03",
      title: "WE BUILD",
      desc: "Once the direction is clear, design and engineering begin.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-neutral-500 block mb-2">
            WHAT HAPPENS NEXT
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            From enquiry to action.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-2"
            >
              <span className="font-mono text-xs font-bold text-blue-600">
                {step.num}
              </span>
              <h4 className="text-base font-bold text-neutral-900">
                {step.title}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
