"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FLAP_CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$()-+&=;:'\"%,./?°×•'";

const BOARD_ROWS = 6;
const BOARD_COLS = 22;

const BASE_COL_DELAY = 25;
const BASE_ROW_DELAY = 15;
const BASE_STEP_MS = 45;
const BASE_FLIP_S = 0.3;
const BASE_TOTAL_S =
  ((BOARD_COLS - 1) * BASE_COL_DELAY +
    (BOARD_ROWS - 1) * BASE_ROW_DELAY +
    6 * BASE_STEP_MS) /
  1000;

type AccentColor = {
  top: string;
  bottom: string;
  text: string;
};

const ACCENT_COLORS: AccentColor[] = [
  { top: "bg-blue-600", bottom: "bg-blue-700", text: "text-white" },
  { top: "bg-violet-600", bottom: "bg-violet-700", text: "text-white" },
  { top: "bg-indigo-600", bottom: "bg-indigo-700", text: "text-white" },
];

const CELL_TEXT_STYLE: React.CSSProperties = {
  fontSize: "clamp(10px, 1.75vw, 22px)",
  lineHeight: 1,
};

// ── Individual Split-Flap Character ───────────────────────────────────

const FlapCell = React.memo(function FlapCell({
  target,
  delay,
  stepMs,
  flipDuration,
}: {
  target: string;
  delay: number;
  stepMs: number;
  flipDuration: number;
}) {
  const [current, setCurrent] = useState(" ");
  const [prev, setPrev] = useState(" ");
  const [flipId, setFlipId] = useState(0);
  const [accent, setAccent] = useState<AccentColor | null>(null);
  const [prevAccent, setPrevAccent] = useState<AccentColor | null>(null);
  const curRef = useRef(" ");
  const tgtRef = useRef<string | null>(null);
  const accentRef = useRef<AccentColor | null>(null);
  const startTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stepTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (startTimer.current) clearTimeout(startTimer.current);
    if (stepTimer.current) clearTimeout(stepTimer.current);
    startTimer.current = null;
    stepTimer.current = null;

    const normalized = FLAP_CHARS.includes(target.toUpperCase())
      ? target.toUpperCase()
      : " ";
    
    // If target hasn't changed, don't restart animation
    if (normalized === tgtRef.current && normalized === curRef.current) return;
    
    tgtRef.current = normalized;

    if (normalized === " " && curRef.current === " ") return;

    const scrambleCount =
      normalized === " "
        ? 4 + Math.floor(Math.random() * 4)
        : 8 + Math.floor(Math.random() * 6);

    let stepCounter = 0;

    const runStep = (i: number) => {
      // Safety check to prevent infinite loops
      if (stepCounter > scrambleCount + 5) {
        setPrev(curRef.current);
        setPrevAccent(accentRef.current);
        curRef.current = normalized;
        accentRef.current = null;
        setCurrent(normalized);
        setAccent(null);
        setFlipId((n) => n + 1);
        return;
      }
      
      stepCounter++;
      const isLast = i === scrambleCount;
      const ch = isLast
        ? normalized
        : FLAP_CHARS[1 + Math.floor(Math.random() * (FLAP_CHARS.length - 1))];

      const newAccent = isLast
        ? null
        : Math.random() < 0.15
          ? ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)]
          : null;

      setPrev(curRef.current);
      setPrevAccent(accentRef.current);
      curRef.current = ch;
      accentRef.current = newAccent;
      setCurrent(ch);
      setAccent(newAccent);
      setFlipId((n) => n + 1);

      if (!isLast) {
        stepTimer.current = setTimeout(() => runStep(i + 1), stepMs);
      }
    };

    startTimer.current = setTimeout(() => runStep(1), delay);

    return () => {
      if (startTimer.current) clearTimeout(startTimer.current);
      if (stepTimer.current) clearTimeout(stepTimer.current);
      startTimer.current = null;
      stepTimer.current = null;
    };
  }, [target, delay, stepMs]);

  const show = current === " " ? "\u00A0" : current;
  const showPrev = prev === " " ? "\u00A0" : prev;

  const textCx =
    "absolute inset-x-0 flex select-none items-center justify-center font-mono font-bold tracking-wide";
  const topBg = accent?.top ?? "bg-neutral-900";
  const bottomBg = accent?.bottom ?? "bg-neutral-900";
  const textColor = accent?.text ?? "text-neutral-100";

  const flapTopBg = prevAccent?.top ?? "bg-neutral-800";
  const flapTextColor = prevAccent?.text ?? "text-neutral-100";

  const bottomDelay = flipDuration * 0.45;

  return (
    <div className="flex aspect-3/5 flex-col overflow-hidden rounded-[2px] border border-neutral-800/90 shadow-sm md:rounded-[3px]">
      {/* Flap content area */}
      <div className="relative flex-1 perspective-dramatic transform-3d">
        {/* Hinge notches */}
        <div className="absolute inset-0 z-40 hidden flex-row items-center justify-center md:flex">
          <div className="h-1/2 w-px rounded-tr-sm rounded-br-sm bg-neutral-950" />
          <div className="flex h-px flex-1 bg-neutral-950" />
          <div className="h-1/2 w-px rounded-tl-sm rounded-bl-sm bg-neutral-950" />
        </div>

        {/* Static top – new character top half */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-[calc(50%-0.5px)] overflow-hidden rounded-t-[2px]",
            topBg,
          )}
        >
          <div
            className={cn(textCx, textColor, "top-0 h-[200%]")}
            style={CELL_TEXT_STYLE}
          >
            {show}
          </div>
        </div>

        {/* Static bottom – new character bottom half */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 h-[calc(50%-0.5px)] overflow-hidden rounded-b-[2px]",
            bottomBg,
          )}
        >
          <div
            className={cn(textCx, textColor, "bottom-0 h-[200%]")}
            style={CELL_TEXT_STYLE}
          >
            {show}
          </div>
          {flipId > 0 && (
            <motion.div
              key={`s${flipId}`}
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent_60%)]"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0 }}
              transition={{ duration: flipDuration * 1.2, ease: "easeOut" }}
            />
          )}
        </div>

        {/* Flipping top flap – old character top half, drops down */}
        {flipId > 0 && (
          <motion.div
            key={flipId}
            className={cn(
              "absolute inset-x-0 top-0 z-10 h-[calc(50%-0.5px)] origin-bottom overflow-hidden rounded-t-[2px] backface-hidden transform-3d",
              flapTopBg,
            )}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -100 }}
            transition={{
              duration: flipDuration,
              ease: [0.55, 0.055, 0.675, 0.19],
            }}
          >
            <div
              className={cn(textCx, flapTextColor, "top-0 h-[200%]")}
              style={CELL_TEXT_STYLE}
            >
              {showPrev}
            </div>
            <motion.div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1))]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: flipDuration }}
            />
          </motion.div>
        )}

        {/* Flipping bottom flap – new character bottom half, rises up */}
        {flipId > 0 && (
          <motion.div
            key={`b${flipId}`}
            className={cn(
              "absolute inset-x-0 bottom-0 z-10 h-[calc(50%-0.5px)] origin-top overflow-hidden rounded-b-[2px] backface-hidden transform-3d",
              bottomBg,
            )}
            initial={{ rotateX: 90 }}
            animate={{ rotateX: 0 }}
            transition={{
              duration: flipDuration * 0.85,
              delay: bottomDelay,
              ease: [0.33, 1.55, 0.64, 1],
            }}
          >
            <div
              className={cn(textCx, textColor, "bottom-0 h-[200%]")}
              style={CELL_TEXT_STYLE}
            >
              {show}
            </div>
            <motion.div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0),rgba(0,0,0,0.6))]"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: flipDuration * 0.85,
                delay: bottomDelay,
              }}
            />
          </motion.div>
        )}

        {/* Split line */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 h-px -translate-y-[0.5px] bg-black/80" />
      </div>
    </div>
  );
},
(prevProps, nextProps) =>
  prevProps.target === nextProps.target &&
  prevProps.delay === nextProps.delay &&
  prevProps.stepMs === nextProps.stepMs &&
  prevProps.flipDuration === nextProps.flipDuration,
);

