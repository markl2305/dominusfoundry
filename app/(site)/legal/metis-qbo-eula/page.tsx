import { PageHero } from '@/components/site/primitives';
import ArticleIndex from '@/components/site/qp/ArticleIndex';
import '@/components/site/pages/legal.css';
import '@/app/styles/pages/qp-b.css';
import '@/app/styles/pages/articles.css';

export const metadata = {
  title: 'Mentis™ QuickBooks Integration – End-User License Agreement',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MentisQboEulaPage() {
  return (
    <div className="qpb qp-plain qp-legal">
      <PageHero
        eyebrow={<>Mentis™ &amp; QuickBooks</>}
        title="Mentis™ QuickBooks Integration – End-User License Agreement"
        lead={
          <p className="lead">
              This integration is owned and operated by Dominus Foundry™, LLC (“we,” “us,” or “our”).
              It is provided solely for internal business use by our team and authorized contractors.
          </p>
        }
      />

      <section className="section pg-legal">
        <div className="wrap">
        <div className="qp-read has-index">
        <div className="qp-read-col">
          <div className="article">
            <section>
              <h2>By using this integration, you agree that:</h2>
              <ul>
                <li>You are authorized by our company to access QuickBooks data.</li>
                <li>You will only use the integration in connection with legitimate business activities and in compliance with applicable law.</li>
                <li>You will not attempt to reverse engineer, resell, or provide this integration to third parties outside our organization.</li>
                <li>All QuickBooks data accessed through this integration remains the property of our business and is subject to our internal data-handling policies.</li>
              </ul>
            </section>

            <p>
              We may modify, suspend, or discontinue this integration at any time. This integration is provided “as-is” without warranties of any kind,
              to the maximum extent permitted by law.
            </p>

            <section>
              <h2>Contact</h2>
              <p>
                If you have questions about this agreement, contact: <a href="mailto:support@dominusfoundry.com">support@dominusfoundry.com</a>.
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
