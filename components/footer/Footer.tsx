"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FOOTER_DATA } from "@/data/footer";
import { GiantArkayaWord } from "./GiantArkayaWord";
import { ArkayaLogo } from "@/components/ui/arkaya-logo";

export function Footer() {
  return (
    <footer id="footer" className="relative w-full bg-[#080808] text-white pt-16 sm:pt-24 overflow-hidden border-t border-neutral-900">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* FOOTER TOP AREA: BRAND + NAVIGATION GROUPS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* BRAND COLUMN (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <ArkayaLogo isDarkBg={true} />

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Websites, applications, AI and automation built around real business needs.
            </p>

            <div className="pt-2 space-y-2">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
                HAVE A PROJECT?
              </span>
              <div className="flex flex-col gap-1.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:+916300966570"
                  className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                >
                  <Phone className="h-3 w-3 text-blue-400" />
                  +91 63009 66570
                </a>
              </div>
            </div>
          </div>

          {/* NAVIGATION GROUPS (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_DATA.map((group) => (
              <div key={group.title} className="space-y-3">
                <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
                  {group.title}
                </h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-200 inline-block py-0.5"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-neutral-900" />

        {/* BOTTOM INFORMATION ROW */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; 2026 Arkaya Tech. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-neutral-300 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>

      </div>

      {/* SIGNATURE GIANT ARKAYA OVERSIZED WORDMARK (Bottom Clipped) */}
      <GiantArkayaWord />
    </footer>
  );
}
