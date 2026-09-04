import { useState } from "react";
import { experience, profile } from "../data/content";

export default function ExperienceSection() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      num: "01",
      title: "who i am",
      subtitle: "identity · technical ethos · foundation",
      badge: "systems & ml engineer",
      accent: "#c4a7e7",
      content: (
        <div className="space-y-3.5 text-white/80 text-sm leading-relaxed font-serif">
          <p>
            i am preetinder (indra), a computer science undergraduate at GNDEC Ludhiana (8 CGPA) and machine learning R&amp;D engineer at Lupex Space.
          </p>
          <p>
            my work bridges two disciplines that rarely speak to each other: deterministic multi-agent orchestration (memory graphs, tool routing, state persistence) and scientific deep learning for aerospace simulation. i care about systems where failure is expensive, and where ungrounded confidence leads to real-world breakdown.
          </p>
          <p>
            outside code, i write <em>The Epoch</em> every Friday to parse frontier AI literature, train with bodyweight discipline, and study classical literature and chess. i value systems that are explainable, mathematically bounded, and provably reliable over raw benchmark claims.
          </p>
        </div>
      ),
    },
    {
      num: "02",
      title: "what i can do for you",
      subtitle: "capabilities · unlocked technical outcomes",
      badge: "production capabilities",
      accent: "rgba(255,255,255,0.85)",
      content: (
        <div className="space-y-3 text-white/80 text-sm font-serif">
          <div className="p-2.5 bg-white/[0.02] border-l-2 border-[#c4a7e7]">
            <span className="font-mono text-xs text-[#c4a7e7] block mb-0.5">
              autonomous agents with persistent memory
            </span>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              architect multi-agent systems with LangGraph and polyglot memory (SQLite episodic state + Neo4j semantic knowledge graph) so agents maintain context over long horizons without hallucinating loops.
            </p>
          </div>
          <div className="p-2.5 bg-white/[0.02] border-l-2 border-white/40">
            <span className="font-mono text-xs text-white/80 block mb-0.5">
              production-grade RAG &amp; deterministic guardrails
            </span>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              engineer retrieval pipelines grounded in strict policy documents, coupled with deterministic non-LLM computation layers, Docker containerization, and sub-100ms caching.
            </p>
          </div>
          <div className="p-2.5 bg-white/[0.02] border-l-2 border-white/20">
            <span className="font-mono text-xs text-white/60 block mb-0.5">
              deep learning for physical &amp; dynamic systems
            </span>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              formulate and train sequence models, neural ODEs, and transformer architectures in PyTorch, then optimize them with TensorFlow Lite for real-time edge deployment.
            </p>
          </div>
          <div className="p-2.5 bg-white/[0.02] border-l-2 border-white/20">
            <span className="font-mono text-xs text-white/60 block mb-0.5">
              rapid research-to-code velocity
            </span>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              read frontier preprints at 2am, extract the mathematical core, and translate algorithmic research into clean, tested, containerized microservices within days.
            </p>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "why hire me instead",
      subtitle: "the unfair advantages · signal over noise",
      badge: "why choose indra",
      accent: "#c4a7e7",
      content: (
        <div className="space-y-3 text-white/80 text-sm font-serif">
          <div className="p-2.5 bg-white/[0.02] border-l-2 border-[#c4a7e7]">
            <span className="font-mono text-xs text-[#c4a7e7] block mb-0.5">
              built for high-consequence failure modes
            </span>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              most candidates with early-career experience have only cloned tutorial chatbots. i lead an R&amp;D team at Lupex Space on aerospace simulation pipelines where numerical instability ruins runs, and co-authored a DRDO-organized conference paper (ICAAV 2026).
            </p>
          </div>
          <div className="p-2.5 bg-white/[0.02] border-l-2 border-white/40">
            <span className="font-mono text-xs text-white/80 block mb-0.5">
              system architecture, not API wrapping
            </span>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              i build the complete substrate: custom FastAPI microservices, Socket.IO live operational dashboards, CPU-optimized Docker images, and hybrid vector-plus-graph memory.
            </p>
          </div>
          <div className="p-2.5 bg-white/[0.02] border-l-2 border-white/20">
            <span className="font-mono text-xs text-white/60 block mb-0.5">
              direct founder reporting &amp; shipping discipline
            </span>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              i report directly to co-founders and CEOs. with <em>The Epoch</em>, i have published 15 consecutive Friday editions without missing a single week. complete ownership, zero handholding.
            </p>
          </div>
          <div className="p-2.5 bg-white/[0.02] border-l-2 border-white/20">
            <span className="font-mono text-xs text-white/60 block mb-0.5">
              quiet discipline &amp; endurance
            </span>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              the same personal standard behind 17 clean chin-ups and competitive chess strategy governs my engineering: patient formulation, clean commits, and the endurance to stay with a hard bug until it yields.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-10 flex items-center justify-center px-4 py-16 md:px-16 lg:px-24"
    >
      <div className="vignette-pod max-w-5xl w-full p-6 md:p-12 rounded-3xl text-white font-serif border-hairline bg-black/60 backdrop-blur-sm">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-white/50 uppercase tracking-widest mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a7e7] animate-pulse" />
              <span>career dossier // track record</span>
            </div>
            <h2 className="text-2xl md:text-4xl lowercase glow-text">
              experience / value thesis
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/60 font-mono max-w-md md:text-right">
            [who i am, what i unlock for engineering teams, and why i stand apart]
          </p>
        </div>

        {/* 3 Core Executive Framework Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-8">
          {pillars.map((p, idx) => (
            <div
              key={p.num}
              onClick={() => setActivePillar(idx)}
              className={`p-5 md:p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                activePillar === idx
                  ? "bg-white/[0.04] border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  : "bg-black/40 border-white/15 hover:border-white/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-3 text-white/50">
                  <span>[ {p.num} ]</span>
                  <span
                    className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-white/10"
                    style={{ color: p.accent }}
                  >
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-xl lowercase glow-text mb-1 text-white">
                  {p.title}
                </h3>
                <p className="font-mono text-[11px] text-white/50 mb-4">
                  {p.subtitle}
                </p>
                {p.content}
              </div>
            </div>
          ))}
        </div>

        {/* Chronological Role Timeline */}
        <div className="pt-8 border-t border-white/15">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg md:text-xl lowercase glow-text">
              chronological roles &amp; appointments
            </h3>
            <span className="font-mono text-xs text-white/50">
              [ 2025 - 2026 ]
            </span>
          </div>

          <div className="space-y-4">
            {experience.map((e) => (
              <div
                key={e.cat}
                className="p-5 md:p-6 rounded-xl border border-white/15 bg-black/40 hover:border-white/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-mono text-xs text-[#c4a7e7]">
                      {e.cat}
                    </span>
                    <h4 className="text-base sm:text-lg lowercase font-medium text-white">
                      {e.role}
                    </h4>
                    <span className="text-white/40 font-mono text-xs">@</span>
                    <span className="text-white/90 text-sm font-serif italic">
                      {e.org}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-white/50">
                    {e.period}
                  </span>
                </div>

                <p className="text-white/75 text-xs sm:text-sm leading-relaxed my-3 font-serif">
                  {e.description}
                </p>

                <ul className="space-y-1.5 font-serif text-xs text-white/80">
                  {e.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-white/30 font-mono mt-0.5">•</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Direct CTA footer inside Experience */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-white/60">
          <span>have an open technical or research role?</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-dossier"))}
              className="px-3 py-1.5 rounded-full border border-white/20 hover:border-white text-white/90 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a7e7] animate-pulse" />
              <span>open 30s executive dossier</span>
              <kbd className="text-[10px] text-white/40 bg-white/10 px-1 rounded">⌘K</kbd>
            </button>
            <a
              href={`mailto:${profile.email}?subject=Role%20Inquiry%20-%20Preetinderjeet%20Singh`}
              className="px-3 py-1.5 rounded-full border border-white/20 hover:border-white text-white/90 hover:bg-white/10 transition-all cursor-pointer"
            >
              email indra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
