import "./globals.css";

export const metadata = {
  title: "Lindsey Howard | Real Estate & Tech",
  description: "Florida Real Estate Sales Associate and Full-Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
        <footer className="py-10 text-center text-sm text-slate-400">
          © 2026 Lindsey Howard. Built with Next.js & React.
        </footer>
      </body>
    </html>
  );
}