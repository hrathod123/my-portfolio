
function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold tracking-widest text-cyan-400 uppercase">
          Get to know me
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          About Me
        </h2>

        <div className="mt-8 max-w-3xl">
          <p className="text-lg leading-8 text-slate-400">
            I'm Harshil Rathod, an aspiring software developer passionate
            about building modern, user-friendly applications. I enjoy
            learning new technologies, solving problems, and turning ideas
            into practical digital experiences.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            I'm currently developing my skills in React, JavaScript, and
            responsive web design while building projects that strengthen
            my understanding of real-world software development.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white">Problem Solving</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Breaking complex problems into manageable steps.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white">Continuous Learning</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Exploring tools and improving my development skills.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white">Clean UI</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Creating simple, accessible, responsive interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
