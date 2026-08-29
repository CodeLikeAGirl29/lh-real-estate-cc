// lib/blogPosts.jsx
// Shared blog post data — used by both the server metadata generator
// (app/blog/[slug]/page.jsx) and the client renderer (BlogPostClient.jsx).
import React from "react";
import Image from "next/image";

const blogPosts = {
  "okaloosa-insider": {
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
};

export default blogPosts;
