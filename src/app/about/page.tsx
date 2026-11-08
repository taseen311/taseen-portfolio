import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Zap, 
  Code2, 
  Award,
  Compass
} from "lucide-react";

export const metadata = {
  title: "About Me | Full-Stack Developer",
  description: "Learn more about my background, core philosophy, and problem-solving approach.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span>Section 02 / Story &amp; Philosophy</span>
        </div>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white">
          Engineered with purpose. Built for impact.
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-normal leading-relaxed text-zinc-300">
          I bridge the gap between creative UI design and rock-solid software architecture. 
          Here is how I approach modern web engineering.
        </p>
      </div>

      {/* Main Grid */}
      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Portrait & Quick Stats */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900 p-3 shadow-2xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src="/banner-profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Core Traits Card */}
            <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-6 shadow-xl backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Quick Facts
              </h3>
              <ul className="mt-4 space-y-3.5 text-sm font-medium text-zinc-200">
                <li className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                  <span className="text-zinc-400">Specialty</span>
                  <span className="font-bold text-white">Full-Stack Web Apps</span>
                </li>
                <li className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                  <span className="text-zinc-400">Primary Stack</span>
                  <span className="font-bold text-amber-300">Next.js • React • Node</span>
                </li>
                <li className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                  <span className="text-zinc-400">Deployment</span>
                  <span className="font-bold text-white">Vercel • Netlify</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-zinc-400">Status</span>
                  <span className="font-bold text-emerald-400">Open for Work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Values */}
        <div className="space-y-10 lg:col-span-7">
          {/* Story */}
          <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-8 shadow-xl backdrop-blur-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Who I Am</h2>
            <div className="mt-4 space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-200">
              <p>
                I am a dedicated web developer with a strong focus on building responsive, high-performance web applications. My experience centers around creating interactive single-page applications, dynamic data dashboards, and robust server-rendered platforms using the modern React and Next.js ecosystems.
              </p>
              <p>
                Whether it is building case management tools like <span className="text-white font-bold">JurisCore</span>, real-time commodity data tracking in <span className="text-white font-bold">Market Price Web App</span>, or reactive stateful interfaces, I turn requirements into fast, dependable digital experiences.
              </p>
            </div>
          </div>

          {/* Core Philosophy */}
          <div className="rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-500/15 via-zinc-900 to-zinc-950 p-8 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Target className="h-4 w-4" />
              <span>Engineering Philosophy</span>
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              &ldquo;Why first. Code second.&rdquo;
            </h3>
            <p className="mt-3 text-base font-normal leading-relaxed text-zinc-200">
              Before jumping into code, I prioritize understanding the core objective. Who is using this? Where is the friction? What metric or process are we improving? By clarifying the problem first, every line of code written delivers tangible value with zero unnecessary bloat.
            </p>
          </div>

          {/* Pillars of Execution */}
          <div>
            <h2 className="text-2xl font-bold text-white">What Sets My Work Apart</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-6 shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Zap className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">Performance-First Mindset</h4>
                <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-300">
                  Optimized assets, minimal layout shifts, code splitting, and lightning-fast edge delivery.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-6 shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400">
                  <Code2 className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">Clean Architecture</h4>
                <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-300">
                  Modular component design, well-structured hooks, TypeScript safety, and maintainable folders.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-6 shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Compass className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">Adaptive UI / Responsive</h4>
                <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-300">
                  Tailored experiences across smartphones, tablets, high-DPI displays, and dark mode environments.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-6 shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/15 text-rose-400">
                  <Award className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">Reliability &amp; Delivery</h4>
                <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-300">
                  Thorough manual testing, semantic HTML, and automated deployment pipelines on Vercel and Netlify.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-6 sm:flex-row sm:items-center">
            <div>
              <div className="text-lg font-bold text-white">Want to inspect my code &amp; live apps?</div>
              <div className="text-sm font-medium text-zinc-400">Explore my 4 featured deployments and live demos.</div>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-black hover:bg-amber-300 transition-colors"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
