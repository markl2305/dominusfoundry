'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from './SiteHeader'

const HIDE_HEADER_PREFIXES = ['/qb-migration', '/invoiceflow', '/voice-concierge']

function shouldHideHeader(pathname) {
  if (!pathname) return false
  return HIDE_HEADER_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

export default function AppShell({ children }) {
  const pathname = usePathname()
  const hideHeader = shouldHideHeader(pathname)

  return (
    <>
      {!hideHeader && <SiteHeader />}
      {children}
    </>
  )
}
