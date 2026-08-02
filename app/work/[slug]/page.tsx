import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ProjectOverview } from "@/components/case-study/ProjectOverview";
import { ChallengeSection } from "@/components/case-study/ChallengeSection";
import { ApproachSection } from "@/components/case-study/ApproachSection";
import { FeatureSection } from "@/components/case-study/FeatureSection";
import { ProjectWorkflow } from "@/components/case-study/ProjectWorkflow";
import { TechnologySection } from "@/components/case-study/TechnologySection";
import { CapabilitySection } from "@/components/case-study/CapabilitySection";
import { OutcomeSection } from "@/components/case-study/OutcomeSection";
import { NextProject } from "@/components/case-study/NextProject";
import { ProjectCTA } from "@/components/case-study/ProjectCTA";
import { Footer } from "@/components/footer/Footer";
import { ArkayaFloatingDock } from "@/components/navigation/ArkayaFloatingDock";
import { PROJECTS_DATA } from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found | Arkaya Tech",
    };
  }

  return {
    title: `${project.title} | Arkaya Tech`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-blue-600 selection:text-white">
      {/* 01. Global Navbar */}
      <Navbar />

      {/* 02. Project Hero */}
      <CaseStudyHero project={project} />

      {/* 03. Project Overview */}
      <ProjectOverview project={project} />

      {/* 04. The Challenge */}
      <ChallengeSection project={project} />

      {/* 05. The Approach */}
      <ApproachSection project={project} />

      {/* 06. Key Features */}
      <FeatureSection project={project} />

      {/* 07. How It Works (Conditional Workflow Pipeline) */}
      <ProjectWorkflow project={project} />

      {/* 08. Technology Stack with Aceternity Tooltip Cards */}
      <TechnologySection project={project} />

      {/* 09. Arkaya Capabilities */}
      <CapabilitySection project={project} />

      {/* 10. Outcome / What It Enables */}
      <OutcomeSection project={project} />

      {/* 11. Next Project Transition (Dynamic Loop) */}
      <NextProject currentProject={project} />

      {/* 12. Project CTA */}
      <ProjectCTA />

      {/* 13. Global Dark Footer with Signature Giant ARKAYA Wordmark */}
      <Footer />

      {/* Persistent Floating Dock Navigation */}
      <ArkayaFloatingDock />
    </main>
  );
}
