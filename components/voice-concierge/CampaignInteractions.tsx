'use client'

import { useEffect, useState } from 'react'

function openElevenLabsWidget() {
  if (typeof window === 'undefined') return
  const anyWin = window as any
  if (anyWin?.ElevenLabs?.open) return anyWin.ElevenLabs.open()
  if (anyWin?.elevenlabs?.open) return anyWin.elevenlabs.open()
  const widgetEl = document.querySelector('elevenlabs-convai') as HTMLElement | null
  if (widgetEl) {
    widgetEl.dispatchEvent(new Event('click'))
    return
  }
  console.warn('ElevenLabs widget not ready')
}

export function DemoWidgetLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (document.querySelector('script[data-elevenlabs-convai="true"]')) return

    const widget = document.createElement('elevenlabs-convai')
    widget.setAttribute('agent-id', 'agent_3001kb72g41pex2sq74tavnbze70')
    widget.setAttribute('style', 'position:fixed;bottom:16px;right:16px;z-index:50;')
    document.body.appendChild(widget)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
    script.async = true
    script.type = 'text/javascript'
    script.dataset.elevenlabsConvai = 'true'
    document.body.appendChild(script)
  }, [])
  return <div id="elevenlabs-widget-root" />
}

export function HeroCTAButtons() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-neutral-200">
        Talk to Voice Concierge now using the widget in the bottom-right (voice + text, no phone needed).
      </p>
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
        <a href="tel:+15052732847" className="text-emerald-200 underline">
          Call Demo: (505) 273-2847
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
          onClick={scrollToForm}
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-emerald-500 px-3 py-3 font-semibold text-black"
        >
          ✉️ Strategy Call
        </button>
      </div>
    </>
  )
}
