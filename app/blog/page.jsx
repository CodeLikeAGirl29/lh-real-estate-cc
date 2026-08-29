import BlogPageClient from "./BlogPageClient";

export const metadata = {
  title: "The Digital Ledger | Okaloosa County Real Estate Insights",
  description:
    "Local market analysis, investment breakdowns, and lifestyle guides for the Emerald Coast — Fort Walton Beach, Destin, Shalimar, and Pensacola — from a Florida real estate associate and full-stack developer.",
  alternates: { canonical: "https://www.lindseykhoward.com/blog" },
  openGraph: {
    title: "The Digital Ledger | Okaloosa County Real Estate Insights",
    description:
      "Local market analysis, investment breakdowns, and lifestyle guides for the Emerald Coast.",
    url: "https://www.lindseykhoward.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
