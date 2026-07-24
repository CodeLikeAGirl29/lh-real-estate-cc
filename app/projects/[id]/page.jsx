"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { event as gaEvent } from "@/lib/gtag";
import {
  FaArrowLeft,
  FaMapLocationDot,
  FaUmbrellaBeach,
} from "react-icons/fa6";

const projectContent = {
  "master-drill": {
    title: "The Master Drill: Engineering a Smarter Way to Study",
    tags: "#PropTech #NextJS15 #RealEstate #WebDevelopment",
    image: "/images/master-drill-ui.jpg",
    content: (
      <>
        <p className="mb-6 text-muted text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-brass first-letter:mr-3 first-letter:float-left">
          Success in the Florida real estate market begins with a license, but
          true market mastery requires an underlying technical infrastructure.
          The <strong>Florida Real Estate Master Drill</strong> full-stack study
          environment was engineered from scratch to address a clear gap in
          traditional learning tools: the absolute lack of programmatic state
          tracking and logic-driven retention systems required for high-stakes
          examinations.
        </p>

        <h3 className="text-2xl font-bold text-foreground mb-4 mt-10">
          Architecting 19 Units of Compliance
        </h3>
        <p className="mb-6 text-muted text-lg">
          The 63-hour Florida pre-licensing curriculum is massive, spanning
          rigorous regulatory compliance frameworks, complex mathematical
          calculations, and deep-dives into Florida statutes. Instead of relying
          on passive flashcards, this platform breaks the material into an
          active testing engine. Leveraging React Hooks and the Context API, the
          codebase actively evaluates weak performance areas across all 19
          mandatory instructional units, automatically adapting the question
          rotation to optimize study workflows.
        </p>

        <p className="mb-6 text-muted text-lg">
          By integrating a full MERN stack architecture, user progress isn't
          just stored—it's analyzed. The database actively queries past
          performance to surface concepts right before the "forgetting curve"
          sets in, ensuring that complex topics like property taxation formulas
          and closing cost prorations become second nature.
        </p>

        <div className="my-10 p-6 bg-surface border-l-4 border-brass rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl">
            "High-stakes retention demands precision engineering. Standard
            applications track completion; this architecture enforces zero-fail
            accuracy."
          </p>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-4">
          UI/UX Designed for Deep Work
        </h3>
        <p className="mb-6 text-muted text-lg">
          Studying complex legal frameworks requires immense cognitive focus.
          The interface was explicitly designed with a high-contrast dark mode
          aesthetic to reduce eye strain during late-night study sessions. By
          utilizing Tailwind CSS to strip away visual clutter and present
          information through a clean, minimalist lens, the application keeps
          the user focused purely on the data.
        </p>
      </>
    ),
  },
  "shadow-slate": {
    title: "Shadow + Slate: Engineering Interactive Space Curation",
    tags: "#PropTech #TypeScript #ReactKonva #InteriorDesign",
    image: "/images/shadow-slate-ui.jpg",
    content: (
      <>
        <p className="mb-6 text-muted text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-brass first-letter:mr-3 first-letter:float-left">
          Every listing photo tells a buyer what a room looks like. It rarely
          tells them what it could look like. <strong>Shadow + Slate</strong>{" "}
          was built to close that gap — an interactive mood board canvas where
          agents, designers, and buyers can drag furniture, finishes, and color
          palettes directly onto a room and see the possibilities in real time,
          instead of imagining them from a static listing photo.
        </p>

        <h3 className="text-2xl font-bold text-foreground mb-4 mt-10">
          Canvas Logic, Not Just a Slideshow
        </h3>
        <p className="mb-6 text-muted text-lg">
          The core engine runs on <strong>React Konva</strong>, giving the board
          true canvas-level interactivity: layered elements, free transforms,
          and drag-and-drop that responds instantly rather than re-rendering the
          page. Built in TypeScript, the component tree strictly types every
          board element — swatches, furniture tiles, layout frames — so the
          canvas stays predictable even as boards grow complex with dozens of
          layered pieces.
        </p>

        <p className="mb-6 text-muted text-lg">
          Each board persists as structured state rather than a flattened image,
          which means a saved mood board isn&apos;t just a picture — it&apos;s
          an editable spatial document. A client can hand it back with notes,
          swap a finish, and reopen the exact same layout with nothing lost.
        </p>

        <div className="my-10 p-6 bg-surface border-l-4 border-brass rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl">
            &quot;A listing photo is a fact. A mood board is a conversation —
            the interface just needed to keep up with how fast that conversation
            moves.&quot;
          </p>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-4">
          Built for the Handoff Between Agent and Client
        </h3>
        <p className="mb-6 text-muted text-lg">
          The interface intentionally stays minimal — dark canvas, light tools —
          so the focus never leaves the space being designed. It's the kind of
          tool that shows a client you're not just selling a house; you're
          helping them see themselves living in it.
        </p>
      </>
    ),
  },
  "okaloosa-guide": {
    title: "Okaloosa Guide",
    tags: "#LocalGuide #RealEstate #OkaloosaCounty #DataDriven",
    image: "/images/local-coastline.jpg",
    content: (
      <>
        <p className="mb-6 text-muted text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-brass first-letter:mr-3 first-letter:float-left">
          Most local guides for buyers are lists of restaurants and beach access
          points. The <strong>Okaloosa Guide</strong> project takes a different
          angle: it's a working reference for the structural and infrastructure
          factors that actually move property value across Fort Walton Beach,
          Destin, and Shalimar — the kind of detail a buyer's agent should
          already know cold.
        </p>

        <h3 className="text-2xl font-bold text-foreground mb-4 mt-10">
          Mapping Compliance to Neighborhoods
        </h3>
        <p className="mb-6 text-muted text-lg">
          The guide breaks Okaloosa County down by construction era and
          compliance tier — flagging which pockets fall under stricter coastal
          building standards, where flood zone designations shift, and which
          secondary residential tiers around Spanish Villas and Shalimar tend to
          offer the strongest CAP rates relative to their compliance
          requirements.
        </p>

        <p className="mb-6 text-muted text-lg">
          It's organized less like a brochure and more like a working reference
          doc — the same one I use when walking a buyer through why two houses
          three blocks apart can carry very different insurance and resale
          profiles.
        </p>

        <div className="my-10 p-6 bg-surface border-l-4 border-brass rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl">
            &quot;Two houses with the same view can carry very different risk
            profiles. The difference is almost always in the infrastructure, not
            the paint color.&quot;
          </p>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-4">
          A Living Document
        </h3>
        <p className="mb-6 text-muted text-lg">
          Infrastructure projects, zoning updates, and flood maps change — so
          this guide is treated as a living reference rather than a one-time
          write-up, updated as Okaloosa County's growth zones shift.
        </p>
      </>
    ),
  },
  "beyond-the-beach": {
    title: "Beyond the Beach: The Blueprint",
    tags: "#Investment #DataAnalysis #OkaloosaCounty #PropTech",
    image: "/images/img-1.jpg",
    content: (
      <>
        <p className="mb-6 text-muted text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-brass first-letter:mr-3 first-letter:float-left">
          <strong>Beyond the Beach</strong> started as a question I kept getting
          from out-of-state investors: where in Okaloosa County is growth
          actually happening, versus where it just looks like it is from the
          drone photos? This project is the data-side answer — a framework for
          reading growth zones by infrastructure signal instead of curb appeal.
        </p>

        <h3 className="text-2xl font-bold text-foreground mb-4 mt-10">
          Reading the Signals Before the Listings Do
        </h3>
        <p className="mb-6 text-muted text-lg">
          The methodology behind this project tracks three leading indicators
          ahead of price: permitting activity, utility and fiber buildout, and
          zoning amendments. Each tends to move months before a neighborhood
          shows up in comparable sales data, which is exactly the window an
          investor wants visibility into.
        </p>

        <p className="mb-6 text-muted text-lg">
          Applied to the Prop-Tech pivot happening across the county, the
          pattern is consistent: markets with better digital property management
          infrastructure post lower vacancy and tighter management overhead — a
          real, measurable edge for investors willing to look past the view.
        </p>

        <div className="my-10 p-6 bg-surface border-l-4 border-brass rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl">
            &quot;By the time a growth zone shows up in the comps, the best
            entry point has usually already passed.&quot;
          </p>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-4">
          From Analysis to Advisory
        </h3>
        <p className="mb-6 text-muted text-lg">
          The full write-up and market commentary built on this framework lives
          on{" "}
          <Link
            href="/blog/beyond-the-beach"
            className="text-brass hover:underline"
          >
            the Digital Ledger
          </Link>
          — this page covers the underlying approach; the blog post covers the
          current market read.
        </p>
      </>
    ),
  },
  "emerald-coast-insider": {
    title: "The Emerald Coast Inside",
    tags: "#Lifestyle #PropTech #ClientExperience #EmeraldCoast",
    image: "/images/img-2.jpg",
    content: (
      <>
        <p className="mb-6 text-muted text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-brass first-letter:mr-3 first-letter:float-left">
          Not every part of representing a place is technical. The{" "}
          <strong>Emerald Coast Inside</strong> project is the lifestyle layer —
          a curated set of local knowledge (paddleboard launches, coffee spots,
          beach access points with the least crowd) built to give relocating
          clients a feel for daily life here, not just a feel for square
          footage.
        </p>

        <h3 className="text-2xl font-bold text-foreground mb-4 mt-10">
          Why This Sits Next to the Technical Work
        </h3>
        <p className="mb-6 text-muted text-lg">
          Clients moving from out of state are rarely just buying a structure —
          they're buying a rhythm of life they've usually only experienced on
          vacation. This project exists to translate that vacation feeling into
          an honest picture of what living here full time is actually like, good
          and mundane parts included.
        </p>

        <div className="my-10 p-6 bg-surface border-l-4 border-brass rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl">
            &quot;Some places you visit. Others, you live. Helping a client tell
            the difference is part of the job.&quot;
          </p>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-4">
          Read the Full Guide
        </h3>
        <p className="mb-6 text-muted text-lg">
          The full lifestyle write-up, including the current insider picks list,
          lives on{" "}
          <Link
            href="/blog/emerald-coast-insider"
            className="text-brass hover:underline"
          >
            the Digital Ledger
          </Link>
          .
        </p>
      </>
    ),
  },
};

