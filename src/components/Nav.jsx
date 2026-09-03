import { Link } from "react-router-dom";
import { profile } from "../data/content";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Brand logo & ML systems line top-left */}
      <div className="pointer-events-auto absolute top-6 left-6 md:top-8 md:left-10 lg:top-10 lg:left-16 flex items-center gap-3 sm:gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity glow-text"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] inline-block" />
          <span className="text-sm md:text-base font-serif tracking-wide font-medium">
            {profile.shortName}
          </span>
        </Link>

        {/* Subtle divider */}
        <span className="hidden sm:inline text-white/20 font-mono text-xs">/</span>

        {/* ML model line placed comfortably to the left */}
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] tracking-wider text-white/70 bg-black/50 px-3 py-1 rounded-full border-hairline-dim backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4a7e7] animate-pulse drop-shadow-[0_0_6px_rgba(196,167,231,0.8)]" />
          <span className="text-white/80 font-serif italic text-xs tracking-wide">
            ML systems where the failure mode is expensive.
          </span>
        </div>
      </div>

      {/* Navigation links top-right */}
      <nav className="pointer-events-auto absolute top-6 right-6 md:top-8 md:right-10 lg:top-10 lg:right-16 flex items-center gap-5 md:gap-8 text-white text-sm md:text-base font-serif lowercase glow-text">
        <a href="#about" className="hover:opacity-70 transition-opacity">
          about
        </a>
        <a href="#work" className="hover:opacity-70 transition-opacity">
          work
        </a>
        <a href="#epoch" className="hover:opacity-70 transition-opacity">
          epoch
        </a>
        <a href="#resume" className="hover:opacity-70 transition-opacity">
          resume
        </a>
        <a href="#questions" className="hover:opacity-70 transition-opacity">
          contact
        </a>
      </nav>
    </header>
  );
}
