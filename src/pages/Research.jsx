import { motion } from "framer-motion";
import { research } from "../data/content";

export default function Research() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-36 pb-28">
      <p className="eyebrow mb-3">03 — Research</p>
      <h1 className="font-display text-6xl md:text-7xl uppercase leading-none">
        In progress
      </h1>
      <p className="mt-6 max-w-xl text-paper-dim text-lg">
        Faculty-advised research, currently in preprint. Full entries —
        abstracts, methods, results — go up on submission.
      </p>

      <div className="mt-20 grid md:grid-cols-2 gap-px bg-paper/10">
        {research.map((r, i) => (
          <motion.div
            key={r.cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-ink p-8 md:p-10 border border-dashed border-paper/20 flex flex-col justify-between min-h-[240px]"
          >
            <div>
              <span className="inline-block font-mono text-[10px] uppercase tracking-widest border border-paper/25 text-paper-dim px-3 py-1 mb-8">
                {r.status}
              </span>
              <p className="eyebrow mb-2">{r.cat}</p>
              <h2 className="font-display text-xl md:text-2xl uppercase leading-snug text-paper-dim">
                {r.title}
              </h2>
              {r.subtitle && (
                <p className="mt-2 text-sm text-paper-dim/60 italic">
                  {r.subtitle}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-16 font-mono text-xs text-paper-dim/60 max-w-md">
        Faculty-advised research at GNDEC. Full write-ups — methodology,
        results, figures — added once each paper moves past preprint.
      </p>
    </section>
  );
}
