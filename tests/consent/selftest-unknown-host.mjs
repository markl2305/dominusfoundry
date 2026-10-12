/**
 * Self-test for tests/consent/tracking-matrix.mjs (compliance P1-1c, anvil r2 F4): the matrix MUST fail when a page
 * contacts an unknown off-origin host, whether before any choice or after Accept. Each canary is a fetch to
 * https://unknown-selftest.invalid/... injected by the matrix itself (CONSENT_SELFTEST_CANARY); it is aborted
 * locally, never delivered (.invalid cannot resolve, and the matrix aborts every unknown off-origin request).
 *
 *   CONSENT_ORIGIN=http://localhost:4482 node tests/consent/selftest-unknown-host.mjs
 *
 * Passes (exit 0) only if, for each canary, the matrix exits non-zero AND at least one failed check names the
 * canary host. CONSENT_PAGES defaults to "/" here to keep the run short; the canary fires on every page either way.
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const matrix = fileURLToPath(new URL('./tracking-matrix.mjs', import.meta.url));
let bad = 0;
for (const canary of ['after-accept', 'before-choice']) {
  const r = spawnSync(process.execPath, [matrix], {
    env: { ...process.env, CONSENT_SELFTEST_CANARY: canary, CONSENT_PAGES: process.env.CONSENT_PAGES || '/', CONSENT_OUT: '', CONSENT_LABEL: `selftest ${canary}` },
    encoding: 'utf8', maxBuffer: 64 * 1024 * 1024,
  });
  const out = (r.stdout || '') + (r.stderr || '');
  const hits = out.split('\n').filter((l) => /FAIL/.test(l) && /unknown-selftest\.invalid/.test(l));
  const summary = (out.match(/selftest [a-z-]+: \d+ of \d+ checks passed/) || ['(no summary)'])[0];
  const passed = r.status !== 0 && hits.length > 0;
  console.log(`${passed ? '  ok  ' : '  FAIL'} canary ${canary}: matrix rc ${r.status}, ${hits.length} failed check(s) name the canary host; ${summary}`);
  hits.slice(0, 6).forEach((l) => console.log('        ' + l.trim().slice(0, 220)));
  if (!passed) bad += 1;
}
process.exit(bad ? 1 : 0);
