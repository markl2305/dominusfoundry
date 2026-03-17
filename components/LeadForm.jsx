"use client";
import { useState } from "react";
import Button from "./Button";

export default function LeadForm({ ppc = false }) {
  const [sending, setSending] = useState(false);
  const inputClass =
    "mt-1 w-full rounded-xl border-2 border-forge-300 border-b-4 bg-forge-50 px-3 py-2 text-slate-900 placeholder:text-slate-500/60 focus:border-forge-600 focus:bg-white focus:outline-none focus:ring-0";
  const labelClass = "text-sm font-semibold text-slate-900";
  
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
          <label className={labelClass}>First name</label>
          <input 
            name="firstName" 
            required 
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Last name</label>
          <input 
            name="lastName" 
            required 
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone (optional)</label>
          <input 
            name="phone" 
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>Company</label>
          <input 
            name="company" 
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Current system</label>
          <select 
            name="sourceSystem" 
            className={inputClass}
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
          <label className={labelClass}>Historical depth</label>
          <select 
            name="history" 
            className={inputClass}
          >
            <option>Lists only</option>
            <option>1 year</option>
            <option>2-3 years</option>
            <option>4+ years</option>
          </select>
          <p className="mt-1 text-xs text-slate-700">Most businesses migrate 2-3 years for tax and trend analysis.</p>
        </div>
        <div>
          <label className={labelClass}>Timeline</label>
          <select 
            name="timeline" 
            className={inputClass}
          >
            <option>ASAP</option>
            <option>This month</option>
            <option>This quarter</option>
            <option>Flexible</option>
          </select>
          <p className="mt-1 text-xs text-slate-700">We recommend avoiding year-end close and tax season when possible.</p>
        </div>
      </div>

      <div>
        <label className={labelClass}>Notes</label>
        <textarea 
          name="notes" 
          rows={4} 
          className={inputClass}
          placeholder="Tell us about payroll, inventory, or anything that worries you most."
        />
      </div>

      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          name="smsConsent"
          className="mt-1 h-4 w-4 rounded border-forge-300 text-forge-600 focus:ring-forge-500"
        />
        <span className="text-xs text-slate-700">
          I agree to receive SMS/text messages from Dominus Foundry at the phone number provided.
          Message frequency varies. Message and data rates may apply. Reply STOP to opt out,
          HELP for help. View our{' '}
          <a href="/sms-terms" className="underline font-semibold text-forge-700 hover:text-forge-800">
            SMS Terms
          </a>{' '}
          and{' '}
          <a href="/privacy" className="underline font-semibold text-forge-700 hover:text-forge-800">
            Privacy Policy
          </a>.
        </span>
      </label>

      <Button
        type="submit"
        disabled={sending}
        className="justify-center"
      >
        {sending ? "Sending…" : "Send My Migration Details"}
      </Button>

      <p className="text-xs text-slate-700 text-center">
        By submitting, you agree to our{' '}
        <a href="/privacy" className="underline font-semibold text-forge-700 hover:text-forge-800">
          Privacy Policy
        </a>. Consent to receive texts is not required to make a purchase. We do not sell your personal information.
      </p>
    </form>
  );
}
