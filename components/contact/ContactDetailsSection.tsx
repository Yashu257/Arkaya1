"use client";

import { ContactPreference } from "@/types/contact";

interface ContactDetailsSectionProps {
  name: string;
  onChangeName: (val: string) => void;
  email: string;
  onChangeEmail: (val: string) => void;
  phone?: string;
  onChangePhone: (val: string) => void;
  company?: string;
  onChangeCompany: (val: string) => void;
  contactPreference?: ContactPreference | "";
  onSelectPreference: (pref: ContactPreference) => void;
  error?: string;
}

const PREFERENCES: ContactPreference[] = ["EMAIL", "PHONE", "WHATSAPP"];

export function ContactDetailsSection({
  name,
  onChangeName,
  email,
  onChangeEmail,
  phone,
  onChangePhone,
  company,
  onChangeCompany,
  contactPreference,
  onSelectPreference,
  error,
}: ContactDetailsSectionProps) {
  return (
    <div className="space-y-6 text-left">
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase">
          STEP 04 OF 04
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
          How should we reach you?
        </h3>
        <p className="text-xs sm:text-sm text-neutral-500">
          Provide your contact information so Arkaya can get back to you.
        </p>
      </div>

      {error && (
        <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* NAME */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block">
            YOUR NAME <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
            placeholder="e.g. Neeraj Kumar"
            className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          />
        </div>

        {/* EMAIL */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block">
            EMAIL ADDRESS <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => onChangeEmail(e.target.value)}
            placeholder="e.g. name@company.com"
            className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          />
        </div>

        {/* PHONE */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block">
            PHONE / WHATSAPP <span className="text-neutral-400 font-normal">(OPTIONAL)</span>
          </label>
          <input
            type="tel"
            value={phone || ""}
            onChange={(e) => onChangePhone(e.target.value)}
            placeholder="+91 63009 66570"
            className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          />
        </div>

        {/* COMPANY */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block">
            ORGANIZATION / COMPANY <span className="text-neutral-400 font-normal">(OPTIONAL)</span>
          </label>
          <input
            type="text"
            value={company || ""}
            onChange={(e) => onChangeCompany(e.target.value)}
            placeholder="e.g. Arkaya Tech"
            className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* PREFERRED CONTACT METHOD */}
      <div className="space-y-2 pt-2">
        <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block">
          HOW WOULD YOU PREFER TO TALK? <span className="text-neutral-400 font-normal">(OPTIONAL)</span>
        </label>
        <div className="grid grid-cols-3 gap-2.5">
          {PREFERENCES.map((pref) => {
            const isSelected = contactPreference === pref;
            return (
              <button
                key={pref}
                type="button"
                onClick={() => onSelectPreference(pref)}
                className={`py-2.5 px-3 rounded-xl border text-xs font-mono font-bold text-center transition-all ${
                  isSelected
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-blue-600"
                }`}
              >
                {pref}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
