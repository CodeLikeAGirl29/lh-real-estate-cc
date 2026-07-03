export async function POST(request) {
  const timestamp = new Date().toISOString();
  const referer = request.headers.get("referer") || "unknown";

  // Reuses whatever you're already using in /api/send to email yourself.
  // If /api/send uses Resend, Nodemailer, etc., swap this block to match —
  // paste that file and I'll wire this to match exactly.
  try {
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "CV Download Alert",
        phone: "",
        email: "system@lhrealestate.cc",
        subject: "CV Downloaded",
        message: `Someone downloaded the CV at ${timestamp}. Referring page: ${referer}`,
      }),
    });
  } catch (err) {
    console.error("Download tracking failed:", err);
  }

  return Response.json({ ok: true });
}
