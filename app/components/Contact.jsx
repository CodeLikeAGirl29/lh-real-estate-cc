"use client";
import { useState } from "react";
import { FaCircleCheck, FaEnvelope, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
    <section className="paper-section py-12" id="contact">
      <div className="overflow-hidden max-w-6xl max-lg:max-w-2xl mx-auto p-4">
        <div className="grid lg:grid-cols-2 items-center gap-8">
          <div className="frame py-8 px-8 sm:px-10 border border-ink/10">
            <h2 className="font-display text-3xl text-ink font-bold">
              Get In <span className="text-brass">Touch</span>
            </h2>
            <p className="text-[15px] text-ink/60 mt-4 leading-relaxed">
              Have a specific inquiry? Ready to engage to find the perfect home.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-col items-center justify-center p-8 border border-emerald-600/20"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <FaCircleCheck className="text-emerald-600 size-12 mb-4" />
                </motion.div>
                <h3 className="font-display text-xl font-bold text-ink">
                  Message Sent!
                </h3>
                <p className="text-ink/60 mt-2 text-center text-sm">
                  Response will be provided as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-bold text-steel hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
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
                    placeholder="Full Name"
                    className="px-4 py-3 bg-transparent text-ink w-full text-sm border border-ink/20 focus:border-steel outline-0 transition-all"
                  />
                  <input
                    required
                    name="phone"
                    type="text"
                    placeholder="Phone No."
                    className="px-4 py-3 bg-transparent text-ink w-full text-sm border border-ink/20 focus:border-steel outline-0 transition-all"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 bg-transparent text-ink w-full text-sm border border-ink/20 focus:border-steel outline-0 transition-all"
                  />
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="px-4 py-3 bg-transparent text-ink w-full text-sm border border-ink/20 focus:border-steel outline-0 transition-all"
                  />
                  <textarea
                    required
                    name="message"
                    placeholder="Write Message"
                    rows="5"
                    className="px-4 pt-3 bg-transparent text-ink w-full text-sm border border-ink/20 focus:border-steel outline-0 transition-all"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={status !== "sending" ? { y: -3 } : {}}
                  whileTap={status !== "sending" ? { y: 0 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`mt-8 flex items-center justify-center text-sm font-medium w-full px-4 py-3 tracking-wide transition-all border-0 ${
                    status === "sending"
                      ? "bg-ink/20 text-ink/50 cursor-not-allowed"
                      : "bg-brass text-ink hover:opacity-90 cursor-pointer"
                  }`}
                >
                  {status === "sending" ? (
                    <motion.svg
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
                    </motion.svg>
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
                </motion.button>

                {status === "error" && (
                  <p className="mt-4 text-red-600 text-xs text-center">
                    {errorMessage || "Something went wrong. Please try again."}
                  </p>
                )}
              </form>
            )}

            <ul className="mt-8 flex flex-wrap justify-center gap-4 lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 border-t border-ink/10 pt-6">
              <li className="flex items-center font-medium">
                <FaEnvelope className="size-4 text-steel" />
                <a
                  href="mailto:lindsey.howard.re@outlook.com"
                  className="text-ink/70 text-sm ml-3 hover:text-brass transition-colors"
                >
                  lindsey.howard.re@outlook.com
                </a>
              </li>
              <li className="flex items-center font-medium">
                <FaPhone className="size-4 text-steel" />
                <a
                  href="tel:+18505335877"
                  className="text-ink/70 text-sm ml-3 hover:text-brass transition-colors"
                >
                  +1 (850) 533-5877
                </a>
              </li>
            </ul>
          </div>

          <div className="frame z-10 relative h-full max-lg:min-h-[400px] overflow-hidden border border-ink/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110117.84277717445!2d-86.71129595!3d30.41673895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88913f01b0ebf49d%3A0x673e271ee914a849!2sFort%20Walton%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              className="absolute left-0 top-0 h-full w-full grayscale-[40%] contrast-[1.05]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fort Walton Beach Area Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
