
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center overflow-hidden px-6 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-5 font-medium tracking-[0.25em] text-cyan-400 uppercase">
            Software Developer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm Harshil Rathod.
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                I build for the web.
            </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I create modern, responsive digital experiences using clean code,
          thoughtful design, and a passion for solving problems.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
            <a
                href="#projects"
                className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
                View My Projects
            </a>

            <a
                href="#contact"
                className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
                Contact Me
            </a>

          
            <a
                href="/Rathod_Harshil_RCV.pdf"
                download="Rathod_Harshil_RCV.pdf"
                className="rounded-lg border border-purple-400/40 px-6 py-3 font-semibold text-purple-300 transition hover:bg-purple-400/10"
            >
                Download Resume ↓
            </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
