"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface TooltipItem {
  id: number;
  name: string;
  designation?: string;
  expertise?: string;
  image?: string | null;
  initials?: string;
}

export function AnimatedTooltip({
  items,
  onHoverItem,
  className,
}: {
  items: TooltipItem[];
  onHoverItem?: (item: TooltipItem | null) => void;
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-35, 35]), {
    stiffness: 260,
    damping: 20,
  });
  const translateX = useSpring(useTransform(x, [-100, 100], [-40, 40]), {
    stiffness: 260,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const handleMouseEnter = (item: TooltipItem) => {
    setHoveredIndex(item.id);
    if (onHoverItem) onHoverItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (onHoverItem) onHoverItem(null);
  };

  return (
    <div className={cn("flex flex-wrap items-center justify-center -space-x-2.5 sm:-space-x-3.5", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group transition-all duration-300 z-10 hover:z-30 focus:outline-none"
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onClick={() => handleMouseEnter(item)}
          onFocus={() => handleMouseEnter(item)}
          onBlur={handleMouseLeave}
          tabIndex={0}
          role="button"
          aria-label={item.name}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 320,
                    damping: 22,
                  },
                }}
                exit={{ opacity: 0, y: 8, scale: 0.85 }}
                style={{
                  translateX: shouldReduceMotion ? 0 : translateX,
                  rotate: shouldReduceMotion ? 0 : rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-xl bg-neutral-950 px-4 py-2 text-xs shadow-2xl border border-neutral-800 z-50 pointer-events-none"
              >
                {/* Subtle top accent gradient */}
                <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />
                
                <div className="font-bold text-white text-sm tracking-wide">
                  {item.name}
                </div>

                {item.designation && (
                  <div className="text-violet-400 font-mono text-[11px] mt-0.5">
                    {item.designation}
                  </div>
                )}
                {item.expertise && (
                  <div className="text-neutral-400 font-mono text-[10px] mt-1 pt-1 border-t border-neutral-800">
                    {item.expertise}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* AVATAR MONOGRAM CIRCLE */}
          <motion.div
            whileHover={{ y: -4, scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "relative h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-white bg-gradient-to-b from-white to-neutral-100 shadow-md shadow-neutral-200/60 flex items-center justify-center overflow-hidden transition-all duration-200",
              hoveredIndex === item.id
                ? "border-blue-600 ring-4 ring-blue-500/20 shadow-blue-500/20"
                : "border-neutral-200/90 hover:border-blue-500"
            )}
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            ) : (
              <span className="font-mono font-bold text-neutral-900 text-sm sm:text-base tracking-wider">
                {item.initials}
              </span>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
