import { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { WhatWeBuild } from "@/components/services/WhatWeBuild";
import { AutomationWorkflow } from "@/components/automation/AutomationWorkflow";
import { SelectedWork } from "@/components/work/SelectedWork";
import { ArkayaComparison } from "@/components/comparison/ArkayaComparison";
import { WhyArkaya } from "@/components/why-arkaya/WhyArkaya";
import { TeamSection } from "@/components/team/TeamSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { Footer } from "@/components/footer/Footer";
import { ArkayaFloatingDock } from "@/components/navigation/ArkayaFloatingDock";

export const metadata: Metadata = {
  title: "Arkaya Tech | Websites, Applications, AI & Automation",
  description:
    "Arkaya Tech builds websites, applications, AI agents, AI chatbots and automation for modern businesses.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section with Aceternity UI TextFlippingBoard */}
      <Hero />

      {/* 3. What We Build Section (Asymmetric Bento Grid) */}
      <WhatWeBuild />

      {/* 4. AI + Automation in Action Section (Interactive Workflow) */}
      <AutomationWorkflow />

      {/* 5. Selected Work Section (Stacked Editorial Portfolio) */}
      <SelectedWork />

      {/* 6. Before Arkaya / With Arkaya Section (Aceternity Compare Component) */}
      <ArkayaComparison />

      {/* 7. Why Choose Arkaya Section (Aceternity ASCII Art Component) */}
      <WhyArkaya />

      {/* 8. The Team Section (Aceternity Animated Tooltip Component) */}
      <TeamSection />

      {/* 9. Client Stories Testimonials Section */}
      <TestimonialsSection />

      {/* 10. Final CTA Section */}
      <FinalCTA />

      {/* 11. Dark Premium Footer with Signature Giant ARKAYA Wordmark */}
      <Footer />

      {/* Persistent Aceternity Floating Dock Navigation */}
      <ArkayaFloatingDock />
    </main>
  );
}
