import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LazyMotion, domAnimation } from "framer-motion";
import FloatingContact from "./components/FloatingContact";
import { SITE_URL, SITE_NAME, agentSchema, websiteSchema, jsonLd } from "@/lib/seo";
import "./globals.css";
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

const DEFAULT_TITLE =
  "Fort Walton Beach & Okaloosa County Real Estate | Lindsey Howard, eXp Realty";
const DEFAULT_DESCRIPTION =
  "Buy or sell in Fort Walton Beach, Destin, Niceville, and Crestview with Lindsey Howard, eXp Realty. Real numbers on BAH, flood zones, and insurance for PCS families and coastal buyers.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Lindsey Howard, eXp Realty",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Fort Walton Beach real estate agent",
    "Okaloosa County real estate",
    "Destin FL homes for sale",
    "Niceville FL real estate",
    "Crestview FL homes for sale",
    "Eglin AFB PCS realtor",
    "Hurlburt Field relocation",
    "VA loan realtor Florida",
    "Emerald Coast real estate",
    "eXp Realty Florida",
    "Lindsey Howard realtor",
  ],
  authors: [{ name: "Lindsey Howard", url: SITE_URL }],
  creator: "Lindsey Howard",
  publisher: "Lindsey Howard, eXp Realty",
  category: "Real Estate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Set these env vars in Vercel after verifying in Google Search Console /
  // Bing Webmaster Tools. Undefined values are omitted from the page.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Fort Walton Beach",
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||(!t&&!window.matchMedia("(prefers-color-scheme: dark)").matches&&window.matchMedia("(prefers-color-scheme: light)").matches)){document.documentElement.dataset.theme="light";}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(agentSchema)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema)} />
        <LazyMotion features={domAnimation} strict>
          {children}
          <FloatingContact />
        </LazyMotion>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
