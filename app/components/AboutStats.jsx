"use client";
import { event as gaEvent } from "@/lib/gtag";

const realEstate = [
  { label: "License", detail: "Florida REALTOR®, active with eXp Realty since 2026" },
  { label: "Where I work", detail: "Fort Walton Beach, Destin, Niceville, Crestview and the rest of Okaloosa County" },
  { label: "What I focus on", detail: "PCS moves to Eglin and Hurlburt, first-time buyers, and getting the full monthly cost right" },
  { label: "How I prep", detail: "Comparable sales, flood zone and insurance research, and zoning checks before you write an offer" },
];

const before = [
  { years: "2021–2025", label: "Web and app development", detail: "Full-stack projects with clients, timelines and a lot of communication" },
  { years: "2016–2021", label: "Sales and client operations", detail: "Long-term client relationships, follow-up, and service under deadlines" },
  { years: "Along the way", label: "Residential painting", detail: "A tradesperson's eye for condition, finishes and upkeep" },
];

export default function AboutStats() {
  return (
    <section id="stats" className="border-t border-foreground/10 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Real estate
          </h2>
          <dl className="mt-8 divide-y divide-foreground/10 border-y border-foreground/10">
            {realEstate.map((item) => (
              <div key={item.label} className="py-5">
                <dt className="font-semibold text-foreground">{item.label}</dt>
                <dd className="mt-1 leading-relaxed text-foreground/75">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Before real estate
          </h2>
          <ol className="mt-8 divide-y divide-foreground/10 border-y border-foreground/10">
            {before.map((item) => (
              <li key={item.label} className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <p className="tabular text-steel">{item.years}</p>
                <div>
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 leading-relaxed text-foreground/75">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            <a
              href="/files/lindsey-howard-cv.pdf"
              download="Lindsey-Howard-CV.pdf"
              onClick={() =>
                gaEvent({ action: "download", category: "engagement", label: "cv_download" })
              }
              className="font-semibold text-reef underline decoration-reef/40 underline-offset-4 hover:decoration-reef"
            >
              Download my CV (PDF)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
