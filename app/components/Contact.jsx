"use client";
import { useState } from "react";
import {
  FaCircleCheck,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { m } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  // Picks up an address handed off from the Hero valuation form (see
  // Hero.jsx) so a visitor who asks for a CMA there doesn't have to
  // retype it here.
  const [prefillMessage] = useState(() => {
    if (typeof window === "undefined") return "";
    try {
      const storedAddress = sessionStorage.getItem("cma_address");
      if (storedAddress) {
        sessionStorage.removeItem("cma_address");
        return `I'd like a home value estimate for: ${storedAddress}`;
      }
    } catch {}
    return "";
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      // Honeypot: real visitors never see or fill this field.
      company: e.target.company.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        const result = await response.json().catch(() => null);
        setErrorMessage(
          result?.error || "Something went wrong. Please try again.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="py-20 sm:py-28" id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 max-lg:max-w-2xl">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">
              Tell me what you&apos;re looking for, or ask me anything about the
              area. I&apos;ll get back to you personally.
            </p>

            {status === "success" ? (
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="panel mt-8 flex flex-col items-center justify-center p-8"
              >
                <m.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <FaCircleCheck className="mb-4 size-12 text-reef" />
                </m.div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Message sent
                </h3>
                <p className="mt-2 text-center text-foreground/75">
                  Thanks. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-semibold text-reef underline decoration-reef/40 underline-offset-4 hover:decoration-reef"
                >
                  Send another message
                </button>
              </m.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Honeypot field: hidden from real visitors via CSS,
                    but bots that auto-fill every field will trip it. */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
                />
                <div className="space-y-4 mt-8">
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-base text-foreground placeholder:text-muted outline-0 transition-colors focus:border-reef"
                  />
                  <input
                    required
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-base text-foreground placeholder:text-muted outline-0 transition-colors focus:border-reef"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-base text-foreground placeholder:text-muted outline-0 transition-colors focus:border-reef"
                  />
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-base text-foreground placeholder:text-muted outline-0 transition-colors focus:border-reef"
                  />
                  <textarea
                    required
                    name="message"
                    placeholder="What can I help with?"
                    rows="5"
                    defaultValue={prefillMessage}
                    className="w-full rounded-lg border border-foreground/20 bg-background px-4 pt-3 text-base text-foreground placeholder:text-muted outline-0 transition-colors focus:border-reef"
                  />
                </div>

                <m.button
                  type="submit"
                  disabled={status === "sending"}
                  className={`mt-6 flex w-full items-center justify-center rounded-full border-0 px-4 py-3.5 font-semibold transition-opacity ${
                    status === "sending"
                      ? "bg-foreground/15 text-foreground/50 cursor-not-allowed"
                      : "bg-reef text-background hover:opacity-90 cursor-pointer"
                  }`}
                >
                  {status === "sending" ? (
                    <m.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mr-2"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeOpacity="0.25"
                        fill="none"
                      />
                      <path
                        d="M21 12a9 9 0 0 0-9-9"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </m.svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="currentColor"
                      className="mr-2"
                      viewBox="0 0 548.244 548.244"
                    >
                      <path
                        fillRule="evenodd"
                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {status === "sending" ? "Sending..." : "Send message"}
                </m.button>

                {status === "error" && (
                  <p className="mt-4 text-center text-sm text-red-600">
                    {errorMessage || "Something went wrong. Please try again."}
                  </p>
                )}
              </form>
            )}

            <ul className="mt-8 flex flex-col gap-3 border-t border-foreground/10 pt-6 sm:flex-row sm:gap-8">
              <li className="flex items-center font-medium">
                <FaEnvelope className="size-4 text-reef" />
                <a
                  href="mailto:lindsey.howard.re@outlook.com"
                  className="ml-3 text-foreground/80 transition-colors hover:text-reef"
                >
                  lindsey.howard.re@outlook.com
                </a>
              </li>
              <li className="flex items-center font-medium">
                <FaPhone className="size-4 text-reef" />
                <a
                  href="tel:+18505335877"
                  className="ml-3 text-foreground/80 transition-colors hover:text-reef"
                >
                  +1 (850) 533-5877
                </a>
              </li>
            </ul>
          </div>

          <div className="relative z-10 h-full overflow-hidden rounded-[14px] border border-foreground/10 max-lg:min-h-[400px]">
            {mapLoaded ? (
              <m.iframe
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110117.84277717445!2d-86.71129595!3d30.41673895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88913f01b0ebf49d%3A0x673e271ee914a849!2sFort%20Walton%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                className="absolute left-0 top-0 h-full w-full grayscale-[40%] contrast-[1.05]"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Fort Walton Beach Area Map"
              />
            ) : (
              <button
                type="button"
                onClick={() => setMapLoaded(true)}
                aria-label="Load interactive map of Fort Walton Beach, FL"
                className="group absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-3 bg-paper"
              >
                <FaLocationDot className="size-8 text-reef transition-transform duration-300 group-hover:-translate-y-1" />
                <span className="font-display text-2xl font-semibold text-ink">
                  Fort Walton Beach, FL
                </span>
                <span className="rounded-full border border-ink/20 px-5 py-2 text-sm font-semibold text-ink transition-colors group-hover:border-ink/50">
                  Load the map
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
