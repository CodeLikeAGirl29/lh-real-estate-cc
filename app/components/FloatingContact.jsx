"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FaPhone, FaCommentSms, FaXmark, FaHeadset } from "react-icons/fa6";

// Your real contact number, in the three formats we need:
//   PHONE_DISPLAY – what the visitor reads
//   PHONE_TEL     – for the "Call" link (E.164, no spaces)
//   PHONE_SMS     – for the "Text" link
const PHONE_DISPLAY = "(850) 533-5877";
const PHONE_TEL = "+18505335877";
const PHONE_SMS = "+18505335877";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-72 rounded-[14px] border border-foreground/10 bg-background p-5 shadow-[0_12px_32px_-12px_rgba(12,34,32,0.35)]"
            role="dialog"
            aria-label="Contact Lindsey Howard"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  Questions? Let&apos;s talk.
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  Call or text, happy to help.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close contact popup"
                className="text-foreground/50 transition-colors hover:text-foreground"
              >
                <FaXmark className="size-4" />
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 rounded-full bg-reef px-4 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                <FaPhone className="size-4" />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={`sms:${PHONE_SMS}`}
                className="flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/50"
              >
                <FaCommentSms className="size-4" />
                Send a text
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      <m.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact popup" : "Open contact popup"}
        aria-expanded={open}
        className="flex size-14 items-center justify-center rounded-full bg-reef text-background shadow-[0_8px_20px_-8px_rgba(12,34,32,0.5)]"
      >
        {open ? (
          <FaXmark className="size-5" />
        ) : (
          <FaHeadset className="size-5" />
        )}
      </m.button>
    </div>
  );
}
