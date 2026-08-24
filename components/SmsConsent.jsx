"use client";

/**
 * Single source of truth for the SMS opt-in disclosure.
 *
 * The TCR 10DLC campaign record and the public /sms-terms page both assert that
 * a dedicated, unchecked-by-default SMS consent checkbox exists on our web forms.
 * This module is what makes that assertion true, and it is deliberately the ONLY
 * place the disclosure wording lives.
 *
 * Why one module: commit 0287055 ("Fix MNO-rejected 10DLC campaign") replaced a
 * compliant per-form checkbox with a bundled "calls, emails, and texts" sentence
 * because the wording was duplicated per form and the copies drifted. Anything
 * that renders SMS consent MUST import from here so that cannot recur.
 *
 * Carrier requirements this encodes (Telnyx / TCR):
 *   - SMS consent is its own affirmative act, never bundled with calls or email.
 *   - Unchecked by default: no `checked` and no `defaultChecked` below.
 *   - Discloses message frequency, rates, STOP/HELP, and links the terms.
 */

// The disclosure as displayed. Segments are the source; SMS_CONSENT_TEXT is
// DERIVED from them by concatenation, so the stored evidence text can never
// drift from what the visitor was actually shown.
const SEGMENTS = [
  {
    text:
      "I agree to receive SMS/text messages from Dominus Foundry™ at the phone " +
      "number provided. Message frequency varies. Message and data rates may apply. " +
      "Reply STOP to opt out, HELP for help. View our ",
  },
  { text: "SMS Terms", href: "/sms-terms" },
  { text: " and " },
  { text: "Privacy Policy", href: "/privacy" },
  { text: "." },
];

export const SMS_CONSENT_TEXT = SEGMENTS.map((segment) => segment.text).join("");

// Bump this whenever SEGMENTS changes. Stored alongside each grant so a past
// consent can be resolved to the exact wording that was shown at the time.
export const SMS_CONSENT_VERSION = "2026-08-23.v1";

export const SMS_CONSENT_FIELD = "smsConsent";

export default function SmsConsent({ onChange }) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <input
        type="checkbox"
        name={SMS_CONSENT_FIELD}
        onChange={onChange ? (e) => onChange(e.target.checked) : undefined}
        className="mt-1 h-4 w-4 rounded border-forge-300 text-forge-600 focus:ring-forge-500"
      />
      <span className="text-xs text-slate-700">
        {SEGMENTS.map((segment, i) =>
          segment.href ? (
            <a
              key={i}
              href={segment.href}
              className="underline font-semibold text-forge-700 hover:text-forge-800"
            >
              {segment.text}
            </a>
          ) : (
            <span key={i}>{segment.text}</span>
          )
        )}
      </span>
    </label>
  );
}
