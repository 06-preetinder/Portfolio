import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/content";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 pt-5 md:pt-8 lg:pt-10">
        {/* Brand logo & ML systems line top-left */}
        <div className="pointer-events-auto flex items-center gap-2.5 sm:gap-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity glow-text"
          >
            <span className="relative flex items-center justify-center w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 transition-transform">
              <svg
                viewBox="0 0 64 64"
                className="w-full h-full animate-[spin_8s_linear_infinite]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="30" fill="#05030a" stroke="#c4a7e7" strokeWidth="1" strokeOpacity="0.4" />
                <g>
                  <path d="M 32 32 C 40 24 50 26 53 34 C 55 42 46 50 36 50 C 24 50 16 40 17 28 C 18 18 28 12 38 13 C 46 14 52 20 54 26" stroke="#c4a7e7" strokeWidth="3.2" strokeLinecap="round" strokeOpacity="0.9" />
                  <path d="M 32 32 C 24 40 14 38 11 30 C 9 22 18 14 28 14 C 40 14 48 24 47 36 C 46 46 36 52 26 51 C 18 50 12 44 10 38" stroke="#f6c177" strokeWidth="3.2" strokeLinecap="round" strokeOpacity="0.9" />
                  <ellipse cx="32" cy="32" rx="16" ry="7" transform="rotate(-28 32 32)" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.95" />
                  <circle cx="48" cy="22" r="2.2" fill="#ffffff" />
                  <circle cx="16" cy="42" r="2.0" fill="#ffffff" />
                  <circle cx="20" cy="18" r="1.6" fill="#c4a7e7" />
                  <circle cx="44" cy="46" r="1.6" fill="#f6c177" />
                </g>
                <circle cx="32" cy="32" r="9.5" fill="#c4a7e7" fillOpacity="0.45" />
                <circle cx="32" cy="32" r="7.5" stroke="#ffffff" strokeWidth="2" />
                <circle cx="32" cy="32" r="5.5" fill="#000000" />
              </svg>
            </span>
            <span className="text-sm md:text-base font-serif tracking-wide font-medium">
              {profile.shortName}
            </span>
          </Link>

          {/* Subtle divider */}
          <span className="hidden sm:inline text-white/20 font-mono text-xs">/</span>

          {/* ML model line placed comfortably to the left */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] tracking-wider text-white/70 bg-black/50 px-3 py-1 rounded-full border-hairline-dim backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4a7e7] animate-pulse drop-shadow-[0_0_6px_rgba(196,167,231,0.8)]" />
            <span className="text-white/80 font-serif italic text-xs tracking-wide">
              ML systems where the failure mode is expensive.
            </span>
          </div>
        </div>

        {/* Right side controls */}
        <div className="pointer-events-auto flex items-center gap-2.5 sm:gap-4 md:gap-7">
          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-5 md:gap-7 text-white text-sm md:text-base font-serif lowercase glow-text">
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

          {/* Recruiter speedrun trigger button */}
          <button
            onClick={() => {
              closeMenu();
              window.dispatchEvent(new CustomEvent("open-dossier"));
            }}
            aria-label="Open 30-second Recruiter Dossier"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 hover:border-white text-[11px] font-mono tracking-wider text-white/90 transition-all cursor-pointer shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4a7e7] animate-pulse" />
            <span>dossier</span>
            <kbd className="hidden lg:inline-block text-[9px] text-white/40 bg-white/10 px-1 rounded">⌘K</kbd>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden flex items-center justify-center px-2.5 py-1 rounded-full border border-white/20 bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/80 hover:text-white hover:border-white transition-all cursor-pointer"
          >
            {mobileMenuOpen ? "[ ✕ ]" : "[ menu ]"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mx-4 mt-2 p-5 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5 text-base font-serif lowercase text-white">
            <a
              href="#about"
              onClick={closeMenu}
              className="px-2 py-1 hover:text-[#c4a7e7] border-b border-white/10 flex justify-between items-center"
            >
              <span>about</span>
              <span className="font-mono text-[10px] text-white/40">01</span>
            </a>
            <a
              href="#work"
              onClick={closeMenu}
              className="px-2 py-1 hover:text-[#c4a7e7] border-b border-white/10 flex justify-between items-center"
            >
              <span>work</span>
              <span className="font-mono text-[10px] text-white/40">02</span>
            </a>
            <a
              href="#epoch"
              onClick={closeMenu}
              className="px-2 py-1 hover:text-[#c4a7e7] border-b border-white/10 flex justify-between items-center"
            >
              <span>epoch</span>
              <span className="font-mono text-[10px] text-white/40">03</span>
            </a>
            <a
              href="#resume"
              onClick={closeMenu}
              className="px-2 py-1 hover:text-[#c4a7e7] border-b border-white/10 flex justify-between items-center"
            >
              <span>resume</span>
              <span className="font-mono text-[10px] text-white/40">04</span>
            </a>
            <a
              href="#questions"
              onClick={closeMenu}
              className="px-2 py-1 hover:text-[#c4a7e7] flex justify-between items-center"
            >
              <span>contact</span>
              <span className="font-mono text-[10px] text-white/40">05</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
