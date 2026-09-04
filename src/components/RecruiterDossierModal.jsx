import { useState, useEffect } from "react";
import { profile, resumeVersions } from "../data/content";

export default function RecruiterDossierModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

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
              dossier // {profile.name}
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
        <div className="py-5">
          <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
            <h2 className="text-2xl sm:text-3xl lowercase font-normal glow-text">
              {profile.name}
            </h2>
            <span className="font-mono text-xs text-white/50 lowercase">
              ({profile.shortName})
            </span>
          </div>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed">
            AI & Agentic Systems Engineer specializing in autonomous multi-agent coordination,
            deterministic memory graphs, and high-consequence aerospace simulation.
          </p>
        </div>

        {/* Quick telemetry matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 bg-black/60 border border-white/10 rounded-xl font-mono text-xs mb-5">
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

        {/* Core pillars: 30-second read */}
        <div className="space-y-3.5 mb-6 text-xs sm:text-sm text-white/80">
          <div className="p-3 bg-white/[0.02] border-l-2 border-[#c4a7e7] pl-3.5">
            <span className="font-mono text-[11px] text-[#c4a7e7] block mb-0.5">
              01 · Autonomous Multi-Agent Coordination
            </span>
            <p className="leading-relaxed">
              Engineered polyglot memory architectures (SQLite short-term/episodic + Neo4j semantic graph) with LangGraph, deterministic tool orchestration, and real-time Socket.IO telemetry.
            </p>
          </div>

          <div className="p-3 bg-white/[0.02] border-l-2 border-white/40 pl-3.5">
            <span className="font-mono text-[11px] text-white/70 block mb-0.5">
              02 · Aerospace Simulation & Neural Physics
            </span>
            <p className="leading-relaxed">
              Coordinating simulation-based ML pipelines for hypersonic trajectory prediction and surrogate modeling at Lupex Space. Co-authored DRDO-presented paper on multi-UAV coordination under uncertainty.
            </p>
          </div>

          <div className="p-3 bg-white/[0.02] border-l-2 border-white/20 pl-3.5">
            <span className="font-mono text-[11px] text-white/60 block mb-0.5">
              03 · Research-to-Code Synthesis & Rigor
            </span>
            <p className="leading-relaxed">
              Founder and writer of <em>The Epoch</em>: published 15 consecutive Friday editions dissecting frontier AI research preprints, separating verifiable signal from benchmark hype.
            </p>
          </div>
        </div>

        {/* Action button dock */}
        <div className="border-t border-white/15 pt-5 space-y-2.5">
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
          <div className="flex flex-wrap items-center justify-between pt-3 text-[11px] font-mono text-white/60">
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
