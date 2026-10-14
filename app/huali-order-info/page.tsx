import type { Metadata } from 'next';
import Image from 'next/image';
import HualiPoster from '@/public/images/huali-lager-poster.png';
import HualiHeader from '@/public/Huali.png';
import { HualiAgentActions } from './HualiAgentActions';
import { PageHero, Section } from '@/components/site/primitives';
import '@/components/site/pages/core.css';
import '@/app/styles/pages/qp-b.css';

export const metadata: Metadata = {
  title: 'Huali™ Order Info | Dominus Foundry™',
  robots: {
    index: false,
    follow: false,
  },
  other: {
    robots: 'noindex,nofollow',
  },
};

// 2026-10-14: restyled in the site-wide redesign (components/site), with the
// bare nav (AppShell). The site shell provides <main>, so this page no longer
// nests a second one. Copy, images and the order-line link are unchanged.
export default function HualiOrderInfoPage() {
  return (
    <div className="pg-huali qp qp-plain">
      <PageHero
        center
        title="Huali™ Order Info"
        lead={
          <p className="lead">
            Fast keg ordering for Huali™ Lager distributors.
          </p>
        }
      >
        <Image
          src={HualiHeader}
          alt="Huali™ Lager crest header artwork"
          className="huali-mark"
          priority
        />
      </PageHero>

      <Section>
        <div className="split">
          <div className="stack">
            <div className="card stack reveal">
              <h2 className="h3">
                How to place an order
              </h2>
              <p className="tile-p" style={{ marginTop: 0 }}>
                Call the order line to place an order.
              </p>

              <HualiAgentActions />

            </div>

            <div className="card stack reveal" style={{ '--i': 1 } as React.CSSProperties}>
              <h3 className="tile-t" style={{ marginTop: 0 }}>Quick steps</h3>
              <ol className="num-list">
                <li>Confirm you’re an authorized distributor.</li>
                <li>Dial 505-337-4443.</li>
                <li>
                  Be ready with your phone number on account and the number of Huali™
                  half kegs and Huali™ pony kegs you want.
                </li>
                <li>The Huali™ agent will read back the order for confirmation.</li>
              </ol>
            </div>
          </div>

          <div className="card poster reveal" style={{ '--i': 2 } as React.CSSProperties}>
            <Image
              src={HualiPoster}
              alt="Huali™ Lager promotional poster showing a glass of beer with the Huali™ logo"
              priority
            />
          </div>
        </div>

        <div className="fine-print">
          <p className="fine">
            Huali™ Lager is produced by Kaktus Brewing Co. Orders placed here are forwarded
            to the brewery team for fulfillment.
          </p>
          <p className="fine">21+ only. Please enjoy responsibly.</p>
        </div>
      </Section>
    </div>
  );
}
