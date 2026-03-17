"use client";
import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const inputClass =
    "mt-1 w-full rounded-xl border-2 border-forge-300 border-b-4 bg-forge-50 px-3 py-2 text-slate-900 placeholder:text-slate-500/60 focus:border-forge-600 focus:bg-white focus:outline-none focus:ring-0";
  const labelClass = "text-sm font-semibold text-slate-900";
  
  async function submit(e) {
    e.preventDefault();
    setSending(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    
    if (res.ok) {
      // Fire GA4 event for general contact form
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'contact_form_submit', {
          'event_category': 'Contact',
          'event_label': 'General Contact Form',
          'value': 0.5, // Lower value than lead form
          'currency': 'USD'
        });
      }
      
      // Small delay to ensure GA4 event fires before redirect
      setTimeout(() => {
        window.location.href = "/thanks";
      }, 300);
    } else {
      setSending(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
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
          type="tel"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea 
          name="message" 
          rows={5} 
          required
          placeholder="How can we help you?"
          className={inputClass}
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
        {sending ? "Sending…" : "Send Message"}
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
