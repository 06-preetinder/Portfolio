import { experience } from "../data/content";

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white font-serif px-4 sm:px-6 md:px-16 lg:px-24 pt-28 md:pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lowercase glow-text mb-2">experience / credits</h1>
        <p className="text-white/70 text-base mb-12">
          engineering, research, and technical leadership track record.
        </p>

        <div className="space-y-8">
          {experience.map((e) => (
            <div
              key={e.cat}
              className="border-hairline p-4 sm:p-6 md:p-8 bg-black/50 hover:border-white transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                <div>
                  <h2 className="text-xl md:text-2xl lowercase glow-text">{e.role}</h2>
                  <p className="text-white/80 text-base mt-0.5">{e.org}</p>
                </div>
                <span className="font-mono text-xs text-white/50">{e.period}</span>
              </div>

              <p className="text-white/75 text-sm leading-relaxed mt-4 mb-4">{e.description}</p>

              <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-white/85">
                {e.bullets.map((b, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


