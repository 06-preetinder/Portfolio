import { epoch } from "../data/content";
export default function Epoch() {
  
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-36 pb-28">
      <p className="eyebrow mb-3">04 — The Epoch</p>
      <h1 className="font-display text-6xl md:text-7xl uppercase leading-none">
        The Epoch
      </h1>
      <p className="mt-6 font-display text-2xl md:text-3xl text-brass italic normal-case">
        {epoch.tagline}
      </p>

      {/* Description */}
      <div className="mt-14 max-w-3xl space-y-5 text-paper-dim leading-relaxed text-lg">
        {epoch.description.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <a
        href={epoch.linkedinUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-8 font-mono text-xs uppercase tracking-widest border border-brass/50 text-brass px-6 py-3 hover:bg-brass hover:text-ink transition-colors"
      >
        Follow on LinkedIn →
      </a>


    </section>
  );
}
