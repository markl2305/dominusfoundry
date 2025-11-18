"use client";
import { useState } from "react";
import Button from "./Button";

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
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'generate_lead', {
          'event_category': 'Lead',
          'event_label': ppc ? 'QB Migration - PPC' : 'QB Migration - Organic',
          'value': 1,
          'currency': 'USD'
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
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy-900">First name</label>
          <input 
            name="firstName" 
            required 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-navy-900">Last name</label>
          <input 
            name="lastName" 
            required 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy-900">Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-navy-900">Phone (optional)</label>
          <input 
            name="phone" 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy-900">Company</label>
          <input 
            name="company" 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-navy-900">Current system</label>
          <select 
            name="sourceSystem" 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
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

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy-900">Historical depth</label>
          <select 
            name="history" 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          >
            <option>Lists only</option>
            <option>1 year</option>
            <option>2-3 years</option>
            <option>4+ years</option>
          </select>
          <p className="mt-1 text-xs text-navy-600">Most businesses migrate 2-3 years for tax and trend analysis.</p>
        </div>
        <div>
          <label className="text-sm font-medium text-navy-900">Timeline</label>
          <select 
            name="timeline" 
            className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          >
            <option>ASAP</option>
            <option>This month</option>
            <option>This quarter</option>
            <option>Flexible</option>
          </select>
          <p className="mt-1 text-xs text-navy-600">We recommend avoiding year-end close and tax season when possible.</p>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-navy-900">Notes</label>
        <textarea 
          name="notes" 
          rows={4} 
          className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          placeholder="Tell us about payroll, inventory, or anything that worries you most."
        />
      </div>

      <Button 
        type="submit"
        disabled={sending} 
        className="justify-center"
      >
        {sending ? "Sending…" : "Send My Migration Details"}
      </Button>

      <p className="text-xs text-navy-600 text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="underline font-semibold text-navy-500 hover:text-navy-600">
          Privacy Policy
        </a>.
      </p>
    </form>
  );
}
