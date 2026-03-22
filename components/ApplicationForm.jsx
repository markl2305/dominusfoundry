"use client";

import { useState } from "react";
import Button from "./Button";

export default function ApplicationForm() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "mt-1 w-full rounded-xl border-2 border-forge-300 border-b-4 bg-forge-50 px-3 py-2 text-slate-900 placeholder:text-slate-500/60 focus:border-forge-600 focus:bg-white focus:outline-none focus:ring-0";
  const labelClass = "text-sm font-semibold text-slate-900";

  async function submit(e) {
    e.preventDefault();
    setSending(true);

    const fd = new FormData(e.currentTarget);

    const payload = {
      firstName: (fd.get("firstName") || "").trim(),
      lastName: (fd.get("lastName") || "").trim(),
      email: (fd.get("email") || "").trim(),
      phone: (fd.get("phone") || "").trim(),
      linkedin: (fd.get("linkedin") || "").trim(),
      bestYear: (fd.get("bestYear") || "").trim(),
      biggestDeal: (fd.get("biggestDeal") || "").trim(),
      experience: (fd.get("experience") || "").trim(),
    };

    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
        window.gtag("event", "generate_lead", {
          event_category: "Careers",
          event_label: "Sales Rep Application",
          value: 1,
        });
      }
      setSubmitted(true);
    } else {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-forge-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-forge-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="heading-forge-md text-slate-900">Application received.</h3>
        <p className="body-foundry text-slate-800 max-w-md mx-auto">
          If your background matches what we&apos;re looking for, you&apos;ll hear from us
          within 3 business days. No response means it wasn&apos;t the right fit this time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>First name *</label>
          <input name="firstName" required className={inputClass} autoComplete="given-name" />
        </div>
        <div>
          <label className={labelClass}>Last name *</label>
          <input name="lastName" required className={inputClass} autoComplete="family-name" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>Email *</label>
          <input name="email" type="email" required className={inputClass} autoComplete="email" />
        </div>
        <div>
          <label className={labelClass}>Phone *</label>
          <input name="phone" type="tel" required className={inputClass} autoComplete="tel" />
        </div>
      </div>

      <div>
        <label className={labelClass}>LinkedIn profile URL</label>
        <input
          name="linkedin"
          type="url"
          className={inputClass}
          placeholder="https://linkedin.com/in/..."
        />
      </div>

      <div>
        <label className={labelClass}>
          Best commission year — what did you earn? (W-2 or 1099 figure) *
        </label>
        <input
          name="bestYear"
          required
          className={inputClass}
          placeholder="e.g. $142,000 in 2024"
        />
      </div>

      <div>
        <label className={labelClass}>
          Largest deal you&apos;ve closed and how you found it *
        </label>
        <textarea
          name="biggestDeal"
          required
          rows={3}
          className={inputClass}
          placeholder="Keep it to 2-3 sentences. What was the deal, how much, and how did you source it?"
        />
      </div>

      <div>
        <label className={labelClass}>
          Relevant experience — what have you sold and to whom? *
        </label>
        <textarea
          name="experience"
          required
          rows={3}
          className={inputClass}
          placeholder="B2B SaaS, tech services, trades/construction, field service — whatever applies."
        />
      </div>

      <Button type="submit" disabled={sending} className="justify-center">
        {sending ? "Sending..." : "Submit Application"}
      </Button>

      <p className="text-xs text-slate-700 text-center">
        By submitting, you agree to our{" "}
        <a
          href="/privacy"
          className="underline font-semibold text-forge-700 hover:text-forge-800"
        >
          Privacy Policy
        </a>
        . We&apos;ll only use your information to evaluate your application.
      </p>
    </form>
  );
}
