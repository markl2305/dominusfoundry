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
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Last name</label>
          <input 
            name="lastName" 
            required 
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
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
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Phone (optional)</label>
          <input 
            name="phone" 
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Company</label>
          <input 
            name="company" 
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Current system</label>
          <select 
            name="sourceSystem" 
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
          >
