// about/page.jsx
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutStats from "../components/AboutStats";
import AboutBlueprint from "../components/AboutBlueprint";
import SponsorPitch from "../components/SponsorPitch";

export const metadata = {
  title: "About Lindsey Howard | eXp Realty, Fort Walton Beach",
  description:
    "Florida REALTOR® at eXp Realty and full-stack developer based in Fort Walton Beach, FL, serving buyers, sellers, and investors across Okaloosa County.",
  alternates: { canonical: "https://www.lindseykhoward.com/about" },
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
    <main className="charcoal-section min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-40 pb-24 px-6 border-b border-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            The Agent <span className="text-reef">+</span> The Architect
          </h1>
          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            I don’t just show properties; I analyze the data, understand the
            structure, and engineer a seamless transition for every client.
          </p>
        </div>
      </div>

      <AboutStats />

      {/* Main Content Section */}
      <section className="charcoal-section py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 border-l-[3px] border-reef pl-6">
              My Mission: <br />
              <span className="text-muted font-normal">
                Strategy Meets Home.
              </span>
            </h2>

            <p className="text-foreground/80 text-[15px] mb-6 leading-relaxed">
              With a background in{" "}
              <span className="font-bold text-reef">high-volume sales</span> and{" "}
              <span className="font-bold text-reef">web development</span>, I
              bring a unique perspective to the Florida Panhandle market. I
              believe real estate should be high-tech but high-touch—where every
              detail is managed with the precision of a codebase.
            </p>

            <p className="text-foreground/80 text-[15px] mb-10 leading-relaxed">
              Based in{" "}
              <span className="font-bold text-steel">Fort Walton Beach</span>{" "}
              and licensed with{" "}
              <span className="font-bold text-steel">eXp Realty</span>, I bridge
              the gap between traditional service and modern digital
              intelligence.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-surface border border-muted/20 font-mono text-[10px] text-steel font-bold uppercase tracking-widest">
                Client-First Logic
              </span>
              <span className="px-4 py-2 bg-surface border border-muted/20 font-mono text-[10px] text-steel font-bold uppercase tracking-widest">
                Data-Driven Marketing
              </span>
              <span className="px-4 py-2 bg-surface border border-muted/20 font-mono text-[10px] text-steel font-bold uppercase tracking-widest">
                Structural Integrity
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="frame relative aspect-square p-2 border border-muted/20 bg-surface">
              <div className="relative w-full h-full overflow-hidden bg-background">
                {/* Replace with your professional headshot */}
                <Image
                  src="/images/lindsey-profile.jpg"
                  alt="Lindsey Howard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            {/* Architectural accent block behind image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-reef/5 border border-reef/10 -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      <AboutBlueprint />
      <SponsorPitch />
      <Footer />
    </main>
  );
}
