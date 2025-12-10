'use client'

import { FormEvent, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { event as gaEvent } from '@/lib/gtag'

type VoiceConciergeLeadFormProps = {
  variant?: 'full' | 'condensed'
  id?: string
}

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
  return `w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 ${extra}`
}

export default function VoiceConciergeLeadForm({ variant = 'full', id }: VoiceConciergeLeadFormProps) {
  const searchParams = useSearchParams()
  const [values, setValues] = useState<LeadState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const isCondensed = variant === 'condensed'

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
  const requiredFilled =
    Number(Boolean(values.name)) + Number(Boolean(values.email)) + Number(Boolean(values.company))
  const progressText = `Progress: ${requiredFilled}/3 required fields complete`

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
    setFieldErrors({})

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

    const errors: Record<string, string> = {}
    if (!name) errors.name = 'Name is required'
    if (!email) errors.email = 'Email is required'
    if (!company) errors.company = 'Company is required'
    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setError('Please complete required fields.')
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
      setError('Something went wrong. Please try again, or email foundry@dominusfoundry.com.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-500/40 bg-emerald-900/20 px-4 py-5 text-sm text-emerald-100">
        Thanks—your details are in. We&apos;ll review and follow up within one business day with a live demo link and a
        15-minute fit call if it&apos;s a match.
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} id={id}>
      {!isCondensed && <p className="text-xs text-neutral-400">{progressText}</p>}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-800">Name *</label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className={inputClass()}
            autoComplete="name"
          />
          {fieldErrors.name && <p className="text-xs text-rose-300">{fieldErrors.name}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-800">Email *</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            placeholder="you@company.com"
            className={inputClass()}
            autoComplete="email"
          />
          {fieldErrors.email && <p className="text-xs text-rose-300">{fieldErrors.email}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-800">Business name *</label>
          <input
            name="company"
            value={values.company}
            onChange={handleChange}
            required
            placeholder="Acme Plumbing"
            className={inputClass()}
            autoComplete="organization"
          />
          {fieldErrors.company && <p className="text-xs text-rose-300">{fieldErrors.company}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-800">Monthly call volume</label>
          <select
            name="monthlyCallVolume"
            value={values.monthlyCallVolume}
            onChange={handleChange}
            className={inputClass()}
          >
            <option value="">Select volume</option>
            <option>{'<100'}</option>
            <option>100–300</option>
            <option>300–1,000</option>
            <option>1,000+</option>
          </select>
        </div>
      </div>

      {!isCondensed && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-800">Website</label>
            <input
              name="website"
              value={values.website}
              onChange={handleChange}
              placeholder="https://"
              className={inputClass()}
              autoComplete="url"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-800">Industry</label>
            <select name="industry" value={values.industry} onChange={handleChange} className={inputClass()}>
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
        </div>
      )}

      {!isCondensed && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-800">Avg appointment value</label>
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
            <label className="text-sm font-medium text-gray-800">Timeline</label>
            <select name="timeline" value={values.timeline} onChange={handleChange} className={inputClass()}>
              <option value="">Select</option>
              <option>ASAP</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>Just exploring</option>
            </select>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-800">
          {isCondensed
            ? 'Where do missed calls or long holds hurt you most?'
            : 'What&apos;s the most painful part of how your phone and bookings work today?'}
        </label>
        <textarea
          name="biggestIssue"
          value={values.biggestIssue}
          onChange={handleChange}
          rows={isCondensed ? 3 : 4}
          placeholder="Describe where missed calls or long holds cost you"
          className={inputClass()}
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="space-y-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-700 disabled:opacity-60 md:w-auto"
        >
          {isSubmitting ? 'Submitting…' : 'Request My Fit Call'}
        </button>
        <p className="text-[11px] text-neutral-500">Typical calls last 15 minutes.</p>
      </div>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-3 text-xs text-neutral-300">
        <p className="font-semibold text-neutral-100">What happens next?</p>
        <ol className="mt-2 space-y-1 list-decimal list-inside">
          <li>We review your answers the same day.</li>
          <li>You get a live demo link within 24 hours.</li>
          <li>We schedule a 15-minute fit call if it&apos;s a match.</li>
        </ol>
      </div>

      <p className="text-xs text-neutral-400">
        By submitting, you agree to our{' '}
        <a href="/privacy" className="underline font-semibold text-emerald-300 hover:text-emerald-200">
          Privacy Policy
        </a>
        {' '}and consent to receive calls, emails, and texts (including automated) about your request. Message/data rates may
        apply. Reply STOP to opt out. We do not sell your personal information.
      </p>
    </form>
  )
}
