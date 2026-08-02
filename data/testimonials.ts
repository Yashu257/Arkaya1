export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  designation: string;
  company: string;
  src: string;
  isPlaceholder?: boolean;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    quote:
      "Arkaya transformed our manual inquiry and follow-up pipeline into an autonomous system. Inquiries receive responses in seconds rather than hours, and lead conversion has improved dramatically.",
    name: "Enterprise Partner",
    designation: "Founder & Managing Director",
    company: "Growth Platform Studio",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    isPlaceholder: true,
  },
  {
    id: 2,
    quote:
      "The custom AI knowledge assistant Arkaya engineered for us indexes all our internal documentation instantly. What used to take hours of manual compliance searching now takes sub-10 milliseconds.",
    name: "Operations Partner",
    designation: "VP of Product Engineering",
    company: "NextGen Software Group",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    isPlaceholder: true,
  },
  {
    id: 3,
    quote:
      "Working with Arkaya felt like bringing on a senior technical co-founder. Their team understands how to bridge design, software, and AI into a product that users love.",
    name: "Technology Lead",
    designation: "Head of Operations",
    company: "Apex Automation Labs",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    isPlaceholder: true,
  },
];
