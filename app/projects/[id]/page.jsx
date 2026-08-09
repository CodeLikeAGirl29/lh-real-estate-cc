import { notFound } from "next/navigation";
import projectContent from "@/lib/projectContent";
import ProjectPostClient from "./ProjectPostClient";

export function generateStaticParams() {
  return Object.keys(projectContent).map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectContent[id];

  if (!project) {
    return { title: "Guide Not Found" };
  }

  const url = `https://www.lindseyhoward.dev/projects/${id}`;

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.description,
      url,
      type: "article",
      images: [{ url: project.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projectContent[id];

  if (!project) notFound();

  return <ProjectPostClient project={project} />;
}
