import React from "react";
import three from "../../assets/images/three.jpg";

const educationData = [
  {
    title: "MCA. Computer Application",
    institution: "SPPU Pune University",
    year: "2023 – 2025",
    description:
      "Specialization in distributed systems and human-computer interaction.",
  },
  {
    title: "Certified Developer",
    institution: "Web Services",
    year: "2026",
    description: "Designing and deploying cloud-native applications.",
  },
  {
    title: "MongoDB Developer",
    institution: "MongoDB",
    year: "2026",
    description:
      "Advanced MongoDB design, aggregation, and performance tuning.",
  },
  {
    title: "React & JavaScript",
    institution: "Frontend Essentials",
    year: "2025",
    description: "Building applications with React and JavaScript.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="
        section-pad
        relative
        overflow-hidden
        bg-cover
        bg-center
      
      "
      style={{ backgroundImage: `url(${three})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Ambient Glow */}
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
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/10
          blur-[130px]
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-14">
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
            Learning
          </span>

          <h2
            className="
              title-md
              mt-2
              text-white
              tracking-[-0.03em]
            "
          >
            Education & Certifications
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-white/55">
            Continuous learning, certifications, and technical growth.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {educationData.map((item, idx) => (
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
                md:p-7
                backdrop-blur-2xl
                shadow-[0_15px_50px_rgba(0,0,0,0.22)]
                transition-all
                duration-700
                ease-out
                hover:-translate-y-2
                hover:border-white/30
                hover:bg-white/[0.13]
                hover:shadow-[0_25px_65px_rgba(0,0,0,0.32)]
              "
            >
              {/* Glass Highlight */}
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
                  via-white/50
                  to-transparent
                "
              />

              {/* Card Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-36
                  w-36
                  rounded-full
                  bg-white/10
                  blur-3xl
                  opacity-50
                  transition-all
                  duration-700
                  group-hover:scale-150
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                {/* Number + Year */}
                <div className="mb-5 flex items-center justify-between">
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

                  <span
                    className="
                      rounded-full
                      border
                      border-white/15
                      bg-white/10
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-white/70
                      backdrop-blur-xl
                    "
                  >
                    {item.year}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="
                    text-lg
                    font-semibold
                    tracking-tight
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Institution */}
                <p
                  className="
                    mt-1.5
                    text-sm
                    font-medium
                    text-white/60
                  "
                >
                  {item.institution}
                </p>

                {/* Divider */}
                <div
                  className="
                    my-5
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-white/20
                    via-white/10
                    to-transparent
                  "
                />

                {/* Description */}
                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-white/55
                    transition-colors
                    duration-300
                    group-hover:text-white/70
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
