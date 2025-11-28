export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export const event = (action: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', action, params)
}
