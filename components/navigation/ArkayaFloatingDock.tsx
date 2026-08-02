"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Layers,
  Sparkles,
  Briefcase,
  Users,
  MessageSquare,
} from "lucide-react";
import { FloatingDock, DockItem } from "@/components/ui/floating-dock";

const DOCK_ITEMS: DockItem[] = [
  {
    title: "Home",
    icon: <Home className="h-full w-full text-current" />,
    href: "/",
    id: "home",
  },
  {
    title: "Services",
    icon: <Layers className="h-full w-full text-current" />,
    href: "/services",
    id: "services",
  },
  {
    title: "AI",
    icon: <Sparkles className="h-full w-full text-current" />,
    href: "/services#ai-agents",
    id: "ai",
  },
  {
    title: "Work",
    icon: <Briefcase className="h-full w-full text-current" />,
    href: "/work",
    id: "work",
  },
  {
    title: "About",
    icon: <Users className="h-full w-full text-current" />,
    href: "/about",
    id: "about",
  },
  {
    title: "Contact",
    icon: <MessageSquare className="h-full w-full text-current" />,
    href: "/contact",
    id: "contact",
  },
];

export function ArkayaFloatingDock() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // 1. Scroll listener for hero visibility & footer fade out
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = document.getElementById("footer");
      
      let isNearFooter = false;
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        if (footerTop <= window.innerHeight - 100) {
          isNearFooter = true;
        }
      }

      if (scrollY > 350 && !isNearFooter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Set active section based on pathname
    if (pathname === "/services") {
      setActiveSection("services");
    } else if (pathname === "/work") {
      setActiveSection("work");
    } else if (pathname === "/about") {
      setActiveSection("about");
    } else if (pathname === "/contact") {
      setActiveSection("contact");
    }

    // 2. IntersectionObserver for active section awareness
    const sectionIds = ["home", "services", "ai", "work", "about", "team", "contact"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 inset-x-0 mx-auto w-fit z-50 pointer-events-auto"
        >
          <FloatingDock items={DOCK_ITEMS} activeId={activeSection} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
