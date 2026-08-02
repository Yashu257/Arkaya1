"use client";

import { motion } from "framer-motion";

interface WorkFiltersProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const CATEGORIES = [
  { id: "ALL", label: "ALL" },
  { id: "WEB", label: "WEB" },
  { id: "APPLICATIONS", label: "APPLICATIONS" },
  { id: "AI", label: "AI" },
  { id: "AUTOMATION", label: "AUTOMATION" },
];

export function WorkFilters({ activeCategory, onSelectCategory }: WorkFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-neutral-100">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            aria-pressed={isActive}
            className={`relative py-2 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase transition-colors duration-200 focus:outline-none ${
              isActive ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            {cat.label}

            {isActive && (
              <motion.div
                layoutId="activeFilterIndicator"
                className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
