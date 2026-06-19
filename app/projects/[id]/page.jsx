"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import {
  FaArrowLeft,
  FaMapLocationDot,
  FaUmbrellaBeach,
} from "react-icons/fa6";

const projectContent = {
  "master-drill": {
    title: "The Master Drill: Engineering a Smarter Way to Study",
    tags: "#PropTech #NextJS15 #RealEstate #WebDevelopment",
    image: "/images/master-drill-ui.jpg",
    content: (
      <>
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="rounded-xl object-cover shadow-2xl brightness-90 hover:brightness-100 transition-all"
        />

        <Typography className="mb-6 font-normal !text-gray-400 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-sky-500 first-letter:mr-3 first-letter:float-left">
          Success in the Florida real estate market begins with a license, but
          true market mastery requires an underlying technical infrastructure.
          The <strong>Florida Real Estate Master Drill</strong> full-stack study
          environment was engineered from scratch to address a clear gap in
          traditional learning tools: the absolute lack of programmatic state
          tracking and logic-driven retention systems required for high-stakes
          examinations.
        </Typography>

        <h3 className="text-2xl font-bold text-white mb-4 mt-10">
          Architecting 19 Units of Compliance
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          The 63-hour Florida pre-licensing curriculum is massive, spanning
          rigorous regulatory compliance frameworks, complex mathematical
          calculations, and deep-dives into Florida statutes. Instead of relying
          on passive flashcards, this platform breaks the material into an
          active testing engine. Leveraging React Hooks and the Context API, the
          codebase actively evaluates weak performance areas across all 19
          mandatory instructional units, automatically adapting the question
          rotation to optimize study workflows.
        </Typography>

        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          By integrating a full MERN stack architecture, user progress isn't
          just stored—it's analyzed. The database actively queries past
          performance to surface concepts right before the "forgetting curve"
          sets in, ensuring that complex topics like property taxation formulas
          and closing cost prorations become second nature.
        </Typography>

        <div className="my-10 p-6 bg-white/5 border-l-4 border-sky-500 rounded-r-xl">
          <p className="text-white italic font-serif text-xl">
            "High-stakes retention demands precision engineering. Standard
            applications track completion; this architecture enforces zero-fail
            accuracy."
          </p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          UI/UX Designed for Deep Work
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          Studying complex legal frameworks requires immense cognitive focus.
          The interface was explicitly designed with a high-contrast dark mode
          aesthetic to reduce eye strain during late-night study sessions. By
          utilizing Tailwind CSS to strip away visual clutter and present
          information through a clean, minimalist lens, the application keeps
          the user focused purely on the data.
        </Typography>

        <h3 className="text-2xl font-bold text-white mb-4 mt-10">
          The Developer's Edge in PropTech
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          Building customized educational software serves as an active proof of
          concept for the real estate industry. When a platform is built from
          the ground up using Next.js 15 and Tailwind CSS, it demonstrates a
          deep mechanical understanding of database logic, user flows, and
          technical accuracy. The exact same precision applied to managing
          client data states and optimizing frontend performance is carried
          directly into reviewing residential listing compliance and structural
          evaluations.
        </Typography>
      </>
    ),
  },
  "beyond-the-beach": {
    title: "Beyond the Beach: The Blueprint",
    tags: "#Investment #DataAnalysis #PropTech",
    image: "/images/img-1.jpg",
    content: (
      <>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-sky-500 first-letter:mr-3 first-letter:float-left">
          Moving past pure aesthetics allows for a thorough analysis of regional
          real estate data. Evaluating growth zones, structural standards, and
          rental yields provides a clearer roadmap for investment strategies
          along the Florida Panhandle. The coast is beautiful, but the true
          value lies in the underlying metrics.
        </Typography>

        <h3 className="text-2xl font-bold text-white mb-4 mt-10">
          Analyzing Local Growth Zones
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          Okaloosa County and the greater Pensacola area feature high-conversion
          investment potential for properties configured correctly. Tracking
          local zoning regulations, historic market fluctuations, and
          infrastructure expansions ensures asset portfolios remain durable over
          long timelines. It is not just about proximity to the water; it is
          about evaluating flood zones, seasonal rental caps, and community
          development plans.
        </Typography>

        <div className="my-10 p-6 bg-white/5 border-l-4 border-sky-500 rounded-r-xl">
          <p className="text-white italic font-serif text-xl">
            "A beautiful view secures the initial booking, but robust
            infrastructure and data-backed positioning secure the long-term
            ROI."
          </p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          The Fort Walton & Pensacola Corridors
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          These markets operate on a highly specific frequency. You have a
          unique blend of military personnel requiring reliable mid-term
          housing, tourists driving the short-term vacation market, and a
          growing demographic of remote tech workers looking for long-term
          coastal stability. Understanding how to segment and target these
          distinct demographics dictates the architectural styling, marketing,
          and pricing strategy of any given property.
        </Typography>

        <h3 className="text-2xl font-bold text-white mb-4 mt-10">
          Data Analytics Over Intuition
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          Modern real estate is indistinguishable from tech. Utilizing APIs to
          track localized property tax shifts, analyzing Next.js-powered
          dashboards for market comps, and writing scripts to identify
          undervalued properties before they hit the broader MLS provides an
          unparalleled competitive advantage. The blueprint for success here is
          written in code and analytics just as much as it is in concrete and
          sand.
        </Typography>
      </>
    ),
  },
  "okaloosa-guide": {
    title: "The Okaloosa Guide",
    tags: "#LocalGuide #RealEstate #EmeraldCoast",
    image: "/images/local-coastline.jpg",
    content: (
      <>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-sky-500 first-letter:mr-3 first-letter:float-left">
          Understanding the Emerald Coast requires more than reading a map; it
          requires parsing the structural and demographic data that shapes our
          local communities. From the mid-century foundations of Spanish Villas
          to the expanding subdivisions of Shalimar, Okaloosa County is a
          landscape of diverse architectural standards and investment
          opportunities.
        </Typography>

        <h3 className="text-2xl font-bold text-white mb-4 mt-10">
          Structural Standards & Local Nuance
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          When evaluating properties in this region, the details are everything.
          A prime example is understanding specific complex layouts—like knowing
          that Unit 6 at Spanish Villas is situated on the second floor, a
          crucial detail for clients prioritizing accessibility or elevated
          views. Tracking these hyper-local data points is what separates a
          generic listing search from a curated property acquisition.
        </Typography>

        <div className="my-10 p-6 bg-white/5 border-l-4 border-sky-500 rounded-r-xl">
          <p className="text-white italic font-serif text-xl">
            "Real estate on the coast isn't just about square footage; it's
            about understanding the specific history and structural DNA of every
            neighborhood."
          </p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          Navigating Shalimar to Fort Walton
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          The corridor between Shalimar and Fort Walton Beach represents a
          dynamic shift in zoning and property utilization. Here, we see a blend
          of legacy residential homes transitioning alongside modern commercial
          tech hubs, largely driven by the proximity to local military bases.
          Analyzing these growth patterns allows us to forecast which
          neighborhoods will yield the highest long-term appreciation.
        </Typography>
      </>
    ),
  },
  "emerald-coast-insider": {
    title: "The Emerald Coast Inside",
    tags: "#Lifestyle #Personal #FortWaltonBeach",
    image: "/images/img-2.jpg",
    content: (
      <>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-sky-500 first-letter:mr-3 first-letter:float-left">
          Living along the Panhandle means finding a unique balance between
          local recreation and professional focus. Navigating the Fort Walton
          Beach and Pensacola markets involves understanding the hidden gems,
          boat launches, and neighborhood dynamics that define day-to-day life
          here. It is an environment that rewards those who know where to look.
        </Typography>

        <h3 className="text-2xl font-bold text-white mb-4 mt-10">
          Local Highlights & Navigation
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          True value along the coast extends beyond the main tourist corridors.
          Exploring the bay-side docks, local waterways, and community fixtures
          provides the baseline insight needed to settle comfortably into the
          area. Whether it's mapping the most efficient route to launch a jet
          ski before the weekend rush or identifying the quietest coastal
          enclaves, local knowledge is the ultimate currency.
        </Typography>

        <div className="my-10 p-6 bg-white/5 border-l-4 border-sky-500 rounded-r-xl">
          <p className="text-white italic font-serif text-xl">
            "You don't truly know a coastal market until you understand its
            off-season rhythms and its local waterways."
          </p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          Balancing the Screen and the Sandbar
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          There is a distinct contrast between deep-focus technical work—writing
          TypeScript, debugging React components, managing server-side
          rendering—and the vast, open, analog nature of the Gulf Coast. The
          lifestyle here supports that duality perfectly. The ability to close a
          code editor and be on the water within twenty minutes provides a
          critical reset for high-level problem solving.
        </Typography>

        <h3 className="text-2xl font-bold text-white mb-4 mt-10">
          Hyper-Local Market Nuances
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          When advising clients on relocations to the Panhandle, these lifestyle
          logistics matter just as much as the square footage. Does the driveway
          accommodate a trailer? How exposed is the lanai to the prevailing gulf
          winds? Which local pizza spot is actually worth ordering from on a
          Friday night? Real estate isn't just about selling a structure; it's
          about facilitating a seamless integration into the coastal lifestyle.
        </Typography>
      </>
    ),
  },
  "shadow-slate": {
    title: "Shadow + Slate: Engineering Interactive Space Curation",
    tags: "#PropTech #TypeScript #ReactKonva #InteriorDesign",
    image: "/images/shadow-slate-ui.jpg",
    content: (
      <>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-sky-500 first-letter:mr-3 first-letter:float-left">
          Bridging the gap between a bare room and a closed deal requires more
          than imagination—it requires dynamic visualization.
          <strong>Shadow + Slate</strong> was developed to empower real estate
          professionals and interior designers with a highly responsive,
          interactive mood board canvas, moving beyond static imagery into fully
          modular space curation.
        </Typography>

        <h3 className="text-2xl font-bold text-white mb-4 mt-10">
          Architecting a Tactile Digital Canvas
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          Transforming a blank screen into a functional design studio requires
          intricate state management. Built utilizing TypeScript and the Konva
          HTML5 canvas library, the application handles the complex rendering of
          design assets with pixel-perfect precision. By enabling fluid
          drag-and-drop mechanics, layered z-indexing, and real-time spatial
          transformations, it provides a seamless interface for digitally
          staging properties and testing aesthetic concepts.
        </Typography>

        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          Handling image data streams, scaling ratios, and collision detection
          within a React environment demands a rigorously structured codebase.
          The underlying TypeScript interfaces ensure that every piece of
          furniture, paint swatch, and structural element maintains its precise
          coordinate data, allowing users to save, share, and seamlessly reload
          complex staging environments.
        </Typography>

        <div className="my-10 p-6 bg-white/5 border-l-4 border-sky-500 rounded-r-xl">
          <p className="text-white italic font-serif text-xl">
            "True spatial visualization bridges the gap between seeing a
            property and feeling at home. It’s where technical precision meets
            aesthetic intent."
          </p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          Quiet Luxury Meets Robust Architecture
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          The user interface is intentionally designed around a sophisticated
          "Quiet Luxury" aesthetic, heavily leveraging dark modes and
          glassmorphism to allow the user's curated designs to take center
          stage. There are subtle nods to a clean, modern aesthetic—think deep
          slates, sharp typography, and unobtrusive controls.
        </Typography>

        <h3 className="text-2xl font-bold text-white mb-4 mt-10">
          Component-Driven Property Staging
        </h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          Beneath this sleek UI lies a robust, strictly typed architecture. This
          blend of high-end frontend design and rigorous codebase management
          translates directly to the real estate market: delivering premium,
          flawless experiences from the underlying foundation up to the final
          client presentation. When buyers can manipulate a space in real-time,
          visualizing their own life within the floorplan, properties move
          faster and close stronger.
        </Typography>
      </>
    ),
  },
};

