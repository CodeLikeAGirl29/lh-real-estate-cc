"use client";
import { event as gaEvent } from "@/lib/gtag";

const reasons = [
  {
    title: "Coachable, not green",
    body: "I'm licensed and ready to put in the reps. Years in sales already mean I'm comfortable with cold outreach, objections and follow-up, the things new agents usually spend their first year learning.",
  },
  {
    title: "A tech advantage you can use",
    body: "I built this whole site, the blog, the lead capture and the tools myself. I can do the same for a mentor's business: landing pages, listing marketing, or lead-routing tools.",
  },
  {
    title: "Not starting from zero",
    body: "My marketing and lead funnel are already live. Mentoring me means plugging your guidance into something that's already running.",
  },
];

// EDIT ME: make these your real preferences. Specific asks get better answers.
const lookingFor = [
  "An eXp agent active in Okaloosa County and the Emerald Coast",
  "Hands-on guidance through my first few transactions: contracts, disclosures, negotiation",
  "Someone who values agents bringing their own marketing",
  "Exposure to the higher-end side of the market as I grow",
];

export default function SponsorPitch() {
  return (
    <section id="mentor" className="paper-section py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            For agents thinking about mentoring me
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            I&apos;m looking for a producing eXp agent who&apos;ll help sharpen
            my first few deals. In return you get an agent with real sales
            experience, a working marketing platform, and a serious commitment
            to this market.
          </p>
        </div>

        <dl className="mt-14 grid gap-10 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="border-t-2 border-reef pt-5">
              <dt className="font-display text-2xl font-semibold text-ink">{r.title}</dt>
              <dd className="mt-3 leading-relaxed text-ink/75">{r.body}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">What I&apos;m looking for</h3>
            <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-ink/80 marker:text-reef">
              {lookingFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="lg:text-right">
            <p className="text-lg text-ink/80">Fifteen minutes is enough to know if it&apos;s a fit.</p>
            <div className="mt-5 flex flex-wrap gap-3 lg:justify-end">
              <a
                href="mailto:lindsey.howard.re@outlook.com?subject=eXp%20Mentorship%20Inquiry"
                className="rounded-full bg-reef px-6 py-3 font-semibold text-background hover:opacity-90"
              >
                Email me about mentoring
              </a>
              <a
                href="/files/lindsey-howard-cv.pdf"
                download="Lindsey-Howard-Resume.pdf"
                onClick={() =>
                  gaEvent({ action: "download", category: "engagement", label: "mentor_resume_download" })
                }
                className="rounded-full border border-ink/20 px-6 py-3 font-semibold text-ink hover:border-ink/50"
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
