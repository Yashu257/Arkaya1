"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Bot, Zap, Globe, Sparkles, CheckCircle2 } from "lucide-react";

export function ConnectedSystem() {
  const stages = [
    { title: "WEBSITE", desc: "Captures Demand & Inquiries", icon: Globe },
    { title: "AI AGENT", desc: "Understands & Qualifies Lead", icon: Bot },
    { title: "APPLICATION", desc: "Manages Data & User Portal", icon: Layers },
    { title: "AUTOMATION", desc: "Executes Workflow Actions", icon: Zap },
    { title: "RESULT", desc: "Seamless Business System", icon: CheckCircle2 },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-white border-t border-neutral-100 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* INTRO */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              BETTER TOGETHER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Not six services. <br />
            One connected system.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto"
          >
            The strongest products often combine multiple capabilities — a website capturing demand, AI understanding it, automation moving it forward and software keeping everything connected.
          </motion.p>
        </div>

        {/* CONNECTED SYSTEM STAGES FLOW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto text-left">
          {stages.map((stg, i) => {
            const IconComp = stg.icon;
            return (
              <motion.div
                key={stg.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-blue-600 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                      <IconComp className="h-4 w-4 text-violet-400" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-neutral-400">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {stg.title}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      {stg.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
