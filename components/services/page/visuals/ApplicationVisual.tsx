"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Users, Shield, BarChart3, Database } from "lucide-react";

export function ApplicationVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto py-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl p-4 sm:p-5 text-white"
      >
        {/* App Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-mono font-bold tracking-wider text-neutral-200 uppercase">
              OPERATIONS PLATFORM
            </span>
          </div>
          <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
            SYSTEM ONLINE
          </span>
        </div>

        {/* Dashboard Main Viewport */}
        <div className="grid grid-cols-12 gap-3">
          {/* Sidebar Wireframe (3 Cols) */}
          <div className="col-span-3 space-y-2 border-r border-neutral-800 pr-2">
            <div className="h-6 rounded bg-neutral-900 border border-neutral-800 flex items-center px-2 text-[10px] font-mono text-neutral-400">
              Overview
            </div>
            <div className="h-6 rounded bg-neutral-900 border border-neutral-800 flex items-center px-2 text-[10px] font-mono text-neutral-500">
              Users
            </div>
            <div className="h-6 rounded bg-neutral-900 border border-neutral-800 flex items-center px-2 text-[10px] font-mono text-neutral-500">
              APIs
            </div>
          </div>

          {/* Analytics & Activity (9 Cols) */}
          <div className="col-span-9 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <span className="text-[9px] font-mono text-neutral-500 block">ACTIVE USERS</span>
                <span className="text-base font-bold text-white font-mono">14,820</span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <span className="text-[9px] font-mono text-neutral-500 block">UPTIME</span>
                <span className="text-base font-bold text-emerald-400 font-mono">99.98%</span>
              </div>
            </div>

            {/* Bar Chart Wireframe */}
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                <span>SYSTEM LOAD</span>
                <BarChart3 className="h-3 w-3 text-violet-400" />
              </div>
              <div className="flex items-end gap-1.5 h-12 pt-2">
                <div className="w-1/6 h-[40%] bg-blue-600/60 rounded-t" />
                <div className="w-1/6 h-[70%] bg-blue-600/80 rounded-t" />
                <div className="w-1/6 h-[55%] bg-blue-600/60 rounded-t" />
                <div className="w-1/6 h-[90%] bg-violet-600 rounded-t" />
                <div className="w-1/6 h-[65%] bg-blue-600/70 rounded-t" />
                <div className="w-1/6 h-[80%] bg-violet-600/90 rounded-t" />
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
