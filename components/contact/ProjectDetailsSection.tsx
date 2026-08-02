"use client";

import { BudgetRange, ProjectTimeline } from "@/types/contact";

interface ProjectDetailsSectionProps {
  projectName?: string;
  onChangeProjectName: (val: string) => void;
  description: string;
  onChangeDescription: (val: string) => void;
  budget?: BudgetRange | "";
  onSelectBudget: (b: BudgetRange) => void;
  timeline?: ProjectTimeline | "";
  onSelectTimeline: (t: ProjectTimeline) => void;
  error?: string;
}

const BUDGET_RANGES: BudgetRange[] = [
  "UNDER ₹50K",
  "₹50K – ₹1L",
  "₹1L – ₹3L",
  "₹3L – ₹5L",
  "₹5L+",
  "NOT SURE YET",
];

const TIMELINES: ProjectTimeline[] = [
  "AS SOON AS POSSIBLE",
  "WITHIN A MONTH",
  "1–3 MONTHS",
  "JUST EXPLORING",
];

export function ProjectDetailsSection({
  projectName,
  onChangeProjectName,
  description,
  onChangeDescription,
  budget,
  onSelectBudget,
  timeline,
  onSelectTimeline,
  error,
}: ProjectDetailsSectionProps) {
  return (
    <div className="space-y-6 text-left">
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase">
          STEP 03 OF 04
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
          Tell us a little more.
        </h3>
        <p className="text-xs sm:text-sm text-neutral-500">
          Share your idea or problem details and budget considerations.
        </p>
      </div>

      {error && (
        <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
          {error}
        </p>
      )}

      {/* PROJECT / COMPANY NAME */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block">
          PROJECT / COMPANY NAME <span className="text-neutral-400 font-normal">(OPTIONAL)</span>
        </label>
        <input
          type="text"
          value={projectName || ""}
          onChange={(e) => onChangeProjectName(e.target.value)}
          placeholder="e.g. Acme Corp or New Project Name"
          className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
        />
      </div>

      {/* DESCRIPTION TEXTAREA */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block">
          WHAT ARE YOU TRYING TO BUILD OR IMPROVE? <span className="text-rose-500">*</span>
        </label>
        <textarea
          rows={4}
          value={description}
          onChange={(e) => onChangeDescription(e.target.value)}
          placeholder="Tell us about the idea, problem, or workflow you want to automate..."
          className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
        />
      </div>

      {/* APPROXIMATE BUDGET */}
      <div className="space-y-2 pt-2">
        <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block">
          APPROXIMATE PROJECT BUDGET
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {BUDGET_RANGES.map((b) => {
            const isSelected = budget === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => onSelectBudget(b)}
                className={`py-2.5 px-3 rounded-xl border text-xs font-mono font-bold text-center transition-all ${
                  isSelected
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-blue-600"
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
        <p className="text-[11px] font-mono text-neutral-400">
          This helps us understand the scope — it isn&apos;t a quote or fixed project price.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="space-y-2 pt-2">
        <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block">
          WHEN WOULD YOU LIKE TO START? <span className="text-neutral-400 font-normal">(OPTIONAL)</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {TIMELINES.map((t) => {
            const isSelected = timeline === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => onSelectTimeline(t)}
                className={`py-2.5 px-2 rounded-xl border text-[11px] font-mono font-semibold text-center transition-all ${
                  isSelected
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-blue-600"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
