"use client";
import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  
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
          type="tel"
          className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-navy-900">Message</label>
        <textarea 
          name="message" 
          rows={5} 
          required
          placeholder="How can we help you?"
          className="mt-1 w-full rounded-xl border border-bronze-300 px-3 py-2 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
        />
      </div>

      <Button 
        type="submit"
        disabled={sending}
        className="justify-center"
      >
        {sending ? "Sending…" : "Send Message"}
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
