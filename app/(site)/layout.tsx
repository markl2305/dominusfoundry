export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-tan-200 text-navy-800 flex flex-col">
      <main className="flex-1">{children}</main>
    </div>
  )
}
