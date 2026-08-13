import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { epoch } from "../data/content";

const typeStyles = {
  paper: {
    label: "Paper",
    border: "border-brass/50",
    badge: "border-brass text-brass",
    glow: "hover:border-brass",
  },
  news: {
    label: "News",
    border: "border-rust/50",
    badge: "border-rust text-rust",
    glow: "hover:border-rust",
  },
};

export default function Epoch() {
  const [index, setIndex] = useState(0); // 0 = latest (issues array is newest-first)
  const issue = epoch.issues[index];
  const style = typeStyles[issue.type] ?? typeStyles.news;

  const goPrev = () =>
    setIndex((i) => Math.min(i + 1, epoch.issues.length - 1)); // older
  const goNext = () => setIndex((i) => Math.max(i - 1, 0)); // newer

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

      {/* Issue browser */}
      <div className="mt-24 hairline pt-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-2">Issue archive</p>
            <h2 className="font-display text-3xl md:text-4xl uppercase">
              {index === 0 ? "This week" : "Browse issues"}
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={goPrev}
              disabled={index === epoch.issues.length - 1}
              aria-label="Older issue"
              className="w-10 h-10 flex items-center justify-center border border-paper/25 font-mono text-sm hover:border-brass hover:text-brass transition-colors disabled:opacity-25 disabled:pointer-events-none"
            >
              ←
            </button>
            <button
              onClick={goNext}
              disabled={index === 0}
              aria-label="Newer issue"
              className="w-10 h-10 flex items-center justify-center border border-paper/25 font-mono text-sm hover:border-brass hover:text-brass transition-colors disabled:opacity-25 disabled:pointer-events-none"
            >
              →
            </button>
          </div>
        </div>

        {/* "LinkedIn window" card — styled preview, not a live embed */}
        <AnimatePresence mode="wait">
          <motion.a
            key={issue.id}
            href={issue.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`block bg-ink-2 border ${style.border} ${style.glow} p-8 md:p-10 transition-colors group`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest border ${style.badge} px-3 py-1`}
                >
                  {style.label}
                </span>
                <span className="font-mono text-xs text-paper-dim">
                  {issue.date}
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-paper-dim/50">
                in/preetinderjeet-singh
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl uppercase leading-tight group-hover:text-brass transition-colors">
              {issue.headline}
            </h3>
            <p className="mt-4 text-paper-dim leading-relaxed max-w-2xl">
              {issue.summary}
            </p>

            <span className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-paper group-hover:text-brass transition-colors">
              Read on LinkedIn →
            </span>
          </motion.a>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {epoch.issues.map((iss, i) => (
            <button
              key={iss.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to issue ${iss.id}`}
              className={`h-1.5 transition-all ${
                i === index ? "w-8 bg-brass" : "w-1.5 bg-paper/20 hover:bg-paper/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
