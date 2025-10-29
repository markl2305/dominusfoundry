// app/ga-pageview.js
'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function GA4PageView() {
  const pathname = usePathname()
  const search = useSearchParams()

  useEffect(() => {
    if (!window.gtag) return
    const url = pathname + (search?.toString() ? `?${search}` : '')
    window.gtag('event', 'page_view', { page_path: url })
  }, [pathname, search])

  return null
}
