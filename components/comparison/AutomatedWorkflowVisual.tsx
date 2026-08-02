"use client";

import { Bot, CheckCircle2, Zap, ArrowRight, ShieldCheck, Activity } from "lucide-react";

export function AutomatedWorkflowVisual() {
  return (
    <div className="w-full h-full min-h-[460px] sm:min-h-[500px] bg-white p-4 sm:p-6 md:p-8 flex flex-col justify-between text-neutral-900 selection:bg-blue-600 selection:text-white">
      
      {/* Header Label */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-neutral-900">
            WITH ARKAYA
          </span>
        </div>
        <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-xs">
          INTELLIGENT WORKFLOW
        </span>
      </div>

      {/* Unified AI Automation Grid */}
      <div className="space-y-3 sm:space-y-4 flex-1">
        
        {/* Top Active AI Banner */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-violet-50/80 border border-blue-100 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center font-bold shadow-sm">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-neutral-900">Arkaya Autonomous AI Agent</p>
              <p className="text-[11px] text-neutral-600">Handling lead ingestion, qualification & CRM sync</p>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 border border-emerald-200 shrink-0">
            ● ACTIVE 24/7
          </span>
        </div>

        {/* Live Pipeline Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          
          <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-semibold text-neutral-900">New Lead Ingestion</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              ✓ QUALIFIED
            </span>
          </div>

          <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-violet-600" />
              <span className="text-xs font-semibold text-neutral-900">CRM Database Sync</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded">
              ✓ UPDATED
            </span>
          </div>

          <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-indigo-600" />
              <span className="text-xs font-semibold text-neutral-900">Personalized Outreach</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
              ✓ SENT
            </span>
          </div>

          <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span className="text-xs font-semibold text-neutral-900">Calendar Booking</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              ✓ BOOKED
            </span>
          </div>

        </div>

        {/* Workflow Diagram Line */}
        <div className="p-3 rounded-xl bg-neutral-900 text-white flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
            <span className="text-blue-400">Lead</span>
            <ArrowRight className="h-3 w-3 text-neutral-500" />
            <span className="text-violet-400">AI Agent</span>
            <ArrowRight className="h-3 w-3 text-neutral-500" />
            <span className="text-indigo-400">CRM</span>
            <ArrowRight className="h-3 w-3 text-neutral-500" />
            <span className="text-emerald-400">Meeting</span>
          </div>
          <span className="text-emerald-400 font-bold hidden sm:inline ml-2">AUTOMATED</span>
        </div>

      </div>

      {/* System Status Footer */}
      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-600 font-mono">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
          <span>System Status: Zero manual data entry required</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-600 font-bold">
          <Activity className="h-3 w-3" />
          <span>RUNNING</span>
        </div>
      </div>

    </div>
  );
}
