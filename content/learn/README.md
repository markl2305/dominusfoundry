# content/learn — the Clio publish contract

A file merged here **is live**. Drop `content/learn/{vertical}/{slug}.mdx` on `main`
and it is served at `/learn/{vertical}/{slug}`, listed in `/sitemap.xml`, and listed
on `/learn` — with no page.tsx to write and no registry to edit.

That was not true before 2026-08-04. Until then every `/learn` URL was a hand-written
`app/learn/platform/<slug>/page.tsx`, so a merged .mdx was an inert file: Clio
published, marked the topic live, and pinged IndexNow at a URL that 404'd until a
human hand-built the page (that is what PRs #18 → #22 → #23 were).

## How it works

- `src/lib/learn.ts` — the single registry. Walks `content/learn/**`, parses
  frontmatter, and scans `app/learn/**` for hand-written pages so it knows which URLs
  a static route already owns.
- `app/learn/[...slug]/page.tsx` — renders the MDX. Skips any slug a static route owns.
- `app/sitemap.ts` and `app/learn/page.tsx` — both read the registry. Neither lists
  articles by hand any more. **Do not re-add hardcoded article lists to either.**

## Frontmatter

```yaml
title: Article Title | Dominus Foundry     # required
description: One-sentence summary.          # required — also the /learn blurb
vertical: platform                          # required — first URL segment
schema_type: FAQPage                        # or Article
published_at: '2026-08-01'                  # sorts /learn and the registry
target_query: the query this targets
```

## Structured data — the part that matters

The JSON-LD **is** the product here; this is a GEO program (getting cited by AI answer
engines), not a blog.

Clio embeds complete `Article` + `FAQPage` JSON-LD as raw
`<script type="application/ld+json">` blocks in the body. Those blocks are
**authoritative and preserved verbatim**. They are extracted as string content *before*
MDX compiles the body — acorn reads the `{` inside them as a JSX expression and fails
the build otherwise — then re-emitted on the page.

Only two things are rewritten, because Clio gets them wrong: page identity
(`mainEntityOfPage` / top-level `@id` / `url` → the real canonical URL) and the
publisher block (→ `Dominus Foundry™ LLC` + `logo-full.svg`; Clio emits `logo.png`,
which does not exist in `public/`).

**Never "simplify" this into regenerating schema from frontmatter.** Frontmatter cannot
carry a `FAQPage`'s `mainEntity` Q&A pairs, so a rebuild silently ships articles with
strictly worse structured data than the pages they replace. An earlier attempt did
exactly that and emitted a bare `WebPage` with no `mainEntity` at all. A malformed
block is skipped individually; only if no valid block survives is an `Article` object
synthesised from frontmatter as a fallback.

## The six hand-built pages

`app/learn/platform/*` still holds six hand-written pages. They are **deliberately not
migrated**: they carry richer schema than a frontmatter renderer emits by default, they
are live and indexed, and Next.js static routes take precedence over the catch-all, so
they keep working untouched. They appear in the sitemap and on `/learn` through the same
registry as MDX articles — index copy for them lives in `LEGACY_PAGES`.

`content/learn/platform/vertical-ai-platform-for-traditional-industries-dominus-foundry.mdx`
duplicates one of them. It is intentionally left in place and **unserved** — it is Clio's
own publish record and Clio reconciles against it. The registry dedupes by URL
(hand-built wins) and the catch-all never generates that slug.

Verified on Next 16.1.1: a static route and a catch-all claiming the same slug produces
**no error and no warning** — one build artifact silently overwrites the other. Do not
rely on that. The exclusion in `generateStaticParams` is what makes it deterministic.

## Gotchas

- `next.config.js` sets `transpilePackages: ["next-mdx-remote"]`. Without it the package
  is externalized, resolves `react/jsx-runtime` to userland React while the App Router
  server renderer uses Next's vendored React, and the prerender dies with *"A React
  Element from an older version of React was rendered."* **This is not a React-version
  problem — do not "fix" it by bumping React.** The app runs React 18.2.0 on purpose.
- `remark-gfm` is enabled, so Clio's pipe tables render as real tables.
- Never hand-edit an .mdx here. Corrections go back through Clio's PR loop.
