"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ContactStatement() {
  const scrollToForm = () => {
    const el = document.getElementById("enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-neutral-950 text-white overflow-hidden border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]"
          >
            Good ideas don&apos;t need <br />
            perfect briefs.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed"
          >
            If you can explain the problem, we can start from there.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-4"
          >
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-100 transition-colors shadow-md"
            >
              Start a Project <ArrowUp className="h-4 w-4 text-blue-600" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
