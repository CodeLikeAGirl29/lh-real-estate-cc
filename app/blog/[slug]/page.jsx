import { notFound } from "next/navigation";
import blogPosts from "@/lib/blogPosts";
import BlogPostClient from "./BlogPostClient";
import {
  SITE_URL,
  BLOG_NAME,
  AGENT,
  absoluteUrl,
  breadcrumbSchema,
  jsonLd,
  toIsoDate,
} from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return { title: "Post Not Found", robots: { index: false } };
  }

  const url = `/blog/${slug}`;
  // seoTitle/seoDescription are search-focused versions; the on-page
  // headline keeps the creative title.
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const published = toIsoDate(post.date);
  const modified = toIsoDate(post.updated) || published;

  return {
    title,
    description,
    alternates: { canonical: url },
    authors: [{ name: AGENT.name, url: `${SITE_URL}/about` }],
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: BLOG_NAME,
      publishedTime: published,
      modifiedTime: modified,
      authors: [`${SITE_URL}/about`],
      section: post.category,
      images: [{ url: post.image, alt: post.imageAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) notFound();

  const url = `${SITE_URL}/blog/${slug}`;
  const published = toIsoDate(post.date);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    headline: post.seoTitle || post.title,
    alternativeHeadline: post.seoTitle ? post.title : undefined,
    description: post.seoDescription || post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: published,
    dateModified: toIsoDate(post.updated) || published,
    articleSection: post.category,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: AGENT.name,
      url: `${SITE_URL}/about`,
      jobTitle: "REALTOR®",
      worksFor: { "@type": "Organization", name: AGENT.brokerage },
    },
    publisher: { "@id": `${SITE_URL}/#agent` },
    isPartOf: { "@id": `${SITE_URL}/blog#blog` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: BLOG_NAME, path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ])
        )}
      />
      <BlogPostClient post={post} />
    </>
  );
}
