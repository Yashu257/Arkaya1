"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle, ArrowRight, Bell, UserCheck, Calendar } from "lucide-react";

export function BusinessWorkflowMockup() {
  const steps = [
    { label: "LEAD FORM", role: "Trigger", status: "Executed" },
    { label: "AI SCORING", role: "Enrichment", status: "Score: 94/100" },
    { label: "CRM INGEST", role: "Pipeline", status: "Record Created" },
    { label: "DISPATCH ALERT", role: "Notification", status: "Slack Sent" },
    { label: "MEETING BOOKED", role: "Conversion", status: "Calendar Sync" },
  ];

  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[340px] rounded-xl bg-neutral-950 p-4 sm:p-6 text-white border border-neutral-800 flex flex-col justify-between overflow-hidden relative font-sans">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-blue-500" />
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            WORKFLOW RUNTIME: 1.4s
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded-full flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          ACTIVE AUTOMATION
        </span>
      </div>

      {/* PIPELINE STAGES */}
      <div className="relative z-10 my-4 space-y-2.5">
        {steps.map((s, idx) => (
          <div
            key={s.label}
            className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-mono text-xs font-bold">
                0{idx + 1}
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-mono tracking-wide">
                  {s.label}
                </h4>
                <span className="text-[10px] text-neutral-400 font-mono">
                  {s.role}
                </span>
              </div>
            </div>

            <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2.5 py-1 rounded-md">
              ✓ {s.status}
            </span>
          </div>
        ))}
      </div>

      {/* FOOTER BENCHMARK STATEMENT */}
      <div className="relative z-10 pt-2 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <span>Processing latency: 1,420ms</span>
        <span className="text-blue-400 font-semibold">Zero Manual Entry</span>
      </div>
    </div>
  );
}
