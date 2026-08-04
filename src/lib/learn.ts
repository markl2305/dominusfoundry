import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Single registry for everything under /learn.
//
// Clio (the autonomous SEO/GEO content daemon) publishes GEO articles as
// content/learn/{vertical}/{slug}.mdx with YAML frontmatter (title,
// description, vertical, schema_type, published_at). A merged .mdx file goes
// live at /learn/{vertical}/{slug}, appears in the sitemap, and appears on the
// /learn index with NO other code change and no human step.
//
// Never hand-edit the MDX files — corrections go back through Clio's PR loop.
//
// Everything here is filesystem work that runs at BUILD time only: the
// catch-all route sets `dynamicParams = false`, and app/sitemap.ts and
// app/learn/page.tsx are both statically prerendered. Nothing below is
// executed by a running server.

const CONTENT_ROOT = path.join(process.cwd(), "content", "learn");
const APP_LEARN_ROOT = path.join(process.cwd(), "app", "learn");

export const SITE_NAME = "Dominus Foundry";
export const BASE_URL = "https://dominusfoundry.com";

// Matches the hand-built learn pages. Clio emits `logo.png`, which does not
// exist in public/ — logo-full.svg is the real asset, so we normalize to it.
export const PUBLISHER = {
  "@type": "Organization",
  name: "Dominus Foundry™ LLC",
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo-full.svg`,
  },
} as const;

export type JsonLd = Record<string, unknown>;

export type LearnArticle = {
  slug: string[];
  url: string;
  title: string;
  description: string;
  vertical: string;
  schemaType: string;
  publishedAt: string | null;
  body: string;
  /** Clio's own embedded JSON-LD, parsed + URL/publisher-normalized. */
  jsonLd: JsonLd[];
};

/** One row of the /learn index and of the sitemap's learn block. */
export type LearnEntry = {
  url: string;
  title: string;
  blurb: string;
  publishedAt: string | null;
  source: "static" | "mdx";
};

/* -------------------------------------------------------------------------- */
/* JSON-LD — Clio's embedded blocks are the AUTHORITATIVE schema               */
/* -------------------------------------------------------------------------- */

// Clio writes complete Article + FAQPage JSON-LD into the MDX body. That schema
// is the entire point of the GEO program, so it is preserved verbatim rather
// than rebuilt from frontmatter (a frontmatter rebuild cannot recover the
// FAQPage `mainEntity` Q&A pairs and silently regresses the page).
//
// The blocks must be read as STRING CONTENT before MDX ever compiles the body:
// acorn reads the `{` inside them as a JSX expression and fails the build with
// "Could not parse expression with acorn". Extract first, strip second.
const LD_SCRIPT_RE =
  /<script\b[^>]*\btype\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

function extractJsonLd(raw: string): JsonLd[] {
  const out: JsonLd[] = [];
  for (const match of raw.matchAll(LD_SCRIPT_RE)) {
    try {
      const parsed = JSON.parse(match[1].trim());
      // A malformed block must never break the build: skip it, keep the good
      // ones, and fall through to the frontmatter fallback if none survive.
      if (parsed && typeof parsed === "object") {
        if (Array.isArray(parsed)) {
          for (const item of parsed) {
            if (item && typeof item === "object" && !Array.isArray(item)) {
              out.push(item as JsonLd);
            }
          }
        } else {
          out.push(parsed as JsonLd);
        }
      }
    } catch {
      // Bad JSON in one block — skip only that block.
    }
  }
  return out;
}

// Clio's JSON-LD carries the wrong page URL (e.g. mainEntityOfPage.@id pointing
// at /vertical-ai-platform-traditional-industries, a URL that does not exist)
// and the wrong publisher logo. Fix identity + publisher; leave every other
// field — headline, description, datePublished, the whole FAQPage mainEntity —
// exactly as Clio wrote it.
function normalizeJsonLd(obj: JsonLd, canonical: string): JsonLd {
  const next: JsonLd = { ...obj };

  // Page identity. Only overwritten when the field is already present, so we
  // never invent identity fields the hand-built pages don't emit either.
  if ("mainEntityOfPage" in next) {
    const meop = next.mainEntityOfPage;
    next.mainEntityOfPage =
      meop && typeof meop === "object" && !Array.isArray(meop)
        ? { ...(meop as JsonLd), "@id": canonical }
        : canonical;
  }
  if (typeof next["@id"] === "string") next["@id"] = canonical;
  if (typeof next.url === "string") next.url = canonical;

  if (next.publisher && typeof next.publisher === "object") {
    next.publisher = { ...(next.publisher as JsonLd), ...PUBLISHER };
  }

  return next;
}

/** Frontmatter-derived Article schema — used ONLY when no valid block exists. */
function fallbackJsonLd(a: {
  title: string;
  description: string;
  publishedAt: string | null;
  canonical: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: PUBLISHER,
    ...(a.publishedAt ? { datePublished: a.publishedAt } : {}),
    mainEntityOfPage: a.canonical,
  };
}

/* -------------------------------------------------------------------------- */
/* Body sanitization                                                          */
/* -------------------------------------------------------------------------- */

function sanitizeBody(src: string): string {
  return (
    src
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<!--[\s\S]*?-->/g, "")
      // Clio wraps the script blocks in a ```json fence. Removing the scripts
      // leaves an empty fence, which renders as a stray empty code box.
      .replace(/^[ \t]*```[\w-]*[ \t]*\r?\n[\s\r\n]*```[ \t]*$/gm, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}

/* -------------------------------------------------------------------------- */
/* MDX articles                                                               */
/* -------------------------------------------------------------------------- */

function walkContent(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkContent(p));
    else if (/\.mdx?$/.test(entry.name)) out.push(p);
  }
  return out;
}

