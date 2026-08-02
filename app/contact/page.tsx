import { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { ContactHero } from "@/components/contact/ContactHero";
import { ProjectEnquiryForm } from "@/components/contact/ProjectEnquiryForm";
import { DirectContact } from "@/components/contact/DirectContact";
import { WhatHappensNext } from "@/components/contact/WhatHappensNext";
import { ContactStatement } from "@/components/contact/ContactStatement";
import { Footer } from "@/components/footer/Footer";
import { ArkayaFloatingDock } from "@/components/navigation/ArkayaFloatingDock";

export const metadata: Metadata = {
  title: "Contact | Arkaya Tech",
  description:
    "Start a project with Arkaya Tech. Tell us what you're building, improving or looking to automate.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-blue-600 selection:text-white">
      {/* 01. Global Navbar */}
      <Navbar />

      {/* 02. Contact Hero */}
      <ContactHero />

      {/* 03. Guided 4-Step Project Enquiry Form */}
      <ProjectEnquiryForm />

      {/* 04. Direct Contact (Phone & WhatsApp) */}
      <DirectContact />

      {/* 05. What Happens Next */}
      <WhatHappensNext />

      {/* 06. Final Contact Statement */}
      <ContactStatement />

      {/* 07. Global Dark Footer with Signature Giant ARKAYA Wordmark */}
      <Footer />

      {/* Persistent Floating Dock Navigation */}
      <ArkayaFloatingDock />
    </main>
  );
}
