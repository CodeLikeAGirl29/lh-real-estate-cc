"use client";
import React from "react";
import { FaCheck, FaCode, FaHouseUser } from "react-icons/fa6";
import { m } from "framer-motion";

const events = [
  {
    id: 1,
    type: "Milestone",
    title: "Real Estate Sales Associate — eXp Realty",
    date: "2026",
    icon: <FaHouseUser className="text-background h-4 w-4" />,
    iconBg: "bg-reef",
    dotColor: "bg-emerald-400",
    content: [
      "Activated Florida Real Estate Sales Associate license under eXp Realty.",
      "Serving buyers and sellers across the Emerald Coast — Fort Walton Beach, Destin & Niceville.",
      "Focused on market research and property analysis for the Florida Panhandle.",
      "Prioritizing contract and document accuracy for residential transactions.",
    ],
  },
  {
    id: 2,
    type: "Project",
    title: "Digital Solutions & Development",
    date: "2021 - 2025",
    icon: <FaCode className="text-background h-4 w-4" />,
    iconBg: "bg-steel",
    dotColor: "bg-amber-400",
    content: [
      "Strengthened branding knowledge directly applicable to real estate digital listings.",
      "Managed complex project timelines with clear, consistent client communication.",
      "Expertise in Full Stack development, including state management and user experience.",
    ],
  },
  {
    id: 3,
    type: "Grit",
    title: "Sales & Client Operations",
    date: "2016 - 2021",
    icon: <FaCheck className="text-foreground h-4 w-4" />,
    iconBg: "bg-surface border border-foreground/20",
    dotColor: "bg-foreground/30",
    content: [
      "Built and maintained long-term client relationships through consistent, reliable follow-up.",
      "Developed mechanical aptitude and technical accuracy through service documentation and inspections.",
      "Experienced in delivering high-level customer service under tight deadlines.",
    ],
  },
];

export default function Experience() {
  return (
    <div
      className="charcoal-section py-24 border-t border-foreground/5"
      id="experience"
    >
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-2 mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-foreground tracking-tight">
            Experience
          </h2>
          <div className="flex gap-2">
            <span className="w-12 h-[3px] bg-steel" />
            <span className="w-6 h-[3px] bg-steel" />
          </div>
        </m.div>

        <div className="flow-root">
          <ul className="-mb-8">
            {events.map((event, eventIdx) => (
              <m.li
                key={event.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative pb-12">
                  {eventIdx !== events.length - 1 ? (
                    <span
                      className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-foreground/10"
                      aria-hidden="true"
                    />
                  ) : null}

                  <div className="relative flex items-start space-x-4">
                    <div>
                      <div className="relative px-1">
                        <div
                          className={`h-8 w-8 ${event.iconBg} ring-8 ring-background flex items-center justify-center`}
                        >
                          {event.icon}
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 py-0">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="font-display font-bold text-lg text-foreground tracking-tight">
                            {event.title}
                          </span>
                          <span className="frame inline-flex items-center px-2.5 py-0.5 font-mono text-[10px] font-bold text-steel uppercase tracking-widest">
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${event.dotColor} mr-2`}
                              aria-hidden="true"
                            />
                            {event.type}
                          </span>
                        </div>
                        <span className="whitespace-nowrap font-mono text-xs font-bold text-steel border border-steel/20 px-2 py-1">
                          {event.date}
                        </span>
                      </div>

                      <div className="mt-3 text-foreground/60 text-sm leading-relaxed border border-foreground/10 bg-surface/50 p-4">
                        <ul className="space-y-2">
                          {event.content.map((item, index) => (
                            <li key={index} className="flex gap-2">
                              <span className="text-reef font-bold">›</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </m.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
