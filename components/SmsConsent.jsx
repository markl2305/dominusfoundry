"use client";

import {
  SEGMENTS,
  SMS_CONSENT_TEXT,
  SMS_CONSENT_VERSION,
  SMS_CONSENT_FIELD,
  SMS_CONSENT_VERSION_FIELD,
  SMS_CONSENT_TEXT_FIELD,
} from "@/lib/sms-consent";
import "@/components/site/pages/core.css";

// Re-exported so existing importers keep working and so no component is ever
// tempted to define its own copy of the wording. The wording itself lives in
// src/lib/sms-consent.js, which the recording route imports too — that shared
// import is what keeps displayed text and stored evidence identical.
export {
  SMS_CONSENT_TEXT,
  SMS_CONSENT_VERSION,
  SMS_CONSENT_FIELD,
  SMS_CONSENT_VERSION_FIELD,
  SMS_CONSENT_TEXT_FIELD,
};

/**
 * The SMS opt-in control. Unchecked by default — note there is no `checked` and
 * no `defaultChecked` on the input below, and adding either would falsify the
 * registered TCR campaign record and the public /sms-terms page.
 *
 * The two hidden inputs carry the disclosure version and the exact text shown,
 * so forms that serialise with `new FormData(...)` submit their own evidence
 * without each having to remember to attach it. Forms that hand-build a JSON
 * payload must attach the same fields explicitly.
 *
 * 2026-10-14: restyled in the site-wide redesign (components/site); the input,
 * its name, the hidden fields and every word of the disclosure are unchanged.
 */
export default function SmsConsent({ onChange }) {
  return (
    <div className="pg-sms">
      <label className="check-row">
        <input
          type="checkbox"
          name={SMS_CONSENT_FIELD}
          onChange={onChange ? (e) => onChange(e.target.checked) : undefined}
        />
        <span>
          {SEGMENTS.map((segment, i) =>
            segment.href ? (
              <a
                key={i}
                href={segment.href}
                className="link"
              >
                {segment.text}
              </a>
            ) : (
              <span key={i}>{segment.text}</span>
            )
          )}
        </span>
      </label>
      <input type="hidden" name={SMS_CONSENT_VERSION_FIELD} value={SMS_CONSENT_VERSION} />
      <input type="hidden" name={SMS_CONSENT_TEXT_FIELD} value={SMS_CONSENT_TEXT} />
    </div>
  );
}
