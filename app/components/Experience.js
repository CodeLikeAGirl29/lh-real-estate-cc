"use client";
import React from "react";
import { FaCheck, FaCode, FaHouseUser } from "react-icons/fa6";

const events = [
  {
    id: 1,
    type: "Milestone",
    title: "Florida Real Estate Associate (Exam Passed)",
    date: "04/14/2026",
    icon: <FaHouseUser className="text-white h-4 w-4" />,
    iconBg: "bg-sky-600",
    dotColor: "bg-green-500",
    content: [
      "Passed the Florida Real Estate Sales Associate state licensing exam.",
      "Actively pursuing a sponsoring broker to activate license status.",
      "Focused on market research and property analysis for the Florida Panhandle.",
      "Prioritizing contract and document accuracy for future residential transactions.",
    ],
  },
  {
    id: 2,
    type: "Project",
    title: "Digital Solutions & Development",
    date: "2021 - 2025",
    icon: <FaCode className="text-white h-4 w-4" />,
    iconBg: "bg-sky-500",
    dotColor: "bg-amber-500",
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
    icon: <FaCheck className="text-white h-4 w-4" />,
    iconBg: "bg-slate-700",
    dotColor: "bg-blue-200",
    content: [
      "Built and maintained long-term client relationships through consistent, reliable follow-up.",
      "Developed mechanical aptitude and technical accuracy through service documentation and inspections.",
      "Experienced in delivering high-level customer service under tight deadlines.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="bg-gray-900 py-24" id="experience">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Title with emerald accents to match Stats section */}
        <div className="flex flex-col items-center gap-2 mb-16">
          <h2 className="text-4xl font-display font-bold text-white tracking-tight">
            Experience
          </h2>
          <div className="flex gap-2">
            <span className="w-12 h-[3px] bg-sky-500 rounded"></span>
            <span className="w-6 h-[3px] bg-sky-500 rounded"></span>
          </div>
        </div>

        <div className="flow-root">
          <ul className="-mb-8">
            {events.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-12">
                  {/* Vertical Line - Darker for Dark Mode */}
                  {eventIdx !== events.length - 1 ? (
                    <span
                      className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-800"
                      aria-hidden="true"
                    ></span>
                  ) : null}

                  <div className="relative flex items-start space-x-4">
                    {/* Icon Circle */}
                    <div>
                      <div className="relative px-1">
                        <div
                          className={`h-8 w-8 ${event.iconBg} rounded-full ring-8 ring-gray-900 flex items-center justify-center shadow-lg shadow-sky-500/10`}
                        >
                          {event.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="min-w-0 flex-1 py-0">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="font-bold text-lg text-white tracking-tight">
                            {event.title}
                          </span>
                          <span className="inline-flex items-center bg-white/5 rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${event.dotColor} mr-2`}
                              aria-hidden="true"
                            ></span>
                            {event.type}
                          </span>
                        </div>
                        <span className="whitespace-nowrap text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2 py-1 rounded border border-sky-500/20">
                          {event.date}
                        </span>
                      </div>

                      <div className="mt-3 text-gray-400 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                        <ul className="space-y-2">
                          {event.content.map((item, index) => (
                            <li key={index} className="flex gap-2">
                              <span className="text-sky-500 font-bold">›</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
