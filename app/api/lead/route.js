import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const payload = await req.json();
    const {
      firstName = "", lastName = "", email = "", phone = "",
      company = "", sourceSystem = "", history = "", timeline = "",
      notes = "", ppc = false,
      smsConsent = false, smsConsentVersion = "", smsConsentText = ""
    } = payload ?? {};

    // 10DLC evidence. Three rules, all deliberate:
    //  1. Strict === true. Anything else (absent, "", "false", 0) is a refusal,
    //     so a form that simply omits the field can never manufacture a grant.
    //  2. A grant needs a number to send to. Phone is optional on the intake
    //     form, so a checked box with no phone is recorded as NOT granted —
    //     we will not hold evidence of consent for a number we do not have.
    //  3. The timestamp is taken server-side; a client clock is not evidence.
    const consentClaimed = smsConsent === true;
    const smsConsentGranted = consentClaimed && phone.trim() !== "";
    const consentRecord = {
      granted: smsConsentGranted,
      claimed_without_phone: consentClaimed && !smsConsentGranted,
      recorded_at: new Date().toISOString(),
      disclosure_version: smsConsentVersion || "unversioned",
      disclosure_text: smsConsentText || "(not supplied by form)",
      phone,
      source_form: sourceSystem || "unknown",
      ip: req.headers.get("x-forwarded-for") || "unknown",
      user_agent: req.headers.get("user-agent") || "unknown",
    };

    const to = process.env.LEADS_TO_EMAIL;
    const from = process.env.LEADS_FROM_EMAIL || "foundry@dominusfoundry.com";
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company}`,
      `Source System: ${sourceSystem}`,
      `History: ${history}`,
      `Timeline: ${timeline}`,
      `PPC: ${ppc ? "yes" : "no"}`,
      `Notes: ${notes}`,
      "",
      "--- SMS CONSENT (10DLC evidence) ---",
      `SMS Consent: ${smsConsentGranted ? "GRANTED" : "NOT GRANTED"}`,
      `Recorded At: ${consentRecord.recorded_at}`,
      `Disclosure Version: ${consentRecord.disclosure_version}`,
      `Disclosure Shown: ${consentRecord.disclosure_text}`,
      consentRecord.claimed_without_phone
        ? "Note: box was checked but no phone number was supplied — not recorded as consent."
        : null,
      `IP: ${consentRecord.ip}`,
      `User Agent: ${consentRecord.user_agent}`
    ].filter(Boolean).join("\n");

    // Structured line so consent is greppable in logs independently of the email.
    console.log("sms_consent_record " + JSON.stringify(consentRecord));

    if (RESEND_API_KEY && to) {
      const { Resend } = await import("resend");
      const resend = new Resend(RESEND_API_KEY);
      await resend.emails.send({ from, to, subject: "New Foundry Lead", text: body });

      // Send a copy to the submitter if they provided an email
      if (email) {
        await resend.emails.send({
          from,
          to: email,
          subject: "We received your request — Dominus Foundry",
          text: `Thanks for reaching out. Here’s a copy of what you sent:\\n\\n${body}\\n\\nWe’ll reply within one business day.`,
        });
      }
    } else {
      console.log("Lead (email not configured)\\n" + body);
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e?.message || "Bad Request" }, { status: 400 });
  }
}
