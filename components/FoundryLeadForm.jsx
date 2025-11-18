"use client";

import { useState } from "react";
import Button from "./Button";

export default function FoundryLeadForm() {
  const [sending, setSending] = useState(false);

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
        <label className="text-sm font-medium text-navy-900">Full name</label>
        <input
          name="fullName"
          required
          className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          autoComplete="name"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy-900">Business name</label>
          <input
            name="company"
            required
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
            autoComplete="organization"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-navy-900">Work email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy-900">Phone</label>
          <input
            name="phone"
            required
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
            autoComplete="tel"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-navy-900">What are you most interested in?</label>
          <select
            name="interest"
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
            defaultValue="QuickBooks Migration"
          >
            <option>QuickBooks Migration</option>
            <option>InvoiceFlow</option>
            <option>Foundry Voice Concierge</option>
            <option>Not sure / need guidance</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-navy-900">What&apos;s breaking or too heavy right now?</label>
        <textarea
          name="problems"
          rows={4}
          className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          placeholder="Tell us about your books, invoicing, call volume, or other bottlenecks."
        />
      </div>

      <Button type="submit" disabled={sending} className="justify-center">
        {sending ? "Sending…" : "Talk to the Foundry"}
      </Button>

      <p className="text-xs text-navy-600 text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="underline font-semibold text-navy-500 hover:text-navy-600">
          Privacy Policy
        </a>.
      </p>
    </form>
  );
}
