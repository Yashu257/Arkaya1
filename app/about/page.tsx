import { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { AboutHero } from "@/components/about/AboutHero";
import { WhatWeAre } from "@/components/about/WhatWeAre";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { ThinkingPrinciples } from "@/components/about/ThinkingPrinciples";
import { ValuesSection } from "@/components/about/ValuesSection";
import { CollaborationSection } from "@/components/about/CollaborationSection";
import { AboutTeam } from "@/components/about/AboutTeam";
import { TechnologyMindset } from "@/components/about/TechnologyMindset";
import { AboutClosing } from "@/components/about/AboutClosing";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Footer } from "@/components/footer/Footer";
import { ArkayaFloatingDock } from "@/components/navigation/ArkayaFloatingDock";

export const metadata: Metadata = {
  title: "About | Arkaya Tech",
  description:
    "Learn how Arkaya Tech approaches design, software, AI and automation to build simpler, more useful digital systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-blue-600 selection:text-white">
      {/* 01. Global Navbar */}
      <Navbar />

      {/* 02. About Hero */}
      <AboutHero />

      {/* 03. What Arkaya Is */}
      <WhatWeAre />

      {/* 04. The Arkaya Philosophy */}
      <PhilosophySection />

      {/* 05. How We Think */}
      <ThinkingPrinciples />

      {/* 06. What We Care About */}
      <ValuesSection />

      {/* 07. How We Work Together */}
      <CollaborationSection />

      {/* 08. The Team */}
      <AboutTeam />

      {/* 09. The Technology Mindset */}
      <TechnologyMindset />

      {/* 10. Closing Statement */}
      <AboutClosing />

      {/* 11. Final Contact CTA */}
      <AboutCTA />

      {/* 12. Global Dark Footer with Signature Giant ARKAYA Wordmark */}
      <Footer />

      {/* Persistent Floating Dock Navigation */}
      <ArkayaFloatingDock />
    </main>
  );
}
