"use client";
import { event as gaEvent } from "@/lib/gtag";

const realEstate = [
  {
    title: "Florida REALTOR®",
    body: "Licensed in 2026 and active with eXp Realty.",
  },
  {
    title: "Where I work",
    body: "Fort Walton Beach, Destin, Niceville, Crestview and the rest of Okaloosa County.",
  },
  {
    title: "What I focus on",
    body: "PCS moves, first-time buyers, and getting the full monthly cost right: insurance, flood zone, taxes and HOA.",
  },
  {
    title: "How I price homes",
    body: "Comparable sales from the local MLS, plus a tradesperson's eye for condition.",
  },
];

const tech = [
  {
    title: "Web development",
    body: "React, Next.js and Node. I built this site and its tools from scratch.",
  },
  {
    title: "Tools for buyers",
    body: "The payment calculator, home value estimator and neighborhood map on the homepage, and Dock & Dune for waterfront flood and insurance costs.",
  },
  {
    title: "Data and security",
    body: "Comfortable with databases, CRMs and keeping documents and client information safe.",
  },
];

export default function AboutStats() {
  return (
    <section id="stats" className="border-t border-foreground/10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
          The short version
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Group heading="Real estate" items={realEstate} />
          <Group heading="Tech" items={tech} />
        </div>

        <div className="panel mt-16 flex flex-col justify-between gap-6 p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground">
              Want the full background?
            </h3>
            <p className="mt-1 text-foreground/75">
              My resume covers my sales, development and real estate experience.
            </p>
          </div>
          <a
            href="/files/lindsey-howard-cv.pdf"
            download="Lindsey-Howard-CV.pdf"
            onClick={() =>
              gaEvent({
                action: "download",
                category: "engagement",
                label: "cv_download",
              })
            }
            className="whitespace-nowrap rounded-full bg-reef px-7 py-3.5 text-center font-semibold text-background transition-opacity hover:opacity-90"
          >
            Download my resume
          </a>
        </div>
      </div>
    </section>
  );
}

function Group({ heading, items }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold text-reef">{heading}</h3>
      <dl className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
        {items.map((item) => (
          <div key={item.title} className="py-5">
            <dt className="font-display text-xl font-semibold text-foreground">
              {item.title}
            </dt>
            <dd className="mt-1.5 leading-relaxed text-foreground/75">{item.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