// ── Word Wrap ─────────────────────────────────────────────────────────

function wrapParagraph(paragraph: string, maxCols: number): string[] {
  const lines: string[] = [];
  const words = paragraph.split(/[ \t]+/).filter(Boolean);
  let currentLine = "";

  for (const word of words) {
    if (word.length > maxCols) {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = "";
      }
      lines.push(word.slice(0, maxCols));
      continue;
    }

    if (!currentLine) {
      currentLine = word;
    } else if (currentLine.length + 1 + word.length <= maxCols) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine) lines.push(currentLine);
  return lines;
}

function wrapText(input: string, maxCols: number): string[] {
  return input
    .split("\n")
    .flatMap((paragraph) =>
      paragraph.trim() === "" ? [""] : wrapParagraph(paragraph, maxCols),
    );
}

// ── Main TextFlippingBoard Component ──────────────────────────────────

export interface TextFlippingBoardProps {
  rows?: string[];
  text?: string;
  className?: string;
  duration?: number;
}

export function TextFlippingBoard({
  rows,
  text,
  className,
  duration = BASE_TOTAL_S,
}: TextFlippingBoardProps) {
  const scale = duration / BASE_TOTAL_S;
  const colDelay = BASE_COL_DELAY * scale;
  const rowDelay = BASE_ROW_DELAY * scale;
  const stepMs = BASE_STEP_MS * scale;
  const flipDur = Math.min(0.5, Math.max(0.15, BASE_FLIP_S * scale));

  const board = useMemo(() => {
    const grid: { value: string }[][] = Array.from({ length: BOARD_ROWS }, () =>
      Array.from({ length: BOARD_COLS }, () => ({ value: " " })),
    );

    if (text) {
      const lines = wrapText(text, BOARD_COLS).slice(0, BOARD_ROWS);
      const startRow = Math.max(0, Math.floor((BOARD_ROWS - lines.length) / 2));
      lines.forEach((line, i) => {
        const row = startRow + i;
        if (row >= BOARD_ROWS) return;
        const startCol = Math.max(
          0,
          Math.floor((BOARD_COLS - line.length) / 2),
        );
        for (let c = 0; c < line.length; c++) {
          if (startCol + c < BOARD_COLS) {
            grid[row][startCol + c] = { value: line[c] };
          }
        }
      });
    }

    return grid;
  }, [rows, text]);

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-4xl rounded-2xl bg-neutral-950 p-2 sm:p-3 md:p-4 shadow-2xl border border-neutral-800/80",
        className,
      )}
    >
      <div
        className="grid gap-[2px] md:gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${BOARD_COLS}, 1fr)` }}
      >
        {board.map((row, r) =>
          row.map((cell, c) => (
            <FlapCell
              key={`${r}-${c}`}
              target={cell.value}
              delay={c * colDelay + r * rowDelay}
              stepMs={stepMs}
              flipDuration={flipDur}
            />
          )),
        )}
      </div>
    </div>
  );
}
