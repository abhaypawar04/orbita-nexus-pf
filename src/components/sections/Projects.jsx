import React from "react";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-pad bg-white/50 border-y border-[#eaeaef]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Portfolio
          </span>
          <h2 className="title-md mt-2">Featured projects</h2>
          <p className="subtitle mx-auto mt-3">
            Each project is a story of problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="reveal group bg-white rounded-3xl overflow-hidden shadow-sm border border-[#eaeaef] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image / Icon */}
              <div className="h-48 bg-gradient-to-br from-[#eef2ff] to-[#f0edff] flex items-center justify-center text-5xl font-light text-[#3a3a4a]">
                {project.image || "🖥️"}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-muted mt-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#f0f4ff] rounded-full text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="#"
                    className="text-sm font-medium text-dark hover:text-primary transition"
                  >
                    GitHub →
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-dark hover:text-primary transition"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
