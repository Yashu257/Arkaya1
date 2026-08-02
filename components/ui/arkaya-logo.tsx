import Image from "next/image";
import Link from "next/link";

interface ArkayaLogoProps {
  className?: string;
  isDarkBg?: boolean;
}

export function ArkayaLogo({ className = "", isDarkBg = false }: ArkayaLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="Arkaya Tech Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
      <span className="font-sans text-base sm:text-lg font-extrabold tracking-wider">
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
          ARKAYA
        </span>{" "}
        <span className={isDarkBg ? "text-neutral-400 font-semibold text-xs sm:text-sm tracking-widest ml-0.5" : "text-neutral-600 font-semibold text-xs sm:text-sm tracking-widest ml-0.5"}>
          TECH
        </span>
      </span>
    </Link>
  );
}
