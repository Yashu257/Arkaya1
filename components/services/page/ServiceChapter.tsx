"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/services";
import { Check } from "lucide-react";

interface ServiceChapterProps {
  service: ServiceDetail;
  visual: React.ReactNode;
  index: number;
}

export function ServiceChapter({ service, visual, index }: ServiceChapterProps) {
  const isEven = index % 2 === 1;

  return (
    <section
      id={service.id}
      className="relative w-full py-20 md:py-32 bg-white border-t border-neutral-100 overflow-hidden scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COPY COLUMN */}
          <div
            className={`lg:col-span-6 space-y-6 ${
              isEven ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-sm font-bold text-blue-600">
                {service.number}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
                {service.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
            >
              {service.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl"
            >
              {service.description}
            </motion.p>

            {/* CAPABILITIES LIST */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4 border-t border-neutral-100"
            >
              <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-4">
                CAPABILITIES & DELIVERABLES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-neutral-700">
                {service.capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2.5">
                    <span className="h-4 w-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* VISUAL COLUMN */}
          <div
            className={`lg:col-span-6 ${
              isEven ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {visual}
          </div>

        </div>
      </div>
    </section>
  );
}
