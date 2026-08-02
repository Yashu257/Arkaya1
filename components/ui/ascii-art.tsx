"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface AsciiArtProps {
  src: string;
  resolution?: number;
  charset?: "blocks" | "ascii" | "matrix" | "minimal";
  color?: string;
  inverted?: boolean;
  animated?: boolean;
  className?: string;
  containerClassName?: string;
}

const CHARSETS = {
  blocks: " ░▒▓█",
  ascii: " .:-=+*#%@@",
  matrix: " 01",
  minimal: "  .oO@",
};

export function AsciiArt({
  src,
  resolution = 65,
  charset = "blocks",
  color = "#8b5cf6",
  inverted = true,
  animated = false,
  className,
  containerClassName,
}: AsciiArtProps) {
  const [asciiLines, setAsciiLines] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current || document.createElement("canvas");
      canvasRef.current = canvas;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const cols = resolution;
      // Aspect ratio correction for monospace fonts (~0.5 width to height ratio)
      const rows = Math.round((img.height / img.width) * cols * 0.52);

      canvas.width = cols;
      canvas.height = rows;

      ctx.clearRect(0, 0, cols, rows);
      ctx.drawImage(img, 0, 0, cols, rows);

      try {
        const imageData = ctx.getImageData(0, 0, cols, rows);
        const data = imageData.data;
        const charSet = CHARSETS[charset] || CHARSETS.blocks;
        const lines: string[] = [];

        for (let y = 0; y < rows; y++) {
          let line = "";
          for (let x = 0; x < cols; x++) {
            const index = (y * cols + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const a = data[index + 3];

            // Luminance
            const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            
            // Handle white/transparent background in source logo vs shape
            if (a < 50 || (r > 240 && g > 240 && b > 240)) {
              line += " ";
            } else {
              let charIndex = Math.floor((1 - brightness) * (charSet.length - 1));
              if (!inverted) {
                charIndex = charSet.length - 1 - charIndex;
              }
              charIndex = Math.max(0, Math.min(charSet.length - 1, charIndex));
              line += charSet[charIndex];
            }
          }
          lines.push(line);
        }

        setAsciiLines(lines);
        setIsLoaded(true);
      } catch (err) {
        console.error("AsciiArt image processing error:", err);
      }
    };
  }, [src, resolution, charset, inverted]);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 p-4 sm:p-6 shadow-2xl border border-neutral-800",
        containerClassName
      )}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_70%)] pointer-events-none" />

      <pre
        className={cn(
          "font-mono text-[8px] sm:text-[10px] leading-[1.05] tracking-tighter select-none transition-all duration-500",
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95",
          className
        )}
        style={{
          color: color,
          textShadow: `0 0 12px ${color}40`,
        }}
      >
        {asciiLines.join("\n")}
      </pre>
    </div>
  );
}
