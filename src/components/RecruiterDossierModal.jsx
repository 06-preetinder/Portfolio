import { useState, useEffect } from "react";
import { profile, resumeVersions, experience } from "../data/content";

export default function RecruiterDossierModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("who"); // "who" | "what" | "why" | "timeline"

  // Keyboard shortcut listener (Ctrl+K / Cmd+K to toggle, Esc to close, 1-4 for quick actions)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          window.dispatchEvent(new CustomEvent("open-dossier"));
        }
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "1") {
        e.preventDefault();
        const agentic = resumeVersions.find((r) => r.id === "agentic");
        if (agentic) {
          const link = document.createElement("a");
          link.href = agentic.downloadUrl;
          link.download = "";
          link.click();
        }
      } else if (e.key === "2") {
        e.preventDefault();
        const ml = resumeVersions.find((r) => r.id === "ml");
        if (ml) {
          const link = document.createElement("a");
          link.href = ml.downloadUrl;
          link.download = "";
          link.click();
        }
      } else if (e.key === "3") {
        e.preventDefault();
        handleCopyEmail();
      } else if (e.key === "4") {
        e.preventDefault();
        window.location.href = `mailto:${profile.email}?subject=Technical%20Interview%20-%20Preetinderjeet%20Singh`;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0a0a0a] border border-white/20 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.95)] text-white font-serif p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top classified telemetry bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/15 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c4a7e7] animate-pulse drop-shadow-[0_0_6px_rgba(196,167,231,0.8)]" />
            <span className="font-mono text-xs tracking-widest text-white/80 uppercase">
              executive dossier // {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-white/50">
            <span className="hidden sm:inline">[ hotkeys: 1-4 ]</span>
            <button
              onClick={onClose}
              className="px-2 py-0.5 rounded border border-white/20 hover:border-white text-white/70 hover:text-white transition-all cursor-pointer"
            >
              esc
            </button>
          </div>
        </div>

        {/* Executive summary statement */}
        <div className="pt-5 pb-3">
          <div className="flex flex-wrap items-baseline gap-2 mb-1">
            <h2 className="text-2xl sm:text-3xl lowercase font-normal glow-text">
              {profile.name}
            </h2>
            <span className="font-mono text-xs text-white/50 lowercase">
              ({profile.shortName})
            </span>
          </div>
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-serif">
            AI &amp; Agentic Systems Engineer specializing in autonomous multi-agent coordination,
            deterministic memory graphs, and high-consequence aerospace simulation.
          </p>
        </div>

        {/* Quick telemetry matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 bg-black/60 border border-white/10 rounded-xl font-mono text-xs my-4">
          <div>
            <span className="text-white/40 block text-[10px] uppercase tracking-wider">status</span>
            <span className="text-white/90">ready to ship</span>
          </div>
          <div>
            <span className="text-white/40 block text-[10px] uppercase tracking-wider">academics</span>
            <span className="text-white/90">B.Tech CS · 8 CGPA</span>
          </div>
          <div>
            <span className="text-white/40 block text-[10px] uppercase tracking-wider">publication</span>
            <span className="text-white/90">ICAAV 2026 (DRDO)</span>
          </div>
          <div>
            <span className="text-white/40 block text-[10px] uppercase tracking-wider">leadership</span>
            <span className="text-white/90">ML Lead @ Lupex</span>
          </div>
        </div>

        {/* 3-Pillar Experience Navigation Tabs */}
        <div className="flex flex-wrap gap-1.5 border-b border-white/15 pb-2.5 mb-4 text-xs font-mono">
          <button
            onClick={() => setActiveTab("who")}
            className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === "who"
                ? "border-white bg-white/10 text-white font-medium shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                : "border-white/15 text-white/60 hover:text-white hover:border-white/40 bg-black/40"
            }`}
          >
            [ 01 / who i am ]
          </button>
          <button
            onClick={() => setActiveTab("what")}
            className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === "what"
                ? "border-white bg-white/10 text-white font-medium shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                : "border-white/15 text-white/60 hover:text-white hover:border-white/40 bg-black/40"
            }`}
          >
            [ 02 / what i can do for you ]
          </button>
          <button
            onClick={() => setActiveTab("why")}
            className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === "why"
                ? "border-white bg-white/10 text-white font-medium shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                : "border-white/15 text-white/60 hover:text-white hover:border-white/40 bg-black/40"
            }`}
          >
            [ 03 / why hire me instead ]
          </button>
          <button
            onClick={() => setActiveTab("timeline")}
            className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === "timeline"
                ? "border-white bg-white/10 text-white font-medium shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                : "border-white/15 text-white/60 hover:text-white hover:border-white/40 bg-black/40"
            }`}
          >
            [ career timeline ]
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[190px] mb-6 font-serif">
          {activeTab === "who" && (
            <div className="space-y-3 text-white/85 text-xs sm:text-sm leading-relaxed p-4 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between font-mono text-[11px] text-white/50 border-b border-white/10 pb-2">
                <span>identity · technical ethos · foundation</span>
                <span className="text-[#c4a7e7]">[ 01 / who i am ]</span>
              </div>
              <p>
                i am preetinder (indra), a computer science student at GNDEC Ludhiana (8 CGPA) and machine learning R&amp;D engineer at Lupex Space.
              </p>
              <p>
                my work centers on how models reason over time: designing multi-tier memory graphs for LLM agents, running surrogate neural networks for aerospace simulations at Lupex Space, and proving coordination algorithms under uncertainty for autonomous systems (ICAAV 2026).
              </p>
              <p>
                outside the terminal, i write <em>The Epoch</em> every Friday to dissect frontier AI research preprints, train with bodyweight discipline, and study classical literature and chess. i build software with the premise that explainability, clean mathematical bounds, and deterministic behavior matter more than raw benchmark claims.
              </p>
            </div>
          )}

          {activeTab === "what" && (
            <div className="space-y-2.5 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between font-mono text-[11px] text-white/50 border-b border-white/10 pb-2 mb-2">
                <span>concrete capabilities · unlocked outcomes</span>
                <span className="text-white/80">[ 02 / what i can do for you ]</span>
              </div>
              <div className="p-2.5 bg-black/40 border-l-2 border-[#c4a7e7] rounded-r">
                <span className="font-mono text-xs text-[#c4a7e7] block mb-0.5">
                  autonomous agents with persistent memory
                </span>
                <p className="text-xs text-white/75 leading-relaxed">
                  architect multi-agent systems with LangGraph and polyglot memory (SQLite episodic state + Neo4j semantic graph) so agents maintain context over long horizons without hallucinating loops.
                </p>
              </div>
              <div className="p-2.5 bg-black/40 border-l-2 border-white/40 rounded-r">
                <span className="font-mono text-xs text-white/85 block mb-0.5">
                  production-grade RAG &amp; deterministic guardrails
                </span>
                <p className="text-xs text-white/75 leading-relaxed">
                  engineer retrieval pipelines grounded in strict policy documents, coupled with deterministic non-LLM computation layers, Docker containerization, and sub-100ms caching.
                </p>
              </div>
              <div className="p-2.5 bg-black/40 border-l-2 border-white/20 rounded-r">
                <span className="font-mono text-xs text-white/65 block mb-0.5">
                  deep learning for physical &amp; dynamic systems
                </span>
                <p className="text-xs text-white/75 leading-relaxed">
                  formulate and train sequence models, neural ODEs, and transformer architectures in PyTorch, then optimize them with TensorFlow Lite for real-time edge deployment.
                </p>
              </div>
              <div className="p-2.5 bg-black/40 border-l-2 border-white/20 rounded-r">
                <span className="font-mono text-xs text-white/65 block mb-0.5">
                  rapid research-to-code velocity
                </span>
                <p className="text-xs text-white/75 leading-relaxed">
                  read frontier preprints at 2am, extract the mathematical core, and translate algorithmic research into clean, tested, containerized microservices within days.
                </p>
              </div>
            </div>
          )}

          {activeTab === "why" && (
            <div className="space-y-2.5 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between font-mono text-[11px] text-white/50 border-b border-white/10 pb-2 mb-2">
                <span>the unfair advantages · why hire indra over peers</span>
                <span className="text-[#c4a7e7]">[ 03 / why hire me instead ]</span>
              </div>
              <div className="p-2.5 bg-black/40 border-l-2 border-[#c4a7e7] rounded-r">
                <span className="font-mono text-xs text-[#c4a7e7] block mb-0.5">
                  trained on high-consequence failure modes
                </span>
                <p className="text-xs text-white/75 leading-relaxed">
                  most candidates with early-career experience have only cloned tutorial chatbots. i lead an R&amp;D intern team at Lupex Space on aerospace simulation pipelines where numerical instability ruins runs, and co-authored a peer-reviewed DRDO conference paper (ICAAV 2026).
                </p>
              </div>
              <div className="p-2.5 bg-black/40 border-l-2 border-white/40 rounded-r">
                <span className="font-mono text-xs text-white/85 block mb-0.5">
                  system architecture, not API wrapping
                </span>
                <p className="text-xs text-white/75 leading-relaxed">
                  i build the complete substrate: custom FastAPI microservices, Socket.IO live operational dashboards, CPU-optimized Docker images, and hybrid vector-plus-graph memory.
                </p>
              </div>
              <div className="p-2.5 bg-black/40 border-l-2 border-white/20 rounded-r">
                <span className="font-mono text-xs text-white/65 block mb-0.5">
                  direct founder reporting &amp; shipping discipline
                </span>
                <p className="text-xs text-white/75 leading-relaxed">
                  i report directly to co-founders and CEOs. with <em>The Epoch</em>, i have published 15 consecutive Friday editions without missing a single week. complete ownership, zero handholding.
                </p>
              </div>
              <div className="p-2.5 bg-black/40 border-l-2 border-white/20 rounded-r">
                <span className="font-mono text-xs text-white/65 block mb-0.5">
                  quiet discipline &amp; endurance
                </span>
                <p className="text-xs text-white/75 leading-relaxed">
                  the same personal standard behind 17 clean chin-ups and competitive chess strategy governs my engineering: patient formulation, clean commits, and the endurance to stay with a hard bug until it yields.
                </p>
              </div>
            </div>
          )}

          {activeTab === "timeline" && (
            <div className="space-y-2.5 p-4 rounded-xl border border-white/10 bg-white/[0.02] max-h-[300px] overflow-y-auto">
              <div className="flex items-center justify-between font-mono text-[11px] text-white/50 border-b border-white/10 pb-2 mb-2">
                <span>appointments &amp; leadership track record</span>
                <span className="text-white/60">[ 2025 - 2026 ]</span>
              </div>
              {experience.map((e) => (
                <div key={e.cat} className="p-2.5 bg-black/40 border border-white/10 rounded">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs mb-1">
                    <span className="font-medium text-white">
                      {e.role} <span className="font-serif italic text-white/70">@ {e.org}</span>
                    </span>
                    <span className="font-mono text-[10px] text-white/50">{e.period}</span>
                  </div>
                  <p className="text-[11px] text-white/70 leading-relaxed font-serif">
                    {e.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action button dock */}
        <div className="border-t border-white/15 pt-4 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-white/50 mb-1">
            <span>immediate actions:</span>
            <span>press [ 1, 2, 3, 4 ] or click</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Action 1 */}
            <a
              href="/resumes/Preetinderjeet_Singh_AI_Agentic_Resume.pdf"
              download
              className="flex items-center justify-between p-3 rounded-lg border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-white/50 group-hover:text-white">[ 1 ]</span>
                <span className="text-xs sm:text-sm">download ai agentic resume</span>
              </div>
              <span className="font-mono text-[10px] text-white/40">pdf</span>
            </a>

            {/* Action 2 */}
            <a
              href="/resumes/Preetinderjeet_Singh_ML_Engineer_Resume.pdf"
              download
              className="flex items-center justify-between p-3 rounded-lg border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-white/50 group-hover:text-white">[ 2 ]</span>
                <span className="text-xs sm:text-sm">download ml & aerospace resume</span>
              </div>
              <span className="font-mono text-[10px] text-white/40">pdf</span>
            </a>

            {/* Action 3 */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-between p-3 rounded-lg border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 transition-all group text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-white/50 group-hover:text-white">[ 3 ]</span>
                <span className="text-xs sm:text-sm">
                  {copied ? "copied to clipboard" : "copy direct email"}
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/40">
                {copied ? "done" : "copy"}
              </span>
            </button>

            {/* Action 4 */}
            <a
              href={`mailto:${profile.email}?subject=Technical%20Interview%20-%20Preetinderjeet%20Singh`}
              className="flex items-center justify-between p-3 rounded-lg border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-white/50 group-hover:text-white">[ 4 ]</span>
                <span className="text-xs sm:text-sm">schedule technical screen</span>
              </div>
              <span className="font-mono text-[10px] text-white/40">mailto</span>
            </a>
          </div>

          {/* External links */}
          <div className="flex flex-wrap items-center justify-between pt-2.5 text-[11px] font-mono text-white/60">
            <div className="flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                github: @06-preetinder
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                linkedin
              </a>
            </div>
            <span>{profile.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
