"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TooltipCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  category?: string;
  className?: string;
}

export function TooltipCard({
  children,
  title,
  description,
  category,
  className,
}: TooltipCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`${title}: ${description}`}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "absolute -top-24 left-1/2 -translate-x-1/2 w-64 rounded-xl bg-neutral-950 p-3.5 shadow-2xl border border-neutral-800 z-50 pointer-events-none text-left",
              className
            )}
          >
            {/* Top Gradient Line */}
            <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

            {category && (
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-violet-400 block mb-1">
                {category}
              </span>
            )}
            <h5 className="text-xs font-bold text-white tracking-tight">
              {title}
            </h5>
            <p className="text-[11px] font-sans text-neutral-400 mt-1 leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  );
}
