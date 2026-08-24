import { NextResponse } from "next/server";
import { buildConsentRecord, renderConsentForEmail } from "@/lib/sms-consent";

export async function POST(req) {
  try {
    const payload = await req.json();
    const {
      firstName = "", lastName = "", email = "", phone = "",
      company = "", sourceSystem = "", history = "", timeline = "",
      notes = "", ppc = false,
      smsConsent = false
    } = payload ?? {};

    // 10DLC evidence. The rules (strict accepted encodings, phone required for
    // a grant, server-side timestamp) live in src/lib/sms-consent.js next to the
    // disclosure wording itself, so what we store cannot drift from what we
    // showed. See that file for why each rule is there.
    const consentRecord = buildConsentRecord({
      raw: smsConsent,
      phone,
      sourceForm: sourceSystem,
      req,
    });

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
      ...renderConsentForEmail(consentRecord)
    ].join("\n");

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
