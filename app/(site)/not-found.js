import { PageHero } from "@/components/site/primitives";

// 2026-10-14: restyled in the site-wide redesign (components/site). Copy unchanged.
export default function NotFound() {
  return (
    <PageHero
      center
      title="Page not found"
      actions={<a href="/" className="btn btn-solid">Back home</a>}
    />
  );
}
