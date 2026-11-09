"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#090a0f]/90 backdrop-blur-md print:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/40 bg-amber-400/10 text-amber-400 transition-colors group-hover:border-amber-400 group-hover:bg-amber-400/20">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight text-white group-hover:text-amber-400">
              PORTFOLIO<span className="text-amber-400">.</span>
            </span>
            <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
              Full Stack Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-lg ${
                  isActive
                    ? "bg-amber-400/15 text-amber-300 font-bold"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-800/60"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-[15px] h-[2.5px] bg-amber-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3.5 py-1 text-xs font-bold text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>AVAILABLE</span>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-black transition-all hover:bg-amber-300"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-zinc-300 hover:bg-zinc-800 hover:text-white md:hidden"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-zinc-800 bg-[#090a0f] px-6 py-5 md:hidden">
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/15 px-3 py-2 text-xs font-bold text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>AVAILABLE FOR HIRE</span>
          </div>
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-2.5 text-base font-semibold tracking-wide transition-colors ${
                  pathname === item.href
                    ? "bg-amber-400/20 font-bold text-amber-300"
                    : "text-zinc-200 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
