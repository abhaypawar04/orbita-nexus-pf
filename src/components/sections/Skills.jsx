import React from "react";
import { skills } from "../../data/skills";
import two from "../../assets/images/two.jpg";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        section-pad
        relative
        overflow-hidden
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: `url(${two})`,
      }}
    >
      {/* Dark glass-friendly overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Ambient glows */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/4
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-1/4
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/10
          blur-[120px]
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span
            className="
              inline-block
              text-xs
              font-semibold
              tracking-[0.2em]
              uppercase
              text-white/60
            "
          >
            Expertise
          </span>

          <h2
            className="
              title-md
              mt-2
              text-white
              tracking-[-0.03em]
            "
          >
            Skills & technologies
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Modern stack, battle-tested tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="
                reveal
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/15
                bg-white/[0.08]
                p-6
                backdrop-blur-2xl
                shadow-[0_15px_50px_rgba(0,0,0,0.20)]
                transition-all
                duration-700
                ease-out
                hover:-translate-y-2
                hover:border-white/30
                hover:bg-white/[0.13]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.30)]
              "
            >
              {/* Glass reflection */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  h-px
                  w-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                "
              />

              {/* Soft card glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-white/10
                  blur-3xl
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* Category */}
              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/15
                      bg-white/10
                      text-xs
                      font-semibold
                      text-white
                      backdrop-blur-xl
                    "
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  <h3
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white
                    "
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Skills */}
                <ul className="space-y-3">
                  {group.items.map((skill, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-white/65
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-white
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          flex-shrink-0
                          rounded-full
                          bg-white/50
                          shadow-[0_0_8px_rgba(255,255,255,0.3)]
                          transition-all
                          duration-300
                          group-hover:bg-white
                        "
                      />

                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
