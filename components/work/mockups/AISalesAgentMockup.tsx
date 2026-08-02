"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, UserCheck, Clock, RefreshCw, BarChart2, Shield } from "lucide-react";

export function AISalesAgentMockup() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStatusIndex, setActiveStatusIndex] = useState(0);

  const statuses = [
    { name: "Daniel", status: "PROCESSING", color: "bg-amber-100 text-amber-700 border-amber-200" },
    { name: "Daniel", status: "QUALIFIED", color: "bg-green-100 text-green-700 border-green-200" },
  ];

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, statuses.length]);

  return (
    <div className="w-full rounded-2xl border border-neutral-200/90 bg-white p-3 sm:p-5 shadow-md overflow-hidden text-xs sm:text-sm">
      {/* Dashboard Top Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold">
            <Bot className="h-4 w-4" />
          </div>
          <span className="font-bold text-neutral-900">AI Outreach Engine</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
            AI LIVE
          </span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        
        {/* Left Sidebar (Desktop/Tablet) */}
        <div className="hidden md:flex md:col-span-3 flex-col space-y-1.5 p-2 rounded-xl bg-neutral-50 border border-neutral-100">
          <div className="px-2 py-1.5 rounded-lg bg-neutral-900 text-white font-medium text-xs flex items-center gap-2">
            <BarChart2 className="h-3.5 w-3.5" /> Overview
          </div>
          <div className="px-2 py-1.5 rounded-lg text-neutral-600 hover:bg-neutral-100 font-medium text-xs flex items-center gap-2">
            <UserCheck className="h-3.5 w-3.5" /> Leads
          </div>
          <div className="px-2 py-1.5 rounded-lg text-neutral-600 hover:bg-neutral-100 font-medium text-xs flex items-center gap-2">
            <Bot className="h-3.5 w-3.5" /> Agents
          </div>
          <div className="px-2 py-1.5 rounded-lg text-neutral-600 hover:bg-neutral-100 font-medium text-xs flex items-center gap-2">
            <Shield className="h-3.5 w-3.5" /> Campaigns
          </div>
        </div>

        {/* Center: Live Conversations */}
        <div className="col-span-12 md:col-span-9 space-y-2.5">
          <div className="flex items-center justify-between text-xs font-semibold text-neutral-500 uppercase tracking-wider pb-1">
            <span>Recent Prospect Conversations</span>
            <span className="font-mono text-[10px]">Updated 2m ago</span>
          </div>

          {/* Row 1 */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                S
              </div>
              <div>
                <p className="font-semibold text-neutral-900 text-xs sm:text-sm">Sarah Jenkins</p>
                <p className="text-[10px] sm:text-xs text-neutral-500">Enterprise AI Plan Inquiry</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-green-100 text-green-700 border border-green-200">
              QUALIFIED
            </span>
          </div>

          {/* Row 2 */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center text-xs">
                A
              </div>
              <div>
                <p className="font-semibold text-neutral-900 text-xs sm:text-sm">Alex Rivera</p>
                <p className="text-[10px] sm:text-xs text-neutral-500">Scheduled Demo Request</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 text-blue-700 border border-blue-200">
              FOLLOW-UP
            </span>
          </div>

          {/* Row 3 (Animated Status) */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                D
              </div>
              <div>
                <p className="font-semibold text-neutral-900 text-xs sm:text-sm">Daniel Vance</p>
                <p className="text-[10px] sm:text-xs text-neutral-500">Custom Automation Scope</p>
              </div>
            </div>
            <motion.span
              key={activeStatusIndex}
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border transition-colors ${statuses[activeStatusIndex].color}`}
            >
              {statuses[activeStatusIndex].status}
            </motion.span>
          </div>

        </div>

      </div>

      {/* Bottom AI Activity Feed */}
      <div className="mt-3.5 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
        <div className="flex items-center gap-1.5">
          <RefreshCw className="h-3 w-3 text-blue-600 animate-spin" />
          <span>AI Agent evaluating intent parameters...</span>
        </div>
        <span className="font-mono text-[10px] hidden sm:inline">Confidence: 98.4%</span>
      </div>
    </div>
  );
}
