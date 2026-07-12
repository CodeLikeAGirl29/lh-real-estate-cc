import { Resend } from "resend";
import { NextResponse } from "next/server";
import { parseContactPayload } from "@/lib/validate";

const resend = new Resend(process.env.RESEND_API_KEY);

// Very lightweight in-memory rate limiting (per server instance).
// Not a substitute for a durable store, but stops naive bot floods
// without adding infra. Resets on cold start/deploy.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max submissions per IP per window
const submissions = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (submissions.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again shortly.",
        },
        { status: 429 },
      );
    }

    const body = await req.json();

    // Honeypot: a hidden field real visitors never fill in.
    // If it's populated, silently pretend success so bots don't
    // learn to look for a different signal.
    if (body?.company) {
      return NextResponse.json({ success: true });
    }

    const parsed = parseContactPayload(body);
    if (!parsed.ok) {
      return NextResponse.json(
        { success: false, error: parsed.error },
        { status: 400 },
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    const data = await resend.emails.send({
      from: "LH Real Estate <onboarding@resend.dev>",
      to: ["lindsey.howard.re@outlook.com"],
      replyTo: email,
      subject: `Lead: ${subject}`,
      html: `
    <h2>New Lead Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
