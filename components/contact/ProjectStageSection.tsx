"use client";

import { ProjectStage } from "@/types/contact";
import { Check } from "lucide-react";

interface ProjectStageSectionProps {
  selectedStage: ProjectStage | "";
  onSelectStage: (stage: ProjectStage) => void;
  error?: string;
}

const STAGE_OPTIONS: { id: ProjectStage; title: string; desc: string }[] = [
  {
    id: "JUST AN IDEA",
    title: "JUST AN IDEA",
    desc: "I know what I want to build but haven't started yet.",
  },
  {
    id: "PLANNING",
    title: "PLANNING",
    desc: "Requirements, specifications or designs are being prepared.",
  },
  {
    id: "ALREADY BUILDING",
    title: "ALREADY BUILDING",
    desc: "Development has started and we need additional expertise.",
  },
  {
    id: "EXISTING PRODUCT",
    title: "EXISTING PRODUCT",
    desc: "A product already exists and needs refactoring or features.",
  },
  {
    id: "NEED AUTOMATION",
    title: "NEED AUTOMATION",
    desc: "Operations work, but too much is executed manually.",
  },
];

export function ProjectStageSection({
  selectedStage,
  onSelectStage,
  error,
}: ProjectStageSectionProps) {
  return (
    <div className="space-y-6">
      <div className="text-left space-y-2">
        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase">
          STEP 02 OF 04
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
          Where are you right now?
        </h3>
        <p className="text-xs sm:text-sm text-neutral-500">
          Select the stage that best describes your current project state.
        </p>
      </div>

      {error && (
        <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
          {error}
        </p>
      )}

      <div className="space-y-3">
        {STAGE_OPTIONS.map((opt) => {
          const isSelected = selectedStage === opt.id;

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelectStage(opt.id)}
              aria-pressed={isSelected}
              className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between gap-4 focus:outline-none ${
                isSelected
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-md"
                  : "bg-white text-neutral-900 border-neutral-200/90 hover:border-blue-600 hover:shadow-sm"
              }`}
            >
              <div className="space-y-1">
                <span
                  className={`text-xs sm:text-sm font-mono font-bold tracking-wider ${
                    isSelected ? "text-violet-400" : "text-neutral-900"
                  }`}
                >
                  {opt.title}
                </span>
                <p
                  className={`text-xs leading-relaxed ${
                    isSelected ? "text-neutral-300" : "text-neutral-600"
                  }`}
                >
                  {opt.desc}
                </p>
              </div>

              <div
                className={`h-6 w-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                  isSelected
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-neutral-300 bg-neutral-50"
                }`}
              >
                {isSelected && <Check className="h-3.5 w-3.5" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
