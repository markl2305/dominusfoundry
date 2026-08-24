import { NextResponse } from "next/server";
import { buildConsentRecord, renderConsentForEmail } from "@/lib/sms-consent";

export async function POST(req) {
  try {
    const payload = await req.json();
    const {
      firstName = "", 
      lastName = "", 
      email = "", 
      phone = "",
      message = "",
      smsConsent = false
    } = payload ?? {};

    // This route renders the same SMS consent checkbox as /api/lead, so it must
    // record the same evidence. A checkbox whose value is discarded is worse
    // than no checkbox: it shows the visitor an affirmative act that leaves no
    // trace, while the TCR record asserts the act is captured.
    const consentRecord = buildConsentRecord({
      raw: smsConsent,
      phone,
      sourceForm: "contact",
      req,
    });

    const to = process.env.LEADS_TO_EMAIL;
    const from = process.env.LEADS_FROM_EMAIL || "foundry@dominusfoundry.com";
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      ``,
      `Message:`,
      `${message}`,
      ...renderConsentForEmail(consentRecord)
    ].join("\n");

    // Structured line so consent is greppable in logs independently of the email.
    console.log("sms_consent_record " + JSON.stringify(consentRecord));

    if (RESEND_API_KEY && to) {
      const { Resend } = await import("resend");
      const resend = new Resend(RESEND_API_KEY);
      await resend.emails.send({ 
        from, 
        to, 
        subject: "New Contact Form Submission", 
        text: body 
      });

      // Send a copy/receipt to the submitter if they provided an email
      if (email) {
        await resend.emails.send({
          from,
          to: email,
          subject: "We received your message — Dominus Foundry",
          text: `Thanks for reaching out. Here’s a copy of what you sent:\n\n${body}\n\nWe’ll reply within one business day.`,
        });
      }
    } else {
      console.log("Contact form submission (email not configured):\n" + body);
    }
    
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Bad Request" }, 
      { status: 400 }
    );
  }
}
