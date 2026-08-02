"use client";

import { Mail, FileSpreadsheet, AlertTriangle, CheckSquare, FileText } from "lucide-react";

export function ManualWorkflowVisual() {
  return (
    <div className="w-full h-full min-h-[460px] sm:min-h-[500px] bg-neutral-100/90 p-4 sm:p-6 md:p-8 flex flex-col justify-between text-neutral-800 selection:bg-neutral-200">
      
      {/* Header Label */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
          <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-neutral-700">
            BEFORE ARKAYA
          </span>
        </div>
        <span className="text-[10px] sm:text-xs font-mono font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
          MANUAL WORKFLOW
        </span>
      </div>

      {/* Disconnected Tool Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1">
        
        {/* Email App Card */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-neutral-500" />
              <span className="font-bold text-xs sm:text-sm text-neutral-900">Email Inbox</span>
            </div>
            <span className="text-[10px] font-mono bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-600">
              12 Unread
            </span>
          </div>
          <div className="space-y-1.5 text-[11px] text-neutral-600">
            <div className="p-1.5 rounded bg-neutral-50 border border-neutral-100 flex items-center justify-between">
              <span className="truncate">Re: Project Scope Inquiry</span>
              <span className="text-amber-600 font-mono text-[9px] shrink-0 ml-1">Needs Reply</span>
            </div>
            <div className="p-1.5 rounded bg-neutral-50 border border-neutral-100 flex items-center justify-between">
              <span className="truncate">Follow up on pricing proposal</span>
              <span className="text-neutral-400 font-mono text-[9px] shrink-0 ml-1">2d ago</span>
            </div>
          </div>
        </div>

        {/* Spreadsheet Card */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4 text-neutral-500" />
              <span className="font-bold text-xs sm:text-sm text-neutral-900">Manual Spreadsheet</span>
            </div>
            <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100">
              Out of Date
            </span>
          </div>
          <div className="space-y-1 text-[11px] font-mono text-neutral-600">
            <div className="flex justify-between p-1 bg-neutral-50 rounded">
              <span>Lead 001 - Acme Corp</span>
              <span className="text-neutral-500">Manual Contact</span>
            </div>
            <div className="flex justify-between p-1 bg-neutral-50 rounded">
              <span>Lead 002 - Nexus Ltd</span>
              <span className="text-amber-600 font-semibold">Pending CRM Sync</span>
            </div>
          </div>
        </div>

        {/* CRM Status Card */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span className="font-bold text-xs sm:text-sm text-neutral-900">CRM Records</span>
            </div>
            <span className="text-[10px] font-mono bg-red-50 text-red-700 px-1.5 py-0.5 rounded border border-red-100">
              Manual Updates Required
            </span>
          </div>
          <p className="text-[11px] text-neutral-500 leading-relaxed">
            Repetitive manual copy-pasting required across 3 tools to keep pipeline accurate.
          </p>
        </div>

        {/* Task List Card */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-neutral-500" />
              <span className="font-bold text-xs sm:text-sm text-neutral-900">Pending Tasks</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-500">4 Overdue</span>
          </div>
          <div className="space-y-1 text-[11px] text-neutral-600">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>Manually draft follow-up email</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>Copy lead info from email to CRM</span>
            </div>
          </div>
        </div>

      </div>

      {/* Sticky Note Bottom Detail */}
      <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <div className="flex items-center gap-1.5">
          <FileText className="h-3.5 w-3.5 text-neutral-400" />
          <span>Note: &quot;Remember to follow up again tomorrow afternoon...&quot;</span>
        </div>
      </div>

    </div>
  );
}
