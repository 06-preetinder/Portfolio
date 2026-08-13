import { NavLink } from "react-router-dom";
import { profile } from "../data/content";

const links = [
  { to: "/", label: "Home", cat: "00" },
  { to: "/projects", label: "Releases", cat: "01" },
  { to: "/experience", label: "Credits", cat: "02" },
  { to: "/research", label: "Research", cat: "03" },
  { to: "/epoch", label: "The Epoch", cat: "04" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-ink/80 hairline">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="font-display text-2xl tracking-wide text-paper hover:text-brass transition-colors"
        >
          {profile.shortName.toUpperCase()}
          <span className="text-brass">.</span>
        </NavLink>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `group flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                    isActive ? "text-brass" : "text-paper-dim hover:text-paper"
                  }`
                }
              >
                <span className="opacity-50">{l.cat}</span>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block font-mono text-xs uppercase tracking-widest border border-brass/50 text-brass px-4 py-2 hover:bg-brass hover:text-ink transition-colors"
        >
          Connect
        </a>
        {/* mobile: simple link list, no hamburger JS needed for a 5-item nav */}
        <ul className="flex md:hidden items-center gap-4">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `font-mono text-[10px] uppercase tracking-wider ${
                    isActive ? "text-brass" : "text-paper-dim"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
