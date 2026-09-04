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
            className="frame w-72 border border-ink/10 bg-background p-5 shadow-xl"
            role="dialog"
            aria-label="Contact Lindsey Howard"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display text-base font-bold text-ink">
                  Questions? Let&apos;s talk.
                </p>
                <p className="mt-1 text-sm text-ink/60">
                  Call or text — happy to help.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close contact popup"
                className="text-ink/40 transition-colors hover:text-ink"
              >
                <FaXmark className="size-4" />
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 bg-reef px-4 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                <FaPhone className="size-4" />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={`sms:${PHONE_SMS}`}
                className="flex items-center justify-center gap-2 border border-ink/20 px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-steel"
              >
                <FaCommentSms className="size-4 text-steel" />
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
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="flex size-14 items-center justify-center rounded-full bg-reef text-ink shadow-lg"
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
