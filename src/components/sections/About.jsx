import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="section-pad bg-white/50 border-y border-[#eaeaef]"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Column */}
        <div className="reveal space-y-5">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            About
          </span>
          <h2 className="title-md">Building with purpose.</h2>
          <p className="text-muted leading-relaxed">
            With 5+ years of full‑stack experience, I architect scalable web
            applications that prioritize user experience and clean code. I
            believe in thoughtful design, performance, and continuous learning.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <span className="block text-2xl font-semibold">5+</span>
              <span className="text-sm text-muted">Years experience</span>
            </div>
            <div>
              <span className="block text-2xl font-semibold">20+</span>
              <span className="text-sm text-muted">Projects delivered</span>
            </div>
            <div>
              <span className="block text-2xl font-semibold">12</span>
              <span className="text-sm text-muted">Clients worldwide</span>
            </div>
            <div>
              <span className="block text-2xl font-semibold">100%</span>
              <span className="text-sm text-muted">Commitment</span>
            </div>
          </div>
        </div>

        {/* Right Column - Quote Card */}
        <div className="reveal bg-gradient-to-br from-[#f0f4ff] to-[#f5f0ff] p-8 rounded-3xl shadow-inner border border-white/60">
          <blockquote className="text-lg md:text-xl font-light italic text-[#2d2d3a] leading-relaxed">
            "Great developers don't just write code — they create experiences. I
            blend the art of design with the science of engineering."
          </blockquote>
          <div className="mt-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
              AR
            </div>
            <div>
              <p className="font-medium text-sm">Alex Rivera</p>
              <p className="text-xs text-muted">MERN Architect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
