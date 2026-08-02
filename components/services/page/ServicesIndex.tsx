"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_LIST } from "@/data/services";

export function ServicesIndex() {
  return (
    <section id="overview" className="relative w-full py-16 sm:py-24 bg-neutral-50/50 border-t border-neutral-100 overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION INTRO */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-violet-600" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              WHAT WE DO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            One partner. <br />
            Multiple capabilities.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl"
          >
            Build one product or connect multiple services into a complete digital system.
          </motion.p>
        </div>

        {/* EDITORIAL INDEX LIST */}
        <div className="border-t border-neutral-200/90 divide-y divide-neutral-200/90">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                href={`#${service.id}`}
                className="group flex items-center justify-between py-6 sm:py-8 px-2 transition-colors duration-200 hover:bg-white/80"
              >
                <div className="flex items-center gap-6 sm:gap-10">
                  <span className="font-mono text-base sm:text-lg font-bold text-neutral-400 group-hover:text-blue-600 transition-colors">
                    {service.number}
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors tracking-tight">
                    {service.title}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline font-mono text-xs text-neutral-400 group-hover:text-neutral-700 transition-colors uppercase tracking-wider">
                    EXPLORE
                  </span>
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white flex items-center justify-center transition-all duration-200">
                    <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
