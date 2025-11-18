"use client";

import { useState } from "react";
import Button from "./Button";

export default function InvoiceFlowForm() {
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
      sourceSystem: formData.get("accountingTool") || "",
      history: formData.get("invoiceVolume") || "",
      timeline: "InvoiceFlow lead",
      notes: [
        "InvoiceFlow inquiry",
        `Current accounting tool: ${formData.get("accountingTool") || "Not provided"}`,
        `Monthly invoice volume: ${formData.get("invoiceVolume") || "Not provided"}`,
        `Biggest frustration: ${formData.get("frustrations")?.trim() || "Not provided"}`,
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
          event_label: "InvoiceFlow",
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
          <label className="text-sm font-medium text-navy-900">Current accounting tool</label>
          <select
            name="accountingTool"
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
            defaultValue="QuickBooks Online"
          >
            <option>QuickBooks Online</option>
            <option>QuickBooks Desktop</option>
            <option>Xero</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy-900">Monthly invoice volume</label>
          <select
            name="invoiceVolume"
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
            defaultValue="50-250"
          >
            <option>&lt;50</option>
            <option>50-250</option>
            <option>250-1,000</option>
            <option>1,000+</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-navy-900">Biggest frustration</label>
          <textarea
            name="frustrations"
            rows={3}
            placeholder="Late payments, data mess, chasing people, something else?"
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          />
        </div>
      </div>

      <Button type="submit" disabled={sending} className="justify-center">
        {sending ? "Sending…" : "Get My InvoiceFlow Plan"}
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
