"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";
import { AISalesAgentMockup } from "@/components/work/mockups/AISalesAgentMockup";
import { DigitalPlatformMockup } from "@/components/work/mockups/DigitalPlatformMockup";
import { OperationsMockup } from "@/components/work/mockups/OperationsMockup";
import { AIAgentVisual } from "@/components/services/page/visuals/AIAgentVisual";
import { AutomationVisual } from "@/components/services/page/visuals/AutomationVisual";

export function CaseStudyHero({ project }: { project: Project }) {
  const renderVisual = (id: string) => {
    switch (id) {
      case "ai-sales-agent":
        return <AISalesAgentMockup />;
      case "digital-platform":
        return <DigitalPlatformMockup />;
      case "operations-platform":
        return <OperationsMockup />;
      case "ai-knowledge-assistant":
        return <AIAgentVisual />;
      case "business-workflow-automation":
        return <AutomationVisual />;
      default:
        return <OperationsMockup />;
    }
  };

  return (
    <section className="relative w-full pt-8 sm:pt-12 pb-16 sm:pb-24 bg-white overflow-hidden scroll-mt-24">
      {/* Background Mesh & Glow */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.06),rgba(124,58,237,0.05),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BREADCRUMB & BACK LINK */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-neutral-100">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 hover:text-neutral-900 transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>ALL WORK</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span>WORK</span>
            <span>/</span>
            <span className="text-neutral-900 font-bold">{project.title}</span>
          </div>
        </div>

        {/* HERO TITLE & METADATA */}
        <div className="max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
              {project.type}
            </span>
            <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest">
              {project.categoryLabel}
            </span>
            {project.year && (
              <span className="text-xs font-mono text-neutral-400">
                • {project.year}
              </span>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08]"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-neutral-600 leading-relaxed max-w-3xl"
          >
            {project.tagline}
          </motion.p>
        </div>

        {/* HERO SHOWCASE VISUAL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 w-full rounded-3xl bg-neutral-950 p-4 sm:p-8 border border-neutral-800 shadow-2xl overflow-hidden"
        >
          {renderVisual(project.id)}
        </motion.div>

      </div>
    </section>
  );
}
