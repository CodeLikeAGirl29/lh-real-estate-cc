"use client";
import React from 'react';
import Link from 'next/link';

const projects = [
  {
    id: "okaloosa-guide",
    title: "Okaloosa Guide",
    date: "April 2026",
    desc: "A developer's deep dive into the Emerald Coast. From Spanish Villas to Shalimar, I explore the local infrastructure and structural standards that define our community.",
    image: "/images/local-coastline.jpg",
    tags: "Local Guide / Real Estate"
  },
  {
    id: "beyond-the-beach",
    title: "Beyond the Beach: The Blueprint",
    date: "March 2026",
    desc: "Moving past the aesthetics to analyze the data. An investment-focused breakdown of Okaloosa County's growth zones, rental yields, and Prop-Tech trends.",
    image: "/images/img-1.jpg",
    tags: "Investment / Data Analysis"
  },
  {
    id: "emerald-coast-insider",
    title: "The Emerald Coast Inside",
    date: "March 2026",
    desc: "Living 'Handled' in the Panhandle. A lifestyle guide featuring local hidden gems, the best bay-side launches, and navigating the FWB market with a developer's edge.",
    image: "/images/img-2.jpg",
    tags: "Lifestyle / Personal"
  }
];

export default function Collections() {
  return (
    <section className="bg-white py-24 dark:bg-gray-900" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Featured Collections</h2>
          <span className="mt-2 block h-1 w-12 bg-sky-600 rounded"></span>
        </div>

        {/* The Horizontal Grid Container */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25 group"
            >
              <div className="overflow-hidden">
                <img
                  alt={project.title}
                  src={project.image}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-2">
                  <time className="block text-xs font-mono text-sky-500 font-bold uppercase tracking-widest">
                    {project.date}
                  </time>
                  <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-500 dark:text-gray-400 font-bold">
                    {project.tags}
                  </span>
                </div>

                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-sky-600">
                    {project.title}
                  </h3>
                </Link>

                <p className="mt-3 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                  {project.desc}
                </p>

                <div className="mt-6 flex items-center gap-1 text-sm font-bold text-sky-600">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 flex items-center gap-1 text-sm font-bold text-sky-600 hover:text-sky-400"
                  >
                    View Project <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}