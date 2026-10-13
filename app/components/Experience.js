import React from "react";

const events = [
  {
    id: 1,
    title: "REALTOR® at eXp Realty",
    date: "2026",
    content: [
      "Licensed Florida REALTOR® with eXp Realty.",
      "Serving buyers and sellers across the Emerald Coast: Fort Walton Beach, Destin and Niceville.",
      "Focused on market research and property analysis for the Florida Panhandle.",
      "Prioritizing contract and document accuracy for residential transactions.",
    ],
  },
  {
    id: 2,
    title: "Digital Solutions & Development",
    date: "2021–2025",
    content: [
      "Strengthened branding knowledge directly applicable to real estate digital listings.",
      "Managed complex project timelines with clear, consistent client communication.",
      "Expertise in Full Stack development, including state management and user experience.",
    ],
  },
  {
    id: 3,
    title: "Sales & Client Operations",
    date: "2016–2021",
    content: [
      "Built and maintained long-term client relationships through consistent, reliable follow-up.",
      "Developed mechanical aptitude and technical accuracy through service documentation and inspections.",
      "Experienced in delivering high-level customer service under tight deadlines.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-foreground/10 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
          How I got here
        </h2>

        <ol className="mt-14">
          {events.map((event) => (
            <li
              key={event.id}
              className="grid gap-3 border-t border-foreground/10 py-10 sm:grid-cols-[10rem_1fr] sm:gap-10"
            >
              <p className="font-display text-2xl text-reef tabular">{event.date}</p>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {event.title}
                </h3>
                <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-foreground/75 marker:text-reef/60">
                  {event.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
