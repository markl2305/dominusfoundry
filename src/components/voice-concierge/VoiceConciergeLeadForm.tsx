'use client'

import { FormEvent, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { event as gaEvent } from '@/lib/gtag'

type LeadState = {
  name: string
  email: string
  company: string
  website: string
  industry: string
  monthlyCallVolume: string
  avgAppointmentValue: string
  biggestIssue: string
  timeline: string
}

const initialState: LeadState = {
  name: '',
  email: '',
  company: '',
  website: '',
  industry: '',
  monthlyCallVolume: '',
  avgAppointmentValue: '',
  biggestIssue: '',
  timeline: '',
}

function inputClass(extra = '') {
  return `w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 ${extra}`
}

export default function VoiceConciergeLeadForm() {
  const searchParams = useSearchParams()
  const [values, setValues] = useState<LeadState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const utms = useMemo(() => {
    const get = (key: string) => searchParams?.get(key) || ''
    return {
      utmSource: get('utm_source'),
      utmMedium: get('utm_medium'),
      utmCampaign: get('utm_campaign'),
      utmContent: get('utm_content'),
      utmTerm: get('utm_term'),
    }
  }, [searchParams])

  const leadSource = utms.utmSource || 'direct'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const {
      name,
      email,
      company,
      website,
      industry,
      monthlyCallVolume,
      avgAppointmentValue,
      biggestIssue,
      timeline,
    } = values

    if (!name || !email || !company) {
      setError('Name, email, and company are required.')
      setIsSubmitting(false)
      return
    }

    const payload = {
      source: 'voice-concierge-campaign',
      product: 'voice_concierge',
      name,
      email,
      company,
      website,
      industry,
      monthlyCallVolume,
      avgAppointmentValue,
      biggestIssue,
      timeline,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      utmContent: utms.utmContent,
      utmTerm: utms.utmTerm,
      // Extras to keep existing email payloads populated
      firstName: name,
      lastName: '',
      phone: '',
      notes: `Voice Concierge campaign lead\nIndustry: ${industry}\nMonthly call volume: ${monthlyCallVolume}\nAvg appointment value: ${avgAppointmentValue}\nBiggest issue: ${biggestIssue}\nTimeline: ${timeline}\nWebsite: ${website}\nUTMs: ${JSON.stringify(utms)}`,
      timelineLabel: timeline,
      sourceSystem: 'Voice Concierge',
      history: monthlyCallVolume,
    }

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error(`Lead submit failed with status ${res.status}`)
      }

      setSubmitted(true)
      setValues(initialState)

      gaEvent('lead_submit', {
        form_id: 'voice_concierge_campaign',
        form_name: 'Voice Concierge Campaign Lead',
        product: 'voice_concierge',
        lead_source: leadSource,
        monthly_call_volume: monthlyCallVolume,
        avg_appointment_value: avgAppointmentValue,
        timeline,
        page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
      })
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again, or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-500/40 bg-emerald-900/20 px-4 py-5 text-sm text-emerald-100">
        Thanks—your details are in. We&apos;ll review and follow up within one business day with a demo and next steps if it&apos;s a fit.
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-200">Name *</label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            className={inputClass()}
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-200">Email *</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            className={inputClass()}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-200">Company *</label>
          <input
            name="company"
            value={values.company}
            onChange={handleChange}
            required
            className={inputClass()}
            autoComplete="organization"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-200">Website</label>
          <input
            name="website"
            value={values.website}
            onChange={handleChange}
            placeholder="https://"
            className={inputClass()}
            autoComplete="url"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-200">Industry</label>
          <select
            name="industry"
            value={values.industry}
            onChange={handleChange}
            className={inputClass()}
          >
            <option value="">Select</option>
            <option>Med Spa / Aesthetics</option>
            <option>Salon / Spa</option>
            <option>Clinic / Practice</option>
            <option>Event Venue</option>
            <option>Home Services</option>
            <option>Hospitality</option>
            <option>Professional Services</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-200">Monthly call volume</label>
          <select
            name="monthlyCallVolume"
            value={values.monthlyCallVolume}
            onChange={handleChange}
            className={inputClass()}
          >
            <option value="">Select</option>
            <option>{'<100'}</option>
            <option>100–300</option>
            <option>300–1,000</option>
            <option>1,000+</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-200">Avg appointment value</label>
          <select
            name="avgAppointmentValue"
            value={values.avgAppointmentValue}
            onChange={handleChange}
            className={inputClass()}
          >
            <option value="">Select</option>
            <option>{'<$100'}</option>
            <option>$100–$500</option>
            <option>$500+</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-200">Timeline</label>
          <select
            name="timeline"
            value={values.timeline}
            onChange={handleChange}
            className={inputClass()}
          >
            <option value="">Select</option>
            <option>ASAP</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-200">
          What&apos;s the most painful part of how your phone and bookings work today?
        </label>
        <textarea
          name="biggestIssue"
          value={values.biggestIssue}
          onChange={handleChange}
          rows={4}
          className={inputClass()}
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting…' : 'Request Demo'}
      </button>
    </form>
  )
}
