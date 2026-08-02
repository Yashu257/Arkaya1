"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { 
  UserPlus, 
  Bot, 
  CheckCircle2, 
  Database, 
  Send, 
  CalendarCheck, 
  RotateCcw,
  Zap,
  Clock,
  ShieldCheck
} from "lucide-react";

interface WorkflowStep {
  id: number;
  title: string;
  microcopy: string;
  status: string;
  icon: React.ElementType;
  details?: string[];
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    title: "New Lead",
    microcopy: "Website inquiry received",
    status: "RECEIVED",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "AI Agent",
    microcopy: "Understands the request",
    status: "PROCESSING",
    icon: Bot,
    details: ["Intent: High-Value Project", "Route: Enterprise Lead"],
  },
  {
    id: 3,
    title: "Qualification",
    microcopy: "Intent & fit analyzed",
    status: "QUALIFIED",
    icon: CheckCircle2,
  },
  {
    id: 4,
    title: "CRM",
    microcopy: "Lead automatically updated",
    status: "UPDATED",
    icon: Database,
  },
  {
    id: 5,
    title: "Follow-up",
    microcopy: "Personalized message sent",
    status: "SENT",
    icon: Send,
  },
  {
    id: 6,
    title: "Meeting Booked",
    microcopy: "Calendar slot confirmed",
    status: "BOOKED",
    icon: CalendarCheck,
  },
];

