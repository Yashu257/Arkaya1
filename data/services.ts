export interface ServiceDetail {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  heading: string;
  description: string;
  capabilities: string[];
}

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: "websites",
    number: "01",
    eyebrow: "WEBSITE DEVELOPMENT",
    title: "Websites",
    heading: "Websites built to do more than look good.",
    description:
      "We design and develop fast, responsive digital experiences that communicate clearly, perform reliably and turn attention into action.",
    capabilities: [
      "Corporate Websites",
      "Landing Pages",
      "Product Websites",
      "Marketing Websites",
      "Interactive Experiences",
      "Responsive Development",
      "Performance Optimization",
      "SEO Foundations",
    ],
  },
  {
    id: "applications",
    number: "02",
    eyebrow: "APPLICATION DEVELOPMENT",
    title: "Applications",
    heading: "Software designed around the way work actually happens.",
    description:
      "From internal platforms to customer-facing products, we build scalable applications around real users, workflows and business requirements.",
    capabilities: [
      "Web Applications",
      "SaaS Products",
      "Internal Tools",
      "Admin Platforms",
      "Customer Portals",
      "Dashboards",
      "API Integrations",
      "Role-Based Systems",
    ],
  },
  {
    id: "ai-agents",
    number: "03",
    eyebrow: "AI AGENTS",
    title: "AI Agents",
    heading: "AI that doesn't just answer. It acts.",
    description:
      "We build intelligent agents capable of understanding requests, using business context and executing tasks across connected systems.",
    capabilities: [
      "Lead Qualification",
      "Sales Agents",
      "Support Agents",
      "Research Agents",
      "Internal Assistants",
      "Workflow Agents",
      "Knowledge Agents",
      "Multi-Step Task Execution",
    ],
  },
  {
    id: "ai-chatbots",
    number: "04",
    eyebrow: "AI CHATBOTS",
    title: "AI Chatbots",
    heading: "Conversations that actually understand context.",
    description:
      "Build intelligent conversational experiences for customers, teams and business knowledge.",
    capabilities: [
      "Customer Support",
      "Lead Capture",
      "Product Assistance",
      "Internal Knowledge",
      "FAQ Automation",
      "Website Assistants",
      "Document Q&A",
      "Multilingual Experiences",
    ],
  },
  {
    id: "automation",
    number: "05",
    eyebrow: "BUSINESS AUTOMATION",
    title: "Automation",
    heading: "Less repetitive work. More forward motion.",
    description:
      "We connect the tools your business already uses and automate the repetitive steps between them.",
    capabilities: [
      "Lead Automation",
      "CRM Workflows",
      "Email Automation",
      "Data Synchronization",
      "Notifications",
      "Approvals",
      "Document Workflows",
      "Operational Automation",
    ],
  },
  {
    id: "ai-integrations",
    number: "06",
    eyebrow: "AI INTEGRATIONS",
    title: "AI Integrations",
    heading: "Bring intelligence into what you already use.",
    description:
      "Add AI capabilities to existing products, platforms and workflows without rebuilding everything from scratch.",
    capabilities: [
      "LLM Integration",
      "Knowledge Search",
      "RAG Systems",
      "AI APIs",
      "Document Intelligence",
      "Natural Language Interfaces",
      "AI Search",
      "Custom AI Features",
    ],
  },
];

export interface TechItem {
  name: string;
  category: string;
  tooltipTitle: string;
  tooltipText: string;
}

export const TECH_STACK: TechItem[] = [
  {
    name: "Next.js",
    category: "Frontend & Platform",
    tooltipTitle: "Modern Web Platform",
    tooltipText: "Used for fast, scalable, SEO-optimized websites and applications.",
  },
  {
    name: "React",
    category: "UI Engine",
    tooltipTitle: "Component Architecture",
    tooltipText: "Used for building modular, interactive, and responsive user interfaces.",
  },
  {
    name: "TypeScript",
    category: "Type Safety",
    tooltipTitle: "Robust Codebase",
    tooltipText: "Ensures type safety, maintainability, and error-free production code.",
  },
  {
    name: "Python",
    category: "AI & Backend",
    tooltipTitle: "AI & Data Engineering",
    tooltipText: "Used for AI agent logic, automation pipelines, and data processing.",
  },
  {
    name: "FastAPI",
    category: "API Framework",
    tooltipTitle: "High-Performance APIs",
    tooltipText: "Powers ultra-fast microservices and AI agent communication endpoints.",
  },
  {
    name: "Node.js",
    category: "Runtime",
    tooltipTitle: "Scalable Services",
    tooltipText: "Used for asynchronous backend workflows and real-time integrations.",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    tooltipTitle: "Structured Storage",
    tooltipText: "Reliable relational database for applications, users, and enterprise data.",
  },
  {
    name: "OpenAI",
    category: "AI Foundation",
    tooltipTitle: "AI Intelligence Layer",
    tooltipText: "Powers reasoning, conversational agents, and natural language understanding.",
  },
  {
    name: "Gemini",
    category: "Multimodal AI",
    tooltipTitle: "Multimodal Processing",
    tooltipText: "Used for complex visual, textual, and long-context AI task execution.",
  },
  {
    name: "Vector Search",
    category: "Retrieval",
    tooltipTitle: "Semantic Knowledge",
    tooltipText: "Enables instant retrieval-augmented generation (RAG) across custom data.",
  },
  {
    name: "Cloud Infrastructure",
    category: "Deployment",
    tooltipTitle: "Scalable Cloud Hosting",
    tooltipText: "High-availability deployment across serverless and cloud providers.",
  },
];
