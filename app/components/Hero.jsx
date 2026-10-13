"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const towns = [
  {
    name: "Fort Walton Beach",
    note: "Close to Hurlburt and the island. Steady year-round demand, not just summer.",
  },
  {
    name: "Niceville",
    note: "Right next to Eglin, on the bay. Quieter streets and a lot of military families.",
  },
  {
    name: "Crestview",
    note: "Newer neighborhoods and more house for the money, if you don't mind the drive.",
  },
  {
    name: "Destin",
    note: "Vacation rentals, the busiest summers, and the priciest sand in the county.",
  },
];

export default function Hero() {
  const [address, setAddress] = useState("");

  const handleValuationSubmit = (e) => {
    e.preventDefault();
    const trimmed = address.trim();
    if (!trimmed) return;
    try {
      sessionStorage.setItem("cma_address", trimmed);
    } catch {}
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="hero" className="relative pt-16 lg:pt-[72px]">
        <div className="lg:grid lg:min-h-[calc(100svh-72px)] lg:grid-cols-2">
          {/* The photo: Crab Island from above. The one loud thing on the page. */}
          <figure className="relative h-[52svh] min-h-[320px] overflow-hidden lg:order-last lg:h-auto">
            <div className="tide-in absolute inset-0">
              <Image
                src="/images/local-coastline.jpg"
                alt="Boats anchored in clear emerald water at Crab Island in Destin, seen from above"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-5 pb-4 pt-16 text-sm text-white sm:px-6 lg:px-8 lg:pb-6">
              Crab Island, Destin. Yes, the water really is that color.
            </figcaption>
          </figure>

          {/* The pitch */}
          <div className="flex items-center px-4 py-12 sm:px-6 sm:py-16 lg:py-20 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-14">
            <div className="max-w-[34rem]">
              <h1 className="font-display text-[2.5rem] font-semibold leading-[1.05] text-foreground sm:text-[3.25rem] lg:text-[3.75rem]">
                Know the real monthly cost before you fall for the house.
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                I&apos;m Lindsey, a Fort Walton Beach agent with eXp Realty.
                Before you tour a single home, I&apos;ll show you what it
                actually costs each month: the mortgage, the flood zone, the
                insurance, and your BAH if you&apos;re PCSing to Eglin or
                Hurlburt.
              </p>

              <form onSubmit={handleValuationSubmit} className="mt-10">
                <label
                  htmlFor="hero-address"
                  className="block font-display text-xl font-semibold text-foreground"
                >
                  Selling? See what your home is worth.
                </label>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="hero-address"
                    type="text"
                    placeholder="Your street address"
                    autoComplete="street-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="min-w-0 flex-1 rounded-full border border-foreground/20 bg-background px-5 py-3.5 text-base text-foreground placeholder:text-muted focus:border-reef focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="shrink-0 cursor-pointer rounded-full bg-reef px-7 py-3.5 font-semibold text-background transition-opacity hover:opacity-90"
                  >
                    Get my home value
                  </button>
                </div>
                <p className="mt-3 text-sm text-muted">
                  Free, no obligation. I price it against real sold homes from
                  the local MLS.
                </p>
              </form>

              <p className="mt-8 text-base text-foreground/80">
                Buying instead?{" "}
                <Link
                  href="#calculator"
                  className="font-semibold text-reef underline decoration-reef/40 underline-offset-4 hover:decoration-reef"
                >
                  Estimate a monthly payment
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where I work: one honest line per town */}
      <section aria-labelledby="towns-heading" className="border-y border-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 id="towns-heading" className="font-display text-2xl font-semibold text-foreground">
            Where I work
          </h2>
          <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {towns.map((town) => (
              <li key={town.name} className="border-l-2 border-reef/50 pl-4">
                <p className="font-display text-xl font-semibold text-foreground">
                  {town.name}
                </p>
                <p className="mt-2 leading-relaxed text-foreground/75">{town.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-foreground/80">
            Plus Shalimar, Mary Esther, Valparaiso and everywhere in between.{" "}
            <Link
              href="#market-map"
              className="font-semibold text-reef underline decoration-reef/40 underline-offset-4 hover:decoration-reef"
            >
              Compare neighborhoods on the map
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
