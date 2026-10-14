import Link from "next/link";
import { PageHero } from "@/components/site/primitives";

// 2026-10-14: restyled in the site-wide redesign (components/site). Copy unchanged.
export default function NotFound() {
  return (
    <PageHero
      center
      title="Page not found"
      lead={
        <p className="lead">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      }
      actions={
        <Link
          href="/"
          className="btn btn-solid"
        >
          Back to home
        </Link>
      }
    />
  );
}
