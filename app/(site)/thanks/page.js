import { PageHero } from "@/components/site/primitives";
import "@/app/styles/pages/qp-b.css";

export const metadata = {
  title: "Thanks — Dominus Foundry",
  robots: {
    index: false,
    follow: false,
  },
};

// 2026-10-14: restyled in the site-wide redesign (components/site). Copy unchanged.
export default function Thanks() {
  return (
    <div className="qpb qp-plain qp-notice">
    <PageHero
      center
      title="Thanks — we got it!"
      lead={<p className="lead">We'll reply within one business day with scope and next steps.</p>}
      actions={<a href="/" className="btn btn-solid">Back home</a>}
    />
    </div>
  );
}
