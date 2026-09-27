import blogPosts from "@/lib/blogPosts";
import projectContent from "@/lib/projectContent";
import { SITE_URL, toIsoDate } from "@/lib/seo";

export default function sitemap() {
  const posts = Object.entries(blogPosts).map(([slug, post]) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: toIsoDate(post.updated) || toIsoDate(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // The blog index changes whenever the newest post does.
  const newestPost = posts
    .map((p) => p.lastModified)
    .filter(Boolean)
    .sort()
    .at(-1);

  const staticRoutes = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/blog`,
      lastModified: newestPost,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const projects = Object.entries(projectContent).map(([id, project]) => ({
    url: `${SITE_URL}/projects/${id}`,
    lastModified: toIsoDate(project.updated),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  // Entries without a known date simply omit <lastmod> — better than
  // stamping every URL with today's date, which search engines learn to ignore.
  return [...staticRoutes, ...posts, ...projects];
}
