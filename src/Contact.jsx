
const contactDetails = [
  {
    label: "Email",
    value: "rharshil543@gmail.com",
    href: "mailto:rharshil543@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rharshil789",
    href: "https://linkedin.com/in/rharshil789",
  },
  {
    label: "GitHub",
    value: "github.com/hrathod123",
    href: "https://github.com/hrathod123",
  },
];

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Let's Connect
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Get In Touch
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          I'm open to software development opportunities, internships,
          and conversations about building useful digital products.
          Feel free to reach out.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Email" ? undefined : "_blank"}
              rel={contact.label === "Email" ? undefined : "noreferrer"}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/50 hover:bg-white/[0.06]"
            >
              <p className="text-sm text-slate-400">{contact.label}</p>
              <p className="mt-2 break-words font-semibold text-white">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
