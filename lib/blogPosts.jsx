// lib/blogPosts.jsx
// Shared blog post data — used by both the server metadata generator
// (app/blog/[slug]/page.jsx) and the client renderer (BlogPostClient.jsx).
import React from "react";
import Image from "next/image";

const blogPosts = {
  "okaloosa-insider": {
    seoTitle: "Fort Walton Beach Real Estate Guide: Okaloosa County Insider",
    seoDescription:
      "Why Fort Walton Beach is the Emerald Coast's steady market: year-round rentals near Eglin AFB and Hurlburt Field, Shalimar, and the Brooks Bridge project.",
    title: "The Okaloosa Blueprint",
    excerpt:
      "A developer's deep dive into the Emerald Coast. From Spanish Villas to Shalimar, we explore the local infrastructure and structural standards that define our community.",
    date: "April 6, 2026",
    category: "Local Guide",
    readTime: "10 min read",
    image: "/images/local-coastline.jpg",
    content: (
      <>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-reef first-letter:mr-3 first-letter:float-left">
          Why is Fort Walton Beach the Panhandle&apos;s Best Kept Secret? When
          people think of the Florida Panhandle, they usually think of the neon
          lights of Destin. But for those of us who live and work here,{" "}
          <strong>Fort Walton Beach</strong> is the true engine of the Emerald
          Coast.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Investment Logic vs. Vacation Vibes
        </h3>
        <p className="mb-6 text-muted text-lg">
          As a developer, I look at property through the lens of infrastructure.
          Fort Walton Beach offers something Destin often lacks:{" "}
          <strong>Stability</strong>. With proximity to Eglin AFB and Hurlburt
          Field, the rental market here isn&apos;t just seasonal—it&apos;s
          year-round.
        </p>

        <div className="my-10 p-8 bg-surface border-l-4 border-reef rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl leading-relaxed">
            &quot;Don&apos;t just buy a view; buy a system. FWB properties,
            especially around the secondary residential tiers, offer the best
            CAP rates in Okaloosa County.&quot;
          </p>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
          The &apos;Unit 6&apos; Standard
        </h3>
        <p className="mb-6 text-muted text-lg">
          Whether you&apos;re looking at <strong>Spanish Villas</strong> or new
          construction near Shalimar, you have to understand local compliance.
          My &apos;Master Drill&apos; approach ensures that every property I
          represent meets the strict structural and legal standards required for
          long-term Florida ownership.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Infrastructure Spotlight: The Brooks Bridge Effect
        </h3>
        <p className="mb-6 text-muted text-lg">
          Current data-points to watch: the $171 million Brooks Bridge
          replacement project. For a developer, this isn&apos;t just about
          traffic flow; it&apos;s about the literal expansion of the
          &quot;walkable&quot; footprint of downtown FWB. We are seeing a
          compression of value between the mainland and the island. Properties
          within a 2-mile radius of the new landing sites are currently
          undervalued when you factor in the projected 2027 transit efficiency.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          School Districts and the Family Buyer
        </h3>
        <p className="mb-6 text-muted text-lg">
          Infrastructure gets the headlines, but for the family relocating from
          out of state, the first question is almost always about schools.
          Okaloosa County&apos;s district consistently ranks among the stronger
          performers in the Panhandle, and that reputation does real work on
          resale value—homes zoned for the higher-rated elementary and middle
          schools tend to hold their price more stubbornly during a soft market.
          When I walk a family through listings, I&apos;m not just pulling
          comps; I&apos;m overlaying school zone boundaries, because a property
          two streets over can sit in a completely different zone.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Reading Rental Yield by Micro-Neighborhood
        </h3>
        <p className="mb-6 text-muted text-lg">
          &quot;Fort Walton Beach&quot; isn&apos;t one market—it&apos;s a
          handful of smaller ones stitched together. The corridor closest to
          Eglin AFB tends to command dependable long-term rental demand from
          military families on PCS orders, which smooths out seasonality. Closer
          to the Narrows and the sound, you start to see more short-term rental
          activity, which comes with better peak-season yield but higher
          management overhead and more exposure to seasonal vacancy. Neither is
          &quot;better&quot;—they&apos;re different risk profiles, and matching
          the right one to an investor&apos;s goals is most of the job.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Questions I Get From Every Relocating Buyer
        </h3>
        <p className="mb-6 text-muted text-lg">
          The same handful of questions come up on nearly every first call: How
          far is the commute to Eglin or Hurlburt, really, at 7:30 a.m.? Is
          flood insurance going to be a surprise at closing? Is this
          neighborhood quiet in the off-season, or does it feel abandoned?
          I&apos;d rather answer these plainly before an offer goes in than have
          a buyer discover the answer during the inspection period.
        </p>

        <p className="mb-6 text-muted text-lg">
          If you&apos;re weighing Fort Walton Beach against Destin or Miramar
          Beach, I&apos;m happy to walk through the actual trade-offs for your
          situation—reach out and I&apos;ll send over a breakdown specific to
          what you&apos;re trying to accomplish.
        </p>
      </>
    ),
  },
  "beyond-the-beach": {
    seoTitle: "Okaloosa County Growth Zones: A Real Estate Investor's Guide",
    seoDescription:
      "Where Okaloosa County growth is really happening: reading permits, fiber buildout, and zoning to spot investment areas before they show up in the comps.",
    title: "Beyond the Beach: The Blueprint",
    excerpt:
      "Moving past the aesthetics to analyze the data. An investment-focused breakdown of Okaloosa County's growth zones and Prop-Tech trends.",
    date: "March 28, 2026",
    category: "Investment",
    readTime: "9 min read",
    image: "/images/img-1.jpg",
    content: (
      <>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-reef first-letter:mr-3 first-letter:float-left">
          Moving past the aesthetics to analyze the raw data. When we talk about
          growth zones in Okaloosa County, we aren&apos;t just looking at where
          the water is prettiest—we&apos;re looking at where the fiber optics
          are being laid and where the zoning permits are shifting. A view sells
          a home; infrastructure decides whether that home appreciates.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Prop-Tech Pivot
        </h3>
        <p className="mb-6 text-muted text-lg">
          We are seeing a massive influx of tech-enabled property management.
          For an investor, this means lower overhead and higher transparency. If
          your property isn&apos;t integrated into a modern digital stack—smart
          locks for self-check-in, dynamic pricing tools, remote maintenance
          ticketing—you&apos;re leaving yield on the table compared to a
          competing unit two doors down that is.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Three Signals That Move Before the Comps Do
        </h3>
        <p className="mb-6 text-muted text-lg">
          Comparable sales data tells you what a neighborhood was worth a few
          months ago. By the time a growth zone shows up clearly in the comps,
          the best entry point has usually already passed. I track three earlier
          signals instead: permitting activity (new construction and renovation
          permits pulled in a given zip code), utility and fiber buildout (where
          the county is investing in infrastructure capacity), and zoning
          amendments (where municipalities are opening the door to
          higher-density or mixed-use development). Each of these tends to lead
          price movement by several months to a year.
        </p>

        <div className="my-10 p-8 bg-surface border-l-4 border-reef rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl leading-relaxed">
            &quot;By the time a growth zone shows up in the comps, the best
            entry point has usually already passed.&quot;
          </p>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Cap Rate Isn&apos;t the Whole Story
        </h3>
        <p className="mb-6 text-muted text-lg">
          Investors chasing the highest headline cap rate often overlook the
          management burden attached to it. A short-term rental near the beach
          can post an eye-catching gross yield, but factor in turnover cleaning,
          seasonal vacancy, and the higher insurance premiums that come with
          proximity to the water, and the net number tells a different story
          than the listing did. Longer-term rentals inland, closer to Eglin AFB
          and the defense corridor, often post a lower headline yield with
          dramatically less volatility and management overhead—which matters if
          you&apos;re not planning to manage the property yourself.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Risk Factors Worth Naming
        </h3>
        <p className="mb-6 text-muted text-lg">
          No market analysis is complete without the downside case. Flood
          insurance premiums have been trending upward across the Gulf Coast and
          can materially change a property&apos;s real yield after the fact.
          Short-term rental regulations are also an evolving area at the county
          and municipal level—an investment model built entirely around nightly
          rentals should have a contingency plan if local rules tighten.
          I&apos;d rather walk a client through these scenarios up front than
          have them discover the exposure after closing.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Where I&apos;m Watching Next
        </h3>
        <p className="mb-6 text-muted text-lg">
          Right now, the corridor between Fort Walton Beach and Shalimar is
          showing the clearest combination of the three leading signals—
          permitting activity is up, infrastructure investment is committed, and
          zoning is loosening around several parcels. It&apos;s not a guarantee,
          but it&apos;s exactly the kind of setup I look for before a market
          gets crowded.
        </p>

        <p className="mb-6 text-muted text-lg">
          If you&apos;re evaluating Okaloosa County as an out-of-state investor,
          I put together a one-page breakdown of current growth zones on
          request—reach out and I&apos;ll send it over.
        </p>
      </>
    ),
  },

  "emerald-coast-insider": {
    seoTitle: "Living in Fort Walton Beach: Emerald Coast Lifestyle Guide",
    seoDescription:
      "Thinking of moving to Fort Walton Beach? A local's guide to bay-side launches, hidden gems, and everyday life on the Emerald Coast beyond vacation mode.",
    title: "Emerald Coast Insider: Living Handled",
    excerpt:
      "Living 'Handled' in the Panhandle. A lifestyle guide featuring local hidden gems, the best bay-side launches, and navigating FWB with a developer's edge.",
    date: "March 15, 2026",
    category: "Lifestyle",
    readTime: "9 min read",
    image: "/images/img-2.jpg",
    content: (
      <>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed">
          There&apos;s a certain kind of peace you only understand once
          you&apos;ve stood barefoot in the soft, sugar-white sand of
          Florida&apos;s Emerald Coast. The kind where the breeze carries salt
          and sunshine in equal measure, and time slows just enough for you to
          realize—you&apos;re exactly where you&apos;re meant to be.
        </p>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed">
          Welcome to the Emerald Coast. Not just a destination, but a way of
          living… <strong>handled.</strong>
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Where the Water Changes Everything
        </h3>
        <p className="mb-6 text-muted text-lg">
          The first thing people notice is the water. It&apos;s not just
          blue—it&apos;s that unreal, glassy emerald that looks like it belongs
          in a postcard. Mornings here begin quietly. Coffee on the balcony. The
          distant rhythm of waves. Maybe a dolphin sighting if you&apos;re
          lucky.
        </p>
        <p className="mb-6 text-muted text-lg">
          But what keeps people here isn&apos;t just the view—it&apos;s how life
          starts to feel simpler. Handled.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Rhythm of Coastal Living
        </h3>
        <p className="mb-6 text-muted text-lg">
          Life along the coast doesn&apos;t rush you. It invites you. Afternoons
          might mean a walk along the shoreline, stopping at a beachside café
          for something fresh and local. Evenings are for sunsets that paint the
          sky in soft pinks and fiery oranges—nature showing off without
          apology.
        </p>

        <div className="my-10 p-8 bg-surface border-l-4 border-reef rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl leading-relaxed">
            &quot;Owning a piece of this coastline isn&apos;t just about
            property—it&apos;s about possibility. A place where home feels like
            a permanent getaway.&quot;
          </p>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          More Than a Vacation
        </h3>
        <p className="mb-6 text-muted text-lg">
          Visitors come for a week and leave with a question they didn&apos;t
          expect: <em>What would it look like to stay?</em> Because the Emerald
          Coast has a way of shifting your priorities. Suddenly, you&apos;re
          thinking less about hustle and more about balance. Less about someday
          and more about now.
        </p>

        {/* INSIDER PICKS SECTION */}
        <div className="corner-marks mt-16 mb-12 p-10 bg-surface border border-foreground/10">
          <h3 className="font-display text-3xl font-bold text-foreground mb-2">
            Insider Picks
          </h3>
          <p className="text-reef font-medium mb-8">
            What to Do on the Emerald Coast
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="font-display text-xl font-bold text-foreground">
                🌊 Start Your Day on the Water
              </h4>
              <p className="text-foreground/60">
                Rent a paddleboard or kayak and glide across the calm Gulf
                waters while the world is still quiet.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-display text-xl font-bold text-foreground">
                ☕ Your Go-To Coffee Spot
              </h4>
              <p className="text-foreground/60">
                Try <strong>Capriccio Café</strong> or{" "}
                <strong>Black Bear Bread Co.</strong>—perfect for that “coffee +
                coastal breeze” ritual.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-display text-xl font-bold text-foreground">
                🐚 Beach Hop Like a Local
              </h4>
              <p className="text-foreground/60">
                Explore 30A. Each stretch of shoreline has its own
                personality—from lively to tucked-away quiet.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-display text-xl font-bold text-foreground">
                🍤 Eat Like You Live Here
              </h4>
              <p className="text-foreground/60">
                Fresh seafood is non-negotiable. <strong>The Back Porch</strong>{" "}
                or <strong>Shunk Gulley</strong> offer the perfect mix of flavor
                and view.
              </p>
            </div>
          </div>
        </div>

        {/* SECONDARY IMAGE */}
        <div className="corner-marks my-12 overflow-hidden border border-foreground/10">
          <div className="relative h-72 w-full">
            <Image
              src="/images/local-coastline.jpg"
              alt="Emerald Coast Lifestyle"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="bg-surface p-4">
            <p className="text-sm text-muted italic text-center">
              The secret to the Emerald Coast? Doing the right things, at the
              right pace.
            </p>
          </div>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          What First-Time Relocators Actually Ask Me
        </h3>
        <p className="mb-6 text-muted text-lg">
          Every relocation call starts to sound the same after a while, and
          that&apos;s a good thing—it means the questions are predictable.{" "}
          <strong>Is it humid enough to be uncomfortable?</strong> Yes, June
          through September, and you&apos;ll want a home with real central air,
          not a window unit and a prayer.{" "}
          <strong>Do the crowds ever thin out?</strong> Absolutely—shoulder
          season (October, and April/May) gives you the water without the July
          traffic.{" "}
          <strong>
            Is it actually a year-round community, or does it empty out after
            summer?
          </strong>{" "}
          Between Eglin AFB, Hurlburt Field, and a growing remote-work
          population, it&apos;s busier in the off-season than most visitors
          assume.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          A Realistic Day, Not Just a Vacation Day
        </h3>
        <p className="mb-6 text-muted text-lg">
          It&apos;s easy to sell someone on a sunset. It&apos;s harder, and more
          honest, to describe a Tuesday. Groceries at the Publix off Racetrack
          Road. A weekday lunch rush that&apos;s nothing like the summer crowds.
          A commute that, for most of the county, is under twenty minutes. The
          magic isn&apos;t that every day feels like vacation—it&apos;s that the
          ordinary days are better here than they were wherever you&apos;re
          moving from.
        </p>

        <p className="mb-6 text-muted text-lg">
          Living here isn&apos;t about escaping reality—it&apos;s about
          redefining it. It&apos;s knowing where to catch the best sunrise.
          Which hidden spots locals love. It&apos;s understanding that luxury
          isn&apos;t always about extravagance—it&apos;s about ease.
        </p>

        <p className="mb-12 text-muted text-lg">
          The Emerald Coast doesn&apos;t ask you to change your life completely.
          It simply shows you what life could feel like when it&apos;s aligned,
          intentional, and just a little more peaceful. Once you experience it,
          one thing becomes clear: Some places you visit. Others… you live.
        </p>

        <p className="font-display text-3xl font-black text-reef tracking-widest text-center md:text-left">
          HANDLED.
        </p>
      </>
    ),
  },
  "pensacola-pivot": {
    seoTitle: "Pensacola Real Estate 2026: Infrastructure and Growth",
    seoDescription:
      "How the Pensacola Gateway Project and defense-driven growth are shaping Pensacola real estate in 2026, and what it means for buyers and investors.",
    title: "The Pensacola Pivot: Infrastructure and Innovation in 2026",
    excerpt:
      "Analyzing the $6.5M Gateway Project and the defense-driven growth of Florida's 'Cradle of Aviation'.",
    date: "April 6, 2026",
    category: "Market Analysis",
    readTime: "9 min read",
    image: "/images/pensacola-header.jpg",
    content: (
      <>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed">
          While Destin captures the tourism headlines, Pensacola is currently
          undergoing a structural transformation that demands the attention of
          any serious developer or investor. In 2026, the &quot;Cradle of
          Aviation&quot; is pivoting from a historic naval town to a high-tech
          defense and infrastructure hub.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The $6.5 Million Gateway Upgrade
        </h3>
        <p className="mb-6 text-muted text-lg">
          Infrastructure is the ultimate leading indicator for real estate
          value. The{" "}
          <strong>Pensacola Beach Gateway Improvements Project</strong>,
          launched in early 2026, is more than just a toll plaza replacement. By
          implementing &quot;Toll-by-Plate&quot; technology and advanced fiber
          optic communications, the county is effectively removing a major
          bottleneck to the island. For investors, this reduces the
          &quot;friction of access&quot;—a key metric when calculating the
          desirability of short-term rental assets on Santa Rosa Island.
        </p>

        <div className="my-10 p-8 bg-surface border-l-4 border-reef rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl leading-relaxed">
            &quot;The most valuable real estate isn&apos;t just near the water;
            it&apos;s behind the most efficient infrastructure.&quot;
          </p>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Defense Moat
        </h3>
        <p className="mb-6 text-muted text-lg">
          Pensacola&apos;s economy is anchored by a{" "}
          <strong>$7.8 billion military impact</strong>. With over 41,000
          defense-related jobs and a massive veteran population, the rental
          market here has a built-in &quot;moat&quot; that protects against
          standard market volatility. We are seeing a specific surge in demand
          for &quot;Hardened Housing&quot;—properties built to the latest
          Florida Building Code standards that can withstand the coastal V-Zone
          requirements while providing the smart-home amenities required by the
          modern defense contractor workforce.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Structural Standards: The V-Zone Reality
        </h3>
        <p className="mb-6 text-muted text-lg">
          Building in Pensacola in 2026 requires a deep understanding of the{" "}
          <strong>Coastal Construction Control Line (CCCL)</strong>. We are no
          longer just building for aesthetics; we are building for survival.
          From breakaway walls to elevated pile foundations, the engineering
          requirements in Pensacola are among the strictest in the country. This
          creates a high barrier to entry, which is exactly why the existing
          supply of modernized, compliant inventory is seeing such aggressive
          equity growth.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          What This Means for Investors
        </h3>
        <p className="mb-6 text-muted text-lg">
          The practical takeaway for anyone evaluating Pensacola right now: the
          properties worth chasing are the ones that have already cleared the
          CCCL and V-Zone compliance hurdle, not the ones priced as if they
          haven&apos;t. A pre-2026-code property that still needs retrofitting
          can look cheap on paper and expensive after a structural
          engineer&apos;s report. I&apos;d rather pay a premium for verified
          compliance than discover the gap during financing.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Neighborhoods Worth Watching
        </h3>
        <p className="mb-6 text-muted text-lg">
          East Hill and North Hill continue to attract renovation activity from
          buyers who want walkable, historic character with modern compliance
          built in. Closer to the Gateway corridor itself, new construction is
          starting to reflect the smart-home, defense-worker demand profile
          directly—higher-spec electrical and connectivity infrastructure built
          in from the start, rather than retrofitted later.
        </p>

        <p className="mb-6 text-muted text-lg">
          If Pensacola&apos;s defense-driven growth story fits your investment
          thesis, I&apos;m happy to talk through specific neighborhoods and
          current compliant inventory—reach out anytime.
        </p>
      </>
    ),
  },
  "buying-waterfront-florida-flood-zones-dock-permits": {
    seoTitle: "Buying Waterfront in NW Florida: Flood Zones & Dock Permits",
    seoDescription:
      "Buying canal or bayfront property on the Emerald Coast? How FEMA flood zones, seawall condition, and dock permits change your true monthly cost.",
    title:
      "Buying Waterfront in NW Florida: Flood Zones, Seawalls & Dock Permits Explained",
    excerpt:
      "Before writing an offer on an Emerald Coast canal or bayfront property, here is how FEMA flood zones, seawall integrity, and dock permitting reshape your true monthly cost of ownership.",
    date: "August 15, 2026",
    category: "Coastal Advisory",
    readTime: "8 min read",
    image: "/images/local-coastline.jpg",
    content: (
      <>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-reef first-letter:mr-3 first-letter:float-left">
          Waterfront living along Northwest Florida—from the protected bayous of
          Fort Walton Beach and Shalimar to the open waters of Choctawhatchee
          Bay and Santa Rosa Sound—is unmatched. But evaluating a coastal home
          requires looking far beyond the listing photos and square footage.
        </p>

        <p className="mb-6 text-muted text-lg">
          The true holding cost of a waterfront property is dictated by its
          structural interface with the water: flood zone classifications,
          seawall conditions, submerged land rights, and windstorm mitigation
          credits. Here is what every buyer must verify before going under
          contract on an Emerald Coast waterfront home.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          1. Decoding FEMA Flood Zones: X vs. AE vs. VE
        </h3>
        <p className="mb-6 text-muted text-lg">
          Your flood zone determines whether flood insurance is federally
          mandated by your lender and sets your baseline annual premium:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>Zone X (Minimal Risk):</strong> Outside the 500-year
            floodplain. Flood insurance is optional for federally backed
            mortgages, though still recommended for low-lying coastal terrain.
          </li>
          <li>
            <strong>Zone AE (High Risk / 100-Year Base):</strong> High
            probability of rising water inundation. An Elevation Certificate is
            required to establish finished floor elevation relative to the Base
            Flood Elevation (BFE).
          </li>
          <li>
            <strong>Zone VE (Coastal High Hazard / Wave Action):</strong> Direct
            coastal locations subject to velocity wave impact forces. Structures
            must be engineered on open pilings, and insurance rates reflect the
            highest peril tier.
          </li>
        </ul>

        <div className="my-10 p-8 bg-surface border-l-4 border-reef rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl leading-relaxed">
            &quot;Never assume an existing dock is grandfathered in or fully
            permitted. A title search checks the dirt; a riparian audit checks
            the submerged land.&quot;
          </p>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          2. Dock Permitting & Riparian Rights
        </h3>
        <p className="mb-6 text-muted text-lg">
          Never assume an existing dock is fully legal or that a vacant
          waterfront parcel can easily accommodate a new deep-water pier and
          boat lift. In Florida, navigable water bodies are sovereign submerged
          lands owned by the state. Private docks operate either under a
          riparian exemption or require a sovereign submerged land lease from
          the Florida Department of Environmental Protection (FDEP).
        </p>
        <p className="mb-6 text-muted text-lg">
          Extending a pier into navigable channels or over seagrass beds
          requires concurrent review from county building departments, FDEP, and
          the US Army Corps of Engineers (USACE). Lateral setback lines
          (typically 10 to 25 feet from property line extensions into the water)
          must also be strictly maintained to prevent encroaching on
          neighbors&apos; navigational access.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          3. Inspecting Seawalls and Bulkheads
        </h3>
        <p className="mb-6 text-muted text-lg">
          A failing seawall is one of the most expensive hidden liabilities in
          coastal real estate, with replacement costs frequently running between{" "}
          <strong>$650 and $1,200+ per linear foot</strong>.
        </p>
        <p className="mb-6 text-muted text-lg">
          When evaluating a bulkhead, check for soil subsidence (sinkholes
          directly behind the cap indicating joint failure or geotextile
          washout), look for mudline scour where wave energy pulls sand from
          beneath the piling toe, and verify that concrete caps are plumb
          without outward bowing from sheared deadman tie-backs.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          4. Wind Mitigation & Marine Structure Riders
        </h3>
        <p className="mb-6 text-muted text-lg">
          Standard HO-3 and HO-6 homeowners policies exclude open marine
          structures from storm surge and flood damage. Docks, pilings, and
          motorized lifts must be insured via a separate marine structure
          endorsement. Furthermore, a valid Wind Mitigation Inspection (Form
          OIR-B1-1802) documenting hurricane clips and impact-rated openings can
          discount the windstorm portion of your policy by 15% to 45%.
        </p>

        {/* CALLOUT BANNER LINKING TO DOCK & DUNE */}
        <div className="corner-marks my-12 p-8 bg-surface border border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl font-bold text-foreground mb-2">
              🌊 Ballpark Coastal Insurance & Permitting Costs
            </h4>
            <p className="text-muted text-sm max-w-xl">
              Explore live OpenFEMA flood loss histories and test annual
              insurance swings across zones with our dedicated coastal platform,{" "}
              <strong>Dock &amp; Dune</strong>.
            </p>
          </div>
          <a
            href="https://dock-and-dune.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-3 bg-reef text-white font-semibold hover:bg-reef/90 transition-colors whitespace-nowrap text-sm"
          >
            Launch Dock &amp; Dune
          </a>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Waterfront Due Diligence Checklist
        </h3>
        <p className="mb-6 text-muted text-lg">
          Before waiving contingencies on an Emerald Coast waterfront home,
          ensure you have collected:
        </p>
        <ul className="mb-8 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            Official FEMA Flood Map determination and recent Elevation
            Certificate.
          </li>
          <li>
            Marine contractor inspection of pilings, seawall caps, stringers,
            and lift motors.
          </li>
          <li>
            County and FDEP permit records verifying dock square footage and
            slip authorization.
          </li>
          <li>
            Wind mitigation inspection report dated within the last 5 years.
          </li>
          <li>Historical flood claim and storm-loss records for the parcel.</li>
        </ul>

        <p className="mb-6 text-muted text-lg">
          If you&apos;re evaluating a waterfront property in Okaloosa or Walton
          County, reach out before you write an offer and I&apos;ll pull the
          actual flood zone, dock permit history, and seawall records for the
          address.
        </p>
      </>
    ),
  },
  "destin-playbook": {
    seoTitle: "Destin FL Luxury Real Estate: What Drives Home Prices",
    seoDescription:
      "What actually drives Destin home prices along the Harbor and Scenic 98, and where the price ceiling really is. A local breakdown for luxury buyers and sellers.",
    title: "The Destin Playbook: Reading the Luxury Corridor",
    excerpt:
      "Destin runs on different physics than the rest of Okaloosa County. A breakdown of what actually drives price along the Harbor and Scenic 98—and where the ceiling really is.",
    date: "May 12, 2026",
    category: "Local Guide",
    readTime: "8 min read",
    image: "/images/img-2.jpg",
    content: (
      <>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-reef first-letter:mr-3 first-letter:float-left">
          Fort Walton Beach and Destin sit fifteen minutes apart on the same
          stretch of coastline, but they don&apos;t run on the same market
          physics. FWB is a stability play—defense payroll, year-round rental
          demand, a resale market that moves in inches. Destin is a tourism
          engine with real estate bolted on, and understanding that difference
          is the first thing any buyer coming into this corridor needs to get
          right.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Two Cities, One County, Different Physics
        </h3>
        <p className="mb-6 text-muted text-lg">
          Price per square foot along Destin&apos;s harbor and gulf-front
          corridors runs well ahead of FWB&apos;s residential tiers, and the gap
          isn&apos;t really about the view—it&apos;s about the revenue model
          underneath the property. A Destin condo within walking distance of the
          Harbor is priced against its short-term rental income potential first
          and its livability second. That&apos;s a fundamentally different
          underwriting question than the one FWB buyers are usually asking.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The HarborWalk Effect
        </h3>
        <p className="mb-6 text-muted text-lg">
          HarborWalk Village anchors more than tourism—it anchors comparable
          sales. Inventory within a few blocks of the Harbor commands a premium
          that thins out fast as you move north of Highway 98, because the
          walkable-to-nightlife radius is what short-term renters are actually
          paying for. When I&apos;m running comps for a buyer in this corridor,
          distance to the Harbor does more work than square footage.
        </p>

        <div className="my-10 p-8 bg-surface border-l-4 border-reef rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl leading-relaxed">
            &quot;In Destin, you&apos;re not just buying square footage—
            you&apos;re buying proximity to demand.&quot;
          </p>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Scenic 98 and the Density Ceiling
        </h3>
        <p className="mb-6 text-muted text-lg">
          Destin has largely built out its gulf-front footprint, and local
          height and density restrictions along Scenic Highway 98 keep new
          gulf-front supply genuinely scarce. That scarcity is a real structural
          factor, not just marketing language—it&apos;s the reason well-located
          Destin inventory has historically held value through soft-market
          stretches better than comparable product further inland.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Short-Term Rental Math, Destin Edition
        </h3>
        <p className="mb-6 text-muted text-lg">
          Gross rental yield in Destin&apos;s core tourist corridor typically
          runs higher than anything you&apos;ll see in FWB, but the expense side
          is heavier too—more aggressive HOA rental restrictions in some
          buildings, higher turnover-cleaning frequency, and insurance premiums
          that reflect direct gulf-front exposure. I walk every investor through
          a net-yield model before we talk about the headline number, because
          the headline number is rarely the number that actually lands in an
          owner&apos;s account.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Where I&apos;m Watching Next
        </h3>
        <p className="mb-6 text-muted text-lg">
          With gulf-front inventory this constrained, the more interesting entry
          points right now sit a little further out—the Miramar Beach corridor
          and the second-tier streets just north of 98, where new-build
          inventory is still coming online and price per square foot hasn&apos;t
          fully caught up to the Harbor-adjacent tiers. It&apos;s worth a look
          if the Destin premium is more than your model can absorb.
        </p>

        <p className="mb-6 text-muted text-lg">
          If you&apos;re weighing a Destin purchase against FWB or Miramar
          Beach, I&apos;m happy to run the actual net-yield numbers for your
          specific budget and use case—reach out and I&apos;ll put together a
          comparison.
        </p>
      </>
    ),
  },
  "flood-zones-decoded": {
    seoTitle: "Florida Flood Zones & Wind Mitigation: What They Cost Buyers",
    seoDescription:
      "A plain-language guide to Okaloosa County flood zones, wind mitigation credits, and how to budget for insurance before you make an offer on a Florida home.",
    title: "Flood Zones, Wind Mitigation, and What They Actually Cost You",
    excerpt:
      "The line item that surprises more out-of-state buyers than anything else at closing. A plain-language breakdown of flood zones, wind mitigation, and how to budget for both before you write an offer.",
    date: "May 26, 2026",
    category: "Market Analysis",
    readTime: "9 min read",
    image: "/images/local-coastline.jpg",
    content: (
      <>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-reef first-letter:mr-3 first-letter:float-left">
          Almost every out-of-state buyer I work with gets the purchase price
          right and the carrying cost wrong. Flood insurance and wind mitigation
          aren&apos;t line items you can eyeball from a listing photo, and on
          the Emerald Coast they can move a property&apos;s real monthly cost by
          several hundred dollars in either direction. Here&apos;s how I walk
          clients through it before an offer goes in, not after.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Reading a FEMA Flood Zone Letter Like a Realtor
        </h3>
        <p className="mb-6 text-muted text-lg">
          Every property in Okaloosa County sits in a FEMA-designated flood
          zone, and the letter matters more than most buyers realize. Zone X is
          the lowest-risk designation and generally the cheapest to insure. Zone
          AE means the property sits in a mapped base flood area and a policy is
          effectively mandatory if you&apos;re financing. Zone VE—coastal
          high-hazard, direct wave action—is the most expensive tier to insure
          by a wide margin. I pull the flood zone designation before I ever send
          a buyer a showing schedule, because it changes the whole budget
          conversation.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Wind Mitigation Inspection Nobody Budgets For
        </h3>
        <p className="mb-6 text-muted text-lg">
          A wind mitigation inspection documents roof shape, roof-to-wall
          connections, opening protection, and a handful of other construction
          details that Florida insurers use to price windstorm coverage. It
          typically runs a few hundred dollars and pays for itself many times
          over if the home qualifies for the better discount tiers—a hip roof
          with properly rated connections can meaningfully undercut the premium
          on an otherwise identical home with an older gable roof and no
          documented mitigation features.
        </p>

        <div className="my-10 p-8 bg-surface border-l-4 border-reef rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl leading-relaxed">
            &quot;The wind mitigation report is the cheapest negotiating
            leverage most buyers never ask for.&quot;
          </p>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Elevation Certificates and Why They&apos;re Worth the $400
        </h3>
        <p className="mb-6 text-muted text-lg">
          For homes in higher-risk flood zones, an elevation certificate
          documents exactly how far the lowest floor sits above the base flood
          elevation—and even a foot or two of difference can swing a flood
          premium significantly. Sellers don&apos;t always have a current one on
          hand. When they don&apos;t, I build the cost of ordering one into the
          negotiation, because walking into closing without knowing the real
          premium is how buyers end up with a monthly payment that doesn&apos;t
          match what they underwrote.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Citizens vs. the Private Market
        </h3>
        <p className="mb-6 text-muted text-lg">
          Florida&apos;s private insurance market has tightened considerably
          over the past several years, and Citizens Property Insurance
          Corporation—the state&apos;s insurer of last resort—has picked up a
          meaningful share of coastal coverage as a result. That&apos;s not
          automatically a red flag, but it&apos;s worth knowing going in:
          Citizens comes with its own eligibility rules and, in some cases, a
          smaller pool of future private carriers willing to write the policy
          when it&apos;s time to shop coverage again.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          A Simple Pre-Offer Checklist
        </h3>
        <p className="mb-6 text-muted text-lg">
          Before I let a client fall in love with a listing, we run four things:
          the FEMA flood zone designation, whether a current wind mitigation
          report exists, whether an elevation certificate exists for anything
          above Zone X, and a real insurance quote—not a rule-of-thumb
          estimate—before the inspection period closes. It takes a day or two to
          gather. It saves buyers from the worst version of sticker shock, which
          is finding it out at the closing table.
        </p>

        <p className="mb-6 text-muted text-lg">
          If you&apos;re shopping the Emerald Coast from out of state and want a
          real insurance-cost picture before you start touring, send me a
          shortlist of addresses and I&apos;ll pull the flood zone and
          mitigation data for each one.
        </p>
      </>
    ),
  },
  "fall-2026-real-estate-trends-okaloosa-county": {
    seoTitle: "Fall 2026 Real Estate Trends: Rates, Inventory & Okaloosa County",
    seoDescription:
      "Mortgage rates are back over 7%, national inventory is at a decade high, and Florida supply is tightening. What it means for Okaloosa County buyers and sellers.",
    title: "The Market Just Changed Its Mind (Again): Fall 2026 Real Estate Trends",
    excerpt:
      "Rates are back over 7%, there are more homes for sale nationally than we've seen in years, and Florida is doing its own thing. Here's where the market actually stands, from the national headlines down to your Okaloosa County zip code.",
    date: "October 8, 2026",
    category: "Market Analysis",
    readTime: "7 min read",
    image: "/images/local-coastline.jpg",
    content: (
      <>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-reef first-letter:mr-3 first-letter:float-left">
          So... remember back in the spring when everybody was saying rates were
          finally coming down and 2026 was gonna be the year the market
          &quot;reset&quot;??
        </p>

        <p className="mb-6 text-muted text-lg">Yeah. About that.</p>

        <p className="mb-6 text-muted text-lg">
          I&apos;ve been staring at the numbers for the last couple weeks and
          the short version is this: the story changed. Not in a scary,
          sky-is-falling way. But it changed, and if you&apos;re thinking about
          buying or selling anytime soon, the stuff you read in March is already
          out of date.
        </p>

        <p className="mb-6 text-muted text-lg">
          So here&apos;s where things actually stand right now. National first,
          then Florida, then right here in Okaloosa County... bc the national
          headlines and what&apos;s happening on your street are not always the
          same thing. Like, at all.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Trend 1: Rates Went the Wrong Direction
        </h3>
        <p className="mb-6 text-muted text-lg">
          The 30-year fixed averaged <strong>7.28%</strong> as of October 1, per
          Freddie Mac. A year ago it was 6.34%. Earlier this year it got as low
          as about 6.09%.
        </p>
        <p className="mb-6 text-muted text-lg">
          So what happened? A few things stacked up at once:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>Inflation came back.</strong> Oil prices spiked with the
            conflict in Iran, and that pushed prices up across the board.
          </li>
          <li>
            <strong>The Fed raised rates.</strong> On September 16 it hiked a
            quarter point, the first increase since July 2023, and most
            policymakers expect at least one more before the end of the year.
          </li>
          <li>
            <strong>The bond market got nervous.</strong> The 10-year Treasury
            climbed above 5%, and mortgage rates pretty much follow that number
            around like a shadow.
          </li>
        </ul>
        <p className="mb-6 text-muted text-lg">
          Mortgage rates crossed 7% on September 24 for the first time since
          January 2025, and they&apos;ve kept climbing since.
        </p>
        <p className="mb-6 text-muted text-lg">
          Ok but what does that actually <em>mean</em> for a real person? Let me
          put it in dollars.
        </p>
        <p className="mb-6 text-muted text-lg">
          Say you&apos;re buying a $350,000 home with 10% down, so a $315,000
          loan. Principal and interest only:
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="w-full text-left text-lg border-collapse">
            <thead>
              <tr className="border-b border-foreground/20">
                <th className="py-3 pr-6 font-display font-bold text-foreground">
                  Rate
                </th>
                <th className="py-3 font-display font-bold text-foreground">
                  Monthly payment (P&amp;I)
                </th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">6.34% (a year ago)</td>
                <td className="py-3">about $1,958</td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">7.28% (now)</td>
                <td className="py-3">about $2,155</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6 text-muted text-lg">
          That&apos;s roughly <strong>$197 more a month</strong> for the exact
          same house. Same kitchen. Same yard. Same everything. And that&apos;s
          before taxes and insurance.
        </p>
        <p className="mb-6 text-muted text-lg">
          Not gonna sugarcoat it... that stings. But it&apos;s also not the
          whole story, which is why you gotta keep reading.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Trend 2: More Homes for Sale Than We&apos;ve Seen in Years
        </h3>
        <p className="mb-6 text-muted text-lg">
          Here&apos;s the part the scary rate headlines leave out.
        </p>
        <p className="mb-6 text-muted text-lg">
          Nationally, there were <strong>1.62 million</strong> existing homes
          for sale at the end of August. That&apos;s up 5.9% from a year ago,
          and it&apos;s the first time inventory has topped 1.6 million since
          November 2019. Supply sits at 4.9 months, the highest in more than a
          decade.
        </p>
        <p className="mb-6 text-muted text-lg">
          Meanwhile sales slowed down. Existing-home sales fell 2% in August to
          an annual pace of 3.98 million, the slowest since June 2025.
        </p>
        <p className="mb-6 text-muted text-lg">
          More homes + fewer buyers = leverage shifting toward buyers.
          That&apos;s just math.
        </p>
        <p className="mb-6 text-muted text-lg">
          But here&apos;s the weird part. Prices didn&apos;t drop. The national
          median hit <strong>$429,100</strong> in August, up 1.6% from last
          year, and that&apos;s the 38th month in a row of year-over-year gains.
        </p>
        <p className="mb-6 text-muted text-lg">
          So like... prices are still going up, just barely. The frenzy is gone.
          What&apos;s left is a slower, pickier market where homes sit a median
          of 31 days and sellers can&apos;t just name a number and watch the
          offers roll in.
        </p>
        <p className="mb-6 text-muted text-lg">
          A couple other things worth knowing:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>First-time buyers</strong> made up 30% of August sales.
          </li>
          <li>
            <strong>Cash buyers</strong> were 27% of sales. When rates are high,
            cash gets loud.
          </li>
        </ul>

        <div className="my-10 p-8 bg-surface border-l-4 border-reef rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl leading-relaxed">
            Rates are making it more expensive to borrow, but buyers have more
            choices and more room to negotiate than they&apos;ve had in a long
            time. Both things are true at once.
          </p>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Trend 3: Florida Is Doing Its Own Thing
        </h3>
        <p className="mb-6 text-muted text-lg">
          Idk who needs to hear this, but Florida is not the national market. It
          never has been.
        </p>
        <p className="mb-6 text-muted text-lg">
          While inventory is climbing across the country, Florida&apos;s went
          the <em>other</em> way. Single-family inventory statewide dropped 13%
          from August 2025, and condo and townhouse inventory fell 11.5%.
        </p>
        <p className="mb-6 text-muted text-lg">
          That tightening is exactly why prices are holding:
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="w-full text-left text-lg border-collapse">
            <thead>
              <tr className="border-b border-foreground/20">
                <th className="py-3 pr-6 font-display font-bold text-foreground">
                  Florida, August 2026
                </th>
                <th className="py-3 pr-6 font-display font-bold text-foreground">
                  Median sale price
                </th>
                <th className="py-3 font-display font-bold text-foreground">
                  Change from a year ago
                </th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">Single-family homes</td>
                <td className="py-3 pr-6">$415,000</td>
                <td className="py-3">up 1.2%</td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">Condos and townhouses</td>
                <td className="py-3 pr-6">$298,000</td>
                <td className="py-3">up 2.8%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6 text-muted text-lg">
          Closed sales dipped a little, about 1.4% for single-family and 1.8%
          for condos and townhouses. Florida Realtors called it a market
          that&apos;s &quot;leveling off,&quot; and honestly that feels right.
          Not booming. Not crashing. Just... steadier.
        </p>
        <p className="mb-6 text-muted text-lg">
          Now, those August numbers are from before rates jumped over 7%. So the
          next couple of reports are the ones to watch. If I had to guess, sales
          soften a bit more. But with fewer homes on the market, I&apos;m not
          expecting prices to fall off a cliff.
        </p>
        <p className="mb-6 text-muted text-lg">
          And I can&apos;t talk about Florida without mentioning insurance.
          It&apos;s still the line item that surprises people the most. The good
          news is that after the legal reforms of the last few years and a
          quieter stretch of storms, experts have been describing the insurance
          market as slowly softening. The better news is that there are things
          you can actually control here, like a wind mitigation inspection. More
          on that in another post, bc it deserves its own.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Trend 4: Okaloosa County Is Balanced, and It Depends on Your Zip Code
        </h3>
        <p className="mb-6 text-muted text-lg">Ok, home turf.</p>
        <p className="mb-6 text-muted text-lg">
          County-wide, the typical home value is sitting around{" "}
          <strong>$353,000</strong>, basically flat over the past year. Homes
          are taking a little over two months to sell, sellers are getting
          roughly 96% of asking price, and about 1 in 4 listings has taken a
          price cut.
        </p>
        <p className="mb-6 text-muted text-lg">
          Read that last part again. One in four. That&apos;s not a market in
          trouble. That&apos;s a market where the list price is an opening offer
          and not a final answer.
        </p>
        <p className="mb-6 text-muted text-lg">
          But the county number hides a lot. Look at what happens when you zoom
          in:
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="w-full text-left text-lg border-collapse">
            <thead>
              <tr className="border-b border-foreground/20">
                <th className="py-3 pr-6 font-display font-bold text-foreground">
                  Area
                </th>
                <th className="py-3 pr-6 font-display font-bold text-foreground">
                  Median sale price
                </th>
                <th className="py-3 pr-6 font-display font-bold text-foreground">
                  Change from a year ago
                </th>
                <th className="py-3 font-display font-bold text-foreground">
                  Days to contract
                </th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">Fort Walton Beach (32547)</td>
                <td className="py-3 pr-6">$357,000</td>
                <td className="py-3 pr-6">up 11.2%</td>
                <td className="py-3">about 38</td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">Fort Walton Beach (32548)</td>
                <td className="py-3 pr-6">$333,000</td>
                <td className="py-3 pr-6">up 9.3%</td>
                <td className="py-3">about 42</td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">Mary Esther (32569)</td>
                <td className="py-3 pr-6">$325,250</td>
                <td className="py-3 pr-6">up 2.1%</td>
                <td className="py-3">about 53</td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">Crestview (32536)</td>
                <td className="py-3 pr-6">$325,000</td>
                <td className="py-3 pr-6">up 9.3%</td>
                <td className="py-3">about 78</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-muted text-sm italic">
            Zip-level MLS sales data as of early August 2026.
          </p>
        </div>

        <p className="mb-6 text-muted text-lg">
          Fort Walton Beach is moving in about five or six weeks. Crestview is
          taking closer to eleven. Same county. Totally different experience for
          a seller.
        </p>
        <p className="mb-6 text-muted text-lg">
          Not sure exactly why the gap is that wide, but my read is it comes
          down to two things: proximity to the bases and the water, and how much
          new construction you&apos;re competing with. Crestview has a lot of
          builders offering incentives right now, and a resale home has to hold
          its own against a brand new one with a rate buydown attached.
        </p>
        <p className="mb-6 text-muted text-lg">
          Which is exactly why I keep saying hyper-local matters. &quot;The
          market&quot; is not one thing here.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          So What Do You Actually Do With All This?
        </h3>

        <h4 className="font-display text-xl font-bold text-foreground mt-8 mb-3">
          If you&apos;re buying
        </h4>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>Negotiate. For real.</strong> With one in four local
            listings cutting price, you have room. Ask for closing costs. Ask
            for repairs. Ask for a rate buydown.
          </li>
          <li>
            <strong>Shop your lender.</strong> At 7%+ the difference between two
            quotes is real money every single month.
          </li>
          <li>
            <strong>Look hard at new construction.</strong> Builders have been
            using incentives to keep homes moving, and a builder-paid buydown
            can take a real bite out of that payment.
          </li>
          <li>
            <strong>Budget the whole payment.</strong> Principal, interest,
            taxes, insurance, HOA. In Florida the last three are not small.
          </li>
          <li>
            <strong>Stop trying to time rates.</strong> Nobody saw this fall
            coming in March. Buy the house that works for your budget today, and
            refinance later if rates give you the chance.
          </li>
        </ul>

        <h4 className="font-display text-xl font-bold text-foreground mt-8 mb-3">
          If you&apos;re selling
        </h4>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>Price it right the first time.</strong> The days of
            &quot;let&apos;s just try a high number and see&quot; are over.
            Overpriced homes sit, and then they chase the market down.
          </li>
          <li>
            <strong>Know your zip code, not your county.</strong> 38 days in
            Fort Walton Beach and 78 in Crestview are two different strategies.
          </li>
          <li>
            <strong>Condition matters again.</strong> Buyers have options now.
            The house that&apos;s clean, repaired and ready wins.
          </li>
          <li>
            <strong>Expect to give a little.</strong> Concessions are part of
            the deal in this market. Build that into your number up front.
          </li>
        </ul>

        <h4 className="font-display text-xl font-bold text-foreground mt-8 mb-3">
          If you&apos;re PCSing to Eglin or Hurlburt
        </h4>
        <p className="mb-6 text-muted text-lg">
          You don&apos;t get to pick your timing, which is stressful... I get
          it. The upside is you&apos;re landing in a balanced market with real
          negotiating room, and a VA loan is a strong tool here. Run your BAH
          against the <em>full</em> monthly payment, not just the mortgage,
          before you fall in love with a house.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Bottom Line
        </h3>
        <p className="mb-6 text-muted text-lg">
          Rates are up. Inventory nationally is up. Florida&apos;s supply is
          tightening. And Okaloosa County is sitting right in the middle,
          balanced, with a lot of variation from one neighborhood to the next.
        </p>
        <p className="mb-6 text-muted text-lg">
          It&apos;s not a great market or a terrible market. It&apos;s a market
          that rewards people who actually know their numbers.
        </p>
        <p className="mb-6 text-muted text-lg">
          If you want to know what yours look like, your street and your price
          point, reach out. That&apos;s literally what I&apos;m here for.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Sources
        </h3>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-base">
          <li>
            <a
              href="https://www.freddiemac.com/pmms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Freddie Mac Primary Mortgage Market Survey
            </a>
            , week of October 1, 2026
          </li>
          <li>
            <a
              href="https://www.federalreserve.gov/newsevents/pressreleases.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Federal Reserve FOMC statement
            </a>
            , September 16, 2026
          </li>
          <li>
            <a
              href="https://www.nar.realtor/newsroom/nar-existing-home-sales-report-shows-2-0-decrease-in-august"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              National Association of REALTORS&reg; Existing-Home Sales Report
            </a>
            , August 2026
          </li>
          <li>
            <a
              href="https://www.floridarealtors.org/newsroom/flas-housing-market-median-prices-hold-steady-pace-eases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Florida Realtors&reg; statewide housing report
            </a>
            , August 2026
          </li>
          <li>Okaloosa County zip-level MLS sales data, early August 2026</li>
        </ul>
        <p className="mb-6 text-muted text-sm italic">
          This post is general market information, not financial or legal
          advice. Payment examples are principal and interest only.
        </p>
      </>
    ),
  },
  "florida-wind-mitigation-inspection-guide": {
    seoTitle: "Florida Wind Mitigation Inspections: The 2026 Guide for Okaloosa",
    seoDescription:
      "What a Florida wind mitigation inspection checks, what changed on the form in April 2026, what it costs, and how it can cut the wind portion of your insurance bill.",
    title: "The $150 Inspection That Can Shrink Your Insurance Bill: Wind Mitigation, Explained",
    excerpt:
      "Wind mitigation is the most underrated piece of paper in Florida real estate. Here's what the inspector actually looks at, what changed on the form this year, and why buyers and sellers should both care.",
    date: "October 13, 2026",
    category: "Coastal Advisory",
    readTime: "7 min read",
    image: "/images/florida-coast.png",
    content: (
      <>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-reef first-letter:mr-3 first-letter:float-left">
          Ok so I promised in my last market update that wind mitigation
          deserved its own post. Here it is... bc honestly this is the most
          underrated piece of paper in Florida real estate.
        </p>

        <p className="mb-6 text-muted text-lg">
          Everybody here complains about homeowners insurance. Like, everybody.
          But most people have no idea there&apos;s a short inspection, usually
          under an hour, that can knock real money off the wind portion of their
          premium. And a lot of buyers close on a house without ever asking if
          one exists.
        </p>

        <p className="mb-6 text-muted text-lg">
          So let&apos;s fix that.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          What Is a Wind Mitigation Inspection?
        </h3>
        <p className="mb-6 text-muted text-lg">
          It&apos;s an inspection that documents how well your home holds up
          against hurricane-force wind. The inspector fills out a state form
          called the{" "}
          <strong>Uniform Mitigation Verification Inspection Form</strong>{" "}
          (OIR-B1-1802), and your insurance company uses it to figure out which
          discounts you qualify for.
        </p>
        <p className="mb-6 text-muted text-lg">
          Here&apos;s the key part: Florida law{" "}
          <em>requires</em> insurers to offer discounts for wind-resistant
          features. It&apos;s in the statute (627.0629 if you want to look it
          up). But they can&apos;t give you credit for features nobody
          documented. No report, no discount. Simple as that.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          What the Inspector Actually Looks At
        </h3>
        <p className="mb-6 text-muted text-lg">
          The form walks through seven categories:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>Building code.</strong> When the home was built and which
            version of the Florida Building Code it was permitted under. Newer
            generally scores better.
          </li>
          <li>
            <strong>Roof covering.</strong> The material and whether it meets
            current code, usually proven with permit dates or product approvals.
          </li>
          <li>
            <strong>Roof deck attachment.</strong> How the plywood or decking is
            nailed down. They&apos;re looking at nail size and spacing, usually
            from the attic.
          </li>
          <li>
            <strong>Roof-to-wall attachment.</strong> What holds the roof onto
            the house. Toe nails are the weakest. Clips are better. Single or
            double wraps are better still.
          </li>
          <li>
            <strong>Roof geometry.</strong> Hip roofs (sloping on all four
            sides) handle wind way better than gable roofs, and the form gives
            them credit for it.
          </li>
          <li>
            <strong>Secondary water resistance.</strong> A sealed underlayment
            that keeps water out if shingles blow off.
          </li>
          <li>
            <strong>Opening protection.</strong> Impact windows, impact doors,
            rated garage doors or approved shutters. This one usually needs{" "}
            <em>every</em> opening covered to count fully.
          </li>
        </ul>

        <div className="my-10 p-8 bg-surface border-l-4 border-reef rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl leading-relaxed">
            Your insurer can&apos;t give you credit for clips and impact windows
            nobody wrote down. No report, no discount.
          </p>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          What Changed in 2026
        </h3>
        <p className="mb-6 text-muted text-lg">
          This is the part a lot of people missed. Florida updated the form
          effective <strong>April 1, 2026</strong>, the first big overhaul in
          years. It&apos;s based on a 2024 study of wind-loss mitigation, and
          the short version is: inspectors now need more proof.
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>More photo documentation for every feature claimed.</li>
          <li>Tighter requirements on roof deck attachment.</li>
          <li>Updated classifications for roof-to-wall connections.</li>
          <li>
            More reliance on permits and product approvals, especially for
            impact windows and roof coverings.
          </li>
        </ul>
        <p className="mb-6 text-muted text-lg">
          If you already have an older report, don&apos;t panic. Citizens has
          said it will still accept the previous version of the form if it was
          completed within five years before April 1, 2026 and nothing
          structural has changed. Private carriers can have their own rules
          though, so ask yours.
        </p>
        <p className="mb-6 text-muted text-lg">
          And if you&apos;re booking a new one, ask the inspector if
          they&apos;re working off the updated form. Dig up any permits,
          receipts or product info for your roof and windows before they show
          up. It makes their job easier and your credits more likely to stick.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Cost, Timing and Who Can Do It
        </h3>

        <div className="my-8 overflow-x-auto">
          <table className="w-full text-left text-lg border-collapse">
            <tbody className="text-muted">
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6 font-display font-bold text-foreground">
                  Typical cost
                </td>
                <td className="py-3">About $75 to $200</td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6 font-display font-bold text-foreground">
                  How long it&apos;s good for
                </td>
                <td className="py-3">
                  Generally five years, unless you make major changes like a
                  new roof
                </td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6 font-display font-bold text-foreground">
                  Who can sign it
                </td>
                <td className="py-3">
                  Licensed home inspectors with wind mitigation training,
                  building inspectors, contractors, architects and engineers
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6 text-muted text-lg">
          How much does it save? It depends on your carrier and what the house
          actually has, so I&apos;m not gonna throw out a magic number. But the
          discounts apply to the wind portion of your premium, and on the
          Emerald Coast that&apos;s a big chunk of the bill. For a lot of
          homes, a report that costs less than a nice dinner out can pay for
          itself fast.
        </p>
        <p className="mb-6 text-muted text-lg">
          Quick side note... a wind mitigation inspection is <em>not</em> the
          same as a 4-point inspection. A 4-point looks at the roof, electrical,
          plumbing and HVAC, and insurers often require it on older homes before
          they&apos;ll write a policy at all. Different form, different purpose.
          Plenty of buyers need both.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          If You&apos;re Buying
        </h3>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>Ask for the seller&apos;s report right away.</strong> If
            one exists and it&apos;s still within five years, it may transfer
            to you and save you the inspection.
          </li>
          <li>
            <strong>Get an insurance quote during your inspection period,</strong>{" "}
            not the week before closing. The wind mitigation report changes that
            quote.
          </li>
          <li>
            <strong>Don&apos;t judge a house by the roof shape alone.</strong> A
            gable roof with double wraps and impact windows can still score well.
          </li>
          <li>
            <strong>Factor it into your offer.</strong> Two houses at the same
            price can have very different insurance bills. That&apos;s a real
            monthly difference.
          </li>
        </ul>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          If You&apos;re Selling
        </h3>
        <p className="mb-6 text-muted text-lg">
          Get one done before you list. Like, seriously. A good report is a
          selling point you can put right in the listing, and it answers the
          first question every Florida buyer has: &quot;what&apos;s insurance
          gonna cost me?&quot; If you replaced the roof or added impact windows,
          a fresh report on the new form shows it off.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          If You Want to Upgrade
        </h3>
        <p className="mb-6 text-muted text-lg">
          The upgrades that tend to move the needle are opening protection,
          roof-to-wall connections (often done during a re-roof), and secondary
          water resistance when the roof comes off anyway. If you&apos;re
          replacing a roof soon, talk to your roofer about doing those at the
          same time. It&apos;s way cheaper than going back later.
        </p>
        <p className="mb-6 text-muted text-lg">
          Florida&apos;s My Safe Florida Home program has helped pay for
          hardening upgrades in past rounds, but funding opens and fills up fast
          and the rules change between rounds. Check the Florida Department of
          Financial Services site for what&apos;s available right now before
          you count on it.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Bottom Line
        </h3>
        <p className="mb-6 text-muted text-lg">
          Insurance is the line item that surprises people most here. A wind
          mitigation report is one of the few things that puts some of that
          number back in your hands.
        </p>
        <p className="mb-6 text-muted text-lg">
          If you&apos;re looking at homes in Okaloosa County and want to know
          which ones already have a report, or what one is likely to show, send
          me the addresses. I&apos;ll dig.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Sources
        </h3>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-base">
          <li>
            <a
              href="https://www.radeylaw.com/2025/10/22/oir-adopting-updated-mitigation-discount-form/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              OIR adopting updated mitigation discount form
            </a>{" "}
            (Radey Law)
          </li>
          <li>
            <a
              href="https://acentria.com/what-florida-homeowners-need-to-know-about-wind-mitigation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              What Florida homeowners need to know about wind mitigation
            </a>{" "}
            (Acentria Insurance)
          </li>
          <li>
            <a
              href="https://homebuyinginstitute.com/mortgage/florida-wind-mitigation-inspections/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Florida wind mitigation inspections: top 10 FAQs
            </a>{" "}
            (Home Buying Institute)
          </li>
          <li>
            <a
              href="https://www.flsenate.gov/Laws/Statutes/2025/627.0629"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Florida Statute 627.0629
            </a>
          </li>
        </ul>
        <p className="mb-6 text-muted text-sm italic">
          This post is general information, not insurance advice. Discounts
          vary by carrier and property.
        </p>
      </>
    ),
  },
  "florida-homestead-exemption-amendment-3-2026": {
    seoTitle: "Florida Homestead Exemption 2026: Rules, Deadlines & Amendment 3",
    seoDescription:
      "How Florida's homestead exemption works in Okaloosa County, the March 1 deadline, Save Our Homes, portability, and what Amendment 3 on the November 2026 ballot would change.",
    title: "Homestead Exemption 101 (and Why Everyone's Suddenly Talking About Amendment 3)",
    excerpt:
      "If you own a home in Florida and haven't filed for homestead, you're leaving money on the table. Here's how it works, the deadline that trips people up, and what Amendment 3 on the November ballot would change.",
    date: "October 13, 2026",
    category: "Buyer Guide",
    readTime: "8 min read",
    image: "/images/img-1.jpg",
    content: (
      <>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-reef first-letter:mr-3 first-letter:float-left">
          Real talk... the homestead exemption is one of the best things about
          owning a home in Florida, and I still meet people who&apos;ve lived
          in their house for years and never filed.
        </p>

        <p className="mb-6 text-muted text-lg">
          And right now it&apos;s extra relevant bc there&apos;s a property tax
          amendment on the November 3 ballot that could change homestead in a
          big way. So let&apos;s cover how it works today, then what&apos;s on
          the table.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          How Homestead Works Right Now
        </h3>
        <p className="mb-6 text-muted text-lg">
          If the home is your permanent residence, Florida lets you take{" "}
          <strong>up to $50,000</strong> off its assessed value for property tax
          purposes. It&apos;s split in two:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>The first $25,000</strong> applies to all property taxes,
            including school taxes.
          </li>
          <li>
            <strong>The second $25,000</strong> applies to assessed value
            between $50,000 and $75,000, and only to non-school taxes. Since
            2025 this one adjusts for inflation, so it&apos;s creeping up a
            little each year.
          </li>
        </ul>
        <p className="mb-6 text-muted text-lg">
          That alone is a few hundred dollars a year for most homes. But
          honestly the exemption isn&apos;t even the best part.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Real Win: Save Our Homes
        </h3>
        <p className="mb-6 text-muted text-lg">
          Once you have homestead, your home&apos;s assessed value can only go up{" "}
          <strong>3% a year or the rate of inflation, whichever is lower</strong>
          . Doesn&apos;t matter if the market jumps 10%. Your taxable value
          climbs slowly.
        </p>
        <p className="mb-6 text-muted text-lg">
          Stay in a home long enough and the gap between what it&apos;s worth
          and what you&apos;re taxed on gets huge. That gap is your Save Our
          Homes benefit.
        </p>
        <p className="mb-6 text-muted text-lg">
          And you can take it with you. It&apos;s called{" "}
          <strong>portability</strong>: when you sell and buy another Florida
          homestead, you can move up to <strong>$500,000</strong> of that
          benefit to the new house. You have to establish the new homestead
          within three tax years of leaving the old one, and you file a
          separate form (DR-501T) to do it.
        </p>

        <div className="my-10 p-8 bg-surface border-l-4 border-reef rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl leading-relaxed">
            Heads up for buyers: the seller&apos;s tax bill on the listing is
            not your tax bill. Their Save Our Homes cap resets when the house
            sells.
          </p>
        </div>

        <p className="mb-6 text-muted text-lg">
          This one trips up buyers constantly. The seller might have lived there
          15 years with a tiny assessed value. Once you buy, the assessment
          resets closer to market value. Always estimate taxes off the purchase
          price, not the seller&apos;s bill.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Deadline That Trips People Up
        </h3>
        <p className="mb-6 text-muted text-lg">
          Two dates matter:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>January 1:</strong> you have to own the home and live in it
            as your permanent residence on January 1 of the tax year.
          </li>
          <li>
            <strong>March 1:</strong> the deadline to file with the property
            appraiser for that year.
          </li>
        </ul>
        <p className="mb-6 text-muted text-lg">
          So if you close in, say, November 2026 and move in, you&apos;d file by
          March 1, 2027 for the 2027 tax year. Close in February and you missed
          January 1, so homestead kicks in the following year.
        </p>
        <p className="mb-6 text-muted text-lg">
          In Okaloosa County you can file online through the{" "}
          <a
            href="https://okaloosapa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-reef underline underline-offset-4 hover:text-reef/80"
          >
            Okaloosa County Property Appraiser
          </a>
          . Have these ready:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>Florida driver license or ID showing the property address</li>
          <li>Florida vehicle registration</li>
          <li>Voter registration or a declaration of domicile</li>
          <li>Social Security numbers for you and your spouse</li>
          <li>Permanent residency card, if you&apos;re not a U.S. citizen</li>
        </ul>
        <p className="mb-6 text-muted text-lg">
          You only file once. It renews automatically as long as you still
          qualify. (And if you stop qualifying, like you move out and rent it,
          you&apos;re supposed to tell them. Don&apos;t skip that part.)
        </p>
        <p className="mb-6 text-muted text-lg">
          Military families, this is where it gets personal. Your legal
          residence for tax purposes can be complicated with PCS orders, so
          call the property appraiser&apos;s office before you assume either
          way.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Now, About Amendment 3
        </h3>
        <p className="mb-6 text-muted text-lg">
          On November 3, 2026, Florida voters decide on a constitutional
          amendment that would rework property taxes. It needs{" "}
          <strong>60% of the vote</strong> to pass. Here&apos;s what it would
          do:
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="w-full text-left text-lg border-collapse">
            <thead>
              <tr className="border-b border-foreground/20">
                <th className="py-3 pr-6 font-display font-bold text-foreground">
                  What changes
                </th>
                <th className="py-3 pr-6 font-display font-bold text-foreground">
                  Today
                </th>
                <th className="py-3 font-display font-bold text-foreground">
                  If it passes
                </th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">Homestead exemption, non-school taxes</td>
                <td className="py-3 pr-6">Up to about $50,000</td>
                <td className="py-3">
                  $150,000 in 2027, $250,000 in 2028, then indexed to inflation
                </td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">Homestead exemption, school taxes</td>
                <td className="py-3 pr-6">$25,000</td>
                <td className="py-3">$25,000 (no change)</td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">
                  Yearly assessment cap on non-homestead property (rentals,
                  second homes, commercial)
                </td>
                <td className="py-3 pr-6">10%</td>
                <td className="py-3">5%, starting January 1, 2027</td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">New Florida residents</td>
                <td className="py-3 pr-6">Same exemption as everyone</td>
                <td className="py-3">
                  Smaller exemption at first; full amount after five years of
                  residency
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6 text-muted text-lg">
          It would also put new limits on how counties and cities can spend
          property tax money, and set up a process for local governments to
          raise homestead exemptions further.
        </p>
        <p className="mb-6 text-muted text-lg">
          I&apos;m not here to tell you how to vote. That&apos;s yours. But
          here&apos;s the debate in a nutshell so you can decide for yourself:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>Supporters,</strong> including Gov. Ron DeSantis, say it&apos;s
            real tax relief for homeowners and that local governments can absorb
            the cuts by trimming spending.
          </li>
          <li>
            <strong>Opponents,</strong> including groups like Save Our Services,
            say it shifts the burden and could mean cuts to things like police,
            fire and libraries. Even some Republicans, like U.S. Sen. Rick
            Scott, have said they&apos;re worried about the hit to their home
            counties.
          </li>
          <li>
            <strong>The scale:</strong> Florida TaxWatch estimates it would cut
            local property taxes by about $45.8 billion over five years
            statewide.
          </li>
        </ul>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          What It Could Mean Around Here
        </h3>
        <p className="mb-6 text-muted text-lg">
          A few things I&apos;m watching for Okaloosa County specifically:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>Homeowners</strong> would see a bigger break on the
            non-school part of their bill. School taxes stay the same.
          </li>
          <li>
            <strong>Investors and second-home owners</strong> (and we have a lot
            of those on the coast) would get the lower 5% cap, which slows how
            fast their assessments can rise.
          </li>
          <li>
            <strong>Newcomers,</strong> including a lot of military families
            moving here, could start with a smaller exemption and wait five
            years for the full one. That&apos;s a real number to factor into a
            budget.
          </li>
          <li>
            <strong>Local services</strong> are the open question. How the
            county and cities would adjust is the part nobody can tell you yet.
          </li>
        </ul>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Bottom Line
        </h3>
        <p className="mb-6 text-muted text-lg">
          Whatever happens on November 3, the basics don&apos;t change: own and
          live in it on January 1, file by March 1, and protect that Save Our
          Homes benefit like it&apos;s money. Bc it is.
        </p>
        <p className="mb-6 text-muted text-lg">
          If you&apos;re buying this fall and want a realistic tax estimate
          based on <em>your</em> purchase price (not the seller&apos;s bill),
          reach out. I&apos;ll run it with you.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Sources
        </h3>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-base">
          <li>
            <a
              href="https://floridarevenue.com/property/Pages/Taxpayers_Exemptions.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Florida Department of Revenue: property tax exemptions
            </a>
          </li>
          <li>
            <a
              href="https://www.pcpao.gov/learn-about/legislative-update"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Pinellas County Property Appraiser: legislative update
            </a>
          </li>
          <li>
            <a
              href="https://news.ballotpedia.org/2026/06/03/florida-voters-to-decide-expanded-homestead-tax-exemption-amendment-in-november/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Florida voters to decide expanded homestead exemption amendment
            </a>{" "}
            (Ballotpedia)
          </li>
          <li>
            <a
              href="https://www.jmco.com/articles/government/florida-property-tax-amendment-2026-ballot/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Florida Legislature places property tax amendment on November
              2026 ballot
            </a>{" "}
            (James Moore)
          </li>
          <li>
            <a
              href="https://www.wtxl.com/new-taxwatch-tool-maps-amendment-3s-impact-county-by-county"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              New TaxWatch tool maps Amendment 3&apos;s impact county by county
            </a>{" "}
            (WTXL)
          </li>
          <li>
            <a
              href="https://www.fox13news.com/news/rick-scott-desantis-florida-property-tax-amendment"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Rick Scott breaks with DeSantis on Florida property tax amendment
            </a>{" "}
            (FOX 13)
          </li>
        </ul>
        <p className="mb-6 text-muted text-sm italic">
          This post is general information, not tax or legal advice. Confirm
          your situation with the Okaloosa County Property Appraiser.
        </p>
      </>
    ),
  },
  "new-construction-vs-resale-okaloosa-county": {
    seoTitle: "New Construction vs. Resale in Okaloosa County (2026 Buyer Guide)",
    seoDescription:
      "Builder incentives, rate buydowns, CDD fees and inspections: how to compare a new build with a resale home in Okaloosa County when rates are over 7%.",
    title: "New Build or Resale? How to Actually Compare Them in 2026",
    excerpt:
      "Builders are throwing incentives at buyers right now, and some of them are really good. Some of them just look good. Here's how to tell the difference, and when a resale home still wins.",
    date: "October 13, 2026",
    category: "Buyer Guide",
    readTime: "8 min read",
    image: "/images/img-2.jpg",
    content: (
      <>
        <p className="mb-6 font-normal text-muted text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-reef first-letter:mr-3 first-letter:float-left">
          If you&apos;ve toured a model home lately you&apos;ve seen it...
          &quot;rates as low as&quot; this, closing costs paid that. Builders
          want to sell houses, and they&apos;re paying to do it.
        </p>

        <p className="mb-6 text-muted text-lg">
          That&apos;s good news for buyers. But it also means you gotta read the
          fine print, bc a shiny incentive and a good deal are not always the
          same thing.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Builders Are Dealing Right Now
        </h3>
        <p className="mb-6 text-muted text-lg">
          The numbers back it up. In the National Association of Home
          Builders&apos; September survey:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>66%</strong> of builders were using sales incentives, up from
            63% in August.
          </li>
          <li>
            <strong>38%</strong> cut prices, with an average cut of about 6%.
          </li>
        </ul>
        <p className="mb-6 text-muted text-lg">
          And according to Realtor.com, about 13.8% of new-construction listings
          in August were advertising reduced mortgage rates, with an average
          advertised rate of 3.92%. With regular rates over 7%, you can see why
          that gets people in the door.
        </p>
        <p className="mb-6 text-muted text-lg">
          Nationally there&apos;s also a lot of new-home supply sitting out
          there, about 9.6 months&apos; worth at July&apos;s sales pace. Builders
          carrying finished inventory have a reason to negotiate.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Buydown vs. Price Cut: Do the Math
        </h3>
        <p className="mb-6 text-muted text-lg">
          This is the part most people skip. Let&apos;s take a $350,000 home
          with 10% down, so a $315,000 loan at 7.28%. Say the builder offers a{" "}
          <strong>2-1 buydown</strong>: your rate is 2% lower in year one, 1%
          lower in year two, then back to the full rate. Compare that to a
          straight <strong>6% price cut</strong> instead.
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="w-full text-left text-lg border-collapse">
            <thead>
              <tr className="border-b border-foreground/20">
                <th className="py-3 pr-6 font-display font-bold text-foreground">
                  Monthly P&amp;I
                </th>
                <th className="py-3 pr-6 font-display font-bold text-foreground">
                  2-1 buydown
                </th>
                <th className="py-3 font-display font-bold text-foreground">
                  6% price cut ($329,000)
                </th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">Year 1</td>
                <td className="py-3 pr-6">about $1,745</td>
                <td className="py-3">about $2,026</td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">Year 2</td>
                <td className="py-3 pr-6">about $1,946</td>
                <td className="py-3">about $2,026</td>
              </tr>
              <tr className="border-b border-foreground/10">
                <td className="py-3 pr-6">Year 3 and after</td>
                <td className="py-3 pr-6">about $2,155</td>
                <td className="py-3">about $2,026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6 text-muted text-lg">
          The buydown feels amazing for two years. Then it&apos;s gone. The
          price cut is smaller up front but it lasts the life of the loan, and
          you also start with more equity.
        </p>
        <p className="mb-6 text-muted text-lg">
          Here&apos;s the kicker: that 2-1 buydown costs the builder roughly
          $7,400 in this example. A 6% price cut costs them $21,000. So
          they&apos;re not the same offer, even when they&apos;re pitched like
          they are.
        </p>

        <div className="my-10 p-8 bg-surface border-l-4 border-reef rounded-r-xl">
          <p className="text-foreground italic font-serif text-xl leading-relaxed">
            Always ask: what&apos;s this incentive worth in dollars, and could I
            have that as a price cut or closing costs instead?
          </p>
        </div>

        <p className="mb-6 text-muted text-lg">
          Neither one is always better. If you plan to refinance when rates
          drop, a buydown can bridge the gap. If you plan to stay put, the
          permanent savings usually win. Just make sure you&apos;re comparing
          real numbers. And watch out for those super-low advertised rates...
          some are temporary or adjustable, so ask what the rate is in year
          three and year six.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Catch With Builder Incentives
        </h3>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>Most are tied to the builder&apos;s lender.</strong> That
            can still be a great deal. But get a quote from an outside lender
            too, so you know what the incentive is really worth.
          </li>
          <li>
            <strong>Some only apply to specific homes.</strong> Usually the
            finished &quot;quick move-in&quot; inventory they want gone.
          </li>
          <li>
            <strong>Upgrades add up fast.</strong> The design center is where a
            $329,000 house turns into a $370,000 house. Decide your must-haves
            before you walk in.
          </li>
          <li>
            <strong>Lot premiums are a thing.</strong> The corner lot or the one
            backing up to the pond can cost extra.
          </li>
        </ul>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Florida-Specific Stuff to Check on a New Build
        </h3>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>CDD fees.</strong> Some Florida communities are in a
            Community Development District, which shows up as an extra
            assessment on your property tax bill to pay off the bonds that built
            the roads and utilities. It&apos;s not optional, and it&apos;s not
            the same as HOA dues. Ask for the exact amount for your lot.
          </li>
          <li>
            <strong>HOA dues and rules.</strong> Get them in writing, plus any
            rules on parking, fences, boats or rentals.
          </li>
          <li>
            <strong>Insurance.</strong> This is where new construction can
            really shine. A home built to the current Florida Building Code
            often scores well on a wind mitigation inspection, which can mean a
            noticeably lower premium than an older resale. Get quotes on both
            before you decide.
          </li>
          <li>
            <strong>Flood zone and drainage.</strong> New communities still sit
            somewhere on the FEMA map. Check it.
          </li>
        </ul>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Yes, You Still Need Inspections on a Brand-New House
        </h3>
        <p className="mb-6 text-muted text-lg">
          I know. It&apos;s new. What could be wrong? Idk, a lot actually. The
          county inspection checks code minimums, not workmanship. I always
          recommend:
        </p>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>Pre-drywall inspection</strong> if you&apos;re building,
            while the framing, wiring and plumbing are still visible.
          </li>
          <li>
            <strong>Final inspection</strong> before closing.
          </li>
          <li>
            <strong>11-month inspection</strong> before a one-year builder
            warranty runs out, so anything that popped up gets fixed on their
            dime. Check what your builder&apos;s warranty actually covers and
            for how long.
          </li>
        </ul>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Bring Your Own Agent (Seriously)
        </h3>
        <p className="mb-6 text-muted text-lg">
          The friendly person in the model home works for the builder. Their job
          is to sell that house at the best price for the builder. Totally fine,
          just know whose side they&apos;re on.
        </p>
        <p className="mb-6 text-muted text-lg">
          A lot of builders will pay a buyer&apos;s agent, but since 2024 you
          sign a written agreement with your agent before touring, and how
          they&apos;re paid gets spelled out up front. Many builders also want
          your agent with you on the <em>first</em> visit, so bring me (or
          whoever you&apos;re working with) before you sign in at the model.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          When Resale Still Wins
        </h3>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-lg">
          <li>
            <strong>Location.</strong> New communities tend to be farther out.
            If you want to be close to the bases or the water in Fort Walton
            Beach, that&apos;s mostly resale.
          </li>
          <li>
            <strong>Bigger lots and mature trees.</strong> Shade is worth a lot
            in a Florida July.
          </li>
          <li>
            <strong>Negotiating on price.</strong> With about 1 in 4 local
            listings cutting price lately, resale sellers have room too.
          </li>
          <li>
            <strong>No CDD, sometimes no HOA.</strong> Plenty of older
            neighborhoods have neither.
          </li>
          <li>
            <strong>Timing.</strong> A resale can close in 30 to 45 days. A
            build-to-order home can take months.
          </li>
        </ul>
        <p className="mb-6 text-muted text-lg">
          The flip side: older roofs, older systems and older windows. Budget
          for them, and factor them into insurance.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          The Bottom Line
        </h3>
        <p className="mb-6 text-muted text-lg">
          New construction in 2026 can be a legit good deal, especially with
          builders this motivated. But compare the <em>total</em> cost: payment
          after the incentive ends, CDD, HOA, insurance and the upgrades you
          actually want. Run the same numbers on a resale and see which one
          wins for you.
        </p>
        <p className="mb-6 text-muted text-lg">
          If you want help putting a new build and a resale side by side, send me
          the two you&apos;re torn between. I&apos;ll build the comparison.
        </p>

        <h3 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
          Sources
        </h3>
        <ul className="mb-6 list-disc list-inside space-y-2 text-muted text-base">
          <li>
            <a
              href="https://theclose.com/news-builder-incentives-buydowns-price-cuts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Builder incentives rise as mortgage rates near 7%
            </a>{" "}
            (The Close, citing NAHB, Realtor.com and U.S. Census data)
          </li>
          <li>
            <a
              href="https://movewithmomentum.com/cdd-fees-new-construction-florida"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              CDD fees on new construction in Florida
            </a>{" "}
            (Momentum Realty)
          </li>
          <li>
            <a
              href="https://www.freddiemac.com/pmms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reef underline underline-offset-4 hover:text-reef/80"
            >
              Freddie Mac Primary Mortgage Market Survey
            </a>
          </li>
        </ul>
        <p className="mb-6 text-muted text-sm italic">
          This post is general information, not financial advice. Payment
          examples are principal and interest only and assume a 30-year fixed
          loan.
        </p>
      </>
    ),
  },
};

export default blogPosts;
