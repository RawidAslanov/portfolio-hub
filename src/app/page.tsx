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
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Business websites that look premium
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
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
            <article
              key={project.id}
              className={`overflow-hidden rounded-2xl border bg-zinc-900/60 ${project.border}`}
            >
              <div className="relative aspect-[21/9] w-full overflow-hidden border-b border-white/5 sm:aspect-[2.4/1]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={project.id === "premium-barber" ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-200 backdrop-blur-sm">
                    {project.badge}
                  </span>
                  {project.live !== false ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                    >
                      Live demo ↗
                    </a>
                  ) : (
                    <span className="rounded-full border border-white/10 bg-black/40 px-5 py-2 text-sm text-zinc-500">
                      Coming soon
                    </span>
                  )}
                </div>
              </div>

              <div className={`bg-gradient-to-br ${project.accent} p-6 sm:p-8`}>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-zinc-400">
                  {project.subtitle}
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-200">
                  {project.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-zinc-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-black/25 px-2.5 py-1 text-xs font-medium text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.hasSheetsDemo && SITE.barberDemoSheetsUrl ? (
                  <div className="mt-6 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Try booking + Google Sheets
                    </p>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-zinc-300">
                      <li>
                        Open{" "}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-300 underline"
                        >
                          live site
                        </a>{" "}
                        → book a test appointment
                      </li>
                      <li>
                        Open{" "}
                        <a
                          href={SITE.barberDemoSheetsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-300 underline"
                        >
                          demo Google Sheet
                        </a>{" "}
                        (view only) → tab <strong>Bookings</strong> → refresh
                      </li>
                      <li>See your new row — date, barber, services, status</li>
                    </ol>
                    <a
                      href={SITE.barberDemoSheetsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex rounded-full border border-emerald-500/40 px-4 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/15"
                    >
                      Open Google Sheets admin (view only) ↗
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-zinc-950/80 py-16">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
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
                <h3 className="mt-2 text-xl font-bold text-white">{pkg.name}</h3>
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
