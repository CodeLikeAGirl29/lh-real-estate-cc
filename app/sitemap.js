import blogPosts from "@/lib/blogPosts";
import projectContent from "@/lib/projectContent";

export default function sitemap() {
  const base = "https://www.lindseyhoward.dev";

  const staticRoutes = ["", "/about", "/blog"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const blogRoutes = Object.keys(blogPosts).map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = Object.keys(projectContent).map((id) => ({
    url: `${base}/projects/${id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
