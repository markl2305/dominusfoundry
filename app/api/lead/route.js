import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const payload = await req.json();
    const {
      firstName = "", lastName = "", email = "", phone = "",
      company = "", sourceSystem = "", history = "", timeline = "",
      notes = "", ppc = false
    } = payload ?? {};

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
      `Notes: ${notes}`
    ].join("\n");

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
