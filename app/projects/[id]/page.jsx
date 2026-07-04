"use client";
import React, { use, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
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
  // Apply this same pattern of replacing <Typography> with <p> or <h3/h4>
  // to your other objects ("beyond-the-beach", "okaloosa-guide", etc.)
};

export default function ProjectPost() {
  const params = use(useParams());
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (params?.id && projectContent[params.id]) {
      setProject(projectContent[params.id]);
    }
  }, [params?.id]);

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
            <a href="mailto:lindsey.howard.re@outlook.com">
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
