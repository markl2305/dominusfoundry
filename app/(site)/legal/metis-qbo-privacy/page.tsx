import { PageHero } from '@/components/site/primitives';
import ArticleIndex from '@/components/site/qp/ArticleIndex';
import '@/components/site/pages/legal.css';
import '@/app/styles/pages/qp-b.css';
import '@/app/styles/pages/articles.css';

export const metadata = {
  title: 'Mentis™ QuickBooks Integration – Privacy Policy',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MentisQboPrivacyPage() {
  return (
    <div className="qp qp-plain qp-legal">
      <PageHero
        eyebrow={<>Mentis™ &amp; QuickBooks</>}
        title="Mentis™ QuickBooks Integration – Privacy Policy"
        lead={
          <p className="lead">
              This integration connects our internal automation system (“Mentis™”) to our QuickBooks Online account in order to read and process accounting data such as customers,
              invoices, and payments.
          </p>
        }
      />

      <section className="section pg-legal">
        <div className="wrap">
        <div className="qp-read has-index">
        <div className="qp-read-col">
          <div className="article">
            <section>
              <h2>What data is accessed</h2>
              <ul>
                <li>QuickBooks company data (customers, invoices, payments, and related objects)</li>
                <li>Basic company profile information from Intuit</li>
              </ul>
            </section>

            <section>
              <h2>How we use the data</h2>
              <ul>
                <li>To automate internal workflows such as retrieving unpaid and past-due invoices</li>
                <li>To support reporting, collections, and billing activities inside our business</li>
              </ul>
            </section>

            <section>
              <h2>Who can see the data</h2>
              <ul>
                <li>
                  Only authorized team members and contractors of Dominus Foundry™, LLC who already have legitimate access to this accounting data.
                </li>
                <li>
                  We do not resell or share this data with third parties except service providers that host our systems (e.g., n8n, cloud infrastructure) under appropriate agreements.
                </li>
              </ul>
            </section>

            <section>
              <h2>Data security</h2>
              <ul>
                <li>Access to this integration is restricted via authentication and role-based access control.</li>
                <li>Credentials and API keys are stored securely and are not hard-coded in public repositories.</li>
              </ul>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                For questions about this privacy policy, contact: <a href="mailto:support@dominusfoundry.com">support@dominusfoundry.com</a>.
              </p>
            </section>
          </div>
        </div>
        <ArticleIndex />
        </div>
        </div>
      </section>
    </div>
  )
}
