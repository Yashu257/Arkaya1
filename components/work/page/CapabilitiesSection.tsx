"use client";

import { motion } from "framer-motion";

export function CapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "PRODUCT STRATEGY",
      desc: "Understanding the problem, users and business requirements before writing code.",
    },
    {
      num: "02",
      title: "UX / UI DESIGN",
      desc: "Clean, responsive interfaces built around how people actually interact with software.",
    },
    {
      num: "03",
      title: "FRONTEND ENGINEERING",
      desc: "Sub-second web performance, accessible markup, and interactive user experiences.",
    },
    {
      num: "04",
      title: "BACKEND ENGINEERING",
      desc: "Scalable APIs, resilient database schemas, and microservice architectures.",
    },
    {
      num: "05",
      title: "AI ENGINEERING",
      desc: "Context-aware LLM agents, vector RAG retrieval, and natural language reasoning.",
    },
    {
      num: "06",
      title: "AUTOMATION",
      desc: "Connecting tools, webhooks and operational workflows to run 24/7 without manual effort.",
    },
    {
      num: "07",
      title: "INTEGRATIONS",
      desc: "Seamless REST/GraphQL connections into existing CRM, ERP and legacy databases.",
    },
    {
      num: "08",
      title: "DEPLOYMENT & SCALE",
      desc: "Cloud infrastructure, automated CI/CD pipelines, and high-availability hosting.",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-neutral-50/50 border-t border-neutral-100 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* INTRO */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              WHAT WE BRING TO THE BUILD
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Different projects. <br />
            The same depth of thinking.
          </motion.h2>
        </div>

        {/* 8 CAPABILITIES EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-neutral-200/90 pt-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="space-y-2 group p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-sm hover:border-blue-600 transition-all duration-200"
            >
              <span className="font-mono text-xs font-bold text-blue-600 block">
                {cap.num}
              </span>
              <h4 className="text-base font-bold text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors">
                {cap.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
