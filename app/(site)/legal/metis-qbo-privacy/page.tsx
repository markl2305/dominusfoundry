export const metadata = {
  title: 'Mentis QuickBooks Integration – Privacy Policy',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MentisQboPrivacyPage() {
  return (
    <section className="bg-[var(--foundry-bg)]">
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 space-y-10">
        <div className="space-y-3">
          <p className="label-foundry text-forge-700">Mentis &amp; QuickBooks</p>
          <h1 className="heading-forge-xl text-slate-900">Mentis QuickBooks Integration – Privacy Policy</h1>
          <p className="body-foundry text-slate-700">
            This integration connects our internal automation system (“Mentis”) to our QuickBooks Online account in order to read and process accounting data such as customers,
            invoices, and payments.
          </p>
        </div>

        <div className="space-y-6 body-foundry text-slate-800">
          <div className="space-y-3">
            <h2 className="heading-forge-md text-slate-900">What data is accessed</h2>
            <ul className="list-disc list-outside space-y-2 pl-5">
              <li>QuickBooks company data (customers, invoices, payments, and related objects)</li>
              <li>Basic company profile information from Intuit</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="heading-forge-md text-slate-900">How we use the data</h2>
            <ul className="list-disc list-outside space-y-2 pl-5">
              <li>To automate internal workflows such as retrieving unpaid and past-due invoices</li>
              <li>To support reporting, collections, and billing activities inside our business</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="heading-forge-md text-slate-900">Who can see the data</h2>
            <ul className="list-disc list-outside space-y-2 pl-5">
              <li>
                Only authorized team members and contractors of Dominus Foundry, LLC and CalLord Unified Technologies, LLC who already have legitimate access to this accounting data.
              </li>
              <li>
                We do not resell or share this data with third parties except service providers that host our systems (e.g., n8n, cloud infrastructure) under appropriate agreements.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="heading-forge-md text-slate-900">Data security</h2>
            <ul className="list-disc list-outside space-y-2 pl-5">
              <li>Access to this integration is restricted via authentication and role-based access control.</li>
              <li>Credentials and API keys are stored securely and are not hard-coded in public repositories.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="heading-forge-md text-slate-900">Contact</h2>
            <p>
              For questions about this privacy policy, contact: <a className="underline font-semibold" href="mailto:support@dominusfoundry.com">support@dominusfoundry.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
