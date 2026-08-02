"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { TooltipCard } from "@/components/ui/tooltip-card";
import { AISalesAgentMockup } from "@/components/work/mockups/AISalesAgentMockup";
import { DigitalPlatformMockup } from "@/components/work/mockups/DigitalPlatformMockup";
import { OperationsMockup } from "@/components/work/mockups/OperationsMockup";
import { AIKnowledgeAssistantMockup } from "@/components/work/mockups/AIKnowledgeAssistantMockup";
import { BusinessWorkflowMockup } from "@/components/work/mockups/BusinessWorkflowMockup";

export function ProjectCard3D({ project }: { project: Project }) {
  const renderVisual = (id: string) => {
    switch (id) {
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
        return <OperationsMockup />;
    }
  };

  return (
    <CardContainer containerClassName="w-full">
      <CardBody className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 w-full flex flex-col justify-between">
        
        <div>
          {/* Category & Type */}
          <CardItem translateZ={30} className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
            <span className="text-[11px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
              {project.categoryLabel}
            </span>
            <span className="text-[10px] font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              {project.type}
            </span>
          </CardItem>

          {/* Project Title */}
          <CardItem translateZ={50} className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
            {project.title}
          </CardItem>

          {/* Description */}
          <CardItem translateZ={40} className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
            {project.description}
          </CardItem>
        </div>

        {/* Project Visual Container */}
        <CardItem translateZ={70} className="my-6 w-full">
          {renderVisual(project.id)}
        </CardItem>

        {/* Technologies & Footer Link */}
        <CardItem translateZ={30} className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 w-full">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.technologies.map((tech) => (
              <TooltipCard
                key={tech.name}
                title={tech.name}
                description={tech.description || `Used in building ${project.title}`}
                category={tech.category || "Technology"}
              >
                <span className="px-2.5 py-1 rounded-full bg-neutral-100 font-mono text-[10px] font-medium text-neutral-700 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer">
                  {tech.name}
                </span>
              </TooltipCard>
            ))}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
          >
            {project.linkText || "View Case Study →"}
          </Link>
        </CardItem>

      </CardBody>
    </CardContainer>
  );
}
