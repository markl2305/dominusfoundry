"use client";

import { useState } from "react";
import Button from "./Button";
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

  const inputClass =
    "mt-1 w-full rounded-xl border-2 border-forge-300 border-b-4 bg-forge-50 px-3 py-2 text-slate-900 placeholder:text-slate-500/60 focus:border-forge-600 focus:bg-white focus:outline-none focus:ring-0";
  const labelClass = "text-sm font-semibold text-slate-900";
  const checkboxLabelClass = "flex items-center gap-2 text-sm text-slate-800 cursor-pointer";

  async function submit(e) {
    e.preventDefault();
    setSending(true);

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
    };

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

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
          <label className={labelClass}>Name *</label>
          <input
            name="fullName"
            required
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label className={labelClass}>Business name *</label>
          <input
            name="company"
            required
            className={inputClass}
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>Email *</label>
          <input
            name="email"
            type="email"
            required
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label className={labelClass}>Phone (optional)</label>
          <input
            name="phone"
            type="tel"
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
        <label className={labelClass}>What do you want automated? *</label>
        <textarea
          name="automate"
          required
          rows={4}
          className={inputClass}
          placeholder="Tell us what's broken or what you're tired of doing manually..."
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>Roughly how many calls/bookings/orders per week?</label>
          <select name="volume" className={inputClass} defaultValue="">
            <option value="" disabled>Select...</option>
            {volumeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>How urgent is this?</label>
          <select name="urgency" className={inputClass} defaultValue="">
            <option value="" disabled>Select...</option>
            {urgencyOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <Button type="submit" disabled={sending} className="justify-center">
        {sending ? "Sending…" : "Get my system design"}
      </Button>

      <p className="text-xs text-slate-700 text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline font-semibold text-forge-700 hover:text-forge-800">
          Privacy Policy
        </a>{" "}
        and consent to receive calls, emails, and texts (including automated) about your request. Message/data rates may apply. Reply STOP to opt out. We do not sell your personal information.
      </p>
    </form>
  );
}
