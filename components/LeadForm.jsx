"use client";
import { useState } from "react";

export default function LeadForm({ ppc = false }) {
  const [sending, setSending] = useState(false);
  
  async function submit(e) {
    e.preventDefault();
    setSending(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, ppc })
    });
    if (res.ok) {
      window.location.href = "/thanks";
    } else {
      setSending(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">First name</label>
          <input 
            name="firstName" 
            required 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Last name</label>
          <input 
            name="lastName" 
            required 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Phone (optional)</label>
          <input 
            name="phone" 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Company</label>
          <input 
            name="company" 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Current system</label>
          <select 
            name="sourceSystem" 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2"
          >
            <option>QuickBooks Desktop</option>
            <option>QuickBooks Online (consolidation)</option>
            <option>Xero</option>
            <option>Wave</option>
            <option>Zoho Books</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Historical depth</label>
          <select 
            name="history" 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2"
          >
            <option>Lists only</option>
            <option>1 year</option>
            <option>2–3 years</option>
            <option>4+ years</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium">Timeline</label>
          <select 
            name="timeline" 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2"
          >
            <option>ASAP</option>
            <option>This month</option>
            <option>This quarter</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Notes</label>
        <textarea 
          name="notes" 
          rows={4} 
          className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2"
        />
      </div>

      <button 
        disabled={sending} 
        className="rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white shadow hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sending ? "Sending…" : "Request Quote"}
      </button>
    </form>
  );
}