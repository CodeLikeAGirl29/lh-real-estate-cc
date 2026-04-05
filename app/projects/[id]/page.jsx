"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { Typography, Button } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from 'next/link';
import { FaArrowLeft, FaMapLocationDot, FaUmbrellaBeach } from "react-icons/fa6";

const projectContent = {
  "okaloosa-guide": {
    title: "The Emerald Coast Blueprint: An Insider’s Guide to Okaloosa County",
    tags: "#OkaloosaCounty #FortWaltonBeach #Destin #LocalGuide",
    image: "/images/okaloosa-beach.jpg", // Place your beach photo here!
    content: (
      <>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-500 first-letter:mr-3 first-letter:float-left">
          Okaloosa County isn’t just a destination; it’s a high-performance ecosystem.
          Whether you’re eyeing a second-floor unit in **Spanish Villas** or a beachfront
          investment in **Destin**, understanding the "infrastructure" of the Emerald Coast
          is the key to a successful move.
        </Typography>

        <h3 className="text-2xl font-bold text-white mb-4 mt-10">The Local Pulse: Fort Walton Beach</h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          Fort Walton Beach (FWB) offers the perfect balance of "Old Florida" grit and
          modern growth. As a local, I’ve seen the shift firsthand. From the
          bustling morning energy near the **Okaloosa Island Pier** to the hidden
          residential pockets of **Shalimar**, FWB is where the real community lives.
        </Typography>

        <div className="my-10 p-6 bg-white/5 border-l-4 border-indigo-500 rounded-r-xl">
          <p className="text-white italic font-serif text-xl">
            "In Okaloosa, we don't just sell the sun; we sell the lifestyle, handled."
          </p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">Investment Logic: Destin & Beyond</h3>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg">
          While the world knows Destin for the white sand, investors know it for the data.
          The rental yields here are driven by more than just sunshine—they are driven by
          accessibility and high-end infrastructure.
        </Typography>
      </>
    )
  },
  "master-drill": {
    title: "The Master Drill: Engineering a Smarter Way to Study",
    tags: "#PropTech #NextJS15 #RealEstate",
    image: "/images/master-drill-ui.jpg", // Photo of your app
    content: (
      <>
        <Typography className="mb-6 font-normal !text-gray-400 text-lg leading-relaxed">
          Success in the Florida Real Estate market starts with the license, but mastery comes from the infrastructure.
          I built the **Florida Real Estate Master Drill** because I realized the existing study tools lacked the
          logical flow required for high-stakes retention.
        </Typography>
        {/* Add more custom content here as you build the app */}
      </>
    )
  }
};

export default function ProjectPost() {
  const params = useParams();
  const project = projectContent[params.id];

  if (!project) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Guide Not Found</div>;
  }

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />

      <section className="p-8 pt-24 lg:pt-32">
        <div className="mx-auto max-w-screen-md">
          {/* Breadcrumb Navigation */}
          <Link href="/#projects" className="flex items-center gap-2 text-indigo-500 mb-6 font-bold text-sm uppercase tracking-widest hover:text-indigo-400 transition-colors">
            <FaArrowLeft /> Back to Collections
          </Link>

          <img
            src={project.image}
            alt={project.title}
            className="mb-8 h-[30rem] w-full rounded-xl object-cover shadow-2xl brightness-90 hover:brightness-100 transition-all"
          />

          <div className="flex items-center gap-4 mb-4">
            <Typography variant="small" className="font-bold uppercase tracking-widest !text-indigo-500">
              {project.tags}
            </Typography>
          </div>

          <Typography
            variant="h2"
            color="blue-gray"
            className="my-4 font-black text-4xl lg:text-5xl !leading-tight dark:text-white"
          >
            {project.title}
          </Typography>

          <div className="flex gap-4 mb-8">
            <span className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <FaMapLocationDot className="text-indigo-500" /> Okaloosa County, FL
            </span>
            <span className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <FaUmbrellaBeach className="text-indigo-500" /> Emerald Coast
            </span>
          </div>

          <Typography className="font-normal !text-gray-400 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-500 first-letter:mr-3 first-letter:float-left">
            {project.content}
          </Typography>

          {/* Travel Guide Call to Action */}
          <div className="mt-16 p-8 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-white mb-2">Planning a move to the Panhandle?</h4>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">Get the technical breakdown on the best neighborhoods, school districts, and investment zones in Okaloosa County.</p>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 flex items-center gap-2">
              Get My Local Insider Guide <FaMapLocationDot />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}