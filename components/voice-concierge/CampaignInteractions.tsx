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
    <div className="flex flex-col gap-3">
      <button
        type="submit"
        form="vc-fit-call-form"
        className="inline-flex w-full items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-emerald-400 md:w-auto"
      >
        Book a 15-Minute Fit Call
      </button>
      <p className="text-xs text-neutral-400">
        Or click the Voice Concierge icon in the bottom-right corner to hear a live demo.
      </p>
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
    document.getElementById('vc-fit-call-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!show) return null

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 hidden bg-black/70 px-4 py-3 text-sm text-white backdrop-blur md:flex md:items-center md:justify-center">
        <button
          onClick={scrollToForm}
          className="rounded-md bg-emerald-500 px-4 py-2 font-semibold text-black shadow-lg ring-1 ring-emerald-400/40 transition hover:bg-emerald-400"
        >
          Book a 15-Minute Fit Call
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-2 bg-black/80 px-4 py-3 text-sm text-white backdrop-blur md:hidden">
        <button
          onClick={scrollToForm}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-500 px-3 py-3 font-semibold text-black shadow-lg"
        >
          ✉️ Book a 15-Minute Fit Call
        </button>
      </div>
    </>
  )
}
