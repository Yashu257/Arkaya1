"use client";

import { Phone, MessageSquare } from "lucide-react";

export function DirectContact() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-neutral-50/60 border-t border-neutral-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-neutral-200/90 shadow-sm p-8 sm:p-12 text-left flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-neutral-500 block">
              PREFER TO TALK?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 leading-tight">
              Sometimes a conversation <br className="hidden sm:inline" />
              is the fastest way forward.
            </h3>
            <p className="text-sm text-neutral-600">
              Speak directly with an Arkaya engineer or founder to discuss your requirements.
            </p>
          </div>

          <div className="space-y-3 shrink-0">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">
                PHONE / WHATSAPP
              </span>
              <a
                href="tel:+916300966570"
                className="text-xl sm:text-2xl font-bold text-neutral-900 hover:text-blue-600 transition-colors block"
              >
                +91 63009 66570
              </a>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="tel:+916300966570"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <Phone className="h-3.5 w-3.5 text-blue-400" />
                Call →
              </a>

              <a
                href="https://wa.me/916300966570?text=Hi%20Arkaya%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                WhatsApp →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
