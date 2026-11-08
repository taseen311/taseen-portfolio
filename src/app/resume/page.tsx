"use client";

import Link from "next/link";
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Printer
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { SKILL_CATEGORIES, PROJECTS } from "@/data/portfolio";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Action Header */}
      <div className="flex flex-col items-start justify-between gap-6 border-b border-zinc-800 pb-8 sm:flex-row sm:items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span>Section 06 / Professional Resume</span>
          </div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-white">
            Curriculum Vitae
          </h1>
          <p className="mt-1 text-base text-zinc-300">
            Comprehensive overview of background, technical stack, and software deliverables.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-400"
          >
            <Printer className="h-4 w-4" />
            <span>Print CV</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-black transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20"
          >
            <Download className="h-4 w-4" />
            <span>Save / Download PDF</span>
          </button>
        </div>
      </div>

      {/* The Printable Resume Container */}
      <div
        id="printable-resume"
        className="mt-10 rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-8 shadow-2xl backdrop-blur-md sm:p-12 print:border-none print:bg-white print:p-0 print:text-black"
      >
        {/* CV Header */}
        <div className="border-b border-zinc-800 pb-8 print:border-zinc-300">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white print:text-black">
                Full-Stack Web Developer
              </h2>
              <div className="mt-1 text-base font-semibold text-amber-300 print:text-zinc-800">
                Specialized in Next.js • React • Node.js • Modern Architecture
              </div>
            </div>

            <div className="text-xs sm:text-sm font-medium text-zinc-300 print:text-zinc-600 sm:text-right space-y-1">
              <div>Phone / WhatsApp: <a href="https://wa.me/8801319448692" target="_blank" rel="noreferrer" className="text-emerald-400 font-bold hover:underline">+880 1319-448692</a></div>
              <div>GitHub: <a href="https://github.com/taseen311" target="_blank" rel="noreferrer" className="text-amber-400 font-bold hover:underline">github.com/taseen311</a></div>
              <div>Email: arafatnabil311@gmail.com</div>
              <div>Location: Remote / Worldwide</div>
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-zinc-200 print:text-zinc-700">
            Dedicated Full-Stack Developer with experience architecting, building, and deploying responsive, accessible, and high-performance web applications. Strong command of modern JavaScript/TypeScript ecosystems, App Router frameworks, modular component design, and REST APIs.
          </p>
        </div>

        {/* Technical Competencies */}
        <div className="mt-8 border-b border-zinc-800 pb-8 print:border-zinc-300">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 print:text-zinc-900">
            <Code className="h-4 w-4" />
            <span>Technical Skills</span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title} className="rounded-xl border border-zinc-700/80 bg-zinc-950/80 p-5 print:border-zinc-300 print:bg-zinc-50">
                <div className="text-sm font-bold text-white print:text-black">
                  {cat.title}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className="rounded-lg bg-zinc-800 px-2.5 py-1 text-xs font-semibold text-zinc-200 print:bg-zinc-200 print:text-black"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects Highlight */}
        <div className="mt-8 border-b border-zinc-800 pb-8 print:border-zinc-300">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 print:text-zinc-900">
            <Briefcase className="h-4 w-4" />
            <span>Featured Software Applications</span>
          </div>

          <div className="mt-6 space-y-6">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-2">
                <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
                  <div className="text-base font-bold text-white print:text-black">
                    {proj.title} — <span className="text-sm font-semibold text-amber-300 print:text-zinc-700">{proj.tagline}</span>
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 print:text-zinc-600">
                    {proj.date}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-zinc-300 print:text-zinc-700">
                  {proj.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                  <span className="font-medium text-zinc-400 print:text-zinc-600">Tech: {proj.tags.join(", ")}</span>
                  <span className="text-zinc-600 print:text-zinc-400">•</span>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-amber-300 underline hover:text-amber-200 print:text-blue-700"
                  >
                    Live Demo
                  </a>
                  <span className="text-zinc-600 print:text-zinc-400">•</span>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-zinc-300 underline hover:text-white print:text-blue-700"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 print:text-zinc-900">
            <GraduationCap className="h-4 w-4" />
            <span>Education &amp; Credentials</span>
          </div>

          <div className="mt-4 space-y-4">
            <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
              <div>
                <div className="text-base font-bold text-white print:text-black">
                  Full-Stack Web Development Bootcamp
                </div>
                <div className="text-sm font-medium text-zinc-300 print:text-zinc-600">
                  Programming Hero • Complete Modern Web Development
                </div>
              </div>
              <span className="text-xs font-semibold text-zinc-400 print:text-zinc-600">
                Completed with Distinction
              </span>
            </div>

            <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
              <div>
                <div className="text-base font-bold text-white print:text-black">
                  Next.js App Router &amp; Server Components Architecture
                </div>
                <div className="text-sm font-medium text-zinc-300 print:text-zinc-600">
                  Advanced React 19, TypeScript &amp; Edge Delivery Mastery
                </div>
              </div>
              <span className="text-xs font-semibold text-zinc-400 print:text-zinc-600">
                2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