export function mdxArticles(): LearnArticle[] {
  return walkContent(CONTENT_ROOT)
    .map((file) => {
      const rel = path.relative(CONTENT_ROOT, file).replace(/\.mdx?$/, "");
      const slug = rel.split(path.sep);
      const url = "/learn/" + slug.join("/");
      const canonical = BASE_URL + url;
      const { data, content } = matter(fs.readFileSync(file, "utf8"));

      const title = String(data.title || slug[slug.length - 1]);
      const description = String(data.description || "");
      const publishedAt = data.published_at ? String(data.published_at) : null;

      const embedded = extractJsonLd(content).map((o) =>
        normalizeJsonLd(o, canonical)
      );

      return {
        slug,
        url,
        title,
        description,
        vertical: String(data.vertical || slug[0] || "learn"),
        schemaType: String(data.schema_type || "Article"),
        publishedAt,
        body: sanitizeBody(content),
        jsonLd: embedded.length
          ? embedded
          : [fallbackJsonLd({ title, description, publishedAt, canonical })],
      };
    })
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
}

export function getArticle(slug: string[]): LearnArticle | null {
  const key = slug.join("/");
  return mdxArticles().find((a) => a.slug.join("/") === key) || null;
}

/* -------------------------------------------------------------------------- */
/* Static (hand-built) learn routes                                           */
/* -------------------------------------------------------------------------- */

const PAGE_FILES = ["page.tsx", "page.ts", "page.jsx", "page.js"];

function walkStaticRoutes(dir: string, segments: string[], out: string[]): void {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  if (segments.length && entries.some((e) => e.isFile() && PAGE_FILES.includes(e.name))) {
    out.push("/learn/" + segments.join("/"));
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // Skip the catch-all and any other dynamic segment, route groups, private
    // folders and parallel routes — none of them own a literal URL.
    if (name.startsWith("_") || name.startsWith("@")) continue;
    if (name.startsWith("[") || name.startsWith("(")) continue;
    walkStaticRoutes(path.join(dir, name), [...segments, name], out);
  }
}

/**
 * URLs already owned by a hand-written app/learn/**\/page.tsx.
 *
 * Derived by scanning the filesystem rather than hand-maintained, so it cannot
 * drift: a hand-built page added later is picked up for free, and a deleted one
 * disappears on its own. `app/learn/page.tsx` (the index) and the `[...slug]`
 * catch-all are both excluded.
 */
