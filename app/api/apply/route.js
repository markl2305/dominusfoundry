import { NextResponse } from "next/server";
import { rateLimit, getClientIp, escapeText, isPlausibleEmail } from "@/lib/mail-guard";

export async function POST(req) {
  // ⚠ VOLUME BOUND (audit F-0056) — fixed-window, per-isolate, per-IP. Bounds one noisy
  // sender; does nothing against a distributed one.
  const ip = getClientIp(req.headers);
  const ipGate = rateLimit(`apply:ip:${ip}`, 5, 60_000);
  if (!ipGate.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(Math.ceil((ipGate.resetAt - Date.now()) / 1000)) } }
    );
  }
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
        // ⚠ CALLER-NAMED RECIPIENT (audit F-0056). `text:` not `html:`, so there is NO HTML
        // injection on this route — that half of the finding belongs to the other four.
        // What applies here is the recipient: an unauthenticated caller picks the address
        // the platform mails from its own sending domain, and firstName is echoed into it.
        if (!isPlausibleEmail(email)) {
          return NextResponse.json({ ok: true });
        }
        if (!rateLimit(`apply:to:${String(email).toLowerCase()}`, 3, 3_600_000).allowed) {
          return NextResponse.json({ ok: true });
        }
        await resend.emails.send({
          from,
          to: email,
          subject: "Application Received — Dominus Foundry",
          text: `Thanks for applying, ${escapeText(firstName, 80)}. We received your application for the Founding Sales Rep position.\n\nIf your background matches what we're looking for, you'll hear from us within 3 business days.\n\nDominus Foundry\nhttps://dominusfoundry.com`,
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
