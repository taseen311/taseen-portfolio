import Link from "next/link";
import { 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight, 
  Layers, 
  Globe
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS } from "@/data/portfolio";

export const metadata = {
  title: "Featured Projects | Full-Stack Developer",
  description: "Live web applications and projects built with Next.js, React, and modern UI architectures.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span>Section 04 / Live Deployments &amp; Source Repositories</span>
        </div>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white">
          Featured Projects &amp; Live Systems
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-normal leading-relaxed text-zinc-300">
          Explore 4 production-ready web applications deployed on Vercel and Netlify. 
          Each application includes full access to live previews and open-source GitHub repositories.
        </p>
      </div>

      {/* Projects List */}
      <div className="mt-14 space-y-12">
        {PROJECTS.map((project, index) => (
          <article
            key={project.id}
            id={project.id}
            className="group relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-8 shadow-xl backdrop-blur-md transition-all hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-400/5"
          >
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              {/* Left Column: Project Info (Col 7) */}
              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  {/* Category & Status Badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-amber-400/40 bg-amber-400/15 px-3.5 py-1 text-xs font-bold text-amber-300">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-zinc-400">
                      Project #{index + 1} • {project.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Live &amp; Deployed
                    </span>
                  </div>

                  <h2 className="mt-4 text-3xl font-extrabold text-white">
                    {project.title}
                  </h2>
                  <p className="mt-1.5 text-base font-semibold text-amber-300">
                    {project.tagline}
                  </p>

                  <p className="mt-4 text-base font-normal leading-relaxed text-zinc-200">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Key Highlights:
                    </h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-zinc-200"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Technologies &amp; Libraries:
                    </h3>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Links (Live + GitHub) */}
                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-zinc-800 pt-6">
                  {/* Live Launch Button */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-black transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  {/* Respective GitHub Repo Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-800/90 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-amber-400 hover:bg-zinc-800 hover:text-amber-300"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>View GitHub Repo</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                  </a>
                </div>
              </div>

              {/* Right Column: Live App Mockup Card (Col 5) */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-950 shadow-2xl">
                  {/* Browser top-bar */}
                  <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500" />
                      <span className="h-3 w-3 rounded-full bg-amber-500" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="truncate px-2 font-mono text-xs text-zinc-400">
                      {project.liveUrl}
                    </div>
                    <Globe className="h-4 w-4 text-zinc-500" />
                  </div>

                  {/* App Visual Preview Card */}
                  <div className="relative flex aspect-video flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-zinc-900/50 to-zinc-950">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/40 bg-amber-400/10 text-amber-400">
                      <Layers className="h-8 w-8" />
                    </div>
                    <div className="mt-4 text-xl font-bold text-white">
                      {project.title}
                    </div>
                    <div className="mt-1 text-sm font-medium text-zinc-300">
                      {project.category} • Modern Web App
                    </div>

                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      {project.metrics.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="rounded-full border border-zinc-700 bg-zinc-800/90 px-3.5 py-1 text-xs font-semibold text-zinc-200"
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-400 hover:text-amber-300 hover:underline"
                      >
                        <span>Open live</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <span className="text-zinc-600">•</span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-300 hover:text-white hover:underline"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Source code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 rounded-2xl border border-zinc-700/80 bg-zinc-900/80 p-8 sm:p-10 text-center shadow-xl">
        <h3 className="text-2xl font-bold text-white">
          Need a custom web application or Next.js platform built?
        </h3>
        <p className="mx-auto mt-2.5 max-w-lg text-base text-zinc-300">
          I am currently open to freelance contracts, full-time developer positions, and team collaborations.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-black hover:bg-amber-300 transition-colors"
          >
            Start a Conversation
          </Link>
          <Link
            href="/resume"
            className="rounded-xl border border-zinc-600 bg-zinc-800 px-6 py-3 text-sm font-semibold text-white hover:border-zinc-400 transition-colors"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
