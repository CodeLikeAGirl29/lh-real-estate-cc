"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { event as gaEvent } from "@/lib/gtag";

export default function ProjectPostClient({ project }) {
  const tags = Array.isArray(project.tags) ? project.tags.join(", ") : project.tags;

  return (
    <main className="min-h-screen">
      <Navbar />

      <article>
        <header className="mx-auto max-w-3xl px-4 pt-32 sm:px-6 lg:pt-40">
          <p className="text-sm text-muted">
            <Link
              href="/#projects"
              className="font-semibold text-reef underline decoration-reef/40 underline-offset-4 hover:decoration-reef"
            >
              Projects
            </Link>
            {tags && <span className="ml-3">{tags}</span>}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.5rem]">
            {project.title}
          </h1>
          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-reef px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90"
                >
                  Open the live site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground hover:border-foreground/50"
                >
                  View the code
                </a>
              )}
            </div>
          )}
        </header>

        <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[14px] border border-foreground/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose-coast mx-auto max-w-[42rem] space-y-6 px-4 py-14 sm:px-6">
          {project.content}
        </div>
      </article>

      <aside className="mx-auto max-w-[42rem] px-4 pb-24 sm:px-6">
        <div className="rounded-[14px] bg-paper p-6 sm:p-8">
          <p className="font-display text-2xl font-semibold text-ink">
            Moving to the Emerald Coast?
          </p>
          <p className="mt-2 leading-relaxed text-ink/75">
            My free local guide covers neighborhoods, schools and where people
            actually like living in Okaloosa County.
          </p>
          <a
            href="/files/local-insider-guide.pdf"
            download="Fort-Walton-Beach-Local-Insider-Guide.pdf"
            onClick={() =>
              gaEvent({ action: "download", category: "engagement", label: "insider_guide_download" })
            }
            className="mt-5 inline-block rounded-full bg-reef px-6 py-3 font-semibold text-background hover:opacity-90"
          >
            Download the local guide (PDF)
          </a>
        </div>
      </aside>

      <Footer />
    </main>
  );
}
