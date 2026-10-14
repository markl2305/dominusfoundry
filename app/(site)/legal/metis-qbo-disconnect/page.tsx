import { PageHero } from '@/components/site/primitives';
import ArticleIndex from '@/components/site/qp/ArticleIndex';
import '@/components/site/pages/legal.css';
import '@/app/styles/pages/qp-b.css';
import '@/app/styles/pages/articles.css';

export const metadata = {
  title: 'Mentis™ QuickBooks Integration – Disconnected',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MentisQboDisconnectPage() {
  return (
    <div className="qpb qp-plain qp-legal">
      <PageHero
        eyebrow={<>Mentis™ &amp; QuickBooks</>}
        title="Mentis™ QuickBooks Integration – Disconnected"
        lead={
          <p className="lead">
              This page confirms that the Mentis™ QuickBooks integration has been disconnected from your QuickBooks Online company.
          </p>
        }
      />

      <section className="section pg-legal">
        <div className="wrap">
        <div className="qp-read has-index">
        <div className="qp-read-col">
          <div className="article">
            <p>
              If this disconnection was intentional, no further action is required. Mentis™ will no longer access or process data from your QuickBooks Online account.
            </p>
            <p>
              If this was unintentional or you need to restore functionality, you can reconnect the integration by re-authorizing the app from within QuickBooks Online and updating the
              connection inside our automation platform (n8n/Mentis™).
            </p>
            <section>
              <h2>Contact</h2>
              <p>
                For assistance, please contact: <a href="mailto:support@dominusfoundry.com">support@dominusfoundry.com</a>.
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
