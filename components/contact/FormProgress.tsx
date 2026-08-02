"use client";

import { motion } from "framer-motion";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function FormProgress({ currentStep, totalSteps }: FormProgressProps) {
  const steps = [
    { num: 1, label: "SERVICES" },
    { num: 2, label: "STAGE" },
    { num: 3, label: "DETAILS" },
    { num: 4, label: "CONTACT" },
  ];

  return (
    <div className="w-full pb-8 mb-8 border-b border-neutral-100">
      <div className="flex items-center justify-between max-w-xl mx-auto relative">
        {/* Connecting Background Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-200 -translate-y-1/2 z-0" />
        
        {/* Active Progress Line */}
        <motion.div
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 -translate-y-1/2 z-0"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />

        {steps.map((step) => {
          const isActive = currentStep === step.num;
          const isCompleted = currentStep > step.num;

          return (
            <div
              key={step.num}
              className="relative z-10 flex flex-col items-center gap-1.5 bg-white px-2"
            >
              <div
                className={`h-9 w-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-neutral-900 text-white ring-4 ring-blue-100 shadow-md"
                    : isCompleted
                    ? "bg-blue-600 text-white"
                    : "bg-neutral-100 text-neutral-400 border border-neutral-200"
                }`}
              >
                0{step.num}
              </div>
              <span
                className={`text-[10px] font-mono font-bold tracking-wider uppercase transition-colors ${
                  isActive ? "text-neutral-900" : "text-neutral-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
