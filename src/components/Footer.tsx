import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#07080c] text-zinc-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-black text-white">
              PORTFOLIO<span className="text-amber-400">.</span>
            </Link>
            <p className="mt-3 max-w-md text-base leading-relaxed text-zinc-300">
              Full-Stack Developer crafting reliable, fast, and user-centered web applications. 
              Always focusing on solving real problems with scalable code.
            </p>
            <div className="mt-5 flex items-center gap-2.5 text-sm font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Available for freelance, full-time, and contract opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-amber-400 transition-colors">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-amber-400 transition-colors">
                  Resume / CV
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & WhatsApp */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h3>
            <div className="mt-4 flex flex-col space-y-3 text-sm font-medium">
              <a
                href="https://wa.me/8801319448692"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp: +880 1319-448692</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>

              <Link
                href="/contact"
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Send a Message</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-zinc-800 pt-6 text-sm text-zinc-400 sm:flex-row">
          <p>© 2026 Developer Portfolio. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Engineered with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
