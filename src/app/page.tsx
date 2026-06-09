import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { PACKAGES } from "@/data/packages";
import { SITE } from "@/data/site";

export default function Home() {
  const liveCount = PROJECTS.filter((p) => p.live !== false).length;

  return (
    <main className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(120,119,198,0.18),transparent)]" />

      <header className="relative mx-auto max-w-5xl px-6 pb-4 pt-16 text-center sm:px-8 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
          Portfolio · {SITE.developerName}
        </p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Business websites that look premium
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {liveCount} live demos — open on desktop or phone. Barbershop booking,
          e-commerce, admin panels, animations, multilingual UI.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={SITE.fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            Order on Fiverr ↗
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/30 hover:bg-white/5"
          >
            Email me
          </a>
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/30 hover:bg-white/5"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      <section className="relative mx-auto max-w-5xl px-6 py-12 sm:px-8">
        <div className="grid gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-zinc-950/80 py-16">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <h2 className="text-center text-xl font-bold text-white sm:text-3xl">
            What I offer
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-zinc-400">
            Pick a package on Fiverr or message me for a custom quote.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex h-full flex-col rounded-2xl border p-6 ${
                  pkg.featured
                    ? "border-violet-500/40 bg-violet-500/10 ring-1 ring-violet-500/20"
                    : "border-white/10 bg-zinc-900/50"
                }`}
              >
                {pkg.featured ? (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400">
                    Most popular
                  </span>
                ) : null}
                <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                  {pkg.name}
                </h3>
                <p className="text-sm text-violet-300">{pkg.price}</p>
                <p className="mt-1 text-xs text-zinc-500">{pkg.for}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-zinc-400 before:mr-2 before:text-violet-400 before:content-['✓']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
            Open any demo above, then message me on Fiverr with your niche and
            reference style.
          </p>
          <a
            href={SITE.fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
          >
            Start on Fiverr ↗
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 text-center text-xs text-zinc-600">
        <p>
          © {new Date().getFullYear()} {SITE.developerName} · Next.js · Vercel
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <a
            href={SITE.fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-violet-400"
          >
            Fiverr
          </a>
          <span>·</span>
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-violet-400"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={`mailto:${SITE.email}`}
            className="text-zinc-500 transition hover:text-violet-400"
          >
            {SITE.email}
          </a>
        </p>
      </footer>
    </main>
  );
}
