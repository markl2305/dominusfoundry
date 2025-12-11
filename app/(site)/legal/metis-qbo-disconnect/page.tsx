export const metadata = {
  title: 'Mentis QuickBooks Integration – Disconnected',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MentisQboDisconnectPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 space-y-10">
        <div className="space-y-3">
          <p className="label-foundry text-forge-700">Mentis &amp; QuickBooks</p>
          <h1 className="heading-forge-xl text-slate-900">Mentis QuickBooks Integration – Disconnected</h1>
          <p className="body-foundry text-slate-700">
            This page confirms that the Mentis QuickBooks integration has been disconnected from your QuickBooks Online company.
          </p>
        </div>

        <div className="space-y-6 body-foundry text-slate-800">
          <p>
            If this disconnection was intentional, no further action is required. Mentis will no longer access or process data from your QuickBooks Online account.
          </p>
          <p>
            If this was unintentional or you need to restore functionality, you can reconnect the integration by re-authorizing the app from within QuickBooks Online and updating the
            connection inside our automation platform (n8n/Mentis).
          </p>
          <div className="space-y-2">
            <h2 className="heading-forge-md text-slate-900">Contact</h2>
            <p>
              For assistance, please contact: <a className="underline font-semibold" href="mailto:support@dominusfoundry.com">support@dominusfoundry.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
