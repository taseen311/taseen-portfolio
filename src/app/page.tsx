"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  FileText, 
  Send, 
  Sparkles, 
  ExternalLink,
  Code2,
  CheckCircle2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle modern background glow */}
      <div className="pointer-events-none absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -left-20 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Portrait Card & Metrics */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Sleek Accent Corner Brackets */}
              <div className="absolute -top-2.5 -left-2.5 h-7 w-7 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute -bottom-2.5 -right-2.5 h-7 w-7 border-b-2 border-r-2 border-amber-400" />

              {/* Portrait Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-900/90 p-3 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-800">
                  <Image
                    src="/banner-profile.jpg"
                    alt="Developer Portrait"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle bottom gradient to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between">
                    <span className="rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                      FULLSTACK DEV
                    </span>
                    <span className="rounded-full border border-amber-400/40 bg-amber-500/25 px-3.5 py-1.5 text-xs font-bold text-amber-300 backdrop-blur-md">
                      v. 2026
                    </span>
                  </div>
                </div>

                {/* 3-Column Stats Bar */}
                <div className="mt-3.5 grid grid-cols-3 divide-x divide-zinc-700/70 rounded-xl border border-zinc-700/60 bg-zinc-950/80 py-3.5 text-center">
                  <div>
                    <div className="text-2xl font-black text-amber-400">4+</div>
                    <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-zinc-300">
                      Projects Built
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-emerald-400">100%</div>
                    <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-zinc-300">
                      Responsive
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-400">∞</div>
                    <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-zinc-300">
                      Dedication
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Pitch & CTAs */}
          <div className="flex flex-col lg:col-span-7">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-emerald-500/40 bg-emerald-500/15 px-4 py-1.5 text-xs font-bold text-emerald-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span>AVAILABLE FOR HIRE • FULL-STACK &amp; FRONTEND</span>
            </div>

            {/* Greeting */}
            <div className="mt-6 text-sm font-bold tracking-widest text-amber-400 uppercase">
              HI, WELCOME TO MY PORTFOLIO —
            </div>

            {/* Hero Main Headline */}
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              I build <span className="text-amber-400">full-stack</span> systems &amp; modern web apps.
            </h1>

            {/* Value Statement */}
            <p className="mt-6 text-lg sm:text-xl font-normal leading-relaxed text-zinc-200">
              Specialized in <span className="font-semibold text-white">Next.js, React, Node.js</span>, and{" "}
              <span className="font-semibold text-white">Tailwind CSS</span>. I turn complex ideas into 
              intuitive, fast, and scalable digital products with great design and solid architecture.
            </p>

            {/* Philosophy Callout Quote */}
            <div className="my-7 rounded-xl border-l-4 border-amber-400 bg-zinc-900/80 p-5 shadow-lg">
              <p className="text-base sm:text-lg font-serif italic text-white">
                &ldquo;Why first. Code second.&rdquo;
              </p>
              <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400">
                — UNDERSTAND THE GOAL, ENGINEER WHAT ACTUALLY MOVES THE BUSINESS
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-black transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/25"
              >
                <span>See my work</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-800/80 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-amber-400 hover:bg-zinc-700"
              >
                <Send className="h-4 w-4 text-amber-400" />
                <span>Get in touch</span>
              </Link>

              <Link
                href="/resume"
                className="flex items-center gap-2 rounded-xl border border-amber-400/40 bg-amber-400/10 px-5 py-3.5 text-sm font-semibold text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-400/20"
              >
                <FileText className="h-4 w-4" />
                <span>Resume / CV</span>
              </Link>
            </div>

            {/* Social links row */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                FIND ME
              </span>
              <div className="h-px w-12 bg-zinc-700" />
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-700 bg-zinc-800/90 p-2.5 text-zinc-300 transition-colors hover:border-amber-400 hover:text-white"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-700 bg-zinc-800/90 p-2.5 text-zinc-300 transition-colors hover:border-amber-400 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
