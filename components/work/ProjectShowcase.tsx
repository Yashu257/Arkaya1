"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { AISalesAgentMockup } from "./mockups/AISalesAgentMockup";
import { DigitalPlatformMockup } from "./mockups/DigitalPlatformMockup";
import { OperationsMockup } from "./mockups/OperationsMockup";
import { AIKnowledgeAssistantMockup } from "./mockups/AIKnowledgeAssistantMockup";
import { BusinessWorkflowMockup } from "./mockups/BusinessWorkflowMockup";

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const isEven = index % 2 === 0;

  const renderMockup = () => {
    switch (project.id) {
      case "ai-sales-agent":
        return <AISalesAgentMockup />;
      case "digital-platform":
        return <DigitalPlatformMockup />;
      case "operations-platform":
        return <OperationsMockup />;
      case "ai-knowledge-assistant":
        return <AIKnowledgeAssistantMockup />;
      case "business-workflow-automation":
        return <BusinessWorkflowMockup />;
      default:
        return <AISalesAgentMockup />;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full rounded-3xl bg-neutral-50/80 border border-neutral-200/90 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-neutral-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
        
        {/* PROJECT INFO (5 Cols) */}
        <div className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          
          <div>
            {/* Number + Category */}
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs sm:text-sm font-bold text-blue-600 tracking-wider">
                {project.number}
              </span>
              <span className="text-neutral-300">/</span>
              <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-700 shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Project Link */}
          <div className="pt-2">
            <Link
              href={project.href || "#"}
              className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 group-hover:text-blue-600 transition-colors"
            >
              {project.linkText || "View Case Study →"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

        {/* LARGE VISUAL PREVIEW AREA (7 Cols) */}
        <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative w-full rounded-2xl bg-white border border-neutral-200/80 p-3 sm:p-5 shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">
            
            {/* Subtle Branded Ambient Glow behind preview */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-violet-500/5 to-transparent rounded-2xl pointer-events-none" />

            {/* Render HTML/CSS Mockup */}
            {renderMockup()}

          </div>
        </div>

      </div>
    </motion.article>
  );
}
