import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LazyMotion, domAnimation } from "framer-motion";
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

export const metadata = {
  metadataBase: new URL("https://www.lindseykhoward.com"),
  title: {
    default: "Lindsey Howard | eXp Realty — Okaloosa County, FL",
    template: "%s | Lindsey Howard, eXp Realty",
  },
  description:
    "Lindsey Howard is a Florida REALTOR® with eXp Realty and full-stack developer serving buyers, sellers, and investors in Fort Walton Beach, Destin, Shalimar, and Okaloosa County.",
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
      "Florida REALTOR® with eXp Realty, serving buyers, sellers, and investors across the Emerald Coast.",
    url: "https://www.lindseykhoward.com",
    siteName: "Lindsey Howard | Home, Handled.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lindsey Howard | eXp Realty — Okaloosa County, FL",
    description:
      "Florida REALTOR® with eXp Realty, serving buyers, sellers, and investors across the Emerald Coast.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Lindsey Howard",
  jobTitle: "REALTOR®",
  worksFor: {
    "@type": "Organization",
    name: "eXp Realty",
  },
  url: "https://www.lindseykhoward.com",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||(!t&&!window.matchMedia("(prefers-color-scheme: dark)").matches&&window.matchMedia("(prefers-color-scheme: light)").matches)){document.documentElement.dataset.theme="light";}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
        <Script id="widget-tracker" strategy="afterInteractive">
          {`
            (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function() {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"), (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i; e.parentNode.insertBefore(t,e);}) (window,"https://widgetbe.com/agent",document,"widgetTracker"); window.widgetTracker("create", "WT-LZNWYZBH"); window.widgetTracker("send", "pageview");
          `}
        </Script>
      </body>

      {/* Simply pass the ID to the component you imported */}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
