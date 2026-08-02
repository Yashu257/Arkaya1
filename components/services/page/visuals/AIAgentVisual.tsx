"use client";

import { motion } from "framer-motion";
import { Bot, ArrowDown, Cpu, Wrench, CheckCircle2 } from "lucide-react";

export function AIAgentVisual() {
  const steps = [
    { title: "REQUEST", detail: "Inquiry received from client platform" },
    { title: "UNDERSTAND", detail: "Extract intent & business context" },
    { title: "REASON", detail: "Formulate execution strategy" },
    { title: "USE TOOLS", detail: "Query CRM, Database & APIs" },
    { title: "ACT", detail: "Generate response & update records" },
    { title: "RESULT", detail: "Task autonomously completed" },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto py-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl p-5 text-white"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-violet-400" />
            <span className="text-xs font-mono font-bold tracking-wider text-neutral-200 uppercase">
              AI AGENT EXECUTION PIPELINE
            </span>
          </div>
          <span className="text-[10px] font-mono text-violet-400 bg-violet-950/80 px-2 py-0.5 rounded border border-violet-800/50">
            AUTONOMOUS
          </span>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-2 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-violet-500/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full bg-violet-950 border border-violet-700/50 flex items-center justify-center font-mono text-[10px] font-bold text-violet-300">
                  0{i + 1}
                </span>
                <div>
                  <span className="text-xs font-mono font-bold text-white block">
                    {s.title}
                  </span>
                  <span className="text-[11px] font-sans text-neutral-400">
                    {s.detail}
                  </span>
                </div>
              </div>

              {i === steps.length - 1 ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              ) : (
                <ArrowDown className="h-3.5 w-3.5 text-neutral-600 shrink-0" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
