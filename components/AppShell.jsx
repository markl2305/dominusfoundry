'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from './SiteHeader'
import { DemoWidgetLoader } from './voice-concierge/CampaignInteractions'

export default function AppShell({ children }) {
  const pathname = usePathname()
  const hideHeader = pathname?.startsWith('/voice-concierge/campaign')
  const hideWidget = pathname === '/huali-order-info'

  return (
    <>
      {!hideHeader && <SiteHeader />}
      {children}
      {!hideWidget && <DemoWidgetLoader />}
    </>
  )
}
