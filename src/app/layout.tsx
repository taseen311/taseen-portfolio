import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full-Stack Developer Portfolio | Web & Systems Engineer",
  description:
    "Hire-ready developer portfolio featuring full-stack web applications, React, Next.js, responsive design systems, and modern software architecture.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Portfolio", "Web Developer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="flex min-h-screen flex-col bg-[#0b0c10] font-sans text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
