"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle, ArrowRight, RefreshCw } from "lucide-react";

export function AutomationVisual() {
  const steps = [
    { label: "FORM SUBMITTED", status: "TRIGGER" },
    { label: "AI ANALYSIS", status: "PROCESSED" },
    { label: "CRM UPDATED", status: "SYNCED" },
    { label: "EMAIL GENERATED", status: "SENT" },
    { label: "FOLLOW-UP SCHEDULED", status: "SCHEDULED" },
    { label: "TEAM NOTIFIED", status: "COMPLETE" },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto py-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl p-5 text-white"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-mono font-bold tracking-wider text-neutral-200 uppercase">
              WORKFLOW AUTOMATION ENGINE
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
            24/7 ACTIVE
          </span>
        </div>

        {/* Pipeline Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1.5 flex flex-col justify-between hover:border-blue-500/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold text-blue-400 bg-blue-950/80 px-1.5 py-0.5 rounded">
                  0{i + 1}
                </span>
                <CheckCircle className="h-3 w-3 text-emerald-400" />
              </div>
              <span className="text-[11px] font-mono font-bold text-neutral-200 leading-tight block">
                {s.label}
              </span>
              <span className="text-[9px] font-mono text-neutral-500 block">
                STATUS: {s.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span className="flex items-center gap-1.5">
            <RefreshCw className="h-3 w-3 text-blue-400 animate-spin" style={{ animationDuration: '6s' }} />
            Zero Manual Steps
          </span>
          <span className="text-emerald-400">Execution Speed: &lt; 1.2s</span>
        </div>
      </motion.div>
    </div>
  );
}
