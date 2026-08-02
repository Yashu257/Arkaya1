import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ArkayaFloatingDock } from "@/components/navigation/ArkayaFloatingDock";
import { ArrowRight, Home, Briefcase } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* 404 CONTENT */}
      <section className="relative w-full py-24 sm:py-36 overflow-hidden my-auto text-center">
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),rgba(124,58,237,0.05),transparent_70%)]" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-neutral-500">
              404 ERROR
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-neutral-900 leading-none">
            THIS PAGE <br />
            <span className="bg-gradient-to-r from-neutral-900 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              DOESN&apos;T EXIST.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-md mx-auto leading-relaxed pt-2">
            The link may have moved, or maybe it was never here. Let&apos;s get you back on track.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-all shadow-md w-full sm:w-auto"
            >
              <Home className="h-4 w-4" />
              Back Home
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-700 border border-neutral-200 text-sm font-semibold hover:bg-neutral-50 transition-all shadow-sm w-full sm:w-auto"
            >
              <Briefcase className="h-4 w-4 text-blue-600" />
              Explore Work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Floating Dock Navigation */}
      <ArkayaFloatingDock />
    </main>
  );
}
