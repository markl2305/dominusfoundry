"use client";

import { useState } from "react";
import Button from "./Button";

export default function VoiceConciergeForm() {
  const [sending, setSending] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const fullName = (formData.get("fullName") || "").trim();
    const [firstName, ...rest] = fullName.split(" ");

    const payload = {
      firstName: firstName || fullName,
      lastName: rest.join(" "),
      email: formData.get("email")?.trim() || "",
      phone: formData.get("phone")?.trim() || "",
      company: formData.get("company")?.trim() || "",
      sourceSystem: formData.get("businessType") || "",
      history: formData.get("callVolume") || "",
      timeline: "Foundry Voice Concierge lead",
      notes: [
        "Voice Concierge inquiry",
        `Business type: ${formData.get("businessType") || "Not provided"}`,
        `Monthly call volume: ${formData.get("callVolume") || "Not provided"}`,
        `What matters most: ${formData.get("priorities")?.trim() || "Not provided"}`,
      ].join("\n"),
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
          event_label: "Foundry Voice Concierge",
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
          <label className="text-sm font-medium text-navy-900">Business type</label>
          <select
            name="businessType"
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
            defaultValue="Club / Event Space"
          >
            <option>Club / Event Space</option>
            <option>Salon</option>
            <option>Medspa</option>
            <option>Clinic</option>
            <option>Other Service</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy-900">Approximate monthly call volume</label>
          <select
            name="callVolume"
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
            defaultValue="200-500"
          >
            <option>&lt;200</option>
            <option>200-500</option>
            <option>500-1,500</option>
            <option>1,500+</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-navy-900">What matters most?</label>
          <textarea
            name="priorities"
            rows={3}
            placeholder="No missed calls, better booking rate, member experience, staff interruptions..."
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          />
        </div>
      </div>

      <Button type="submit" disabled={sending} className="justify-center">
        {sending ? "Sending…" : "Request a Live Demo"}
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