export default function ProjectPost() {
  const params = useParams();
  const project = projectContent[params.id];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        Guide Not Found
      </div>
    );
  }

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />

      <section className="p-8 pt-24 lg:pt-32">
        <div className="mx-auto max-w-screen-md">
          {/* Breadcrumb Navigation */}
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sky-500 mb-6 font-bold text-sm uppercase tracking-widest hover:text-sky-400 transition-colors"
          >
            <FaArrowLeft /> Back to Collections
          </Link>

          <img
            src={project.image}
            alt={project.title}
            className="mb-8 h-[30rem] w-full rounded-xl object-cover shadow-2xl brightness-90 hover:brightness-100 transition-all"
          />

          <div className="flex items-center gap-4 mb-4">
            <Typography
              variant="small"
              className="font-bold uppercase tracking-widest !text-sky-500"
            >
              {project.tags}
            </Typography>
          </div>

          <Typography
            variant="h2"
            className="my-4 font-black text-4xl lg:text-5xl !leading-tight text-gray-900 dark:text-white"
          >
            {project.title}
          </Typography>

          <div className="flex gap-4 mb-8">
            <span className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <FaMapLocationDot className="text-sky-500" /> Okaloosa County, FL
            </span>
            <span className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <FaUmbrellaBeach className="text-sky-500" /> Emerald Coast
            </span>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {project.content}
          </div>

          {/* Travel Guide Call to Action */}
          <div className="mt-16 p-8 rounded-2xl bg-sky-600/10 border border-sky-500/20 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-white mb-2">
              Planning a move to the Panhandle?
            </h4>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Get the technical breakdown on the best neighborhoods, school
              districts, and investment zones in Okaloosa County.
            </p>
            <a href="mailto:lindseykdev@gmail.com">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-500 flex items-center gap-2"
              >
                Get My Local Insider Guide <FaMapLocationDot />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
