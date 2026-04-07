import { Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

// Base Font: Clash Grotesk (Local font)
const clashGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/ClashGrotesk.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

export const metadata = {
  title: "Lindsey Howard | Real Estate & Tech",
  description: "Florida Real Estate Sales Associate and Full-Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${clashGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-slate-50 text-slate-900 antialiased">
        {children}
        <footer className="py-10 text-center text-sm text-slate-400">
          © 2026 Lindsey Howard. Built with Next.js & React.
        </footer>
      </body>
    </html>
  );
}