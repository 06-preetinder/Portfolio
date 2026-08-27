import { motion } from "framer-motion";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-36 pb-28">
      <p className="eyebrow mb-3">01 — Discography</p>
      <h1 className="font-display text-6xl md:text-7xl uppercase leading-none">
        Releases
      </h1>
      <p className="mt-6 max-w-xl text-paper-dim text-lg">
        Each project below is a release: a title, a build, a way of showing
        the work rather than describing it. GitHub for the source, Loom for
        the walkthrough.
      </p>

      <div className="mt-20 flex flex-col">
        {projects.map((p, i) => (
          <motion.div
            key={p.cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`grid md:grid-cols-[140px_1fr_1fr] gap-8 py-10 hairline items-center ${
              p.featured ? "bg-ink-2 -mx-6 md:-mx-10 px-6 md:px-10" : ""
            }`}
          >
            <div>
              <p className="eyebrow mb-1">{p.cat}</p>
              {p.featured && (
                <span className="inline-block font-mono text-[10px] uppercase tracking-wider border border-brass text-brass px-2 py-0.5">
                  Meta
                </span>
              )}
            </div>

            <div className="aspect-video md:aspect-square bg-ink-2 border border-paper/10 flex items-center justify-center order-3 md:order-none">
              {p.image ? (
                <img src={p.image} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="font-mono text-xs text-paper-dim/50">
                  IMAGE PLACEHOLDER
                </span>
              )}
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight">
                {p.title}
              </h2>
              <p className="mt-4 text-paper-dim leading-relaxed">{p.blurb}</p>
              <div className="mt-6 flex gap-6 font-mono text-xs uppercase tracking-widest">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper hover:text-brass transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href={p.loom}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper hover:text-brass transition-colors"
                >
                  Walkthrough →
                </a>
                <a
                  href={p.Link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper hover:text-brass transition-colors"
                >
                  Demo Link →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
