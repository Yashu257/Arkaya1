"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { CheckCircle2 } from "lucide-react";

export function ApproachSection({ project }: { project: Project }) {
  const principles = [
    { num: "01", title: "UNDERSTAND WORKFLOW", desc: "Analyze the human & system steps first." },
    { num: "02", title: "CONNECT SYSTEMS", desc: "Remove data silos between tools." },
    { num: "03", title: "AUTOMATE EXECUTION", desc: "Deploy AI layers to execute tasks 24/7." },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-neutral-50/50 border-t border-neutral-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              THE APPROACH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Design the system <br />
            around the workflow.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed"
          >
            {project.approach}
          </motion.p>
        </div>

        {/* 3 PRINCIPLES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-2"
            >
              <span className="text-xs font-mono font-bold text-blue-600">{p.num}</span>
              <h4 className="text-base font-bold text-neutral-900">{p.title}</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
