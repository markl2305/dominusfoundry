'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

function openElevenLabsWidget() {
  if (typeof window === 'undefined') return
  const anyWin = window as any
  if (anyWin?.ElevenLabs?.open) {
    anyWin.ElevenLabs.open()
  } else if (anyWin?.elevenlabs?.open) {
    anyWin.elevenlabs.open()
  } else {
    console.warn('ElevenLabs widget not ready')
  }
}

export function DemoWidgetLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (document.getElementById('elevenlabs-conversational-widget')) return
    const script = document.createElement('script')
    script.id = 'elevenlabs-conversational-widget'
    script.src = 'https://cdn.elevenlabs.io/speech-synthesis-widget/1.2.0/dist/elevenlabs-widget.umd.js'
    script.async = true
    script.dataset.botId = 'VOICE_CONCIERGE_BOT_ID'
    script.dataset.showWidget = 'true'
    script.dataset.mode = 'voice+text'
    script.dataset.firstMessage =
      "Hi! I'm the Voice Concierge demo. Want to see how I'd handle a booking call for your business? Just tell me you'd like to book an appointment."
    document.body.appendChild(script)
  }, [])
  return <div id="elevenlabs-widget-root" />
}

export function HeroCTAButtons() {
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={openElevenLabsWidget}
        className="inline-flex w-full items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-emerald-400 md:w-auto"
      >
        Talk to Voice Concierge Now
      </button>
      <p className="text-xs text-neutral-400">No phone needed—chat with our AI concierge right in your browser.</p>
      <a
        href="#demo-form"
        className="inline-flex w-full items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/40 transition hover:bg-white/15 md:w-auto"
      >
        Request Strategy Call
      </a>
      <p className="text-xs text-neutral-400">Or call our demo line to hear it in action: (505) 273-2847</p>
    </div>
  )
}

export function StickyCTABars() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToForm = () => {
    if (typeof document === 'undefined') return
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!show) return null

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 hidden bg-black/70 px-4 py-3 text-sm text-white backdrop-blur md:flex md:items-center md:justify-center md:gap-4">
        <button
          onClick={openElevenLabsWidget}
          className="rounded-md bg-emerald-500 px-4 py-2 font-semibold text-black shadow hover:bg-emerald-400"
        >
          Try Demo in Browser
        </button>
        <a href="tel:+15052732847" className="text-emerald-200 underline">
          Or Call: (505) 273-2847
        </a>
        <button
          onClick={scrollToForm}
          className="rounded-md bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-emerald-400/40 hover:bg-white/15"
        >
          Request Strategy Call
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-2 bg-black/80 px-4 py-3 text-sm text-white backdrop-blur md:hidden">
        <a
          href="tel:+15052732847"
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-white/10 px-3 py-3 font-semibold text-white ring-1 ring-white/20"
        >
          📞 Call Demo
        </a>
        <button
          onClick={openElevenLabsWidget}
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-emerald-500 px-3 py-3 font-semibold text-black"
        >
          💬 Try in Browser
        </button>
      </div>
    </>
  )
}

export function MiniHeroForm() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')
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

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) {
      setError('Name and email are required.')
      return
    }
    setStatus('submitting')
    setError(null)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'voice-concierge-campaign-mini',
          product: 'voice_concierge',
          email,
          firstName: name,
          lastName: '',
          company: '',
          notes: 'Mini form: send demo line + schedule strategy call',
          utmSource: utms.utmSource,
          utmMedium: utms.utmMedium,
          utmCampaign: utms.utmCampaign,
          utmContent: utms.utmContent,
          utmTerm: utms.utmTerm,
        }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('done')
      setEmail('')
      setName('')
    } catch (err) {
      console.error(err)
      setStatus('error')
      setError('Please try again or call the demo line.')
    }
  }

  if (status === 'done') {
    return <p className="text-sm text-emerald-200">Thanks—check your inbox for demo details.</p>
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-2 rounded-lg border border-neutral-800 bg-neutral-900/70 p-3 md:flex-row md:items-center md:gap-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Work email"
        className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
        required
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-emerald-400 disabled:opacity-60 md:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Get Demo Access'}
      </button>
      {error && <p className="text-xs text-rose-300">{error}</p>}
    </form>
    <p className="mt-1 text-[11px] text-neutral-400">
      We’ll send the demo line and a strategy call link. We do not sell your information. See our{' '}
      <a href="/privacy" className="underline text-emerald-300 hover:text-emerald-200">
        Privacy Policy
      </a>.
    </p>
  )
}
