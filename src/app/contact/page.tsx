"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span>Section 05 / Direct Communication</span>
        </div>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white">
          Let&apos;s build something great together.
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-normal leading-relaxed text-zinc-300">
          Have an exciting project, full-time role, or freelance inquiry? Send a message below or connect with me directly via WhatsApp, email, or LinkedIn.
        </p>
      </div>

      {/* Prominent WhatsApp Quick Banner */}
      <div className="mt-10 rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-r from-emerald-950/60 via-zinc-900 to-zinc-900 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-black shadow-lg shadow-emerald-500/20">
              <WhatsAppIcon className="h-8 w-8 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Fastest Response Channel
                </span>
                <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                  ONLINE
                </span>
              </div>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-white">
                Chat on WhatsApp: <span className="text-emerald-400">+880 1319-448692</span>
              </h2>
              <p className="mt-1 text-sm text-zinc-300">
                Direct WhatsApp contact number: <strong className="text-white">01319448692</strong>. Available for quick discussions, inquiries, and project kickoffs.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/8801319448692"
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-base font-bold text-black transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>Open WhatsApp Chat</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Main Form & Contact Channels Grid */}
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Contact Channels (Col 5) */}
        <div className="space-y-6 lg:col-span-5">
          <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-7 shadow-xl backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Direct access channels for hiring managers and collaborators:
            </p>

            <div className="mt-6 space-y-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/8801319448692"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 transition-all hover:border-emerald-400 hover:bg-emerald-500/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-black">
                  <WhatsAppIcon className="h-6 w-6 stroke-[2.5]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    WhatsApp (Instant Chat)
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-300">
                    +880 1319-448692
                  </div>
                  <div className="text-xs text-zinc-400">
                    Local: 01319448692
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 opacity-80 group-hover:translate-x-1 transition-transform">
                  Chat &rarr;
                </span>
              </a>

              {/* Email Card */}
              <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Email Address
                  </div>
                  <a
                    href="mailto:contact@developer.me"
                    className="text-base font-semibold text-white hover:text-amber-400"
                  >
                    arafatnabil311@gmail.com
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Availability
                  </div>
                  <div className="text-base font-semibold text-emerald-400">
                    Open to New Opportunities
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Location &amp; Remote
                  </div>
                  <div className="text-base font-semibold text-zinc-200">
                    Worldwide / Remote Friendly
                  </div>
                </div>
              </div>
            </div>

            {/* Social Developer Links */}
            <div className="mt-8 border-t border-zinc-800 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Developer Profiles
              </h3>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 p-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-amber-400 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 p-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-amber-400 hover:text-white"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Form (Col 7) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-8 shadow-xl backdrop-blur-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Send a Direct Message</h2>
            <p className="mt-2 text-base text-zinc-300">
              Fill out the form below or message me on WhatsApp for immediate feedback.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-emerald-500/40 bg-emerald-500/15 p-8 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400" />
                <h3 className="mt-4 text-2xl font-bold text-white">Message Received!</h3>
                <p className="mt-2 text-base text-zinc-200">
                  Thank you for reaching out. I will review your message and reply as soon as possible.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="rounded-xl bg-zinc-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-zinc-700"
                  >
                    Send Another Message
                  </button>
                  <a
                    href="https://wa.me/8801319448692"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-black hover:bg-emerald-400"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-base text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-base text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Subject / Project Type
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Contract / Developer Role"
                    className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-base text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-base text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-4 text-base font-bold text-black transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
