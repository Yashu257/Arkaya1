import { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { ServicesHero } from "@/components/services/page/ServicesHero";
import { ServicesIndex } from "@/components/services/page/ServicesIndex";
import { ServiceChapter } from "@/components/services/page/ServiceChapter";
import { WebsiteVisual } from "@/components/services/page/visuals/WebsiteVisual";
import { ApplicationVisual } from "@/components/services/page/visuals/ApplicationVisual";
import { AIAgentVisual } from "@/components/services/page/visuals/AIAgentVisual";
import { ChatbotVisual } from "@/components/services/page/visuals/ChatbotVisual";
import { AutomationVisual } from "@/components/services/page/visuals/AutomationVisual";
import { IntegrationVisual } from "@/components/services/page/visuals/IntegrationVisual";
import { TechnologyStack } from "@/components/services/page/TechnologyStack";
import { ConnectedSystem } from "@/components/services/page/ConnectedSystem";
import { ServicesCTA } from "@/components/services/page/ServicesCTA";
import { Footer } from "@/components/footer/Footer";
import { ArkayaFloatingDock } from "@/components/navigation/ArkayaFloatingDock";
import { SERVICES_LIST } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Arkaya Tech",
  description:
    "Web development, applications, AI agents, AI chatbots, automation and AI integrations built by Arkaya Tech.",
};

export default function ServicesPage() {
  const visuals = [
    <WebsiteVisual key="website" />,
    <ApplicationVisual key="application" />,
    <AIAgentVisual key="ai-agent" />,
    <ChatbotVisual key="chatbot" />,
    <AutomationVisual key="automation" />,
    <IntegrationVisual key="integration" />,
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-blue-600 selection:text-white">
      {/* 01. Global Navbar */}
      <Navbar />

      {/* 02. Dedicated Services Hero */}
      <ServicesHero />

      {/* 03. Services Editorial Index */}
      <ServicesIndex />

      {/* 04 - 09. 6 Dedicated Service Chapters */}
      {SERVICES_LIST.map((service, index) => (
        <ServiceChapter
          key={service.id}
          service={service}
          visual={visuals[index]}
          index={index}
        />
      ))}

      {/* Technology Stack with Aceternity Tooltip Cards */}
      <TechnologyStack />

      {/* 10. Connected Systems Flow */}
      <ConnectedSystem />

      {/* 11. Final Services CTA */}
      <ServicesCTA />

      {/* 12. Global Dark Footer with Signature Giant ARKAYA Wordmark */}
      <Footer />

      {/* Floating Dock Navigation */}
      <ArkayaFloatingDock />
    </main>
  );
}
