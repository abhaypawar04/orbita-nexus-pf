import React from "react";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="section-pad">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Expertise
          </span>
          <h2 className="title-md mt-2">Skills & technologies</h2>
          <p className="subtitle mx-auto mt-3">
            Modern stack, battle‑tested tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="reveal bg-white rounded-2xl p-6 shadow-sm border border-[#eaeaef] hover:shadow-md transition"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-[#2d2d3a] text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-60 flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
