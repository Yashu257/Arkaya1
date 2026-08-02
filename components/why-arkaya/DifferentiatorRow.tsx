"use client";

import { motion } from "framer-motion";

interface Differentiator {
  number: string;
  title: string;
  description: string;
}

interface DifferentiatorRowProps {
  item: Differentiator;
  index: number;
}

export function DifferentiatorRow({ item, index }: DifferentiatorRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative py-6 sm:py-8 border-b border-neutral-800 transition-colors duration-200"
    >
      <div className="flex items-start gap-4 sm:gap-6">
        {/* Number */}
        <span className="font-mono text-sm sm:text-base font-bold text-violet-400 group-hover:text-blue-400 transition-colors duration-200 shrink-0 pt-0.5">
          {item.number}
        </span>

        {/* Content */}
        <div className="space-y-1.5 flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
