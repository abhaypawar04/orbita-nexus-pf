import React from "react";
import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Career
          </span>
          <h2 className="title-md mt-2">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#d0d5e0] pl-6 ml-4 space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="reveal relative">
              {/* Timeline Dot */}
              <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-primary border-2 border-white shadow-sm"></div>

              {/* Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#eaeaef] hover:shadow-md transition">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <span className="text-xs font-medium bg-[#f0f4ff] text-primary px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted font-medium">{exp.position}</p>

                {/* Responsibilities */}
                <ul className="mt-3 space-y-1.5 text-sm text-[#3a3a4a] list-disc list-inside">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-0.5 bg-[#f4f4fa] rounded-full text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
