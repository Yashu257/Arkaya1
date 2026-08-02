"use client";

import { ProjectEnquiry } from "@/types/contact";

interface EnquiryReviewProps {
  enquiry: ProjectEnquiry;
  onEditStep: (step: number) => void;
}

export function EnquiryReview({ enquiry, onEditStep }: EnquiryReviewProps) {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-left space-y-3 text-xs">
      <div className="flex items-center justify-between border-b border-neutral-200/60 pb-2">
        <span className="font-mono font-bold text-neutral-400 uppercase tracking-widest text-[10px]">
          ENQUIRY SUMMARY
        </span>
        <button
          type="button"
          onClick={() => onEditStep(1)}
          className="text-blue-600 font-mono font-bold hover:underline"
        >
          Edit
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
        <div>
          <span className="text-neutral-400 text-[10px] block uppercase">SERVICES</span>
          <span className="text-neutral-900 font-bold block truncate">
            {enquiry.services.join(", ")}
          </span>
        </div>

        <div>
          <span className="text-neutral-400 text-[10px] block uppercase">STAGE</span>
          <span className="text-neutral-900 font-bold block">
            {enquiry.stage || "N/A"}
          </span>
        </div>

        <div>
          <span className="text-neutral-400 text-[10px] block uppercase">BUDGET</span>
          <span className="text-neutral-900 font-bold block">
            {enquiry.budget || "N/A"}
          </span>
        </div>

        <div>
          <span className="text-neutral-400 text-[10px] block uppercase">CONTACT</span>
          <span className="text-neutral-900 font-bold block truncate">
            {enquiry.name} ({enquiry.email})
          </span>
        </div>
      </div>
    </div>
  );
}
