import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const payload = await req.json();
    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      linkedin = "",
      bestYear = "",
      biggestDeal = "",
      experience = "",
      resume = null,
    } = payload ?? {};

    const to = "bri@dominusfoundry.com";
    const from = process.env.LEADS_FROM_EMAIL || "foundry@dominusfoundry.com";
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    const body = [
      `--- NEW SALES REP APPLICATION ---`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `LinkedIn: ${linkedin || "Not provided"}`,
      `Resume: ${resume ? "Attached" : "Not provided"}`,
      ``,
      `Best Commission Year (W-2/1099): ${bestYear}`,
      ``,
      `Largest Deal & How They Found It:`,
      `${biggestDeal}`,
      ``,
      `Relevant Experience:`,
      `${experience}`,
    ].join("\n");

    const attachments = resume
      ? [{ filename: resume.filename, content: Buffer.from(resume.content, "base64") }]
      : [];

    if (RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(RESEND_API_KEY);

      await resend.emails.send({
        from,
        to,
        subject: `Sales Rep Application — ${firstName} ${lastName}`,
        text: body,
        attachments,
      });

      // Also CC Mark
      await resend.emails.send({
        from,
        to: process.env.LEADS_TO_EMAIL || to,
        subject: `Sales Rep Application — ${firstName} ${lastName}`,
        text: body,
        attachments,
      });

      if (email) {
        await resend.emails.send({
          from,
          to: email,
          subject: "Application Received — Dominus Foundry",
          text: `Thanks for applying, ${firstName}. We received your application for the Founding Sales Rep position.\n\nIf your background matches what we're looking for, you'll hear from us within 3 business days.\n\nDominus Foundry\nhttps://dominusfoundry.com`,
        });
      }
    } else {
      console.log("Application (email not configured)\n" + body);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Bad Request" },
      { status: 400 }
    );
  }
}
