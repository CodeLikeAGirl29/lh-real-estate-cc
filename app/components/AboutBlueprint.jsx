import Image from "next/image";
import Link from "next/link";

const points = [
  {
    title: "The whole payment, up front",
    body: "Mortgage, taxes, insurance, flood zone and HOA. You'll know the real monthly number before you write an offer, not at the closing table.",
  },
  {
    title: "Built around PCS moves",
    body: "Tight timelines, BAH math, VA loans and buying from out of state. I plan around your orders instead of the other way around.",
  },
  {
    title: "Tools you can use too",
    body: "The calculators on this page, plus Dock & Dune for waterfront flood and insurance costs. Use them anytime, no sign-up.",
  },
];

export default function AboutBlueprint() {
  return (
    <section id="blueprint" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[14px]">
            <Image
              src="/images/lindsey-profile.jpg"
              alt="Lindsey Howard"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <h2 className="max-w-xl font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
            An agent who builds her own tools
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            I came to real estate from software. So when the usual tools
            couldn&apos;t answer a client&apos;s question, like what flood
            insurance really runs on a canal lot, I built one that could. You
            get an agent who checks the math, and then checks it again.
          </p>

          <dl className="mt-12 max-w-2xl divide-y divide-foreground/10 border-y border-foreground/10">
            {points.map((point) => (
              <div key={point.title} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <dt className="font-display text-xl font-semibold text-foreground">
                  {point.title}
                </dt>
                <dd className="leading-relaxed text-foreground/75">{point.body}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8">
            <Link
              href="/about"
              className="font-semibold text-reef underline decoration-reef/40 underline-offset-4 hover:decoration-reef"
            >
              More about me
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
