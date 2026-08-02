"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor } from "lucide-react";

export function DigitalPlatformMockup() {
  return (
    <div className="relative w-full py-4 sm:py-6 flex items-center justify-center">
      
      {/* DESKTOP BROWSER FRAME */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-neutral-200 bg-white shadow-lg overflow-hidden">
        {/* Browser Top Bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-100/90 border-b border-neutral-200">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <div className="ml-2 flex-1 rounded bg-white px-2.5 py-0.5 text-[10px] font-mono text-neutral-400 border border-neutral-200">
            https://platform.arkaya.tech
          </div>
          <Monitor className="h-3.5 w-3.5 text-neutral-400" />
        </div>

        {/* Browser Page Content Wireframe */}
        <div className="p-4 space-y-4 bg-white">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2.5">
            <div className="h-3 w-20 rounded bg-neutral-900" />
            <div className="flex gap-2">
              <div className="h-2 w-10 rounded bg-neutral-200" />
              <div className="h-2 w-10 rounded bg-neutral-200" />
              <div className="h-4 w-14 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
            </div>
          </div>

          {/* Hero Banner */}
          <div className="h-28 rounded-xl bg-gradient-to-br from-neutral-50 via-blue-50/30 to-violet-50/30 p-4 border border-neutral-100 flex flex-col justify-center space-y-2">
            <div className="h-4 w-44 rounded bg-neutral-900" />
            <div className="h-2.5 w-64 rounded bg-neutral-400" />
            <div className="h-6 w-24 rounded-full bg-neutral-900 mt-2" />
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="h-16 rounded-lg bg-neutral-50 p-2.5 border border-neutral-100 space-y-1.5">
              <div className="h-2.5 w-10 rounded bg-blue-600" />
              <div className="h-2 w-16 rounded bg-neutral-300" />
            </div>
            <div className="h-16 rounded-lg bg-neutral-50 p-2.5 border border-neutral-100 space-y-1.5">
              <div className="h-2.5 w-10 rounded bg-violet-600" />
              <div className="h-2 w-16 rounded bg-neutral-300" />
            </div>
            <div className="h-16 rounded-lg bg-neutral-50 p-2.5 border border-neutral-100 space-y-1.5">
              <div className="h-2.5 w-10 rounded bg-indigo-600" />
              <div className="h-2 w-16 rounded bg-neutral-300" />
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAPPING MOBILE DEVICE FRAME (DESKTOP/TABLET ONLY) */}
      <motion.div
        initial={{ y: 10, opacity: 0.9 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="hidden sm:flex absolute right-2 bottom-1 w-36 rounded-2xl border-2 border-neutral-800 bg-neutral-900 p-1.5 shadow-xl"
      >
        <div className="w-full rounded-xl bg-white p-2 space-y-2 border border-neutral-200">
          <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
            <div className="h-2 w-10 rounded bg-neutral-900" />
            <Smartphone className="h-3 w-3 text-neutral-400" />
          </div>
          <div className="h-12 rounded bg-blue-50 border border-blue-100 p-1.5 space-y-1">
            <div className="h-2 w-14 rounded bg-neutral-800" />
            <div className="h-1.5 w-20 rounded bg-neutral-400" />
          </div>
          <div className="h-8 rounded bg-neutral-50 border border-neutral-100 p-1 space-y-1">
            <div className="h-1.5 w-10 rounded bg-neutral-300" />
          </div>
        </div>
      </motion.div>

    </div>
  );
}
