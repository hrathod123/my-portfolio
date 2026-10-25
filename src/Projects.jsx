
const projects = [
  {
    number: "01",
    title: "E-Garage System",
    description:
      "A garage service management application built to support backend functionality and manage application data using PostgreSQL.",
    technologies: ["Python", "Django", "PostgreSQL"],
    type: "Backend Web Application",
  },
  {
    number: "02",
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio designed to showcase my technical skills, development projects, and professional profile.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    type: "Frontend Web Development",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          What I've Built
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          A selection of projects that demonstrate my development skills
          and practical learning.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-cyan-400/70">
                  {project.number}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                  {project.type}
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white transition group-hover:text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
