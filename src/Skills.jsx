
const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "Java (Basic)"],
  },
  {
    title: "Frameworks & APIs",
    skills: ["Django", "Django REST Framework", "FastAPI", "REST APIs", "Pydantic", "React"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Docker"],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          My Technical Toolkit
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Skills & Technologies
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Technologies and tools I've worked with through my learning,
          internship experience, and development projects.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-purple-400/20 bg-purple-400/5 p-5">
          <h3 className="font-semibold text-purple-300">
            Currently Learning
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            AWS Cloud, Node.js, and LangChain
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
