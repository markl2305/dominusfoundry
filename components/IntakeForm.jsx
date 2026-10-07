"use client";

import { useState } from "react";
import Button from "./Button";
import SmsConsent, { SMS_CONSENT_FIELD } from "./SmsConsent";
import { event as gaEvent } from "@/lib/gtag";

// Video script for reference (not displayed on page):
// "Hey, I'm Bri. If you're here, something in your business isn't working the way you want it to…
// Fill out the form, tell us what's broken, and we'll get back to you with a plan."

const toolOptions = [
  "Square",
  "Calendly",
  "HubSpot",
  "ServiceTitan",
  "QuickBooks",
  "Google Calendar",
  "Other",
];

const volumeOptions = [
  "Under 20",
  "20–50",
  "50–100",
  "100+",
];

const urgencyOptions = [
  "Exploring options",
  "Ready in next 30 days",
  "Need it now",
];

export default function IntakeForm() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [error, setError] = useState(null);

  const inputClass =
    "mt-1 w-full rounded-xl border-2 border-forge-300 border-b-4 bg-forge-50 px-3 py-2 text-slate-900 placeholder:text-slate-500/60 focus:border-forge-600 focus:bg-white focus:outline-none focus:ring-0";
  const labelClass = "text-sm font-semibold text-slate-900";
  const checkboxLabelClass = "flex items-center gap-2 text-sm text-slate-800 cursor-pointer";

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const fullName = (formData.get("fullName") || "").trim();
    const [firstName, ...rest] = fullName.split(" ");

    // Collect selected tools
    const selectedTools = toolOptions.filter(tool => formData.get(`tool_${tool}`));
    const toolsText = selectedTools.length > 0 ? selectedTools.join(", ") : "None selected";

    const notes = [
      "Intake form submission",
      `Tools currently used: ${toolsText}`,
      `What to automate: ${formData.get("automate")?.trim() || "Not provided"}`,
      `Weekly volume: ${formData.get("volume") || "Not provided"}`,
      `Urgency: ${formData.get("urgency") || "Not provided"}`,
    ].join("\n");

    const payload = {
      firstName: firstName || fullName,
      lastName: rest.join(" "),
      email: formData.get("email")?.trim() || "",
      phone: formData.get("phone")?.trim() || "",
      company: formData.get("company")?.trim() || "",
      sourceSystem: "Intake Form",
      history: "",
      timeline: formData.get("urgency") || "Intake lead",
      notes,
      form_type: "intake",
      // SMS consent is its own field, never folded into `notes`. Sent raw —
      // "on" when ticked, null when not — because lib/sms-consent.js owns what
      // counts as a grant and stamps the disclosure text/version server-side
      // rather than trusting the client's copy of them.
      [SMS_CONSENT_FIELD]: formData.get(SMS_CONSENT_FIELD),
    };

    let res;
    try {
      res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      });
    } catch {
      setError("Your request could not be sent. Please try again.");
      setSending(false);
      return;
    }

    if (res.ok) {
      if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
        window.gtag("event", "generate_lead", {
          event_category: "Lead",
          event_label: "Intake Form",
          value: 1,
          currency: "USD",
        });
      }

      gaEvent("lead_submit", {
        form_id: "intake_start",
        page_location: typeof window !== "undefined" ? window.location.href : "",
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
      });

      setSubmitted(true);
    } else {
      setError("Your request could not be sent. Please try again.");
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-forge-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-forge-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="heading-forge-md text-slate-900">Got it.</h3>
        <p className="body-foundry text-slate-800 max-w-md mx-auto">
          We'll review your situation and get back to you within 1 business day with a clear next step.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="intake-name" className={labelClass}>Name *</label>
          <input
            id="intake-name"
            name="fullName"
            required
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="intake-company" className={labelClass}>Business name *</label>
          <input
            id="intake-company"
            name="company"
            required
            className={inputClass}
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="intake-email" className={labelClass}>Email *</label>
          <input
            id="intake-email"
            name="email"
            type="email"
            required
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="intake-phone" className={labelClass}>
            {smsConsent ? "Phone *" : "Phone (optional)"}
          </label>
          <input
            id="intake-phone"
            name="phone"
            type="tel"
            required={smsConsent}
            className={inputClass}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>What tools do you currently use?</label>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {toolOptions.map((tool) => (
            <label key={tool} className={checkboxLabelClass}>
              <input
                type="checkbox"
                name={`tool_${tool}`}
                className="w-4 h-4 rounded border-forge-300 text-forge-600 focus:ring-forge-500"
              />
              <span>{tool}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="intake-automate" className={labelClass}>Where are calls, follow-up, or recurring work getting stuck? *</label>
        <textarea
          id="intake-automate"
          name="automate"
          required
          rows={4}
          className={inputClass}
          placeholder="Tell us what your team needs help carrying..."
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="intake-volume" className={labelClass}>Roughly how many calls/bookings/orders per week?</label>
          <select id="intake-volume" name="volume" className={inputClass} defaultValue="">
            <option value="" disabled>Select...</option>
            {volumeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="intake-urgency" className={labelClass}>How urgent is this?</label>
          <select id="intake-urgency" name="urgency" className={inputClass} defaultValue="">
            <option value="" disabled>Select...</option>
            {urgencyOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <SmsConsent onChange={setSmsConsent} />
      {error && <p role="alert" className="text-sm text-red-800">{error}</p>}

      <Button type="submit" disabled={sending} className="justify-center">
        {sending ? "Sending…" : "Send to the team"}
      </Button>

      <p className="text-xs text-slate-700 text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline font-semibold text-forge-700 hover:text-forge-800">
          Privacy Policy
        </a>
        , and consent to be contacted by phone or email about your request.
        Consent to receive text messages is separate, optional, and given only by
        checking the box above. Consent is not required to make a purchase.
        We do not sell your personal information.
      </p>
    </form>
  );
}
