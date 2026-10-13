import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

const links = [
  { name: "About", href: "/about" },
  { name: "The Coast Is Clear blog", href: "/blog" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "For mentors", href: "/about#mentor" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/codelikeagirl29", Icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/lindsey-howard", Icon: FaLinkedin },
  { name: "Facebook", href: "https://www.facebook.com/lindseyhowardrealestate", Icon: FaFacebook },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="font-display text-3xl font-semibold">Lindsey Howard</p>
          <address className="mt-4 not-italic leading-relaxed text-white/75">
            REALTOR® with eXp Realty
            <br />
            Fort Walton Beach, Florida
            <br />
            <a href="tel:+18505335877" className="tabular hover:text-white">
              (850) 533-5877
            </a>
            <br />
            <a href="mailto:lindsey.howard.re@outlook.com" className="hover:text-white">
              lindsey.howard.re@outlook.com
            </a>
          </address>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-white/80 hover:text-white hover:underline underline-offset-4">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="leading-relaxed text-white/75">
            Serving Fort Walton Beach, Destin, Niceville, Crestview, Shalimar,
            and families stationed at Eglin AFB and Hurlburt Field.
          </p>
          <ul className="mt-6 flex gap-5">
            {socials.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Lindsey Howard on ${name}`}
                  className="block text-white/70 hover:text-white"
                >
                  <Icon className="size-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-white/60 sm:px-6 lg:px-8">
          © {currentYear} Lindsey Howard. I built this site myself with Next.js.
        </p>
      </div>
    </footer>
  );
}
