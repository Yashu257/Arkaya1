"use client";

import { ServiceType } from "@/types/contact";
import { Check } from "lucide-react";

interface ServiceSelectionProps {
  selectedServices: ServiceType[];
  onToggleService: (service: ServiceType) => void;
  error?: string;
}

const SERVICE_OPTIONS: { id: ServiceType; title: string; desc: string }[] = [
  {
    id: "WEBSITE",
    title: "WEBSITE",
    desc: "Marketing, corporate, or landing page web experiences.",
  },
  {
    id: "APPLICATION",
    title: "APPLICATION",
    desc: "Web applications, platforms, SaaS tools and portals.",
  },
  {
    id: "AI AGENT",
    title: "AI AGENT",
    desc: "Autonomous AI systems capable of reasoning and taking action.",
  },
  {
    id: "AI CHATBOT",
    title: "AI CHATBOT",
    desc: "Conversational agents for customer or internal support.",
  },
  {
    id: "AUTOMATION",
    title: "AUTOMATION",
    desc: "Connect business tools and automate repetitive workflows.",
  },
  {
    id: "AI INTEGRATION",
    title: "AI INTEGRATION",
    desc: "Add LLMs, vector search, or AI capabilities to existing tools.",
  },
  {
    id: "NOT SURE YET",
    title: "NOT SURE YET",
    desc: "Tell us your goal and we will recommend the best approach.",
  },
];

export function ServiceSelection({
  selectedServices,
  onToggleService,
  error,
}: ServiceSelectionProps) {
  return (
    <div className="space-y-6">
      <div className="text-left space-y-2">
        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase">
          STEP 01 OF 04
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
          What are you looking to build?
        </h3>
        <p className="text-xs sm:text-sm text-neutral-500">
          Select all options that apply to your project.
        </p>
      </div>

      {error && (
        <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICE_OPTIONS.map((opt) => {
          const isSelected = selectedServices.includes(opt.id);

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onToggleService(opt.id)}
              aria-pressed={isSelected}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 focus:outline-none ${
                isSelected
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-md"
                  : "bg-white text-neutral-900 border-neutral-200/90 hover:border-blue-600 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={`text-xs font-mono font-bold tracking-wider ${
                    isSelected ? "text-violet-400" : "text-neutral-500"
                  }`}
                >
                  {opt.title}
                </span>
                <div
                  className={`h-5 w-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-neutral-300 bg-neutral-50"
                  }`}
                >
                  {isSelected && <Check className="h-3 w-3" />}
                </div>
              </div>

              <p
                className={`text-xs leading-relaxed ${
                  isSelected ? "text-neutral-300" : "text-neutral-600"
                }`}
              >
                {opt.desc}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
