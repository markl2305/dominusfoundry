import "@/components/site/pages/core.css";

export const metadata = {
  title: 'QuickBooks Desktop Migration — Dominus Foundry',
  description: 'Move from QuickBooks Desktop to Online in 5-7 days with zero data loss and CPA-ready reports.',
};

// 2026-10-14: restyled in the site-wide redesign (components/site). The site
// shell already provides <main>, so this layout no longer nests a second one;
// its own contact band stays under the page, copy unchanged, as a slim band.
export default function QBMigrationLayout({ children }) {
  return (
    <div className="pg-qb">
      {children}

      <footer className="pg-qb-band">
        <div className="wrap">
          <p>Dominus Foundry — QuickBooks Desktop Migration</p>
          <div className="links">
            <a href="tel:+15055201433">
              (505) 520-1433
            </a>
            <span className="sep">•</span>
            <a href="mailto:foundry@dominusfoundry.com">
              foundry@dominusfoundry.com
            </a>
          </div>
          <p>© {new Date().getFullYear()} Dominus Foundry. All rights reserved. We do not sell your personal information.</p>
        </div>
      </footer>
    </div>
  );
}
