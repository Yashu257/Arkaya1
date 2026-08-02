"use client";

import { motion } from "framer-motion";
import { TooltipCard } from "@/components/ui/tooltip-card";

export function TechnologyMindset() {
  const technologies = [
    { name: "React", category: "Frontend", desc: "Interactive digital products and web applications." },
    { name: "Next.js", category: "Framework", desc: "Server-side rendering, static generation, and edge routing." },
    { name: "TypeScript", category: "Language", desc: "Type safety for resilient frontend and backend logic." },
    { name: "Python", category: "AI & Backend", desc: "AI systems, automation pipelines, and data processing." },
    { name: "FastAPI", category: "Backend API", desc: "High-performance asynchronous API endpoints and webhooks." },
    { name: "PostgreSQL", category: "Database", desc: "Relational data storage for structured application state." },
    { name: "OpenAI", category: "AI Intelligence", desc: "Context-aware LLM reasoning and intent parsing." },
    { name: "Vector Search", category: "AI Retrieval", desc: "Sub-10ms semantic document retrieval pipelines." },
    { name: "Cloud Infrastructure", category: "Deployment", desc: "Scalable hosting, edge CDNs, and automated CI/CD." },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-white border-t border-neutral-100 overflow-hidden">
      {/* Background Mesh */}
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
              TECHNOLOGY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Tools change. <br />
            The thinking shouldn&apos;t.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            We use modern technologies, but the goal is never to force a project into a particular stack. The technology should fit the product.
          </motion.p>
        </div>

        {/* ACETERNITY TOOLTIP CARDS GRID */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {technologies.map((t) => (
            <TooltipCard
              key={t.name}
              title={t.name}
              description={t.desc}
              category={t.category}
            >
              <div className="px-5 py-3 rounded-full bg-neutral-900 text-white font-mono text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer select-none border border-neutral-800">
                {t.name}
              </div>
            </TooltipCard>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mt-14 sm:mt-16 text-center">
          <span className="text-sm sm:text-base font-mono font-bold tracking-[0.25em] text-neutral-900 uppercase">
            THE STACK IS A DECISION. NOT THE PRODUCT.
          </span>
        </div>

      </div>
    </section>
  );
}
