import { NextResponse } from "next/server";
import { rateLimit, getClientIp, escapeText, isPlausibleEmail } from "@/lib/mail-guard";

export async function POST(req) {
  // ⚠ VOLUME BOUND (audit F-0056) — fixed-window, per-isolate, per-IP. Bounds one noisy
  // sender; does nothing against a distributed one.
  const ip = getClientIp(req.headers);
  const ipGate = rateLimit(`contact:ip:${ip}`, 5, 60_000);
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
      message = ""
    } = payload ?? {};

    const to = process.env.LEADS_TO_EMAIL;
    const from = process.env.LEADS_FROM_EMAIL || "foundry@dominusfoundry.com";
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      ``,
      `Message:`,
      `${message}`
    ].join("\n");

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
      // ⚠ CALLER-NAMED RECIPIENT (audit F-0056). These three routes send `text:`, not
      // `html:`, so there is NO HTML injection here — the finding's other four routes have
      // that and these do not. What remains is the half that does apply: an
      // unauthenticated caller chooses the recipient AND the body is a verbatim echo of
      // their own submission, so the platform delivers attacker-composed plaintext from
      // its own sending domain to an address the attacker picked. Validate the address,
      // window it per-recipient, and cap the echoed body so one field cannot become the
      // whole message.
      if (!isPlausibleEmail(email)) {
        return NextResponse.json({ ok: true });
      }
      if (!rateLimit(`contact:to:${String(email).toLowerCase()}`, 3, 3_600_000).allowed) {
        return NextResponse.json({ ok: true });
      }
        await resend.emails.send({
          from,
          to: email,
          subject: "We received your message — Dominus Foundry",
          text: `Thanks for reaching out. Here’s a copy of what you sent:\n\n${escapeText(body, 4000)}\n\nWe’ll reply within one business day.`,
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
