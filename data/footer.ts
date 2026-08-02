export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export const FOOTER_DATA: FooterGroup[] = [
  {
    title: "EXPLORE",
    links: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Team", href: "/about#team" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { label: "Start a Project", href: "/contact" },
      { label: "+91 63009 66570", href: "tel:+916300966570" },
      { label: "WhatsApp", href: "https://wa.me/916300966570?text=Hi%20Arkaya%2C%20I%27d%20like%20to%20discuss%20a%20project." },
    ],
  },
  {
    title: "BUILD",
    links: [
      { label: "Websites", href: "/services#websites" },
      { label: "Applications", href: "/services#applications" },
      { label: "AI Agents", href: "/services#ai-agents" },
      { label: "Automation", href: "/services#automation" },
    ],
  },
];
