"use client";
import { event as gaEvent } from "@/lib/gtag";

const reasons = [
  {
    title: "Coachable, not green",
    body: "Licensed and active with eXp, and ready to put in the reps. Years of high-volume sales mean I'm already comfortable with cold outreach, objections and closing under pressure.",
  },
  {
    title: "A built-in tech advantage",
    body: "I built this whole site, the blog, the lead capture and the market tools from scratch. I can do the same for a mentor's business: landing pages, listing marketing, or lead-routing tools.",
  },
  {
    title: "Low effort, high upside",
    body: "My marketing is already live and paying for itself. You wouldn't be starting me from zero, just plugging your guidance into something that's already running.",
  },
];

// EDIT ME: replace these with your actual mentor preferences. A clear,
// specific ask gets better responses than a vague one.
const lookingFor = [
  "An eXp agent active in Okaloosa County and the Emerald Coast",
  "Hands-on guidance through my first few deals: contracts, disclosures and negotiation",
  "Someone who values agents who bring their own marketing",
  "Exposure to the higher-end side of the market as I grow",
];

export default function SponsorPitch() {
  return (
    <section id="mentor" className="paper-section py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            For eXp agents: why mentor me
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            I&apos;m not looking for someone to hold my hand through every
            basic step. I&apos;m looking for a producing eXp agent who&apos;ll
            help sharpen my first few transactions. In return, you get an
            agent with real sales experience, a working marketing platform,
            and a real commitment to Okaloosa County.
          </p>
        </div>

        <dl className="mt-14 grid gap-10 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="border-t-2 border-reef/60 pt-5">
              <dt className="font-display text-xl font-semibold text-ink">{r.title}</dt>
              <dd className="mt-2 leading-relaxed text-ink/75">{r.body}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              What I&apos;m looking for
            </h3>
            <ul className="mt-5 list-disc space-y-2.5 pl-5 leading-relaxed text-ink/80 marker:text-reef">
              {lookingFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel flex flex-col justify-center gap-6 bg-background p-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Let&apos;s talk mentorship
              </h3>
              <p className="mt-1 text-foreground/75">
                Fifteen minutes is enough to know if it&apos;s a fit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:lindsey.howard.re@outlook.com?subject=eXp%20mentorship"
                className="rounded-full bg-reef px-7 py-3.5 font-semibold text-background transition-opacity hover:opacity-90"
              >
                Email me about mentoring
              </a>
              <a
                href="/files/lindsey-howard-cv.pdf"
                download="Lindsey-Howard-Resume.pdf"
                onClick={() =>
                  gaEvent({
                    action: "download",
                    category: "engagement",
                    label: "mentor_resume_download",
                  })
                }
                className="rounded-full border border-foreground/20 px-7 py-3.5 font-semibold text-foreground transition-colors hover:border-foreground/50"
              >
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
