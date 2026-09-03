import { Link } from "react-router-dom";
import { profile } from "../data/content";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Brand logo top-left */}
      <Link
        to="/"
        className="pointer-events-auto absolute top-6 left-6 md:top-8 md:left-10 lg:top-10 lg:left-16 flex items-center gap-2 text-white hover:opacity-70 transition-opacity glow-text"
      >
        <span className="w-3 h-3 rounded-full bg-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] inline-block" />
        <span className="text-sm md:text-base font-serif lowercase tracking-wide">
          {profile.shortName}
        </span>
      </Link>

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
