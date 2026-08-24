/**
 * Single source of truth for the SMS opt-in disclosure — BOTH halves of it.
 *
 * This module is deliberately framework-neutral (no "use client"): the checkbox
 * that DISPLAYS the disclosure and the API route that RECORDS the resulting
 * grant both import from here, so the text shown to a visitor and the text
 * stored as evidence cannot drift apart. That drift is the whole reason this
 * file exists — see the history below.
 *
 * History, because this defect has now recurred twice:
 *   fce6b62 added a compliant, SMS-specific, unchecked-by-default checkbox to
 *   ContactForm and LeadForm. Neither component was ever imported anywhere, so
 *   the compliant control was never rendered. 0287055, "Fix MNO-rejected 10DLC
 *   campaign", then REPLACED the compliant pattern on the live form with a
 *   bundled "calls, emails, and texts" sentence — the one pattern carrier
 *   compliance guidance disqualifies outright. The remediation made it worse.
 *   The root cause both times was that the wording was duplicated per form.
 *   Hence: exactly one home, and every surface imports it.
 *
 * Carrier requirements this encodes (TCR / CTIA):
 *   - SMS consent is its own affirmative act, never bundled with calls or email.
 *   - Unchecked by default: the component sets no `checked`/`defaultChecked`.
 *   - Discloses message frequency, that rates may apply, STOP and HELP, and
 *     links the message-program privacy policy.
 *
 * The frequency wording here ("typically 1–10 msgs/mo") is stated in the same
 * terms as the registered TCR campaign record and the public /sms-terms page.
 * If you change it here, change it in all three or they stop agreeing.
 */

// The disclosure as displayed. SEGMENTS is the source; SMS_CONSENT_TEXT is
// DERIVED from it by concatenation, so stored evidence is byte-identical to
// what was rendered.
export const SEGMENTS = [
  {
    text:
      "I agree to receive SMS/text messages from Dominus Foundry™ at the phone " +
      "number provided. Message frequency varies (typically 1–10 msgs/mo). " +
      "Message and data rates may apply. Reply STOP to opt out, HELP for help. " +
      "Consent is not a condition of purchase. View our ",
  },
  { text: "SMS Terms", href: "/sms-terms" },
  { text: " and " },
  { text: "Privacy Policy", href: "/privacy" },
  { text: "." },
];

export const SMS_CONSENT_TEXT = SEGMENTS.map((s) => s.text).join("");

// Bump whenever SEGMENTS changes. Stored with each grant so a past consent can
// be resolved to the exact wording shown at the time.
export const SMS_CONSENT_VERSION = "2026-08-24.v2";

export const SMS_CONSENT_FIELD = "smsConsent";
export const SMS_CONSENT_VERSION_FIELD = "smsConsentVersion";
export const SMS_CONSENT_TEXT_FIELD = "smsConsentText";

/**
 * Normalise the two — and only the two — encodings our own forms produce for a
 * genuinely ticked box:
 *   - `true`  : a JSON payload built from a React boolean (IntakeForm).
 *   - `"on"`  : the literal value an HTML checkbox serialises to via FormData
 *               when, and only when, it is checked. An unchecked box is ABSENT
 *               from FormData entirely — it does not serialise as "off".
 *
 * Everything else is a refusal: absent, "", "false", "true" as a string, 0, 1,
 * "yes", null. Two consequences, both deliberate:
 *   - a form that simply omits the field can never manufacture a grant, and
 *   - a caller cannot fabricate consent by guessing at a truthy-looking value.
 * Widening this set is a compliance decision, not a convenience one.
 */
export function readSmsConsent(raw) {
  return raw === true || raw === "on";
}

/**
 * Build the evidence record for one submission.
 *
 * `phone` is required for a grant. Phone is optional on the intake form, so a
 * ticked box with no number is recorded as claimed-but-not-granted rather than
 * as consent: we will not hold evidence of consent for a number we do not have,
 * and we must not silently discard the fact that the visitor tried.
 *
 * The timestamp is taken here, server-side. A client clock is not evidence.
 */
export function buildConsentRecord({ raw, phone = "", sourceForm = "", req }) {
  const claimed = readSmsConsent(raw);
  const granted = claimed && String(phone).trim() !== "";
  return {
    granted,
    claimed_without_phone: claimed && !granted,
    recorded_at: new Date().toISOString(),
    disclosure_version: SMS_CONSENT_VERSION,
    disclosure_text: SMS_CONSENT_TEXT,
    phone: String(phone).trim(),
    source_form: sourceForm || "unknown",
    ip: req?.headers?.get("x-forwarded-for") || "unknown",
    user_agent: req?.headers?.get("user-agent") || "unknown",
  };
}

/** The consent block appended to every lead/contact notification email. */
export function renderConsentForEmail(record) {
  return [
    "",
    "--- SMS CONSENT (10DLC evidence) ---",
    `SMS Consent: ${record.granted ? "GRANTED" : "NOT GRANTED"}`,
    `Recorded At: ${record.recorded_at}`,
    `Disclosure Version: ${record.disclosure_version}`,
    `Disclosure Shown: ${record.disclosure_text}`,
    record.claimed_without_phone
      ? "Note: the box was checked but no phone number was supplied — not recorded as consent."
      : null,
    `IP: ${record.ip}`,
    `User Agent: ${record.user_agent}`,
  ].filter(Boolean);
}
