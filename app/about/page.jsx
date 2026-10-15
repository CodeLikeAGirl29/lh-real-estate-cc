// about/page.jsx
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutStats from "../components/AboutStats";
import SponsorPitch from "../components/SponsorPitch";

export const metadata = {
  title: "About Lindsey Howard | eXp Realty, Fort Walton Beach",
  description:
    "Florida REALTOR® at eXp Realty and full-stack developer based in Fort Walton Beach, FL, serving buyers, sellers, and investors across Okaloosa County.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Lindsey Howard | eXp Realty, Fort Walton Beach",
    description:
      "Florida REALTOR® at eXp Realty and full-stack developer serving Okaloosa County.",
    url: "https://www.lindseykhoward.com/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-16 lg:pt-[72px]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
          <div className="lg:col-span-7 lg:pt-4">
            <h1 className="font-display text-[2.5rem] font-semibold leading-[1.05] text-foreground sm:text-[3.25rem] lg:text-[3.75rem]">
              Hi, I&apos;m Lindsey.
            </h1>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/80">
              <p>
                I&apos;m a REALTOR® with eXp Realty, based in Fort Walton
                Beach. I help people buy and sell homes all over Okaloosa
                County, and a lot of my clients are military families PCSing
                to Eglin or Hurlburt on a deadline.
              </p>
              <p>
                Before real estate I spent years in sales, then a few more
                building websites and web apps. That second part is why this
                site has calculators and a flood-cost tool on it. I built them
                myself, because I wanted clients to see real numbers instead
                of guesses.
              </p>
              <p>
                I also spent time painting houses, which sounds random, but it
                means I notice the stuff listing photos hide: soft spots,
                water stains, the fresh paint covering something it
                shouldn&apos;t.
              </p>
              <p>
                What I care about most is simple. You should know the true
                monthly cost of a home before you fall for it, and you should
                never feel dumb for asking a question.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:lindsey.howard.re@outlook.com?subject=Let's%20talk%20real%20estate"
                className="rounded-full bg-reef px-7 py-3.5 font-semibold text-background transition-opacity hover:opacity-90"
              >
                Email me
              </a>
              <a
                href="tel:+18505335877"
                className="rounded-full border border-foreground/20 px-7 py-3.5 font-semibold text-foreground transition-colors hover:border-foreground/50"
              >
                Call or text (850) 533-5877
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[14px]">
              <Image
                src="/images/lindsey-profile.jpg"
                alt="Lindsey Howard, REALTOR® with eXp Realty in Fort Walton Beach, FL"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <AboutStats />
      <SponsorPitch />
      <Footer />
    </main>
  );
}
