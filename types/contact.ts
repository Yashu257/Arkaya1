export type ServiceType =
  | "WEBSITE"
  | "APPLICATION"
  | "AI AGENT"
  | "AI CHATBOT"
  | "AUTOMATION"
  | "AI INTEGRATION"
  | "NOT SURE YET";

export type ProjectStage =
  | "JUST AN IDEA"
  | "PLANNING"
  | "ALREADY BUILDING"
  | "EXISTING PRODUCT"
  | "NEED AUTOMATION";

export type BudgetRange =
  | "UNDER ₹50K"
  | "₹50K – ₹1L"
  | "₹1L – ₹3L"
  | "₹3L – ₹5L"
  | "₹5L+"
  | "NOT SURE YET";

export type ProjectTimeline =
  | "AS SOON AS POSSIBLE"
  | "WITHIN A MONTH"
  | "1–3 MONTHS"
  | "JUST EXPLORING";

export type ContactPreference = "EMAIL" | "PHONE" | "WHATSAPP";

export interface ProjectEnquiry {
  services: ServiceType[];
  stage: ProjectStage | "";
  projectName?: string;
  description: string;
  budget?: BudgetRange | "";
  timeline?: ProjectTimeline | "";
  name: string;
  email: string;
  phone?: string;
  company?: string;
  contactPreference?: ContactPreference | "";
}
