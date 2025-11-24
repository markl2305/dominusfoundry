"use client";

import { useState } from "react";
import Button from "./Button";

export default function InvoiceFlowForm() {
  const [sending, setSending] = useState(false);
  const inputClass =
    "mt-1 w-full rounded-xl border-2 border-forge-300 border-b-4 bg-forge-50 px-3 py-2 text-slate-900 placeholder:text-slate-500/60 focus:border-forge-600 focus:bg-white focus:outline-none focus:ring-0";
  const labelClass = "text-sm font-semibold text-slate-900";

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
          <label className={labelClass}>Current accounting tool</label>
          <select
            name="accountingTool"
            className={inputClass}
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
          <label className={labelClass}>Monthly invoice volume</label>
          <select
            name="invoiceVolume"
            className={inputClass}
            defaultValue="50-250"
          >
            <option>&lt;50</option>
            <option>50-250</option>
            <option>250-1,000</option>
            <option>1,000+</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Biggest frustration</label>
          <textarea
            name="frustrations"
            rows={3}
            placeholder="Late payments, data mess, chasing people, something else?"
            className={inputClass}
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
