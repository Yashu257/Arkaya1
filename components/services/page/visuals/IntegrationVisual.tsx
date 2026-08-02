"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Network, Sparkles, Layers } from "lucide-react";

export function IntegrationVisual() {
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
            <Network className="h-4 w-4 text-violet-400" />
            <span className="text-xs font-mono font-bold tracking-wider text-neutral-200 uppercase">
              AI INTEGRATION HUB
            </span>
          </div>
          <span className="text-[10px] font-mono text-violet-400 bg-violet-950/80 px-2 py-0.5 rounded border border-violet-800/50">
            CONNECTED APIs
          </span>
        </div>

        {/* Integration Hub Graphic */}
        <div className="grid grid-cols-3 gap-3 items-center text-center">
          {/* Left: Input Sources */}
          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
              REST & GraphQL
            </div>
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
              SQL & NoSQL
            </div>
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
              Vector Stores
            </div>
          </div>

          {/* Center: Arkaya AI Engine */}
          <div className="p-4 rounded-2xl bg-gradient-to-b from-violet-950 to-neutral-900 border border-violet-600/50 space-y-2 shadow-lg shadow-violet-900/30">
            <Sparkles className="h-6 w-6 text-violet-400 mx-auto" />
            <span className="text-xs font-mono font-bold text-white block">
              ARKAYA AI LAYER
            </span>
            <span className="text-[9px] font-mono text-violet-300 block">
              LLM / RAG Processing
            </span>
          </div>

          {/* Right: Output Applications */}
          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
              Web Platforms
            </div>
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
              SaaS Products
            </div>
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
              Internal Apps
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-4 pt-3 border-t border-neutral-800 text-center text-[10px] font-mono text-neutral-400">
          Seamless AI capabilities integrated into your existing tech stack.
        </div>

      </motion.div>
    </div>
  );
}
