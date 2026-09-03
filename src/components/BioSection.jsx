import { profile } from "../data/content";

export default function BioSection() {
  return (
    <section id="about" className="relative z-10 flex items-center justify-center min-h-screen p-4 pt-8 md:p-16 lg:p-24">
      <div className="vignette-pod flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-10 max-w-4xl w-full p-4 md:p-12 rounded-3xl">
        {/* Left Column: Portrait & Short intro */}
        <div className="flex flex-col items-start md:items-center flex-shrink-0 w-full md:w-auto gap-4 md:gap-0 px-4 md:px-0">
          <div className="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0 w-full">
            <div className="w-14 h-14 md:w-[250px] md:h-[250px] flex-shrink-0 border-hairline overflow-hidden bg-black/50">
              <img
                src="/projects/five.jpg"
                alt={profile.name}
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <h1 className="text-white text-sm md:text-base leading-relaxed text-left w-full md:max-w-[250px] md:mt-4 font-serif font-normal lowercase">
              {profile.intro}
            </h1>
          </div>
        </div>

        {/* Right Column: Socials, current status, stats, and past work accordion */}
        <div className="text-white text-sm md:text-base w-full px-4 md:px-0 md:max-w-lg leading-relaxed space-y-4 md:space-y-6 font-serif">
          {/* Social Icons */}
          <div className="flex gap-4 items-center">
            {profile.twitter && (
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="Twitter / X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </a>
            )}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            )}
          </div>

          <p className="lowercase">
            {profile.currentRole}{" "}
            <a
              href="https://github.com/06-preetinder"
              target="_blank"
              rel="noreferrer"
              className="underline hover:opacity-80"
            >
              github.com/06-preetinder
            </a>
          </p>

          <p className="lowercase">{profile.currentFocus}</p>

          {/* Physical & Discipline Records */}
          <div className="space-y-1 pt-1">
            {profile.records.map((r, i) => (
              <p key={i} className="lowercase">
                {r.label} <span style={{ color: "#c4a7e7" }}>{r.value}</span> {r.suffix}
              </p>
            ))}
          </div>

          {/* Expandable previous stuff i did */}
          <details open id="past-work" style={{ scrollMarginTop: "200px" }}>
            <summary className="cursor-pointer hover:opacity-80 lowercase font-medium">
              previous stuff i did
            </summary>
            <ul className="list-disc list-inside mt-2 space-y-1.5 text-white/90">
              {profile.pastWork.map((item, idx) => (
                <li key={idx} className="lowercase">
                  {item}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
}
