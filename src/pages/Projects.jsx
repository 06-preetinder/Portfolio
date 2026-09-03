import { projects } from "../data/content";

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white font-serif px-6 md:px-16 lg:px-24 pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lowercase glow-text mb-2">work / releases</h1>
        <p className="text-white/70 text-base mb-12">
          selected systems, architectures, and models built with strict verification.
        </p>

        <div className="space-y-12">
          {projects.map((p) => (
            <div
              key={p.cat}
              className="border-hairline p-6 md:p-8 bg-black/50 hover:border-white transition-all flex flex-col md:flex-row gap-6 md:gap-8 items-start"
            >
              <div className="w-full md:w-48 h-48 flex-shrink-0 border-hairline-dim overflow-hidden bg-white/5">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-white/50">
                  <span>{p.cat}</span>
                  {p.tag && <span>• [{p.tag}]</span>}
                </div>

                <h2 className="text-xl md:text-2xl lowercase glow-text mb-3">{p.title}</h2>
                <p className="text-white/80 text-sm leading-relaxed mb-6">{p.blurb}</p>

                <div className="flex flex-wrap gap-4 font-mono text-xs">
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
                      className="underline text-white/70 hover:text-white"
                    >
                      walkthrough →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
