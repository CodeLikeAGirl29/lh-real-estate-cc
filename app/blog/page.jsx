import BlogPageClient from "./BlogPageClient";

export const metadata = {
  title: "The Digital Ledger | Okaloosa County Real Estate Insights",
  description:
    "Local market analysis, investment breakdowns, and lifestyle guides for the Emerald Coast — Fort Walton Beach, Destin, Shalimar, and Pensacola — from a Florida real estate associate and full-stack developer.",
  alternates: { canonical: "https://www.lindseyhoward.dev/blog" },
  openGraph: {
    title: "The Digital Ledger | Okaloosa County Real Estate Insights",
    description:
      "Local market analysis, investment breakdowns, and lifestyle guides for the Emerald Coast.",
    url: "https://www.lindseyhoward.dev/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
