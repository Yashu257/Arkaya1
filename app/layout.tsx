import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arkaya Tech — Digital × AI × Automation",
  description:
    "Arkaya Tech designs and engineers high-performance websites, scalable web applications, intelligent AI agents, chatbots, and enterprise business automation.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
