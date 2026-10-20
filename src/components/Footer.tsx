import React from "react";
import { Film, ArrowUp } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#090d16] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Role */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#090d16]">
                <Film className="h-4 w-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {PROFILE_DATA.name} — {PROFILE_DATA.role}
              </p>
              <p className="text-xs text-slate-400">
                B.Tech CSE &apos;24 (Lucknow) • Blender • Video Editing • 3D Modeling • 3D Animation
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <a href="#top" className="hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a
              href="#portfolio"
              className="hover:text-cyan-400 transition-colors"
            >
              Work
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a
              href="#timeline"
              className="hover:text-cyan-400 transition-colors"
            >
              Timeline
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Back to Top & Copyright */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-500">
              &copy; {currentYear} {PROFILE_DATA.name}. All rights reserved.
            </p>
            <a
              href="#top"
              aria-label="Scroll to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
