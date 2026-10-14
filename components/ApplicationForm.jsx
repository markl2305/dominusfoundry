"use client";

import { useState } from "react";
import Button from "./Button";
import "@/components/site/pages/core.css";

// 2026-10-14: restyled in the site-wide redesign (components/site). Every
// name, required flag, type, handler, endpoint and message is unchanged.

export default function ApplicationForm() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const inputClass = "input";
  const labelClass = "field-label";

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function submit(e) {
    e.preventDefault();
    setSending(true);

    const fd = new FormData(e.currentTarget);
    const resumeFile = fd.get("resume");

    let resumeData = null;
    if (resumeFile && resumeFile.size > 0) {
      resumeData = {
        filename: resumeFile.name,
        content: await toBase64(resumeFile),
      };
    }

    const payload = {
      firstName: (fd.get("firstName") || "").trim(),
      lastName: (fd.get("lastName") || "").trim(),
      email: (fd.get("email") || "").trim(),
      phone: (fd.get("phone") || "").trim(),
      linkedin: (fd.get("linkedin") || "").trim(),
      bestYear: (fd.get("bestYear") || "").trim(),
      biggestDeal: (fd.get("biggestDeal") || "").trim(),
      experience: (fd.get("experience") || "").trim(),
      resume: resumeData,
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
      <div className="pg-form-done">
        <div className="icon-badge">
          <svg
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
        <h3 className="h3">Application received.</h3>
        <p>
          If your background matches what we&apos;re looking for, you&apos;ll hear from us
          within 3 business days. No response means it wasn&apos;t the right fit this time.
        </p>
      </div>
    );
  }

  return (
    // An explicit action keeps the page's query string out of GA4's automatic form events (form_destination),
    // measured 2026-10-12; method="post" keeps typed fields out of the URL if JavaScript is off.
    <form onSubmit={submit} action="/careers" method="post" className="form pg-form">
      <div className="form-grid">
        <div className="field">
          <label className={labelClass}>First name *</label>
          <input name="firstName" required className={inputClass} autoComplete="given-name" />
        </div>
        <div className="field">
          <label className={labelClass}>Last name *</label>
          <input name="lastName" required className={inputClass} autoComplete="family-name" />
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label className={labelClass}>Email *</label>
          <input name="email" type="email" required className={inputClass} autoComplete="email" />
        </div>
        <div className="field">
          <label className={labelClass}>Phone *</label>
          <input name="phone" type="tel" required className={inputClass} autoComplete="tel" />
        </div>
      </div>

      <div className="field">
        <label className={labelClass}>LinkedIn profile URL</label>
        <input
          name="linkedin"
          type="url"
          className={inputClass}
          placeholder="https://linkedin.com/in/..."
        />
      </div>

      <div className="field">
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

      <div className="field">
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

      <div className="field">
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

      <div className="field">
        <label className={labelClass}>Resume *</label>
        <div className="file-pick">
          <input
            name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                      />
          <div className={`${inputClass} file-face`}>
            <span>
              Choose File
            </span>
            <span>
              {fileName || "PDF, DOC, or DOCX — 10MB max"}
            </span>
          </div>
        </div>
      </div>

      <Button type="submit" disabled={sending}>
        {sending ? "Sending..." : "Submit Application"}
      </Button>

      <p className="form-foot">
        By submitting, you agree to our{" "}
        <a
          href="/privacy"
          className="link"
        >
          Privacy Policy
        </a>
        . We&apos;ll only use your information to evaluate your application.
      </p>
    </form>
  );
}
