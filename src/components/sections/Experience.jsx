// import React from "react";
// import { experience } from "../../data/experience";

// const Experience = () => {
//   return (
//     <section id="experience" className="section-pad">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="reveal text-center mb-16">
//           <span className="text-xs font-semibold tracking-widest uppercase text-primary">
//             Career
//           </span>
//           <h2 className="title-md mt-2">Experience</h2>
//         </div>

//         {/* Timeline */}
//         <div className="relative border-l-2 border-[#d0d5e0] pl-6 ml-4 space-y-12">
//           {experience.map((exp, idx) => (
//             <div key={idx} className="reveal relative">
//               {/* Timeline Dot */}
//               <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-primary border-2 border-white shadow-sm"></div>

//               {/* Card */}
//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#eaeaef] hover:shadow-md transition">
//                 <div className="flex flex-wrap items-start justify-between gap-2">
//                   <h3 className="text-lg font-semibold">{exp.company}</h3>
//                   <span className="text-xs font-medium bg-[#f0f4ff] text-primary px-3 py-1 rounded-full">
//                     {exp.period}
//                   </span>
//                 </div>
//                 <p className="text-sm text-muted font-medium">{exp.position}</p>

//                 {/* Responsibilities */}
//                 <ul className="mt-3 space-y-1.5 text-sm text-[#3a3a4a] list-disc list-inside">
//                   {exp.responsibilities.map((r, i) => (
//                     <li key={i}>{r}</li>
//                   ))}
//                 </ul>

//                 {/* Tech Tags */}
//                 <div className="flex flex-wrap gap-1.5 mt-3">
//                   {exp.tech.map((t, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-2.5 py-0.5 bg-[#f4f4fa] rounded-full text-muted"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React from "react";
import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        section-pad
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#f4f6f8]
        via-[#eef1f5]
        to-[#f8f9fb]
      "
    >
      {/* Ambient background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/4
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-300/15
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-300/15
          blur-[130px]
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span
            className="
              inline-block
              text-xs
              font-semibold
              tracking-[0.2em]
              uppercase
              text-primary
            "
          >
            Career
          </span>

          <h2
            className="
              title-md
              mt-2
              tracking-[-0.03em]
              text-[#17171a]
            "
          >
            Experience
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-[#777b84]">
            A journey of building products, solving problems, and continuously
            learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ml-3 border-l border-black/10 pl-8 md:ml-6 md:pl-10">
          {/* Timeline glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-[-1px]
              top-0
              h-full
              w-px
              bg-gradient-to-b
              from-primary/60
              via-primary/20
              to-transparent
            "
          />

          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <div key={idx} className="reveal relative">
                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    -left-[42px]
                    top-7
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-white/70
                    shadow-[0_4px_15px_rgba(0,0,0,0.12)]
                    backdrop-blur-xl
                    md:-left-[52px]
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-primary
                      shadow-[0_0_10px_rgba(99,102,241,0.7)]
                    "
                  />
                </div>

                {/* Experience Glass Card */}
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-white/80
                    bg-white/45
                    p-6
                    md:p-7
                    backdrop-blur-2xl
                    shadow-[0_12px_45px_rgba(0,0,0,0.06)]
                    transition-all
                    duration-700
                    ease-out
                    hover:-translate-y-1
                    hover:bg-white/60
                    hover:border-white
                    hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)]
                  "
                >
                  {/* Glass highlight */}
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
                      via-white
                      to-transparent
                    "
                  />

                  {/* Card glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-40
                      w-40
                      rounded-full
                      bg-primary/5
                      blur-3xl
                      transition-opacity
                      duration-700
                      group-hover:bg-primary/10
                    "
                  />

                  <div className="relative z-10">
                    {/* Company + Period */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3
                          className="
                            text-lg
                            font-semibold
                            tracking-tight
                            text-[#17171a]
                          "
                        >
                          {exp.company}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-primary">
                          {exp.position}
                        </p>
                      </div>

                      <span
                        className="
                          rounded-full
                          border
                          border-black/5
                          bg-white/60
                          px-3
                          py-1.5
                          text-xs
                          font-medium
                          text-[#5f636b]
                          shadow-sm
                          backdrop-blur-xl
                        "
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul
                      className="
                        mt-5
                        space-y-2.5
                        text-sm
                        leading-relaxed
                        text-[#555861]
                      "
                    >
                      {exp.responsibilities.map((r, i) => (
                        <li
                          key={i}
                          className="
                            flex
                            gap-3
                            transition-colors
                            duration-300
                            hover:text-[#202124]
                          "
                        >
                          <span
                            className="
                              mt-[7px]
                              h-1.5
                              w-1.5
                              flex-shrink-0
                              rounded-full
                              bg-primary/60
                            "
                          />

                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span
                          key={i}
                          className="
                            rounded-full
                            border
                            border-black/5
                            bg-black/[0.035]
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            text-[#656970]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-white/80
                            hover:text-[#202124]
                            hover:shadow-sm
                          "
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
