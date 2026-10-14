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

      <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pt-40">
        <div className="lg:col-span-7 lg:pt-4">
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl">
            Hi, I&apos;m Lindsey.
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              I&apos;m a REALTOR® with eXp Realty, based in Fort Walton Beach,
              and I work with buyers and sellers across Okaloosa County.
            </p>
            <p>
              I took a slightly roundabout way here. I spent years in sales
              and client work, then a few more building websites and apps.
              Along the way I did residential painting, which taught me to
              look at a house&apos;s surfaces, finishes and upkeep instead of
              just the staging.
            </p>
            <p>
              All of that shows up in how I work now. I&apos;m going to run
              the real numbers with you, flood zone and insurance included,
              and when the usual tools can&apos;t answer a question, I
              build one that can. That&apos;s where the calculators on this
              site and Dock &amp; Dune came from.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="tel:+18505335877"
              className="rounded-full bg-reef px-6 py-3 font-semibold text-background hover:opacity-90"
            >
              Call or text (850) 533-5877
            </a>
            <a
              href="mailto:lindsey.howard.re@outlook.com"
              className="rounded-full border border-foreground/20 px-6 py-3 font-semibold text-foreground hover:border-foreground/50"
            >
              Email me
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[14px]">
            {/* Swap in a professional headshot when you have one */}
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
      </section>

      <AboutStats />
      <SponsorPitch />
      <Footer />
    </main>
  );
}
