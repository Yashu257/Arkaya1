import { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { WorkHero } from "@/components/work/page/WorkHero";
import { ProjectGrid } from "@/components/work/page/ProjectGrid";
import { CapabilitiesSection } from "@/components/work/page/CapabilitiesSection";
import { ProcessSection } from "@/components/work/page/ProcessSection";
import { WorkCTA } from "@/components/work/page/WorkCTA";
import { Footer } from "@/components/footer/Footer";
import { ArkayaFloatingDock } from "@/components/navigation/ArkayaFloatingDock";

export const metadata: Metadata = {
  title: "Work | Arkaya Tech",
  description:
    "Explore web, application, AI and automation projects built by Arkaya Tech.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-blue-600 selection:text-white">
      {/* 01. Global Navbar */}
      <Navbar />

      {/* 02. Work Hero */}
      <WorkHero />

      {/* 03. Work Filters, Featured Project & 3D Project Grid */}
      <ProjectGrid />

      {/* 04. What We Bring to the Build */}
      <CapabilitiesSection />

      {/* 05. Our Process */}
      <ProcessSection />

      {/* 06. Final Work CTA */}
      <WorkCTA />

      {/* 07. Global Dark Footer with Signature Giant ARKAYA Wordmark */}
      <Footer />

      {/* Floating Dock Navigation */}
      <ArkayaFloatingDock />
    </main>
  );
}
