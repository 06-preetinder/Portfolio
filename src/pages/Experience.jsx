import { motion } from "framer-motion";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-36 pb-28">
      <p className="eyebrow mb-3">02 — Credits</p>
      <h1 className="font-display text-6xl md:text-7xl uppercase leading-none">
        Track record
      </h1>
      <p className="mt-6 max-w-xl text-paper-dim text-lg">
        In chronological order, most recent first. Every credit is a real
        role, not a line on a résumé nobody checks.
      </p>

      <div className="mt-20 flex flex-col">
        {experience.map((e, i) => (
          <motion.div
            key={e.cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="grid md:grid-cols-[100px_1fr_200px] gap-4 md:gap-10 py-10 hairline items-start"
          >
            <span className="font-mono text-xs text-brass">{e.cat}</span>

            <div>
              <h2 className="font-display text-2xl md:text-3xl uppercase leading-tight">
                {e.role}
              </h2>
              <p className="font-mono text-xs uppercase tracking-widest text-brass mt-2 mb-5">
                {e.org}
              </p>
              <p className="text-paper-dim leading-relaxed max-w-2xl">
                {e.description}
              </p>
              {e.bullets && (
                <ul className="mt-4 space-y-2">
                  {e.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm text-paper-dim leading-relaxed max-w-2xl"
                    >
                      <span className="text-brass shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <span className="font-mono text-xs text-paper-dim md:text-right">
              {e.period}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
