"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectEnquiry, ServiceType, ProjectStage, BudgetRange, ProjectTimeline, ContactPreference } from "@/types/contact";
import { FormProgress } from "./FormProgress";
import { ServiceSelection } from "./ServiceSelection";
import { ProjectStageSection } from "./ProjectStageSection";
import { ProjectDetailsSection } from "./ProjectDetailsSection";
import { ContactDetailsSection } from "./ContactDetailsSection";
import { EnquiryReview } from "./EnquiryReview";
import { EnquirySuccess } from "./EnquirySuccess";
import { ArrowRight, ArrowLeft, Send, Phone } from "lucide-react";

export function ProjectEnquiryForm() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [stepError, setStepError] = useState<string | null>(null);

  const [enquiry, setEnquiry] = useState<ProjectEnquiry>({
    services: [],
    stage: "",
    projectName: "",
    description: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    contactPreference: "",
  });

  const handleToggleService = (service: ServiceType) => {
    setStepError(null);
    setEnquiry((prev) => {
      const exists = prev.services.includes(service);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleNextStep = () => {
    setStepError(null);

    // Validation for Step 1
    if (step === 1) {
      if (enquiry.services.length === 0) {
        setStepError("Please select at least one capability or option to continue.");
        return;
      }
    }

    // Validation for Step 2
    if (step === 2) {
      if (!enquiry.stage) {
        setStepError("Please select your current project stage to continue.");
        return;
      }
    }

    // Validation for Step 3
    if (step === 3) {
      if (!enquiry.description.trim()) {
        setStepError("Please describe your project idea or problem requirement.");
        return;
      }
    }

    // Validation for Step 4
    if (step === 4) {
      if (!enquiry.name.trim()) {
        setStepError("Please enter your name.");
        return;
      }
      if (!enquiry.email.trim()) {
        setStepError("Please enter your email address.");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(enquiry.email)) {
        setStepError("Please enter a valid email address.");
        return;
      }
    }

    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setStepError(null);
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Final validation
    if (!enquiry.name.trim() || !enquiry.email.trim() || !enquiry.description.trim()) {
      setStepError("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(
          data.error || "Something went wrong while sending your enquiry. Please try again or call us directly."
        );
      }
    } catch (err) {
      console.error(err);
      setSubmitError(
        "Something went wrong while sending your enquiry. Your details are still here. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <EnquirySuccess />;
  }

  return (
    <section id="enquiry-form" className="relative w-full py-16 sm:py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-white border border-neutral-200/90 shadow-xl p-6 sm:p-10 md:p-12">
          {/* PROGRESS INDICATOR */}
          <FormProgress currentStep={step} totalSteps={4} />

          {/* SUBMIT ERROR NOTIFICATION */}
          {submitError && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700 space-y-2 text-left">
              <p>{submitError}</p>
              <div className="flex items-center gap-2 font-mono font-bold">
                <span>OR CALL DIRECTLY:</span>
                <a href="tel:+916300966570" className="text-neutral-900 underline">
                  +91 63009 66570
                </a>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <ServiceSelection
                    selectedServices={enquiry.services}
                    onToggleService={handleToggleService}
                    error={stepError || undefined}
                  />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectStageSection
                    selectedStage={enquiry.stage}
                    onSelectStage={(stg) => {
                      setStepError(null);
                      setEnquiry((p) => ({ ...p, stage: stg }));
                    }}
                    error={stepError || undefined}
                  />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectDetailsSection
                    projectName={enquiry.projectName}
                    onChangeProjectName={(val) => setEnquiry((p) => ({ ...p, projectName: val }))}
                    description={enquiry.description}
                    onChangeDescription={(val) => {
                      setStepError(null);
                      setEnquiry((p) => ({ ...p, description: val }));
                    }}
                    budget={enquiry.budget}
                    onSelectBudget={(b) => setEnquiry((p) => ({ ...p, budget: b }))}
                    timeline={enquiry.timeline}
                    onSelectTimeline={(t) => setEnquiry((p) => ({ ...p, timeline: t }))}
                    error={stepError || undefined}
                  />
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <ContactDetailsSection
                    name={enquiry.name}
                    onChangeName={(val) => {
                      setStepError(null);
                      setEnquiry((p) => ({ ...p, name: val }));
                    }}
                    email={enquiry.email}
                    onChangeEmail={(val) => {
                      setStepError(null);
                      setEnquiry((p) => ({ ...p, email: val }));
                    }}
                    phone={enquiry.phone}
                    onChangePhone={(val) => setEnquiry((p) => ({ ...p, phone: val }))}
                    company={enquiry.company}
                    onChangeCompany={(val) => setEnquiry((p) => ({ ...p, company: val }))}
                    contactPreference={enquiry.contactPreference}
                    onSelectPreference={(pref) => setEnquiry((p) => ({ ...p, contactPreference: pref }))}
                    error={stepError || undefined}
                  />

                  {/* SUMMARY REVIEW */}
                  <EnquiryReview enquiry={enquiry} onEditStep={(st) => setStep(st)} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* ACTION BUTTONS */}
            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between gap-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-200 text-xs font-mono font-bold text-neutral-700 hover:bg-neutral-50 transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-all shadow-md ml-auto"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-neutral-900 text-white text-sm font-semibold shadow-md transition-all hover:shadow-xl disabled:opacity-50 ml-auto overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Project Enquiry"}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              )}
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
