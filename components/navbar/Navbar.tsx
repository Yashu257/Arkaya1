"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { ArkayaLogo } from "@/components/ui/arkaya-logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isServices = pathname?.startsWith("/services");
  const isWork = pathname?.startsWith("/work");
  const isAbout = pathname?.startsWith("/about");
  const isContact = pathname?.startsWith("/contact");

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* LEFT: Logo + Gradient Wordmark */}
        <ArkayaLogo />

        {/* CENTER: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className={`relative text-sm font-medium transition-colors duration-200 ${
              isServices ? "text-neutral-900 font-semibold" : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Services
            {isServices && (
              <motion.span
                layoutId="navbarIndicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          <Link
            href="/work"
            className={`relative text-sm font-medium transition-colors duration-200 ${
              isWork ? "text-neutral-900 font-semibold" : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Work
            {isWork && (
              <motion.span
                layoutId="navbarIndicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          <Link
            href="/about"
            className={`relative text-sm font-medium transition-colors duration-200 ${
              isAbout ? "text-neutral-900 font-semibold" : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            About
            {isAbout && (
              <motion.span
                layoutId="navbarIndicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        </nav>

        {/* RIGHT: CTA Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 overflow-hidden ${
              isContact
                ? "bg-blue-600 text-white ring-2 ring-blue-600/30"
                : "bg-neutral-900 text-white hover:bg-neutral-800"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>

        {/* MOBILE: Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-neutral-100 bg-white px-6 py-4 space-y-4 shadow-lg"
          >
            <nav className="flex flex-col space-y-3">
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isServices
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                Services
              </Link>
              <Link
                href="/work"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isWork
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                Work
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isAbout
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                About
              </Link>
            </nav>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-base font-medium text-white shadow-md active:scale-95 transition-all"
              >
                Let&apos;s Talk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
