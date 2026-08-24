import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getResend() {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as Record<
      string,
      unknown
    > | null;
    if (!body) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? "").trim();

    // Honeypot: silently succeed to fool bots.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }
    const resend = getResend();
    if (!resend) {
      console.error(
        "[contact] RESEND_API_KEY is not set (env:",
        {
          RESEND_API_KEY: process.env.RESEND_API_KEY ? "set" : "missing",
          EMAIL_FROM: process.env.EMAIL_FROM ? "set" : "missing",
        },
        ")",
      );
      return NextResponse.json(
        { error: "Email is not configured (missing RESEND_API_KEY)" },
        { status: 500 },
      );
    }

    const from =
      process.env.EMAIL_FROM || "Vicri Aditiya <onboarding@resend.dev>";
    await resend.emails.send({
      from,
      to: site.email,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
