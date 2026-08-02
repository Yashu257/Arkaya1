"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, MessageSquare } from "lucide-react";

export function EnquirySuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl text-center space-y-6"
    >
      <div className="h-16 w-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center justify-center mx-auto shadow-lg">
        <CheckCircle2 className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">
          ENQUIRY RECEIVED
        </span>
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Thanks. <br />
          We&apos;ll take it from here.
        </h3>
        <p className="text-sm sm:text-base text-neutral-300 max-w-lg mx-auto leading-relaxed pt-2">
          We&apos;ve received your project details and will review what you&apos;re looking to build.
        </p>
      </div>

      {/* DIRECT CALL OPTION */}
      <div className="pt-6 border-t border-neutral-800 space-y-4">
        <span className="text-xs font-mono text-neutral-400 block">
          Need to speak directly right now?
        </span>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:+916300966570"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-900 text-sm font-semibold hover:bg-neutral-100 transition-colors shadow-md w-full sm:w-auto"
          >
            <Phone className="h-4 w-4 text-blue-600" />
            Call Arkaya (+91 63009 66570)
          </a>

          <a
            href="https://wa.me/916300966570?text=Hi%20Arkaya%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-sm font-semibold hover:bg-neutral-800 hover:text-white transition-colors w-full sm:w-auto"
          >
            <MessageSquare className="h-4 w-4 text-emerald-400" />
            Open WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
