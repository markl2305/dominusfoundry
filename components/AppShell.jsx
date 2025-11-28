'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from './SiteHeader'

export default function AppShell({ children }) {
  const pathname = usePathname()
  const hideHeader = pathname?.startsWith('/voice-concierge/campaign')

  return (
    <>
      {!hideHeader && <SiteHeader />}
      {children}
    </>
  )
}
