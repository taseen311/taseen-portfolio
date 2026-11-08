import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center px-6 text-center">
      <div className="text-sm font-bold uppercase tracking-wider text-amber-400">
        404 Error
      </div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-black text-white">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-base text-zinc-300">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-6 flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-black hover:bg-amber-300 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}

