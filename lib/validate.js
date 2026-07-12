// lib/validate.js
// Small helpers for sanitizing and validating contact-form input
// before it gets embedded into an outgoing email.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Escape HTML-significant characters so user input can't inject
 * markup/links into the outgoing email (or break the layout).
 */
export function escapeHtml(value) {
  if (typeof value !== "string") return "";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function isValidEmail(value) {
  return (
    typeof value === "string" &&
    EMAIL_RE.test(value.trim()) &&
    value.length <= 254
  );
}

/**
 * Validate + clean up the raw contact form payload.
 * Returns { ok: true, data } or { ok: false, error }.
 */
export function parseContactPayload(body) {
  const name = (body?.name ?? "").toString().trim();
  const phone = (body?.phone ?? "").toString().trim();
  const email = (body?.email ?? "").toString().trim();
  const subject = (body?.subject ?? "").toString().trim();
  const message = (body?.message ?? "").toString().trim();

  if (!name || name.length > 100) {
    return { ok: false, error: "Please enter a valid name." };
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (phone && phone.length > 30) {
    return { ok: false, error: "Please enter a valid phone number." };
  }
  if (!message || message.length > 5000) {
    return {
      ok: false,
      error: "Message must be between 1 and 5000 characters.",
    };
  }
  if (subject && subject.length > 150) {
    return { ok: false, error: "Subject is too long." };
  }

  return {
    ok: true,
    data: {
      name: escapeHtml(name),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      subject: escapeHtml(subject || "General Inquiry"),
      message: escapeHtml(message),
    },
  };
}