export function staticRouteUrls(): Set<string> {
  const out: string[] = [];
  walkStaticRoutes(APP_LEARN_ROOT, [], out);
  return new Set(out);
}

/**
 * Index copy for the hand-built pages — the ONLY thing the filesystem cannot
 * supply. Lifted verbatim from the previous hard-coded app/learn/page.tsx array
 * so the index reads exactly as it did before. Ownership of a URL still comes
 * from staticRouteUrls(), never from this list.
 */
export const LEGACY_PAGES: { href: string; title: string; blurb: string }[] = [
  {
    href: "/learn/platform/ai-software-company-for-construction-and-trades",
    title:
      "AI Software Company for Construction and Trades — Forge by Dominus Foundry",
    blurb:
      "What Dominus Foundry builds, what Forge actually does, and why AI-native architecture matters for installers.",
  },
  {
    href: "/learn/platform/ai-software-for-construction-and-trades",
    title:
      "AI Software for Construction and Trades: Forge vs Procore vs Buildertrend",
    blurb:
      "An honest comparison of the major platforms — who each one is really for, and where each one wins.",
  },
  {
    href: "/learn/platform/ai-vertical-saas-for-the-trades-what-it-is-and-real-examples",
    title: "AI Vertical SaaS for the Trades: What It Is and Real Examples",
    blurb:
      "What distinguishes true vertical SaaS from horizontal CRMs, which platforms serve which trades, and how to evaluate one before committing.",
  },
  {
    href: "/learn/platform/forge-the-ai-operating-system-for-commercial-contractors",
    title: "Forge: The AI Operating System for Commercial Contractors",
    blurb:
      "How Forge unifies estimating, takeoff, project management, and field operations into one platform for the installation trades.",
  },
  {
    href: "/learn/platform/servicetitan-alternatives-for-hvac-what-dominus-foundry-offers",
    title: "ServiceTitan Alternatives for HVAC: What Dominus Foundry Offers",
    blurb:
      "Comparing ServiceTitan alternatives for HVAC contractors — Housecall Pro, Jobber, FieldEdge, BuildOps, and Forge — and how each fits residential vs. commercial work.",
  },
  {
    href: "/learn/platform/vertical-ai-platform-for-traditional-industries-dominus-foundry",
    title: "Vertical AI Platform for Traditional Industries",
    blurb:
      "Dominus Foundry builds Forge — an AI operating system for commercial contractors. How vertical AI platforms replace fragmented tool stacks with unified, purpose-built automation.",
  },
];

function titleFromSlug(url: string): string {
  const last = url.split("/").pop() || url;
  return last.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * The single registry app/sitemap.ts and app/learn/page.tsx both consume.
 *
 * Union of hand-built routes and Clio MDX articles, deduped by URL with the
 * hand-built page winning. That dedupe is what keeps the known collision
 * (content/learn/platform/vertical-ai-platform-for-traditional-industries-dominus-foundry.mdx
 * vs the hand-built page of the same name) from double-listing.
 */
export function allLearnEntries(): LearnEntry[] {
  const owned = staticRouteUrls();
  const copy = new Map(LEGACY_PAGES.map((p) => [p.href, p]));
  const byUrl = new Map<string, LearnEntry>();

  for (const url of owned) {
    const meta = copy.get(url);
    byUrl.set(url, {
      url,
      title: meta?.title || titleFromSlug(url),
      blurb: meta?.blurb || "",
      publishedAt: null,
      source: "static",
    });
  }

  for (const a of mdxArticles()) {
    if (byUrl.has(a.url)) continue; // hand-built wins
    byUrl.set(a.url, {
      url: a.url,
      title: a.title,
      blurb: a.description,
      publishedAt: a.publishedAt,
      source: "mdx",
    });
  }

  return [...byUrl.values()].sort(
    (a, b) =>
      (b.publishedAt || "").localeCompare(a.publishedAt || "") ||
      a.title.localeCompare(b.title)
  );
}
