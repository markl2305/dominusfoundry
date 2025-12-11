"use client";

import { useState } from "react";
import Button from "./Button";

export default function ProductInquiryForm({ product }) {
  const [sending, setSending] = useState(false);
  const inputClass =
    "mt-1 w-full rounded-xl border-2 border-forge-300 border-b-4 bg-forge-50 px-3 py-2 text-slate-900 placeholder:text-slate-500/60 focus:border-forge-600 focus:bg-white focus:outline-none focus:ring-0";
  const labelClass = "text-sm font-semibold text-slate-900";
  const isOrderline = product === "Orderline";
  const volumeLabel = isOrderline ? "Order volume / re-order frequency" : "Volume / demand";
  const volumePlaceholder = isOrderline
    ? "Weekly restocks, 3-4 vendors, seasonal spikes..."
    : "200-500 calls/month, busy weekends...";
  const prioritiesLabel = isOrderline ? "How are you handling re-ordering and inventory today?" : "What matters most?";
  const prioritiesPlaceholder = isOrderline
    ? "E.g., we reorder via email and spreadsheets; 3–4 vendors; weekly stock checks..."
    : "Less manual work, fewer errors, faster ordering, better customer experience...";

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
      timeline: `${product} lead`,
      notes: [
        `${product} inquiry`,
        `Business type: ${formData.get("businessType") || "Not provided"}`,
        `Volume / demand: ${formData.get("callVolume") || "Not provided"}`,
        `What matters most: ${formData.get("priorities")?.trim() || "Not provided"}`,
      ].join("\n"),
      product,
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
          event_label: product,
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
      <input type="hidden" name="product" value={product} />
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
          <label className={labelClass}>What type of business do you run?</label>
          <select
            name="businessType"
            className={inputClass}
            defaultValue="Club / Event Space"
          >
            <option>Club / Event Space</option>
            <option>Salon</option>
            <option>Medspa</option>
            <option>Clinic</option>
            <option>Restaurant / Hospitality</option>
            <option>Other Service</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>{volumeLabel}</label>
          <select
            name="callVolume"
            className={inputClass}
            defaultValue="200-500"
          >
            <option>&lt;200</option>
            <option>200-500</option>
            <option>500-1,500</option>
            <option>1,500+</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>{prioritiesLabel}</label>
          <textarea
            name="priorities"
            rows={3}
            placeholder={prioritiesPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <Button type="submit" disabled={sending} className="justify-center">
        {sending ? "Sending…" : "Request a call"}
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
