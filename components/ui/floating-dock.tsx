"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  id: string;
}

export function FloatingDock({
  items,
  activeId,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  activeId?: string;
  desktopClassName?: string;
  mobileClassName?: string;
}) {
  return (
    <>
      <FloatingDockDesktop items={items} activeId={activeId} className={desktopClassName} />
      <FloatingDockMobile items={items} activeId={activeId} className={mobileClassName} />
    </>
  );
}

function FloatingDockDesktop({
  items,
  activeId,
  className,
}: {
  items: DockItem[];
  activeId?: string;
  className?: string;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden md:flex h-16 items-center gap-3 rounded-full bg-neutral-950/90 px-4 py-2 border border-neutral-800 backdrop-blur-md shadow-2xl z-50 select-none",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          key={item.title}
          mouseX={mouseX}
          item={item}
          isActive={activeId === item.id}
        />
      ))}
    </motion.div>
  );
}

function IconContainer({
  mouseX,
  item,
  isActive,
}: {
  mouseX: any;
  item: DockItem;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() || { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 58, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 58, 40]);

  const iconWidthTransform = useTransform(distance, [-150, 0, 150], [20, 28, 20]);
  const iconHeightTransform = useTransform(distance, [-150, 0, 150], [20, 28, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const iconWidth = useSpring(iconWidthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const iconHeight = useSpring(iconHeightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link href={item.href}>
      <motion.div
        ref={ref}
        style={{
          width: shouldReduceMotion ? 42 : width,
          height: shouldReduceMotion ? 42 : height,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex items-center justify-center rounded-full transition-colors duration-200",
          isActive
            ? "bg-violet-950/80 border border-violet-600/50 text-white shadow-lg shadow-violet-500/20"
            : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-[11px] font-mono font-medium text-white shadow-xl whitespace-nowrap pointer-events-none z-50"
            >
              {item.title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{
            width: shouldReduceMotion ? 20 : iconWidth,
            height: shouldReduceMotion ? 20 : iconHeight,
          }}
          className="flex items-center justify-center"
        >
          {item.icon}
        </motion.div>

        {/* Active Indicator Dot */}
        {isActive && (
          <span className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-blue-500 shadow-sm shadow-blue-400" />
        )}
      </motion.div>
    </Link>
  );
}

function FloatingDockMobile({
  items,
  activeId,
  className,
}: {
  items: DockItem[];
  activeId?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex md:hidden h-14 items-center justify-around rounded-full bg-neutral-950/95 px-3 border border-neutral-800 backdrop-blur-md shadow-2xl z-50 max-w-[calc(100vw-24px)] mx-auto",
        className
      )}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "relative flex flex-col items-center justify-center h-11 w-11 rounded-full transition-colors",
              isActive ? "text-violet-400 font-bold" : "text-neutral-400 active:text-white"
            )}
            aria-label={item.title}
          >
            <div className="h-5 w-5 flex items-center justify-center">
              {item.icon}
            </div>
            {isActive && (
              <span className="absolute bottom-1 h-1 w-1 rounded-full bg-blue-500" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
