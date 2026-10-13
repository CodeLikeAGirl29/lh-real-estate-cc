import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "master-drill",
    title: "The Master Drill: Engineering a Smarter Way to Study",
    date: "May 2026",
    desc: "A full-stack study environment engineered from scratch using Next.js. Replaces passive flashcards with programmatic state tracking and logic-driven retention systems for the Florida real estate exam.",
    image: "/images/master-drill-ui.jpg",
    tags: "PropTech / Web Development",
  },
  {
    id: "dock-and-dune",
    title: "Dock & Dune",
    subtitle: "Marine Construction & Flood Intelligence",
    category: "Client Platform / Tool",
    tags: "PropTech / Data Platform",
    link: "/projects/dock-and-dune",
    externalLink: "https://dock-and-dune.vercel.app",
    featured: true,
    desc: "Coastal marine construction showcase, insurance cost estimator, and historical FEMA flood loss tracker for Northwest Florida.",
    image: "/images/dock-and-dune.png",
  },
  {
    id: "shadow-slate",
    title: "Shadow + Slate: Engineering Interactive Space Curation",
    date: "May 2026",
    desc: "A highly responsive, interactive mood board canvas for real estate professionals and interior designers. Built with JavaScript and React Konva to enable fluid drag-and-drop mechanics and real-time spatial transformations.",
    image: "/images/shadow-slate-ui.jpg",
    tags: "PropTech / Interior Design",
  },
  {
    id: "okaloosa-guide",
    title: "Okaloosa Guide",
    date: "April 2026",
    desc: "A developer's deep dive into the Emerald Coast. From Spanish Villas to Shalimar, I explore the local infrastructure and structural standards that define our community.",
    image: "/images/local-coastline.jpg",
    tags: "Local Guide / Real Estate",
  },
  {
    id: "beyond-the-beach",
    title: "Beyond the Beach: The Blueprint",
    date: "March 2026",
    desc: "Moving past the aesthetics to analyze the data. An investment-focused breakdown of Okaloosa County's growth zones, rental yields, and Prop-Tech trends.",
    image: "/images/img-1.jpg",
    tags: "Investment / Data Analysis",
  },
  {
    id: "emerald-coast-insider",
    title: "The Emerald Coast Insider",
    date: "March 2026",
    desc: "Living 'Handled' in the Panhandle. A lifestyle guide featuring local hidden gems, the best bay-side launches, and navigating the FWB market with a developer's edge.",
    image: "/images/img-2.jpg",
    tags: "Lifestyle / Personal",
  },
];

export default function Collections() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const hrefFor = (project) => project.link || `/projects/${project.id}`;

  return (
    <section id="projects" className="border-t border-foreground/10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
          Things I&apos;ve built and written
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
          Tools for buyers and agents, plus longer guides to living and buying
          on the Emerald Coast.
        </p>

        {featured && (
          <article className="mt-14 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <Link
              href={hrefFor(featured)}
              className="relative block aspect-[16/10] overflow-hidden rounded-[14px] border border-foreground/10 lg:col-span-7"
            >
              <Image
                alt={featured.title}
                src={featured.image}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </Link>
            <div className="lg:col-span-5">
              <p className="text-sm text-muted">{featured.tags}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-foreground">
                <Link href={hrefFor(featured)} className="hover:text-reef">
                  {featured.title}
                </Link>
              </h3>
              {featured.subtitle && (
                <p className="mt-1 text-lg text-foreground/80">{featured.subtitle}</p>
              )}
              <p className="mt-4 leading-relaxed text-foreground/75">{featured.desc}</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  href={hrefFor(featured)}
                  className="font-semibold text-reef underline decoration-reef/40 underline-offset-4 hover:decoration-reef"
                >
                  Read the case study
                </Link>
                {featured.externalLink && (
                  <a
                    href={featured.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                  >
                    Open Dock &amp; Dune
                  </a>
                )}
              </div>
            </div>
          </article>
        )}

        <div className="mt-16 grid gap-x-8 gap-y-14 border-t border-foreground/10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <article key={project.id}>
              <Link
                href={hrefFor(project)}
                className="relative block aspect-[3/2] overflow-hidden rounded-[10px] border border-foreground/10"
              >
                <Image
                  alt={project.title}
                  src={project.image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </Link>
              <p className="mt-5 text-sm text-muted">
                {project.tags}
                {project.date ? `, ${project.date}` : ""}
              </p>
              <h3 className="mt-1.5 font-display text-xl font-semibold leading-snug text-foreground">
                <Link href={hrefFor(project)} className="hover:text-reef">
                  {project.title}
                </Link>
              </h3>
              <p className="mt-2 line-clamp-3 leading-relaxed text-foreground/75">
                {project.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
