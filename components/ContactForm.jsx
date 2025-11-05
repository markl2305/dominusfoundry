"use client";
import { useState } from "react";

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
      window.location.href = "/thanks";
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

      <button 
        disabled={sending} 
        className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sending ? "Sending…" : "Send Message"}
      </button>

      <p className="text-xs text-navy-600 text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="underline font-semibold text-navy-500 hover:text-navy-600">
          Privacy Policy
        </a>.
      </p>
    </form>
  );
}
