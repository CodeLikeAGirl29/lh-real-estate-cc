// Validates and normalizes the payload from the Contact form (and anything
// else that posts to /api/send, like the CV-download tracker) before it's
// used to send an email. Keeps the shape-checking out of the route handler.

const MAX_LENGTHS = {
  name: 100,
  phone: 30,
  email: 254,
  subject: 150,
  message: 5000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseContactPayload(body) {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const name = clean(body.name);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const subject = clean(body.subject) || "New website inquiry";
  const message = clean(body.message);

  if (!name) return { ok: false, error: "Name is required." };
  if (!email) return { ok: false, error: "Email is required." };
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!message) return { ok: false, error: "Message is required." };

  for (const [field, value] of Object.entries({
    name,
    phone,
    email,
    subject,
    message,
  })) {
    if (value.length > MAX_LENGTHS[field]) {
      return { ok: false, error: `${field} is too long.` };
    }
  }

  return {
    ok: true,
    data: { name, phone, email, subject, message },
  };
}