export default function ProjectPost() {
  const params = useParams();
  const project = params?.id ? projectContent[params.id] : null;

  if (!project)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-foreground">
        Guide Not Found
      </div>
    );

  return (
    <main className="bg-background min-h-screen selection:bg-steel/30">
      <Navbar />

      <section className="p-8 pt-32 lg:pt-40">
        <div className="mx-auto max-w-screen-md">
          {/* Breadcrumb */}
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-brass mb-8 font-mono text-[10px] font-bold uppercase tracking-widest hover:text-foreground transition-colors"
          >
            <FaArrowLeft /> Back to Collections
          </Link>

          {/* Featured Image */}
          <div className="relative h-[25rem] w-full mb-10 overflow-hidden border border-muted/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>

          {/* Tags */}
          <div className="mb-6 font-mono text-[10px] font-bold uppercase tracking-widest text-brass">
            {project.tags}
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            {project.title}
          </h1>

          {/* Metadata Badges */}
          <div className="flex gap-4 mb-12">
            <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted border border-muted/20 px-3 py-1 bg-surface">
              <FaMapLocationDot className="text-brass" /> Okaloosa County, FL
            </span>
            <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted border border-muted/20 px-3 py-1 bg-surface">
              <FaUmbrellaBeach className="text-brass" /> Emerald Coast
            </span>
          </div>

          {/* Content Body */}
          <div className="text-foreground/80 text-lg leading-relaxed space-y-8">
            {project.content}
          </div>

          {/* Travel Guide Call to Action */}
          <div className="mt-20 p-8 border border-brass/20 bg-surface/50 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-foreground mb-3">
              Planning a move to the Panhandle?
            </h4>
            <p className="text-muted text-sm mb-8 max-w-sm">
              Get the technical breakdown on the best neighborhoods, school
              districts, and investment zones in Okaloosa County.
            </p>
            <a
              href="/files/local-insider-guide.pdf"
              download="Fort-Walton-Beach-Local-Insider-Guide.pdf"
              onClick={() =>
                gaEvent({
                  action: "download",
                  category: "engagement",
                  label: "insider_guide_download",
                })
              }
            >
              <button className="px-8 py-3 bg-brass text-background font-mono text-xs font-bold uppercase tracking-widest hover:bg-steel transition-colors flex items-center gap-2">
                Get My Local Insider Guide <FaMapLocationDot />
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
