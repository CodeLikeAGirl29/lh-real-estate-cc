"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { event as gaEvent } from "@/lib/gtag";
import { FaArrowLeft, FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

// Tags are stored as "#PropTech #NextJS15" or "PropTech / Web Development";
// show them as plain, comma-separated words either way.
function formatTags(tags) {
  const list = Array.isArray(tags)
    ? tags
    : String(tags || "")
        .split(/\s*\/\s*|\s+(?=#)/)
        .map((t) => t.replace(/^#/, ""));
  return list.filter(Boolean).join(", ");
}

export default function ProjectPostClient({ project }) {
  const tags = formatTags(project.tags);

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="px-4 pb-20 pt-24 sm:px-6 lg:pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-foreground/70 transition-colors hover:text-reef"
          >
            <FaArrowLeft className="size-3.5" /> All projects
          </Link>

          {tags && <p className="mt-10 text-muted">{tags}</p>}
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
            {project.title}
          </h1>
          {project.description && (
            <p className="mt-5 text-xl leading-relaxed text-foreground/75">
              {project.description}
            </p>
          )}

          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-reef px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90"
                >
                  Open the live site <FaArrowUpRightFromSquare className="size-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 font-semibold text-foreground transition-colors hover:border-foreground/50"
                >
                  <FaGithub className="size-4" /> See the code
                </a>
              )}
            </div>
          )}
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px] border border-foreground/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="project-body mx-auto mt-14 max-w-[42rem] text-lg leading-relaxed text-foreground/80">
          {project.content}
        </div>

        <div className="paper-section mx-auto mt-20 max-w-3xl rounded-[14px] p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Thinking about moving to the area?
          </h2>
          <p className="mt-2 max-w-xl text-ink/75">
            My free local guide covers neighborhoods, schools and where the
            good investment pockets are in Okaloosa County.
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
            className="mt-6 inline-block rounded-full bg-reef px-7 py-3.5 font-semibold text-background transition-opacity hover:opacity-90"
          >
            Download the local guide
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}
