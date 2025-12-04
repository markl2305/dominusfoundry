'use client'

import { useEffect, useCallback } from 'react'

const AGENT_ID = 'agent_3101kbgvsz5xe57v388y5qcrvvaf'

export function HualiAgentActions() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Remove any existing ElevenLabs widget so we only mount the Huali agent here.
    document.querySelectorAll('elevenlabs-convai').forEach((node) => node.remove())

    const widget = document.createElement('elevenlabs-convai')
    widget.setAttribute('agent-id', AGENT_ID)
    widget.setAttribute('style', 'position:fixed;bottom:16px;right:16px;z-index:50;')
    document.body.appendChild(widget)

    if (!document.querySelector('script[data-elevenlabs-convai="huali"]')) {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
      script.async = true
      script.type = 'text/javascript'
      script.dataset.elevenlabsConvai = 'huali'
      document.body.appendChild(script)
    }
  }, [])

  const openWidget = useCallback(() => {
    if (typeof window === 'undefined') return
    const anyWin = window as any
    if (anyWin?.ElevenLabs?.open) return anyWin.ElevenLabs.open()
    if (anyWin?.elevenlabs?.open) return anyWin.elevenlabs.open()
    const widgetEl = document.querySelector('elevenlabs-convai') as HTMLElement | null
    if (widgetEl) widgetEl.dispatchEvent(new Event('click'))
  }, [])

  return (
    <div className="space-y-3">
      <button
        id="huali-call-agent"
        type="button"
        onClick={openWidget}
        className="w-full rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-black shadow-lg shadow-amber-900/40 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-black"
      >
        Call Huali Order Line
      </button>
      <a
        href="tel:5053374443"
        className="block text-center text-sm text-gray-300 underline underline-offset-4 hover:text-amber-200"
      >
        Or call 505-337-4443 from your phone
      </a>
    </div>
  )
}
