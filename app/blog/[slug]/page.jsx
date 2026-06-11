"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Typography, Button } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { FaArrowLeft, FaClock, FaTag, FaEnvelope } from "react-icons/fa6";

// This is your "Database". Add new guides here!
const blogPosts = {
  "okaloosa-insider": {
    title: "The Okaloosa Blueprint",
    date: "April 6, 2026",
    category: "Local Guide",
    readTime: "6 min read",
    image: "/images/local-coastline.jpg",
    content: (
      <>
        <Typography className="mb-6 font-normal text-gray-400 text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-sky-400 first-letter:mr-3 first-letter:float-left">
          Why is Fort Walton Beach the Panhandle&apos;s Best Kept Secret? When
          people think of the Florida Panhandle, they usually think of the neon
          lights of Destin. But for those of us who live and work here,{" "}
          <strong>Fort Walton Beach</strong> is the true engine of the Emerald
          Coast.
        </Typography>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">
          Investment Logic vs. Vacation Vibes
        </h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          As a developer, I look at property through the lens of infrastructure.
          Fort Walton Beach offers something Destin often lacks:{" "}
          <strong>Stability</strong>. With proximity to Eglin AFB and Hurlburt
          Field, the rental market here isn&apos;t just seasonal—it&apos;s
          year-round.
        </Typography>

        <div className="my-10 p-8 bg-sky-500/5 border-l-4 border-sky-500 rounded-r-xl">
          <Typography className="text-white italic font-serif text-xl leading-relaxed">
            &quot;Don&apos;t just buy a view; buy a system. FWB properties,
            especially around the secondary residential tiers, offer the best
            CAP rates in Okaloosa County.&quot;
          </Typography>
        </div>

        <h3 className="text-2xl font-bold text-white mt-10 mb-4">
          The &apos;Unit 6&apos; Standard
        </h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          Whether you&apos;re looking at <strong>Spanish Villas</strong> or new
          construction near Shalimar, you have to understand local compliance.
          My &apos;Master Drill&apos; approach ensures that every property I
          represent meets the strict structural and legal standards required for
          long-term Florida ownership.
        </Typography>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">
          Infrastructure Spotlight: The Brooks Bridge Effect
        </h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          Current data-points to watch: the $171 million Brooks Bridge
          replacement project. For a developer, this isn&apos;t just about
          traffic flow; it&apos;s about the literal expansion of the
          &quot;walkable&quot; footprint of downtown FWB. We are seeing a
          compression of value between the mainland and the island. Properties
          within a 2-mile radius of the new landing sites are currently
          undervalued when you factor in the projected 2027 transit efficiency.
        </Typography>
      </>
    ),
  },
  "beyond-the-beach": {
    title: "Beyond the Beach: The Blueprint",
    date: "March 28, 2026",
    category: "Investment",
    readTime: "5 min read",
    image: "/images/img-1.jpg",
    content: (
      <>
        <Typography className="mb-6 font-normal text-gray-400 text-lg leading-relaxed">
          Moving past the aesthetics to analyze the raw data. When we talk about
          growth zones in Okaloosa County, we aren&apos;t just looking at where
          the water is prettiest—we&apos;re looking at where the fiber optics
          are being laid and where the zoning permits are shifting.
        </Typography>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">
          The Prop-Tech Pivot
        </h3>

        <Typography className="mb-6 text-gray-400 text-lg">
          We are seeing a massive influx of tech-enabled property management.
          For an investor, this means lower overhead and higher transparency. If
          your property isn&apos;t integrated into a modern digital stack,
          you&apos;re leaving yield on the table.
        </Typography>
      </>
    ),
  },

  "emerald-coast-insider": {
    title: "Emerald Coast Insider: Living Handled",
    date: "March 15, 2026",
    category: "Lifestyle",
    readTime: "6 min read",
    image: "/images/img-2.jpg",
    content: (
      <>
        <Typography className="mb-6 font-normal text-gray-400 text-lg leading-relaxed">
          There&apos;s a certain kind of peace you only understand once
          you&apos;ve stood barefoot in the soft, sugar-white sand of
          Florida&apos;s Emerald Coast. The kind where the breeze carries salt
          and sunshine in equal measure, and time slows just enough for you to
          realize—you&apos;re exactly where you&apos;re meant to be.
        </Typography>
        <Typography className="mb-6 font-normal text-gray-400 text-lg leading-relaxed">
          Welcome to the Emerald Coast. Not just a destination, but a way of
          living… <strong>handled.</strong>
        </Typography>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">
          Where the Water Changes Everything
        </h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          The first thing people notice is the water. It&apos;s not just
          blue—it&apos;s that unreal, glassy emerald that looks like it belongs
          in a postcard. Mornings here begin quietly. Coffee on the balcony. The
          distant rhythm of waves. Maybe a dolphin sighting if you&apos;re
          lucky.
        </Typography>
        <Typography className="mb-6 text-gray-400 text-lg">
          But what keeps people here isn&apos;t just the view—it&apos;s how life
          starts to feel simpler. Handled.
        </Typography>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">
          The Rhythm of Coastal Living
        </h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          Life along the coast doesn&apos;t rush you. It invites you. Afternoons
          might mean a walk along the shoreline, stopping at a beachside café
          for something fresh and local. Evenings are for sunsets that paint the
          sky in soft pinks and fiery oranges—nature showing off without
          apology.
        </Typography>

        <div className="my-10 p-8 bg-indigo-500/5 border-l-4 border-indigo-500 rounded-r-xl">
          <Typography className="text-white italic font-serif text-xl leading-relaxed">
            &quot;Owning a piece of this coastline isn&apos;t just about
            property—it&apos;s about possibility. A place where home feels like
            a permanent getaway.&quot;
          </Typography>
        </div>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">
          More Than a Vacation
        </h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          Visitors come for a week and leave with a question they didn&apos;t
          expect: <em>What would it look like to stay?</em> Because the Emerald
          Coast has a way of shifting your priorities. Suddenly, you&apos;re
          thinking less about hustle and more about balance. Less about someday
          and more about now.
        </Typography>

        {/* INSIDER PICKS SECTION */}
        <div className="mt-16 mb-12 p-10 bg-white/5 border border-white/10 rounded-3xl">
          <h3 className="text-3xl font-bold text-white mb-2">Insider Picks</h3>
          <p className="text-indigo-400 font-medium mb-8">
            What to Do on the Emerald Coast
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-white">
                🌊 Start Your Day on the Water
              </h4>
              <Typography className="text-gray-400">
                Rent a paddleboard or kayak and glide across the calm Gulf
                waters while the world is still quiet.
              </Typography>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-white">
                ☕ Your Go-To Coffee Spot
              </h4>
              <Typography className="text-gray-400">
                Try <strong>Capriccio Café</strong> or{" "}
                <strong>Black Bear Bread Co.</strong>—perfect for that “coffee +
                coastal breeze” ritual.
              </Typography>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-white">
                🐚 Beach Hop Like a Local
              </h4>
              <Typography className="text-gray-400">
                Explore 30A. Each stretch of shoreline has its own
                personality—from lively to tucked-away quiet.
              </Typography>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-white">
                🍤 Eat Like You Live Here
              </h4>
              <Typography className="text-gray-400">
                Fresh seafood is non-negotiable. <strong>The Back Porch</strong>{" "}
                or <strong>Shunk Gulley</strong> offer the perfect mix of flavor
                and view.
              </Typography>
            </div>
          </div>
        </div>

        {/* SECONDARY IMAGE */}
        <div className="my-12 rounded-2xl overflow-hidden border border-white/10">
          <img
            src="/images/local-coastline.jpg"
            alt="Emerald Coast Lifestyle"
            className="w-full h-[450px] object-cover"
          />
          <div className="bg-white/5 p-4">
            <p className="text-sm text-gray-500 italic text-center">
              The secret to the Emerald Coast? Doing the right things, at the
              right pace.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">
          The Insider Perspective
        </h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          Living here isn&apos;t about escaping reality—it&apos;s about
          redefining it. It&apos;s knowing where to catch the best sunrise.
          Which hidden spots locals love. It&apos;s understanding that luxury
          isn&apos;t always about extravagance—it&apos;s about ease.
        </Typography>

        <Typography className="mb-12 text-gray-400 text-lg">
          The Emerald Coast doesn&apos;t ask you to change your life completely.
          It simply shows you what life could feel like when it&apos;s aligned,
          intentional, and just a little more peaceful. Once you experience it,
          one thing becomes clear: Some places you visit. Others… you live.
        </Typography>

        <Typography className="text-3xl font-black text-indigo-500 tracking-widest text-center md:text-left">
          HANDLED.
        </Typography>
      </>
    ),
  },
  "pensacola-pivot": {
    title: "The Pensacola Pivot: Infrastructure and Innovation in 2026",
    date: "April 6, 2026",
    category: "Market Analysis",
    readTime: "6 min read",
    image: "/images/pensacola-header.jpg",
    content: (
      <>
        <Typography className="mb-6 font-normal text-gray-400 text-lg leading-relaxed">
          While Destin captures the tourism headlines, Pensacola is currently
          undergoing a structural transformation that demands the attention of
          any serious developer or investor. In 2026, the "Cradle of Aviation"
          is pivoting from a historic naval town to a high-tech defense and
          infrastructure hub.
        </Typography>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">
          The $6.5 Million Gateway Upgrade
        </h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          Infrastructure is the ultimate leading indicator for real estate
          value. The{" "}
          <strong>Pensacola Beach Gateway Improvements Project</strong>,
          launched in early 2026, is more than just a toll plaza replacement. By
          implementing "Toll-by-Plate" technology and advanced fiber optic
          communications, the county is effectively removing a major bottleneck
          to the island. For investors, this reduces the "friction of access"—a
          key metric when calculating the desirability of short-term rental
          assets on Santa Rosa Island.
        </Typography>

        <div className="my-10 p-8 bg-sky-500/5 border-l-4 border-sky-500 rounded-r-xl">
          <Typography className="text-white italic font-serif text-xl leading-relaxed">
            "The most valuable real estate isn't just near the water; it's
            behind the most efficient infrastructure."
          </Typography>
        </div>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">
          The Defense Moat
        </h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          Pensacola&apos;s economy is anchored by a{" "}
          <strong>$7.8 billion military impact</strong>. With over 41,000
          defense-related jobs and a massive veteran population, the rental
          market here has a built-in "moat" that protects against standard
          market volatility. We are seeing a specific surge in demand for
          "Hardened Housing"—properties built to the latest Florida Building
          Code standards that can withstand the coastal V-Zone requirements
          while providing the smart-home amenities required by the modern
          defense contractor workforce.
        </Typography>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">
          Structural Standards: The V-Zone Reality
        </h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          Building in Pensacola in 2026 requires a deep understanding of the{" "}
          <strong>Coastal Construction Control Line (CCCL)</strong>. We are no
          longer just building for aesthetics; we are building for survival.
          From breakaway walls to elevated pile foundations, the engineering
          requirements in Pensacola are among the strictest in the country. This
          creates a high barrier to entry, which is exactly why the existing
          supply of modernized, compliant inventory is seeing such aggressive
          equity growth.
        </Typography>
      </>
    ),
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post)
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white text-2xl font-bold">
        Post Not Found
      </div>
    );

  return (
    <main className="bg-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <div className="relative h-[60vh] w-full pt-20">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent" />
        <div className="relative z-10 flex h-full items-end pb-12 px-6 lg:px-24">
          <div className="max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sky-400 mb-6 hover:text-white transition-colors font-bold text-xs uppercase tracking-widest"
            >
              <FaArrowLeft /> Back to the Ledger
            </Link>
            <Typography
              variant="h1"
              className="text-4xl lg:text-6xl font-black text-white leading-tight mb-4"
            >
              {post.title}
            </Typography>
            <div className="flex flex-wrap gap-6 text-gray-300 text-sm font-mono">
              <span className="flex items-center gap-2">
                <FaTag className="text-sky-500" /> {post.category}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-sky-500" /> {post.readTime}
              </span>
              <span className="text-sky-400 font-bold">{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 py-20 flex flex-col lg:flex-row gap-16">
        {/* Blog Body */}
        <div className="lg:w-2/3">{post.content}</div>

        {/* Sticky Sidebar CTA */}
        <aside className="lg:w-1/3">
          <div className="sticky top-32 p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div className="w-20 h-20 bg-sky-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
              LH
            </div>
            <Typography variant="h5" className="text-white mb-2">
              Lindsey Howard
            </Typography>
            <Typography className="text-gray-400 text-sm mb-6">
              Full-Stack Developer & Real Estate Associate specialized in
              Okaloosa County property logic.
            </Typography>
            <a href="mailto:lindseykdev@gmail.com" className="block">
              <Button
                fullWidth
                className="bg-sky-600 mb-4 flex items-center justify-center gap-2"
              >
                <FaEnvelope /> Let's Talk Property
              </Button>
            </a>
            <Typography className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              Reimagining Real Estate
            </Typography>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
