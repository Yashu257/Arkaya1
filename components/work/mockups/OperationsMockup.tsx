"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, Activity, CheckCircle, Clock, Zap } from "lucide-react";

export function OperationsMockup() {
  const shouldReduceMotion = useReducedMotion();
  const [taskCompleted, setTaskCompleted] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setTaskCompleted((prev) => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <div className="w-full rounded-2xl border border-neutral-200/90 bg-white p-3 sm:p-5 shadow-md text-xs sm:text-sm">
      {/* App Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold">
            <Layers className="h-4 w-4" />
          </div>
          <span className="font-bold text-neutral-900">OpsControl Workspace</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] sm:text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md border border-neutral-200">
            v2.4 Production
          </span>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        
        {/* Metric Cards (Top) */}
        <div className="col-span-12 grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 uppercase">Automated Tasks</span>
            <p className="text-sm sm:text-base font-bold text-neutral-900">1,420</p>
          </div>
          <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 uppercase">System Health</span>
            <p className="text-sm sm:text-base font-bold text-emerald-600">99.9%</p>
          </div>
          <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 uppercase">Active Agents</span>
            <p className="text-sm sm:text-base font-bold text-blue-600">12 Active</p>
          </div>
        </div>

        {/* Workflow Feed */}
        <div className="col-span-12 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            <span>Operations Workflow Activity</span>
            <Activity className="h-3.5 w-3.5 text-blue-600" />
          </div>

          <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-600" />
              <div>
                <p className="font-semibold text-neutral-900 text-xs">Inventory Sync & Reorder Trigger</p>
                <p className="text-[10px] text-neutral-500">Automated Webhook → ERP</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-green-100 text-green-700 border border-green-200">
              COMPLETE
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-violet-600" />
              <div>
                <p className="font-semibold text-neutral-900 text-xs">Weekly Executive Analytics Digest</p>
                <p className="text-[10px] text-neutral-500">AI Summary & Report Delivery</p>
              </div>
            </div>
            <motion.span
              key={taskCompleted ? "done" : "progress"}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border transition-colors ${
                taskCompleted 
                  ? "bg-green-100 text-green-700 border-green-200" 
                  : "bg-blue-50 text-blue-700 border-blue-200"
              }`}
            >
              {taskCompleted ? "COMPLETE" : "PROCESSING"}
            </motion.span>
          </div>
        </div>

      </div>
    </div>
  );
}
