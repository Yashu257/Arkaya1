"use client";

import { motion } from "framer-motion";
import { FileText, Database, Sparkles, Search, CheckCircle2, ArrowRight } from "lucide-react";

export function AIKnowledgeAssistantMockup() {
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[340px] rounded-xl bg-neutral-950 p-4 sm:p-6 text-white border border-neutral-800 flex flex-col justify-between overflow-hidden relative font-sans">
      {/* Background Backlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

      {/* HEADER / SEARCH BAR */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
              RAG VECTOR RETRIEVAL
            </span>
          </div>
          <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-full">
            INDEX: 1,420 DOCUMENTS
          </span>
        </div>

        {/* SEARCH CONSOLE INPUT */}
        <div className="rounded-xl bg-neutral-900/90 border border-neutral-800 p-3 flex items-center gap-3 shadow-inner">
          <Search className="h-4 w-4 text-neutral-400 shrink-0" />
          <span className="text-xs sm:text-sm text-neutral-200 font-mono flex-1 truncate">
            &quot;What is our compliance policy for multi-tenant data isolation?&quot;
          </span>
          <span className="text-[10px] font-mono bg-blue-600/30 text-blue-400 border border-blue-500/30 px-2 py-1 rounded">
            VECTOR SEARCH
          </span>
        </div>
      </div>

      {/* RAG PIPELINE DIAGRAM */}
      <div className="relative z-10 my-4 grid grid-cols-4 gap-2 text-center">
        
        <div className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex flex-col items-center justify-center space-y-1">
          <FileText className="h-4 w-4 text-blue-400" />
          <span className="text-[10px] font-mono font-bold text-neutral-300">DOCUMENTS</span>
          <span className="text-[9px] text-neutral-500">PDFs / Docs</span>
        </div>

        <div className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex flex-col items-center justify-center space-y-1">
          <div className="h-4 w-4 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-mono font-bold">
            1/0
          </div>
          <span className="text-[10px] font-mono font-bold text-neutral-300">CHUNKING</span>
          <span className="text-[9px] text-neutral-500">512 Tokens</span>
        </div>

        <div className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex flex-col items-center justify-center space-y-1">
          <Database className="h-4 w-4 text-violet-400" />
          <span className="text-[10px] font-mono font-bold text-neutral-300">VECTOR DB</span>
          <span className="text-[9px] text-neutral-500">Sub-10ms</span>
        </div>

        <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-600/30 to-violet-600/30 border border-violet-500/40 flex flex-col items-center justify-center space-y-1">
          <Sparkles className="h-4 w-4 text-violet-300" />
          <span className="text-[10px] font-mono font-bold text-white">AI ANSWER</span>
          <span className="text-[9px] text-violet-300">Citations</span>
        </div>

      </div>

      {/* ANSWER BOX WITH CITATIONS */}
      <div className="relative z-10 p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Verified Source Citation
          </span>
          <span className="text-neutral-400">SOC2_Compliance_2026.pdf (p.42)</span>
        </div>
        <p className="text-xs text-neutral-300 leading-relaxed font-sans">
          &quot;Multi-tenant isolation is enforced at the database level via row-level security (RLS) policies and unique tenant encryption keys.&quot;
        </p>
      </div>
    </div>
  );
}
