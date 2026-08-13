import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Marquee from "../components/Marquee";
import VinylMark from "../components/VinylMark";
import { profile, projects, experience } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-40 pb-24 grid md:grid-cols-[1fr_auto] gap-16 items-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <p className="eyebrow mb-6">Machine Learning · Research · Ludhiana, IN</p>
          <h1 className="font-display text-[13vw] md:text-[6.4vw] leading-[0.92] uppercase">
            There is no
            <br />
            guarantee
            <br />
            the model
            <br />
            <span className="text-brass">is right.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-paper-dim">
            {profile.name} — building ML systems where the failure mode is
            expensive: aerospace, disaster response, flood risk. You build the
            system anyway, knowing this.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="font-mono text-xs uppercase tracking-widest bg-brass text-ink px-6 py-3 hover:bg-paper transition-colors"
            >
              See the work →
            </Link>
            <Link
              to="/experience"
              className="font-mono text-xs uppercase tracking-widest border border-paper/30 px-6 py-3 hover:border-brass hover:text-brass transition-colors"
            >
              Credits
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="hidden md:block justify-self-end"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <VinylMark size={240} />
        </motion.div>
      </section>

      <Marquee
        items={[
          "Missile Classification",
          "Hypersonic Trajectory Prediction",
          "Explainable AI",
          "Flood Risk Modeling",
          "Multi-UAV Coordination",
          "Retrieval-Augmented Generation",
        ]}
      />

      {/* Current focus */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-28 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <p className="eyebrow mb-3">01 — Now</p>
          <h2 className="font-display text-4xl uppercase leading-tight">
            What I'm
            <br />
            working on
          </h2>
        </div>
        <div className="md:col-span-2 hairline pt-8 md:pt-0 md:border-t-0">
          <p className="text-xl leading-relaxed text-paper">
            Leading simulation-based ML pipelines for missile classification and
            hypersonic trajectory prediction at{" "}
            <span className="text-brass">Lupex Space</span>. Alongside that, I do
            faculty-advised research on explainable flood-risk modeling and
            adaptive multi-UAV coordination for disaster response — I care more
            about why a model decides what it decides than another decimal
            point of accuracy.
          </p>
          <p className="mt-6 text-paper-dim leading-relaxed">
            Between the consequential work: I write{" "}
            <Link to="/epoch" className="text-brass hover:underline">
              The Epoch
            </Link>
            , a weekly AI research digest, and I'm building an enterprise
            retrieval system from the ground up — because I'd rather understand
            the machine than trust it blindly.
          </p>
        </div>
      </section>

      {/* Releases preview */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="flex items-end justify-between mb-10 hairline pt-10">
          <div>
            <p className="eyebrow mb-3">02 — Discography</p>
            <h2 className="font-display text-4xl uppercase">Selected releases</h2>
          </div>
          <Link
            to="/projects"
            className="hidden md:block font-mono text-xs uppercase tracking-widest text-paper-dim hover:text-brass transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-paper/10">
          {projects.slice(0, 3).map((p) => (
            <Link
              to="/projects"
              key={p.cat}
              className="group bg-ink p-8 hover:bg-ink-2 transition-colors"
            >
              <div className="aspect-square mb-6 bg-ink-2 border border-paper/10 flex items-center justify-center overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span className="font-mono text-xs text-paper-dim/50">
                    IMAGE PLACEHOLDER
                  </span>
                )}
              </div>
              <p className="eyebrow mb-2">{p.cat}</p>
              <h3 className="font-display text-2xl uppercase group-hover:text-brass transition-colors">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Credits preview */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="hairline pt-10 mb-10">
          <p className="eyebrow mb-3">03 — Credits</p>
          <h2 className="font-display text-4xl uppercase">Track record</h2>
        </div>
        <div>
          {experience.slice(0, 3).map((e) => (
            <div
              key={e.cat}
              className="grid md:grid-cols-[100px_1fr_180px] gap-4 md:gap-8 py-6 hairline items-baseline"
            >
              <span className="font-mono text-xs text-brass">{e.cat}</span>
              <div>
                <h3 className="font-display text-xl uppercase">{e.role}</h3>
                <p className="text-paper-dim text-sm">{e.org}</p>
              </div>
              <span className="font-mono text-xs text-paper-dim md:text-right">
                {e.period}
              </span>
            </div>
          ))}
        </div>
        <Link
          to="/experience"
          className="inline-block mt-8 font-mono text-xs uppercase tracking-widest text-paper-dim hover:text-brass transition-colors"
        >
          Full credits →
        </Link>
      </section>
    </>
  );
}
