"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "./Button";
import { event as gaEvent } from "@/lib/gtag";

export default function FoundryLeadForm() {
  const [sending, setSending] = useState(false);
  const searchParams = useSearchParams();
  const inputClass =
    "mt-1 w-full rounded-xl border-2 border-forge-300 border-b-4 bg-forge-50 px-3 py-2 text-slate-900 placeholder:text-slate-500/60 focus:border-forge-600 focus:bg-white focus:outline-none focus:ring-0";
  const labelClass = "text-sm font-semibold text-slate-900";

  const interestOptions = [
    "Voice Concierge (Flagship)",
    "Lead Intake to Booking",
    "Client Onboarding Engine",
    "Lead-to-Cash (Invoicing + AR)",
    "Support Triage Desk",
    "Ops Reporting & Intelligence",
    "Document & Compliance Automations",
    "Recruiting & Hiring Pipeline",
    "Vendor & Purchasing Workflow",
    "Mentis Standard (OS upgrade)",
    "Not sure / need guidance",
  ];
  const interestParam = searchParams?.get("interest");
  const interestDefault = interestOptions.includes(interestParam)
    ? interestParam
    : "Not sure / need guidance";

  async function submit(e) {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const fullName = (formData.get("fullName") || "").trim();
    const [firstName, ...rest] = fullName.split(" ");

    const interest = formData.get("interest") || "Not sure / need guidance";
    const notes = [
      "Foundry home inquiry",
      `Interest: ${interest}`,
      `What feels heavy: ${formData.get("problems")?.trim() || "Not provided"}`,
    ].join("\n");

    const payload = {
      firstName: firstName || fullName,
      lastName: rest.join(" "),
      email: formData.get("email")?.trim() || "",
      phone: formData.get("phone")?.trim() || "",
      company: formData.get("company")?.trim() || "",
      sourceSystem: interest,
      history: "",
      timeline: "Foundry home lead",
      notes,
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
          event_label: "Foundry Home",
          value: 1,
          currency: "USD",
        });
      }

      gaEvent("lead_submit", {
        form_id: "dominusfoundry_main",
        page_location: typeof window !== "undefined" ? window.location.href : "",
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
      });

      setTimeout(() => {
        window.location.href = "/thanks";
      }, 300);
    } else {
      setSending(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div>
        <label className={labelClass}>Full name</label>
        <input
          name="fullName"
          required
          className={inputClass}
          autoComplete="name"
          />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>Business name</label>
          <input
            name="company"
            required
            className={inputClass}
            autoComplete="organization"
            />
        </div>
        <div>
          <label className={labelClass}>Work email</label>
          <input
            name="email"
            type="email"
            required
            className={inputClass}
            autoComplete="email"
            />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>Phone</label>
          <input
            name="phone"
            required
            className={inputClass}
            autoComplete="tel"
            />
        </div>
        <div>
          <label className={labelClass}>What are you most interested in?</label>
          <select
            name="interest"
            className={inputClass}
            defaultValue={interestDefault}
          >
            {interestOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>What&apos;s breaking or too heavy right now?</label>
        <textarea
          name="problems"
          rows={4}
          className={inputClass}
          placeholder="Tell us about your books, invoicing, call volume, or other bottlenecks."
        />
      </div>

      <Button type="submit" disabled={sending} className="justify-center">
        {sending ? "Sending…" : "Talk to the Foundry"}
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
