// lib/seo.js
// Single source of truth for site-wide SEO values and structured data.
// Used by app/layout.js, the sitemap, and per-page JSON-LD.

export const SITE_URL = "https://www.lindseykhoward.com";
export const SITE_NAME = "Lindsey Howard | eXp Realty";
export const BLOG_NAME = "The Coast Is Clear";

export const AGENT = {
  name: "Lindsey Howard",
  brokerage: "eXp Realty",
  email: "lindsey.howard.re@outlook.com",
  telephone: "+1-850-533-5877",
  image: `${SITE_URL}/images/lindsey-profile.jpg`,
  locality: "Fort Walton Beach",
  region: "FL",
};

// Cities and communities the site targets. Order = priority.
export const AREAS_SERVED = [
  "Fort Walton Beach",
  "Destin",
  "Niceville",
  "Crestview",
  "Shalimar",
];

// "April 6, 2026" -> "2026-04-06". Returns undefined for unparseable input
// so callers can omit the field instead of emitting an invalid date.
export function toIsoDate(dateString) {
  if (!dateString) return undefined;
  const parsed = new Date(`${dateString} 12:00:00 UTC`);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString().slice(0, 10);
}

export function absoluteUrl(path = "") {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export const agentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#agent`,
  name: AGENT.name,
  jobTitle: "REALTOR®",
  description:
    "Florida REALTOR® with eXp Realty serving buyers, sellers, investors, and military families relocating to Eglin AFB and Hurlburt Field across Okaloosa County.",
  url: SITE_URL,
  image: AGENT.image,
  email: `mailto:${AGENT.email}`,
  telephone: AGENT.telephone,
  priceRange: "$$",
  parentOrganization: {
    "@type": "RealEstateAgent",
    name: AGENT.brokerage,
    url: "https://www.exprealty.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: AGENT.locality,
    addressRegion: AGENT.region,
    addressCountry: "US",
  },
  areaServed: [
    ...AREAS_SERVED.map((city) => ({
      "@type": "City",
      name: `${city}, FL`,
    })),
    { "@type": "AdministrativeArea", name: "Okaloosa County, FL" },
  ],
  knowsAbout: [
    "Military PCS relocation to Eglin AFB and Hurlburt Field",
    "VA home loans",
    "FEMA flood zones and flood insurance",
    "Wind mitigation inspections",
    "Waterfront and dock permitting",
    "Florida homestead exemption",
    "Real estate investment analysis",
  ],
  sameAs: [
    "https://github.com/codelikeagirl29",
    "https://linkedin.com/in/lindsey-howard",
    "https://www.facebook.com/lindseyhowardrealestate",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#agent` },
  inLanguage: "en-US",
};

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

// Serialize JSON-LD safely for a <script> tag (escapes "<" so post content
// can never close the tag early).
export function jsonLd(data) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
