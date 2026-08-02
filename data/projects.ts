export interface ProjectFeature {
  title: string;
  description: string;
}

export interface WorkflowStage {
  label: string;
  description: string;
}

export interface ProjectTech {
  name: string;
  category: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  category: "WEB" | "APPLICATIONS" | "AI" | "AUTOMATION";
  categoryLabel: string;
  type: string;
  year?: string;
  title: string;
  tagline: string;
  description: string;
  challenge: string;
  approach: string;
  solution: string;
  features: ProjectFeature[];
  workflow?: WorkflowStage[];
  technologies: ProjectTech[];
  capabilities: string[];
  outcome: string;
  tags: string[];
  featured?: boolean;
  linkText?: string;
  href?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-sales-agent",
    slug: "ai-sales-agent",
    number: "01",
    category: "AI",
    categoryLabel: "AI / AUTOMATION",
    type: "Arkaya Project",
    year: "2026",
    title: "AI Sales & Qualification Agent",
    tagline: "AI-powered workflow for qualifying, organizing and following up with leads.",
    description:
      "An intelligent outreach and qualification system designed to converse with prospects, evaluate intent, and automate CRM updates 24/7.",
    challenge:
      "Sales teams spend over 40% of their workday manually vetting inbound inquiries, resulting in delayed response times and missed high-intent opportunities.",
    approach:
      "We designed an autonomous AI agent layer that sits directly between inbound contact webhooks and the internal CRM system, managing context-aware multi-turn conversations before routing qualified opportunities.",
    solution:
      "Engineered an autonomous AI agent capable of natural multi-turn conversations, automated lead scoring, CRM record creation, and instant calendar scheduling.",
    features: [
      {
        title: "Intelligent Lead Qualification",
        description: "Understands intent, budget, and business requirements directly from natural conversational exchanges.",
      },
      {
        title: "Autonomous CRM Synchronization",
        description: "Automatically creates structured leads, updates pipeline stages, and logs conversation transcripts.",
      },
      {
        title: "Context-Aware Follow-Ups",
        description: "Generates tailored email and message follow-ups based on specific prospect inquiries without manual drafting.",
      },
      {
        title: "Calendar & Meeting Booking",
        description: "Schedules qualification calls directly onto available team calendars upon reaching threshold score.",
      },
    ],
    workflow: [
      { label: "NEW INQUIRY", description: "Website form or API webhook payload received" },
      { label: "AI EVALUATION", description: "LLM analyzes intent, context & prospect history" },
      { label: "QUALIFICATION", description: "Conversational agent scores intent & extracts needs" },
      { label: "CRM UPDATE", description: "Creates contact record & updates pipeline status" },
      { label: "MEETING BOOKED", description: "Schedules calendar slot & notifies team" },
    ],
    technologies: [
      { name: "React", category: "Frontend", description: "Powers the real-time agent monitoring dashboard." },
      { name: "Python", category: "AI Logic", description: "Executes agent reasoning pipelines and tool invocations." },
      { name: "OpenAI", category: "LLM Engine", description: "Provides conversational intelligence and intent extraction." },
      { name: "PostgreSQL", category: "Data", description: "Stores structured conversation history and lead state." },
    ],
    capabilities: [
      "Product Strategy",
      "UX / UI Design",
      "AI Engineering",
      "Backend Architecture",
      "CRM Integration",
      "Automation",
    ],
    outcome:
      "Eliminates initial response latency, ensures 100% of inbound leads receive immediate qualification, and provides complete pipeline visibility for team leads.",
    tags: ["AI Agents", "Automation", "CRM Integration", "Analytics"],
    featured: true,
    linkText: "View Case Study →",
    href: "/work/ai-sales-agent",
  },
  {
    id: "operations-platform",
    slug: "operations-platform",
    number: "02",
    category: "APPLICATIONS",
    categoryLabel: "SOFTWARE / APPLICATION",
    type: "Arkaya Internal Build",
    year: "2026",
    title: "Enterprise Operations Platform",
    tagline: "Centralized workspace unifying internal workflows, telemetry and analytics.",
    description:
      "A centralized application workspace that brings fragmented business workflows, real-time analytics, and operational tasks into one portal.",
    challenge:
      "Teams were switching between five separate SaaS tools, causing data silos, delayed task approvals, and high context-switching overhead.",
    approach:
      "We unified core operations into a single modular web application featuring role-based access control, automated webhook receivers, and real-time status feeds.",
    solution:
      "Built a unified role-based dashboard with real-time webhooks, automated notifications, and consolidated team activity metrics.",
    features: [
      {
        title: "Unified Operational Dashboard",
        description: "Single-pane visibility into system health, pending approvals, and active automated workflows.",
      },
      {
        title: "Role-Based Access Control",
        description: "Granular permission sets for administrators, managers, and team operators.",
      },
      {
        title: "Real-Time Telemetry & Charts",
        description: "Live system metrics, uptime monitoring, and active user analytics.",
      },
      {
        title: "Integrated Task Queue",
        description: "Automated task assignment with deadline tracking and status alerts.",
      },
    ],
    workflow: [
      { label: "WEBHOOK EVENT", description: "External system emits event payload" },
      { label: "INGESTION HUB", description: "FastAPI validates & parses incoming telemetry" },
      { label: "DATA AGGREGATION", description: "PostgreSQL updates state & analytics charts" },
      { label: "ALERT DISPATCH", description: "Notifies responsible team members" },
    ],
    technologies: [
      { name: "Next.js", category: "Platform", description: "Renders server-optimized dashboard interfaces." },
      { name: "TypeScript", category: "Language", description: "Ensures type-safe data flow across UI components." },
      { name: "FastAPI", category: "Backend", description: "Handles high-concurrency API endpoints and webhooks." },
      { name: "PostgreSQL", category: "Database", description: "Relational data store for operational logs and user roles." },
    ],
    capabilities: [
      "Product Strategy",
      "UI / UX Design",
      "Full-Stack Engineering",
      "API Integration",
      "Security & Roles",
    ],
    outcome:
      "Consolidates operational data into a single source of truth, eliminates redundant manual status checks, and improves cross-department task completion speed.",
    tags: ["Web App", "Dashboard", "Automation", "Real-Time Data"],
    featured: false,
    linkText: "View Case Study →",
    href: "/work/operations-platform",
  },
  {
    id: "digital-platform",
    slug: "digital-platform",
    number: "03",
    category: "WEB",
    categoryLabel: "WEB / DIGITAL EXPERIENCE",
    type: "Technical Demonstration",
    year: "2026",
    title: "Digital Experience Platform",
    tagline: "High-performance web architecture built for modern brand storytelling.",
    description:
      "A high-performance web platform engineered for sub-second load times, editorial storytelling, and seamless responsive interactions.",
    challenge:
      "Legacy website infrastructure suffered from slow mobile rendering, high layout shift, and rigid content update bottlenecks.",
    approach:
      "We engineered a modern Jamstack architecture with server-side rendering, dynamic asset optimization, and fluid micro-interactions.",
    solution:
      "Re-engineered with modern Jamstack architecture, dynamic image optimization, and micro-interactions for elevated brand positioning.",
    features: [
      {
        title: "Sub-Second Load Performance",
        description: "Optimized bundle sizes, server rendering, and edge delivery for instant page loads.",
      },
      {
        title: "Fluid Micro-Interactions",
        description: "Subtle hover states and entrance motion designed to guide reader attention without visual noise.",
      },
      {
        title: "Mobile-First Responsiveness",
        description: "Tailored layouts tested across all viewport dimensions for zero layout distortion.",
      },
      {
        title: "SEO & Accessibility Core",
        description: "Built-in structured metadata, semantic HTML5, and full screen-reader keyboard support.",
      },
    ],
    technologies: [
      { name: "Next.js", category: "Framework", description: "Powers static site generation and server rendering." },
      { name: "React", category: "UI Engine", description: "Modular component architecture for interactive UI." },
      { name: "TypeScript", category: "Language", description: "Strict type safety for error-free component props." },
      { name: "Cloud Infrastructure", category: "Deployment", description: "Global edge CDN distribution for global speed." },
    ],
    capabilities: [
      "Web Design",
      "Frontend Development",
      "Performance Tuning",
      "SEO Architecture",
      "Responsive Layouts",
    ],
    outcome:
      "Delivers instant page responsiveness across mobile and desktop, establishes elevated brand authority, and provides clean foundations for search visibility.",
    tags: ["Web Design", "Development", "Performance", "Responsive"],
    featured: false,
    linkText: "View Case Study →",
    href: "/work/digital-platform",
  },
  {
    id: "ai-knowledge-assistant",
    slug: "ai-knowledge-assistant",
    number: "04",
    category: "AI",
    categoryLabel: "AI / KNOWLEDGE RAG",
    type: "Product Concept",
    year: "2026",
    title: "Autonomous Knowledge Assistant",
    tagline: "Vector-powered RAG retrieval system indexing custom enterprise documents.",
    description:
      "A vector-powered RAG system that instantly indexes company documentation, contracts, and internal guides for precise Q&A.",
    challenge:
      "Employees wasted hours searching across un-indexed PDFs and legacy Google Drive folders for specific compliance policies.",
    approach:
      "We built a Retrieval-Augmented Generation (RAG) pipeline that chunks, embeds, and indexes unstructured business documents into a vector database for semantic search.",
    solution:
      "Implemented a vector retrieval engine with semantic search, source citation, and multilingual document understanding.",
    features: [
      {
        title: "Semantic Vector Search",
        description: "Understands conceptual queries rather than relying solely on exact keyword matches.",
      },
      {
        title: "Document Source Citations",
        description: "Every answer includes exact document and paragraph references for complete verification.",
      },
      {
        title: "Multilingual Document Support",
        description: "Queries and retrieves answers across English, Spanish, and multi-language repositories.",
      },
      {
        title: "Strict Knowledge Boundaries",
        description: "Constrained to retrieve answers exclusively from verified internal document sources.",
      },
    ],
    workflow: [
      { label: "DOCUMENT UPLOAD", description: "PDFs, Docs & Markdown files ingested" },
      { label: "TEXT CHUNKING", description: "Content split into semantic passage blocks" },
      { label: "VECTOR EMBEDDING", description: "Generates high-dimensional vector representations" },
      { label: "RAG QUERY", description: "Retrieves top passage context for LLM response" },
    ],
    technologies: [
      { name: "Python", category: "AI Pipeline", description: "Handles document parsing, chunking, and embedding generation." },
      { name: "Vector Search", category: "Database", description: "Stores document embeddings for sub-10ms similarity queries." },
      { name: "Gemini", category: "LLM Model", description: "Provides long-context document reasoning and extraction." },
      { name: "FastAPI", category: "API Layer", description: "Exposes secure search endpoints for web and chat interfaces." },
    ],
    capabilities: [
      "AI Engineering",
      "RAG Architecture",
      "Vector Search",
      "Document AI",
      "API Integration",
    ],
    outcome:
      "Reduces internal document search time from hours to seconds while providing verifiable source citations for compliance policies.",
    tags: ["RAG Systems", "Vector Search", "Document AI", "Knowledge Base"],
    featured: false,
    linkText: "View Case Study →",
    href: "/work/ai-knowledge-assistant",
  },
  {
    id: "business-workflow-automation",
    slug: "business-workflow-automation",
    number: "05",
    category: "AUTOMATION",
    categoryLabel: "BUSINESS AUTOMATION",
    type: "Arkaya Project",
    year: "2026",
    title: "Lead & CRM Pipeline Automation",
    tagline: "End-to-end automated pipeline connecting form triggers, AI scoring and alerts.",
    description:
      "An automated data pipeline connecting form submissions, instant AI qualification, slack alerts, and follow-up email sequences.",
    challenge:
      "Manual data entry between website webhooks and internal sales spreadsheets caused 24-hour delays in lead follow-up.",
    approach:
      "We engineered an asynchronous workflow system that ingests webhooks, triggers AI analysis, updates CRM data, and dispatches instant team notifications.",
    solution:
      "Created an asynchronous workflow engine executing lead ingestion, enrichment, and CRM updates in under 1.5 seconds.",
    features: [
      {
        title: "Asynchronous Lead Ingestion",
        description: "Processes incoming webhooks instantaneously without blocking website responses.",
      },
      {
        title: "Automated Data Enrichment",
        description: "Enhances lead metadata with domain and company details before CRM insertion.",
      },
      {
        title: "Instant Slack & Email Alerts",
        description: "Notifies team leads immediately when high-value opportunities enter the pipeline.",
      },
      {
        title: "Zero-Latency Synchronization",
        description: "Executes end-to-end workflow steps in under 1.5 seconds total runtime.",
      },
    ],
    workflow: [
      { label: "WEBHOOK TRIGGER", description: "Lead form submitted on web platform" },
      { label: "DATA ENRICHMENT", description: "Enriches company & domain information" },
      { label: "CRM RECORD", description: "Inserts lead record with appropriate owner" },
      { label: "DISPATCH ALERT", description: "Posts structured notification to Slack channel" },
    ],
    technologies: [
      { name: "Node.js", category: "Workflow Engine", description: "Powers event-driven asynchronous task execution." },
      { name: "FastAPI", category: "API Layer", description: "Validates and routes high-frequency webhook payloads." },
      { name: "OpenAI", category: "AI Scoring", description: "Scores lead quality and generates summary notes." },
      { name: "PostgreSQL", category: "Storage", description: "Persists execution logs and event transaction history." },
    ],
    capabilities: [
      "Workflow Automation",
      "CRM Integration",
      "API Engineering",
      "Event Pipelines",
      "Backend Architecture",
    ],
    outcome:
      "Cuts lead processing time from 24 hours to 1.5 seconds, eliminates human data entry errors, and ensures no inbound lead is overlooked.",
    tags: ["Workflow Engine", "CRM", "Email Sequences", "API Integration"],
    featured: false,
    linkText: "View Case Study →",
    href: "/work/business-workflow-automation",
  },
];
