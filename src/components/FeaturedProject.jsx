import { projects, publication } from "../data/content";

export default function FeaturedProject() {
  return (
    <div id="work" className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 md:px-16 lg:px-24 pb-8 font-serif">
      {/* Publication Feature Box */}
      <div className="vignette-pod max-w-5xl w-full p-6 md:p-10 rounded-3xl mb-12 border-hairline">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3 border-b border-white/20 pb-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase px-2.5 py-0.5 border border-[#c4a7e7] text-[#c4a7e7]">
              {publication.statusBadge}
            </span>
            <span className="font-mono text-xs text-white/60">
              {publication.conference}
            </span>
          </div>
          <span className="font-mono text-xs text-white/50">{publication.paperId}</span>
        </div>

        <h3 className="text-xl md:text-2xl text-white glow-text mb-2">
          {publication.title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed mb-2">
          {publication.summary}
        </p>
        <p className="text-white/50 text-xs font-mono">
          {publication.authors}
        </p>
      </div>

      {/* 4 Projects Showcase */}
      <div className="vignette-pod max-w-5xl w-full p-4 md:p-12 rounded-3xl">
        <div className="flex items-baseline justify-between mb-8 px-4 md:px-0">
          <p className="text-white text-base md:text-lg glow-text lowercase">
            selected builds & research projects ({projects.length})
          </p>
          <span className="font-mono text-xs text-white/40">
            // strictly verified implementations
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-2 md:px-0">
          {projects.map((p, idx) => (
            <div
              key={p.cat}
              className="border-hairline p-5 bg-black/60 hover:border-white transition-all flex flex-col justify-between group"
              style={{
                transform: idx % 2 === 0 ? "rotate(-0.3deg)" : "rotate(0.3deg)",
              }}
            >
              <div>
                <a
                  href={p.Link && p.Link !== "#" ? p.Link : p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block mb-4 overflow-hidden border-hairline-dim bg-white/5"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-44 object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </a>

                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-xs text-white/50">{p.cat}</span>
                  <span className="font-mono text-[10px] text-[#c4a7e7] truncate max-w-[200px]">
                    {p.tag}
                  </span>
                </div>

                <h4 className="text-lg text-white font-medium glow-text mb-1">
                  {p.title}
                </h4>
                <p className="text-white/60 text-xs italic mb-3">{p.subtitle}</p>

                <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4">
                  {p.blurb}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-white/10 font-mono text-xs">
                {p.Link && p.Link !== "#" && (
                  <a
                    href={p.Link}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-white hover:text-white/70"
                  >
                    live demo →
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-white/70 hover:text-white"
                  >
                    github →
                  </a>
                )}
                {p.loom && p.loom !== "#" && (
                  <a
                    href={p.loom}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-white/50 hover:text-white"
                  >
                    loom →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