export function AutomationWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      if (shouldReduceMotion) setActiveStep(6);
      return;
    }

    setIsPlaying(true);
    let isMounted = true;
    let timeoutIds: NodeJS.Timeout[] = [];

    const runSequence = () => {
      if (!isMounted) return;
      setActiveStep(1);

      const delays = [700, 1400, 2200, 3000, 3800, 4600];

      delays.forEach((delay, index) => {
        const id = setTimeout(() => {
          if (isMounted) setActiveStep(index + 2);
        }, delay);
        timeoutIds.push(id);
      });

      const loopId = setTimeout(() => {
        if (isMounted) runSequence();
      }, 7200);
      timeoutIds.push(loopId);
    };

    runSequence();

    return () => {
      isMounted = false;
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [isInView, shouldReduceMotion]);

  const handleReplay = () => {
    setActiveStep(1);
  };

  return (
    <section 
      id="ai" 
      ref={containerRef}
      className="relative w-full py-24 md:py-36 text-white border-t border-neutral-900 overflow-hidden scroll-mt-24"
      style={{
        background: "linear-gradient(135deg, #070A12 0%, #0B1020 50%, #130B24 100%)"
      }}
    >
      {/* Deep Blue & Violet Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(37,99,255,0.20),transparent_55%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_65%,rgba(124,58,237,0.18),transparent_55%)] pointer-events-none z-0" />
      <div className="absolute inset-0 tech-grid-pattern opacity-[0.12] pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* INTRO */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-blue-500/30"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-300">
              AI + AUTOMATION CORE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]"
          >
            From manual work <br className="hidden sm:inline" />
            to <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">autonomous workflows.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl"
          >
            Arkaya connects your tools, data and AI to create systems that understand, decide and act — automatically.
          </motion.p>
        </div>

        {/* WORKFLOW CANVAS CONTAINER (DARK ELEVATED PANEL) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full rounded-3xl bg-[#0F1528]/95 border border-neutral-700/80 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md"
        >
          {/* Header Bar inside Canvas */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-mono font-medium text-neutral-200">
                LIVE DEMO: LEAD-TO-MEETING WORKFLOW
              </span>
            </div>

            <button
              onClick={handleReplay}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Replay workflow
            </button>
          </div>

          {/* DESKTOP WORKFLOW (HORIZONTAL - lg+ screens) */}
          <div className="hidden lg:grid grid-cols-6 gap-4 relative py-4">
            
            {/* SVG Connecting Vector Line (Desktop) */}
            <svg 
              className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-1 z-0 pointer-events-none stroke-neutral-700" 
              preserveAspectRatio="none"
            >
              <line x1="8%" y1="50%" x2="92%" y2="50%" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {WORKFLOW_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep >= step.id;
              const isCurrent = activeStep === step.id;

              return (
                <div 
                  key={step.id} 
                  className="relative z-10 flex flex-col items-center text-center group cursor-pointer"
                  onClick={() => setActiveStep(step.id)}
                >
                  {/* Status Badge Above Node */}
                  <div className="h-6 mb-3 flex items-center justify-center">
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider ${
                          step.id === 6 
                            ? "bg-emerald-950 text-emerald-400 border border-emerald-700" 
                            : step.id === 2 
                            ? "bg-violet-950 text-violet-300 border border-violet-700"
                            : "bg-blue-950 text-blue-300 border border-blue-700"
                        }`}
                      >
                        {step.status}
                      </motion.span>
                    )}
                  </div>

                  {/* Node Circle Icon */}
                  <motion.div
                    animate={{
                      scale: isCurrent ? 1.08 : 1,
                      y: isCurrent ? -3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`h-14 w-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                      isCurrent
                        ? step.id === 2
                          ? "bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white border-transparent shadow-lg shadow-violet-500/40 ring-2 ring-violet-400"
                          : "bg-white text-neutral-950 border-white shadow-md shadow-white/10"
                        : isActive
                        ? "bg-neutral-900 text-blue-400 border-blue-500/50 shadow-sm"
                        : "bg-neutral-900/80 text-neutral-500 border-neutral-800"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>

                  {/* Step Title & Microcopy */}
                  <h4 className="mt-4 text-sm font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-xs text-neutral-300 max-w-[130px] leading-relaxed">
                    {step.microcopy}
                  </p>

                  {/* Optional AI Details Callout */}
                  {step.id === 2 && isCurrent && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-2.5 rounded-lg bg-violet-950/90 border border-violet-700 text-[10px] text-violet-200 text-left space-y-0.5 shadow-lg"
                    >
                      {step.details?.map((d, i) => (
                        <div key={i} className="flex items-center gap-1 font-mono">
                          <span className="h-1 w-1 rounded-full bg-violet-400" />
                          {d}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* MOBILE & TABLET WORKFLOW (VERTICAL - screens below lg) */}
          <div className="lg:hidden relative pl-6 space-y-8">
            <div className="absolute top-4 bottom-4 left-[23px] w-0.5 bg-neutral-800" />

            {WORKFLOW_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep >= step.id;
              const isCurrent = activeStep === step.id;

              return (
                <div key={step.id} className="relative flex items-start gap-4 z-10">
                  <div 
                    className={`h-11 w-11 rounded-xl flex items-center justify-center border shrink-0 transition-all duration-300 ${
                      isCurrent
                        ? "bg-white text-neutral-900 border-white shadow-md"
                        : isActive
                        ? "bg-neutral-900 text-blue-400 border-blue-500/40 shadow-sm"
                        : "bg-neutral-900/60 text-neutral-500 border-neutral-800"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-white">
                        {step.title}
                      </h4>
                      {isActive && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-950 text-blue-300 border border-blue-800">
                          {step.status}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-neutral-300">
                      {step.microcopy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </motion.div>

        {/* TRANSFORMATION STATEMENT & BENEFITS */}
        <div className="mt-12 sm:mt-16 text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg font-medium text-neutral-200 leading-relaxed mb-8">
            What once required multiple tools, manual updates and constant follow-ups now happens automatically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0F1528] border border-neutral-800 shadow-md flex items-center gap-3 justify-center">
              <div className="h-8 w-8 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center shrink-0 border border-blue-900">
                <Zap className="h-4 w-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                LESS MANUAL WORK
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#0F1528] border border-neutral-800 shadow-md flex items-center gap-3 justify-center">
              <div className="h-8 w-8 rounded-lg bg-violet-950 text-violet-400 flex items-center justify-center shrink-0 border border-violet-900">
                <Clock className="h-4 w-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                FASTER RESPONSE
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#0F1528] border border-neutral-800 shadow-md flex items-center gap-3 justify-center">
              <div className="h-8 w-8 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-900">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                24/7 EXECUTION
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
