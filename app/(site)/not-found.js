import { PageHero } from "@/components/site/primitives";
import "@/app/styles/pages/qp-b.css";

// 2026-10-14: restyled in the site-wide redesign (components/site). Copy unchanged.
export default function NotFound() {
  return (
    <div className="qp qp-plain qp-notice">
    <PageHero
      center
      title="Page not found"
      actions={<a href="/" className="btn btn-solid">Back home</a>}
    />
    </div>
  );
}
