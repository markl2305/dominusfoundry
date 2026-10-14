import { PageHero } from "@/components/site/primitives";
import "@/app/styles/pages/qp-b.css";

export const metadata = {
  title: 'QuickBooks Migration & Cleanup (Retired Offering) | Dominus Foundry',
  description:
    'We currently focus Dominus Foundry on Forge, our AI operations platform. If you need QuickBooks migration help as part of a broader build, reach out via Contact.',
  robots: {
    index: false,
    follow: false,
  },
};

// 2026-10-14: restyled in the site-wide redesign (components/site). Copy unchanged.
export default function QBMigrationRetired() {
  return (
    <div className="qp qp-plain qp-notice">
    <PageHero
      title={<>QuickBooks Migration &amp; Cleanup (Retired Offering)</>}
      lead={
        <p className="lead">
          We currently focus Dominus Foundry on Forge, our AI operations platform. If you need help with
          QuickBooks migrations as part of a broader system build, reach out via the contact page and we&apos;ll point you in the
          right direction.
        </p>
      }
      actions={
        <a
          href="/contact"
          className="btn btn-solid"
        >
          Contact the team
        </a>
      }
    >
      <p className="fine">Built to Dominus Foundry architectural standards.</p>
    </PageHero>
    </div>
  );
}
