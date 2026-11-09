"use client";

import { Printer } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Print Action - Hidden on Print */}
      <div className="mb-4 flex items-center justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 rounded-lg bg-zinc-800 px-3.5 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white"
        >
          <Printer className="h-4 w-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* The 1-Page ATS Minimalist Resume Sheet */}
      <div className="flex justify-center print:block">
        <div
          id="resume-sheet"
          className="w-full max-w-[800px] rounded-lg border border-zinc-300 bg-white p-8 text-black shadow-xl sm:p-10 print:m-0 print:max-w-full print:border-none print:p-0 print:shadow-none"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontSize: "10pt",
            lineHeight: 1.35,
            color: "#111111",
          }}
        >
          {/* 1. HEADING PART */}
          <header className="border-b-[1.5px] border-black pb-2 text-center">
            <h1 className="m-0 text-2xl font-bold uppercase tracking-tight text-black sm:text-[20pt] leading-tight">
              MD TA SEEN ARAFAT NABIL
            </h1>
            <div className="mt-1 text-[11pt] font-semibold text-neutral-800">
              Junior Full Stack Developer
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[9pt] text-neutral-700">
              <span>
                <strong>Location:</strong> Barisal, Bangladesh
              </span>
              <span>•</span>
              <span>
                <strong>Phone:</strong>{" "}
                <a href="tel:+8801319448692" className="text-[#0b4fba] underline">
                  +880 1319-448692
                </a>
              </span>
              <span>•</span>
              <span>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:arafatnabil311@gmail.com"
                  className="text-[#0b4fba] underline"
                >
                  arafatnabil311@gmail.com
                </a>
              </span>
              <span>•</span>
              <span>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/taseen311"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#0b4fba] underline"
                >
                  github.com/taseen311
                </a>
              </span>
              <span>•</span>
              <span>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/taseenarafatnabil/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#0b4fba] underline"
                >
                  linkedin.com/in/taseenarafatnabil
                </a>
              </span>
              <span>•</span>
              <span>
                <strong>Portfolio:</strong>{" "}
                <a
                  href="https://taseen-arafatportfolio.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#0b4fba] underline"
                >
                  Live Portfolio
                </a>
              </span>
            </div>
          </header>

          {/* 2. CAREER OBJECTIVE */}
          <section className="mt-3.5">
            <h2 className="mb-1.5 border-b border-neutral-800 pb-0.5 text-[10.5pt] font-bold uppercase tracking-wide text-black">
              Career Objective
            </h2>
            <p className="text-justify text-[9.2pt] leading-relaxed text-neutral-900">
              Motivated and detail-oriented Junior Full Stack Developer with solid
              expertise in React.js, Next.js (App Router), Node.js, Mongodb,
              Authentication, TypeScript, and Tailwind CSS. Dedicated to developing
              clean, accessible, and high-performance user interfaces while adhering
              to modern web development standards. Seeking an opportunity to
              contribute actively to real-world engineering solutions and grow rapidly
              within a collaborative development team.
            </p>
          </section>

          {/* 3. SKILLS */}
          <section className="mt-3">
            <h2 className="mb-1.5 border-b border-neutral-800 pb-0.5 text-[10.5pt] font-bold uppercase tracking-wide text-black">
              Skills
            </h2>
            <div className="space-y-1 text-[9pt] leading-snug">
              <div>
                <strong className="text-black">Frontend Technologies:</strong>{" "}
                React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind
                CSS, HTML5, CSS3, Responsive Design
              </div>
              <div>
                <strong className="text-black">Backend &amp; Database:</strong>{" "}
                Node.js, Express.js, RESTful APIs, Server Actions, MongoDB (Basics)
              </div>
              <div>
                <strong className="text-black">Tools &amp; Platforms:</strong> Git,
                GitHub, VS Code, Vercel, Netlify, npm, Chrome DevTools, Postman
              </div>
              <div>
                <strong className="text-black">Interpersonal Skills:</strong>{" "}
                Adaptability, Effective Communication, Continuous Learning, Active
                Listening
              </div>
            </div>
          </section>

          {/* 4. PROJECTS */}
          <section className="mt-3">
            <h2 className="mb-1.5 border-b border-neutral-800 pb-0.5 text-[10.5pt] font-bold uppercase tracking-wide text-black">
              Projects
            </h2>

            {/* Project 1 */}
            <div className="mb-2.5">
              <div className="flex flex-col text-[9.5pt] sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-bold text-black">
                  1. Market Price Web App – Real-Time Commodity Analytics
                </span>
                <span className="text-[8.5pt]">
                  <a
                    href="https://market-price-web-app.vercel.app/product/30"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#0b4fba] underline"
                  >
                    Live Demo
                  </a>
                  {" | "}
                  <a
                    href="https://github.com/taseen311/market-price-webapp"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#0b4fba] underline"
                  >
                    GitHub Repo
                  </a>
                </span>
              </div>
              <div className="mt-0.5 mb-1 text-[8.8pt] italic text-neutral-800">
                A dynamic commodity and retail item pricing intelligence
                application that helps consumers analyze real-time market trends and
                product values.
              </div>
              <ul className="ml-4 list-disc space-y-0.5 text-[8.8pt] text-neutral-900">
                <li>
                  Engineered dynamic slug and parameter routing (
                  <code className="bg-neutral-100 px-1 font-mono text-[8pt]">
                    /product/[id]
                  </code>
                  ) leveraging Next.js Server Components for instantaneous edge
                  rendering.
                </li>
                <li>
                  Developed responsive price breakdown cards and data metrics for
                  clear market price comparison.
                </li>
                <li>
                  Optimized asset loading and caching strategies to ensure 100%
                  mobile readiness and sub-second page delivery.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="mb-2.5">
              <div className="flex flex-col text-[9.5pt] sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-bold text-black">
                  2. DevStack Builder – Next.js Full-Stack Application
                </span>
                <span className="text-[8.5pt]">
                  <a
                    href="https://nextjs-assignment-gamma-three.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#0b4fba] underline"
                  >
                    Live Demo
                  </a>
                  {" | "}
                  <a
                    href="https://github.com/taseen311/DevStack-Builder"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#0b4fba] underline"
                  >
                    GitHub Repo
                  </a>
                </span>
              </div>
              <div className="mt-0.5 mb-1 text-[8.8pt] italic text-neutral-800">
                A modular Next.js application structured with strict TypeScript
                typings, component-driven layouts, and seamless client routing.
              </div>
              <ul className="ml-4 list-disc space-y-0.5 text-[8.8pt] text-neutral-900">
                <li>
                  Architected modern App Router multi-page navigation featuring
                  lightning-fast client transitions and zero layout shifts.
                </li>
                <li>
                  Implemented type-safe interfaces, custom UI layouts, and
                  reactive interactive elements styled with Tailwind CSS.
                </li>
                <li>
                  Configured automated continuous deployment workflows to Vercel
                  with zero production errors.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="mb-2">
              <div className="flex flex-col text-[9.5pt] sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-bold text-black">
                  3. FitLog – Interactive Health &amp; Activity Tracker
                </span>
                <span className="text-[8.5pt]">
                  <a
                    href="https://assignment5-ph-react.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#0b4fba] underline"
                  >
                    Live Demo
                  </a>
                  {" | "}
                  <a
                    href="https://github.com/taseen311/FitLog"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#0b4fba] underline"
                  >
                    GitHub Repo
                  </a>
                </span>
              </div>
              <div className="mt-0.5 mb-1 text-[8.8pt] italic text-neutral-800">
                A responsive single-page activity tracking application designed for
                real-time fitness metrics monitoring and user goal setting.
              </div>
              <ul className="ml-4 list-disc space-y-0.5 text-[8.8pt] text-neutral-900">
                <li>
                  Built state management pipelines with React Hooks (
                  <code className="bg-neutral-100 px-1 font-mono text-[8pt]">
                    useState
                  </code>
                  ,{" "}
                  <code className="bg-neutral-100 px-1 font-mono text-[8pt]">
                    useEffect
                  </code>
                  ) to manage user input and activity logs.
                </li>
                <li>
                  Created dynamic workout metric calculations with instant
                  reactive interface feedback.
                </li>
                <li>
                  Integrated custom utility classes for full cross-device
                  compatibility across smartphones, tablets, and desktops.
                </li>
              </ul>
            </div>
          </section>

          {/* 5. EDUCATION */}
          <section className="mt-3">
            <h2 className="mb-1 border-b border-neutral-800 pb-0.5 text-[10.5pt] font-bold uppercase tracking-wide text-black">
              Education
            </h2>
            <div className="flex flex-col text-[9pt] sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <span className="font-bold text-black">
                  Bachelor of Science in Vet Science &amp; Animal Husbandry <br /> Patuakhali Science & Technology University
                </span>
              </div>
              <span className="text-[8.5pt] font-medium text-neutral-700">
                2024 – 2029 (Expected)
              </span>
            </div>
          </section>

          {/* 6. EXTRA-CURRICULAR ACTIVITIES */}
          <section className="mt-3">
            <h2 className="mb-1 border-b border-neutral-800 pb-0.5 text-[10.5pt] font-bold uppercase tracking-wide text-black">
              Extra-Curricular Activities
            </h2>
            <ul className="ml-4 list-disc space-y-0.5 text-[8.8pt] text-neutral-900">
              <li>Participated in Chattogram Regional IQ Master Competition</li>
              <li>Participated in Divisional Red Crescent Camp, Chattogram</li>
            </ul>
          </section>

          {/* 7. LANGUAGES */}
          <section className="mt-3">
            <h2 className="mb-1 border-b border-neutral-800 pb-0.5 text-[10.5pt] font-bold uppercase tracking-wide text-black">
              Languages
            </h2>
            <div className="text-[9pt] text-neutral-900">
              <strong className="text-black">Bengali:</strong> Native &nbsp;|&nbsp;{" "}
              <strong className="text-black">English:</strong> Professional Working
              Proficiency
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}