import Link from "next/link";
import { 
  Code2, 
  Database, 
  Terminal, 
  Check, 
  Cpu, 
  Layers, 
  ArrowRight,
  Wrench
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

export const metadata = {
  title: "Skills & Tech Stack | Full-Stack Developer",
  description: "Technologies grouped clearly across frontend, backend, and development tools.",
};

export default function SkillsPage() {
  const getIcon = (idx: number) => {
    if (idx === 0) return <Layers className="h-6 w-6 text-amber-400" />;
    if (idx === 1) return <Database className="h-6 w-6 text-emerald-400" />;
    return <Wrench className="h-6 w-6 text-blue-400" />;
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span>Section 03 / Technologies &amp; Capabilities</span>
        </div>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white">
          Technical Stack &amp; Core Competencies
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-normal leading-relaxed text-zinc-300">
          A breakdown of the programming languages, frameworks, UI libraries, and tools I use to deliver end-to-end web applications.
        </p>
      </div>

      {/* Grid of 3 Main Categories (Frontend, Backend, Tools) */}
      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.title}
            className="flex flex-col justify-between rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-7 shadow-xl backdrop-blur-md transition-all hover:border-amber-400/50 hover:bg-zinc-900"
          >
            <div>
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800">
                  {getIcon(idx)}
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-white">{cat.title}</h2>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Group {idx + 1}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-300">
                {cat.description}
              </p>

              {/* Skills List */}
              <div className="mt-6 space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 transition-colors hover:border-zinc-700"
                  >
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span className="text-sm font-bold text-zinc-100">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-4 text-xs font-medium text-zinc-400">
              Proficiency demonstrated in production deployments
            </div>
          </div>
        ))}
      </div>

      {/* Workflow Section */}
      <section className="mt-20 rounded-2xl border border-zinc-700/80 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 sm:p-12 shadow-2xl">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
            HOW I SOLVE PROBLEMS
          </div>
          <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
            Modern Full-Stack Workflow
          </h3>
          <p className="mt-3 text-base font-normal leading-relaxed text-zinc-300">
            I utilize Next.js App Router for server-rendered speed and SEO, coupled with client components for interactive rich experiences. Tailwind CSS enables fluid responsive UI, while edge hosting on Vercel and Netlify ensures global performance.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "1. Architecture",
              desc: "Component decomposition, state hierarchy, API planning, and data flow modeling."
            },
            {
              title: "2. Engineering",
              desc: "Writing clean, type-safe React & Next.js code with zero runtime surprises."
            },
            {
              title: "3. Styling & Polish",
              desc: "Pixel-perfect Tailwind layouts, responsive breakpoints, and micro-interactions."
            },
            {
              title: "4. Deployment",
              desc: "Continuous integration, edge CDN caching, and automated builds."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur-sm"
            >
              <h4 className="text-sm font-bold text-amber-300">
                {item.title}
              </h4>
              <p className="mt-2 text-xs font-medium leading-relaxed text-zinc-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6">
          <div className="text-sm font-medium text-zinc-300">
            Check out how these skills are implemented across live production projects.
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-black hover:bg-amber-300 transition-colors"
          >
            <span>View 4 Live Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
