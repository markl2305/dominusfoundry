# Cached vendor loaders (consent tests)

Public vendor JavaScript, cached 2026-10-12, so the consent tests execute the real collectors with no network. Copied from hiresabina 02ab7f0 (gate v2), except the gtag.js container, which is this site's own.
Each is served by the harness in place of the live file; every collection request they make is answered locally
and never delivered.

| file | fetched from | bytes | note |
|---|---|---|---|
| `vercel-insights-script.js` | `https://hiresabina.ai/_vercel/insights/script.js` (brotli body, decoded) | 4,550 | Vercel Web Analytics loader `sv 0.1.3`; byte-identical to the copy anvil cached from dominusos.ai for review 1h-R1 |
| `linkedin-insight.min.js` | `https://snap.licdn.com/li.lms-analytics/insight.min.js` | 3,337 | bootstrap; picks `beta` or `old` by partner id |
| `linkedin-insight.beta.min.js` | `https://snap.licdn.com/li.lms-analytics/insight.beta.min.js` | 62,285 | |
| `linkedin-insight.old.min.js` | `https://snap.licdn.com/li.lms-analytics/insight.old.min.js` | 62,130 | |
| `gtag-js-G-9J4GY8YZ6G.js` | `https://www.googletagmanager.com/gtag/js?id=G-9J4GY8YZ6G`, cached by the anvil r1 review on 2026-10-12 (`compliance-2026-10/evidence/1c-anvil-r1/gtag-G-9J4GY8YZ6G.js`), copied here byte-for-byte, **not re-fetched** | 624,272 | **dominusfoundry.com's** real GA4 container. Destinations in it: `G-9J4GY8YZ6G` and the **linked Google Ads destination `AW-17706960854`**, embedded in the container itself (`vtp_containerId`/`vtp_destinationId`); `GT-WVRVJS27` and `GT-5R78S36V` appear once each. No separate `gtag/destination` loader was requested in any matrix state (2026-10-13). sha256 `f933b77f…1e76` |

`SHA256SUMS` pins them (`shasum -a 256 -c tests/consent/fixtures/SHA256SUMS` from the repo root). The harness serves
gtag.js only for the id it was cached for (here `G-9J4GY8YZ6G`); otherwise the GA checks fail. Nothing is fetched at test time. When a vendor changes its loader, re-cache it here and re-run the matrix; a stale copy
proves the behaviour of that copy only.
