import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css"; // You can remove the 'next/script' import
import "leaflet/dist/leaflet.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL("https://www.lindseyhoward.dev"),
  title: {
    default: "Lindsey Howard | eXp Realty — Okaloosa County, FL",
    template: "%s | Lindsey Howard, eXp Realty",
  },
  description:
    "Lindsey Howard is a Florida Real Estate Sales Associate with eXp Realty and full-stack developer serving buyers, sellers, and investors in Fort Walton Beach, Destin, Shalimar, and Okaloosa County.",
  keywords: [
    "Fort Walton Beach real estate",
    "Okaloosa County real estate agent",
    "eXp Realty Florida",
    "Destin FL homes for sale",
    "Emerald Coast real estate",
    "Lindsey Howard real estate",
  ],
  authors: [{ name: "Lindsey Howard" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lindsey Howard | eXp Realty — Okaloosa County, FL",
    description:
      "Florida Real Estate Sales Associate with eXp Realty, serving buyers, sellers, and investors across the Emerald Coast.",
    url: "https://www.lindseyhoward.dev",
    siteName: "Lindsey Howard | Home, Handled.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lindsey Howard | eXp Realty — Okaloosa County, FL",
    description:
      "Florida Real Estate Sales Associate with eXp Realty, serving buyers, sellers, and investors across the Emerald Coast.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Lindsey Howard",
  jobTitle: "Real Estate Sales Associate",
  worksFor: {
    "@type": "Organization",
    name: "eXp Realty",
  },
  url: "https://www.lindseyhoward.dev",
  email: "mailto:lindsey.howard.re@outlook.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fort Walton Beach",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [
    "Fort Walton Beach, FL",
    "Destin, FL",
    "Shalimar, FL",
    "Okaloosa County, FL",
  ],
  sameAs: [
    "https://github.com/codelikeagirl29",
    "https://linkedin.com/in/lindsey-howard",
    "https://www.facebook.com/lindseyhowardrealestate",
  ],
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>

      {/* Simply pass the ID to the component you imported */}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
