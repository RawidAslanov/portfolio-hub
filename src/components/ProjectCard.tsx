"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { SITE } from "@/data/site";

const MOBILE_HIGHLIGHTS_PREVIEW = 2;

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const previewHighlights = project.highlights.slice(0, MOBILE_HIGHLIGHTS_PREVIEW);
  const hiddenHighlights = project.highlights.length - previewHighlights.length;
  const hasMoreContent =
    project.highlights.length > MOBILE_HIGHLIGHTS_PREVIEW ||
    project.description.length > 100;

  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-zinc-900/60 ${project.border}`}
    >
      <figure className="relative w-full overflow-hidden border-b border-white/5 bg-[#0a0a0f]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          width={project.imageWidth}
          height={project.imageHeight}
          className="block h-auto w-full max-w-full"
          loading={project.id === "premium-barber" ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={project.id === "premium-barber" ? "high" : "auto"}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent sm:h-32"
          aria-hidden
        />
        <figcaption className="absolute bottom-3 left-3 right-3 flex flex-wrap items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
          <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-200 backdrop-blur-sm">
            {project.badge}
          </span>
          {project.live !== false ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-900 transition hover:bg-zinc-100 sm:px-5 sm:text-sm"
            >
              Live demo ↗
            </a>
          ) : (
            <span className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-zinc-500 sm:px-5 sm:text-sm">
              Coming soon
            </span>
          )}
        </figcaption>
      </figure>

      <div className={`bg-gradient-to-br ${project.accent} p-5 sm:p-8`}>
        <h2 className="text-xl font-bold text-white sm:text-3xl">
          {project.title}
        </h2>
        <p className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">
          {project.subtitle}
        </p>

        <p
          className={`mt-3 max-w-3xl text-sm leading-relaxed text-zinc-200 sm:mt-4 ${
            expanded ? "" : "line-clamp-3"
          } md:line-clamp-none`}
        >
          {project.description}
        </p>

        <ul className="mt-4 space-y-2 sm:mt-5 md:hidden">
          {(expanded ? project.highlights : previewHighlights).map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-relaxed text-zinc-400"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/80" />
              <span>{item}</span>
            </li>
          ))}
          {!expanded && hiddenHighlights > 0 ? (
            <li className="pl-3.5 text-sm text-zinc-500">
              +{hiddenHighlights} more
            </li>
          ) : null}
        </ul>

        <ul className="mt-5 hidden space-y-2 md:block">
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

        {hasMoreContent ? (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 text-sm font-semibold text-violet-400 transition hover:text-violet-300 md:hidden"
            aria-expanded={expanded}
          >
            {expanded ? "Show less ↑" : "Read more ↓"}
          </button>
        ) : null}

        <div
          className={`mt-5 flex flex-wrap gap-2 sm:mt-6 ${
            expanded ? "flex" : "hidden md:flex"
          }`}
        >
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
          <div
            className={`mt-5 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4 sm:mt-6 ${
              expanded ? "block" : "hidden md:block"
            }`}
          >
            <SheetsDemoBlock project={project} />
          </div>
        ) : null}
      </div>
    </article>
  );
}

function SheetsDemoBlock({ project }: { project: Project }) {
  return (
    <>
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
    </>
  );
}
