import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="
        section-pad
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#f5f7fa]
        via-[#eef1f5]
        to-[#f8f9fb]
        border-y border-white/60
      "
    >
      {/* Soft background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/4
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-300/20
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-300/20
          blur-[120px]
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Column */}
        <div className="reveal space-y-6">
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
            About
          </span>

          <h2
            className="
              title-md
              tracking-[-0.03em]
              text-[#17171a]
            "
          >
            Building with purpose.
          </h2>

          <p
            className="
              max-w-xl
              text-[#555861]
              leading-relaxed
              text-base
              md:text-lg
            "
          >
            With 3+ years of full-stack experience, I architect scalable web
            applications that prioritize user experience and clean code. I
            believe in thoughtful design, performance, and continuous learning.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-3">
            {/* Stat 1 */}
            <div
              className="
                group
                rounded-2xl
                border border-white/80
                bg-white/45
                p-5
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:bg-white/65
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
              "
            >
              <span className="block text-3xl font-semibold tracking-tight text-[#17171a]">
                3+
              </span>

              <span className="mt-1 block text-sm text-[#70747d]">
                Years experience
              </span>
            </div>

            {/* Stat 2 */}
            <div
              className="
                group
                rounded-2xl
                border border-white/80
                bg-white/45
                p-5
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:bg-white/65
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
              "
            >
              <span className="block text-3xl font-semibold tracking-tight text-[#17171a]">
                20+
              </span>

              <span className="mt-1 block text-sm text-[#70747d]">
                Projects delivered
              </span>
            </div>

            {/* Stat 3 */}
            <div
              className="
                group
                rounded-2xl
                border border-white/80
                bg-white/45
                p-5
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:bg-white/65
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
              "
            >
              <span className="block text-3xl font-semibold tracking-tight text-[#17171a]">
                12
              </span>

              <span className="mt-1 block text-sm text-[#70747d]">
                Clients worldwide
              </span>
            </div>

            {/* Stat 4 */}
            <div
              className="
                group
                rounded-2xl
                border border-white/80
                bg-white/45
                p-5
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:bg-white/65
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
              "
            >
              <span className="block text-3xl font-semibold tracking-tight text-[#17171a]">
                100%
              </span>

              <span className="mt-1 block text-sm text-[#70747d]">
                Commitment
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Glass Quote Card */}
        <div
          className="
            reveal
            relative
            overflow-hidden
            rounded-[2rem]
            border border-white/80
            bg-white/40
            p-8
            md:p-10
            backdrop-blur-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            transition-all
            duration-700
            ease-out
            hover:-translate-y-1
            hover:bg-white/50
            hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
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

          {/* Decorative glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-purple-300/20
              blur-3xl
            "
          />

          {/* Quote */}
          <div className="relative z-10">
            <div
              className="
                mb-5
                text-5xl
                leading-none
                font-serif
                text-[#9b9da5]/40
              "
            >
              “
            </div>

            <blockquote
              className="
                text-lg
                md:text-xl
                font-light
                italic
                leading-relaxed
                tracking-tight
                text-[#30323a]
              "
            >
              Great developers don't just write code — they create experiences.
              I blend the art of design with the science of engineering.
            </blockquote>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/80
                  bg-gradient-to-br
                  from-[#667eea]
                  to-[#764ba2]
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                "
              >
                AP
              </div>

              <div>
                <p className="text-sm font-semibold text-[#222328]">
                  Abhay Pawar
                </p>

                <p className="mt-0.5 text-xs text-[#777b84]">
                  Full-Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
