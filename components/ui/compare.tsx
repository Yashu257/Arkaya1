"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface CompareProps {
  firstContent?: React.ReactNode;
  secondContent?: React.ReactNode;
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstContentClassName?: string;
  secondContentClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export const Compare = ({
  firstContent,
  secondContent,
  firstImage,
  secondImage,
  className,
  firstContentClassName,
  secondContentClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = true,
  autoplayDuration = 5000,
}: CompareProps) => {
  const [sliderXPosition, setSliderXPosition] = useState(initialSliderPercentage);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay animation effect
  const startAutoplay = useCallback(() => {
    if (!autoplay || isHovered || isDragging || shouldReduceMotion) return;

    let direction = 1; // 1 = right, -1 = left
    autoplayRef.current = setInterval(() => {
      setSliderXPosition((prev) => {
        if (prev >= 80) direction = -1;
        if (prev <= 20) direction = 1;
        return prev + direction * 0.4;
      });
    }, 30);
  }, [autoplay, isHovered, isDragging, shouldReduceMotion]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
    startAutoplay();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    stopAutoplay();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (slideMode === "hover" || isDragging) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderXPosition(percentage);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderXPosition(percentage);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden select-none rounded-3xl border border-neutral-200/90 bg-neutral-900 shadow-xl transition-all duration-300",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={() => {
        setIsHovered(true);
        stopAutoplay();
      }}
      onTouchEnd={handleMouseLeave}
    >
      {/* SECOND CONTENT / RIGHT SIDE: WITH ARKAYA */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full overflow-hidden bg-white",
          secondContentClassname
        )}
      >
        {secondContent ? (
          secondContent
        ) : secondImage ? (
          // eslint-disable-next-next-image
          <img
            src={secondImage}
            alt="With Arkaya"
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      {/* FIRST CONTENT / LEFT SIDE: BEFORE ARKAYA (Clipped by slider position) */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full overflow-hidden bg-neutral-50 z-10 transition-all duration-75 ease-linear",
          firstContentClassName
        )}
        style={{
          clipPath: `polygon(0 0, ${sliderXPosition}% 0, ${sliderXPosition}% 100%, 0 100%)`,
        }}
      >
        {firstContent ? (
          firstContent
        ) : firstImage ? (
          // eslint-disable-next-next-image
          <img
            src={firstImage}
            alt="Before Arkaya"
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      {/* SLIDER DIVIDER LINE & HANDLEBAR */}
      <div
        className="absolute top-0 bottom-0 z-30 w-0.5 bg-neutral-400/80 hover:bg-blue-600 transition-colors pointer-events-none"
        style={{ left: `${sliderXPosition}%` }}
      >
        {showHandlebar && (
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center h-9 w-9 rounded-full bg-white border border-neutral-300 shadow-md text-neutral-700">
            <MoveHorizontal className="h-4 w-4" />
          </div>
        )}
      </div>
    </div>
  );
};
