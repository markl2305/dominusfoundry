'use client'

import SiteHeader from './SiteHeader'

export default function AppShell({ children }) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  )
}
