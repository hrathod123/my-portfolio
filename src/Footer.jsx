
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#home" className="text-lg font-bold text-white">
          Harshil<span className="text-cyan-400">Rathod</span>
        </a>

        <p className="text-center text-sm text-slate-500">
          © {currentYear} Harshil Rathod. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm text-slate-400 transition hover:text-cyan-400"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
