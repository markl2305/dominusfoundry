export const metadata = {
  title: 'Mentis QuickBooks Integration – End-User License Agreement',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MentisQboEulaPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 space-y-10">
        <div className="space-y-3">
          <p className="label-foundry text-forge-700">Mentis &amp; QuickBooks</p>
          <h1 className="heading-forge-xl text-slate-900">Mentis QuickBooks Integration – End-User License Agreement</h1>
          <p className="body-foundry text-slate-700">
            This integration is owned and operated by Dominus Foundry, LLC and CalLord Unified Technologies, LLC (“we,” “us,” or “our”).
            It is provided solely for internal business use by our team and authorized contractors.
          </p>
        </div>

        <div className="space-y-6 body-foundry text-slate-800">
          <div className="space-y-3">
            <h2 className="heading-forge-md text-slate-900">By using this integration, you agree that:</h2>
            <ul className="list-disc list-outside space-y-2 pl-5">
              <li>You are authorized by our company to access QuickBooks data.</li>
              <li>You will only use the integration in connection with legitimate business activities and in compliance with applicable law.</li>
              <li>You will not attempt to reverse engineer, resell, or provide this integration to third parties outside our organization.</li>
              <li>All QuickBooks data accessed through this integration remains the property of our business and is subject to our internal data-handling policies.</li>
            </ul>
          </div>

          <p>
            We may modify, suspend, or discontinue this integration at any time. This integration is provided “as-is” without warranties of any kind,
            to the maximum extent permitted by law.
          </p>

          <div className="space-y-2">
            <h2 className="heading-forge-md text-slate-900">Contact</h2>
            <p>
              If you have questions about this agreement, contact: <a className="underline font-semibold" href="mailto:support@dominusfoundry.com">support@dominusfoundry.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
