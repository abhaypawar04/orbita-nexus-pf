import React from "react";

const educationData = [
  {
    title: "MSc. Computer Science",
    institution: "Stanford University",
    year: "2017 – 2019",
    description:
      "Specialization in distributed systems and human‑computer interaction.",
  },
  {
    title: "AWS Certified Developer",
    institution: "Amazon Web Services",
    year: "2022",
    description: "Designing and deploying cloud‑native applications on AWS.",
  },
  {
    title: "MongoDB University",
    institution: "MongoDB",
    year: "2020",
    description:
      "Advanced MongoDB design, aggregation, and performance tuning.",
  },
  {
    title: "React & TypeScript",
    institution: "Frontend Masters",
    year: "2021",
    description: "Building type‑safe applications with React and TypeScript.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="section-pad bg-white/30 border-y border-[#eaeaef]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Learning
          </span>
          <h2 className="title-md mt-2">Education & Certifications</h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="reveal bg-white rounded-2xl p-6 shadow-sm border border-[#eaeaef] hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-muted">
                {item.institution} · {item.year}
              </p>
              <p className="text-sm mt-2 text-[#3a3a4a]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
