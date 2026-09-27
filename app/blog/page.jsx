import BlogPageClient from "./BlogPageClient";
import blogPosts from "@/lib/blogPosts";
import {
  SITE_URL,
  BLOG_NAME,
  absoluteUrl,
  breadcrumbSchema,
  jsonLd,
  toIsoDate,
} from "@/lib/seo";

const TITLE = `${BLOG_NAME}: Okaloosa County Real Estate Blog`;
const DESCRIPTION =
  "Hyper-local real estate insight for Fort Walton Beach, Destin, Niceville, and Crestview: PCS and BAH guides, flood zones, wind mitigation, insurance, and market analysis.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  name: BLOG_NAME,
  description: DESCRIPTION,
  url: `${SITE_URL}/blog`,
  publisher: { "@id": `${SITE_URL}/#agent` },
  blogPost: Object.entries(blogPosts).map(([slug, post]) => ({
    "@type": "BlogPosting",
    headline: post.seoTitle || post.title,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: toIsoDate(post.date),
    image: absoluteUrl(post.image),
  })),
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(blogSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: BLOG_NAME, path: "/blog" },
          ])
        )}
      />
      <BlogPageClient />
    </>
  );
}
