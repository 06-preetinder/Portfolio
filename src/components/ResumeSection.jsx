import { useState } from "react";
import { resumeVersions } from "../data/content";

export default function ResumeSection() {
  const [activeVersionId, setActiveVersionId] = useState("agentic");
  const activeVersion = resumeVersions.find((r) => r.id === activeVersionId) || resumeVersions[0];

  return (
    <section id="resume" className="relative z-10 flex items-center justify-center px-4 py-12 md:px-16 lg:px-24">
      <div className="vignette-pod max-w-4xl w-full p-6 md:p-12 rounded-3xl text-white font-serif border-hairline">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/20">
          <div>
            <h2 className="text-xl md:text-2xl lowercase glow-text mb-1">
              curriculum vitae / targeted resumes
            </h2>
            <p className="text-sm text-white/70 font-mono">
              [3 specialized tracks: ai agentic, ml & aerospace, data science]
            </p>
          </div>

          <a
            href={activeVersion.downloadUrl}
            download
            className="px-5 py-2.5 border-hairline text-sm lowercase hover:bg-white hover:text-black transition-all cursor-pointer flex items-center gap-2 drop-glow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>download {activeVersion.shortLabel} pdf</span>
          </a>
        </div>

        {/* 3 Resume Selection Tabs */}
        <div className="mt-6">
          <p className="text-white/60 font-mono text-xs uppercase tracking-wider mb-3">
            Select Track:
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {resumeVersions.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVersionId(v.id)}
                className={`p-3 text-left border cursor-pointer transition-all ${
                  activeVersionId === v.id
                    ? "border-white bg-white/10 shadow-[0_0_14px_rgba(255,255,255,0.15)]"
                    : "border-white/20 hover:border-white/60 bg-black/40"
                }`}
              >
                <p className="text-sm font-medium text-white lowercase glow-text">
                  {v.label}
                </p>
                <p className="text-xs text-white/60 mt-1 leading-relaxed font-sans">
                  {v.focus}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Credentials Summary from the Resumes */}
        <div className="mt-8 pt-6 border-t border-white/10 text-xs md:text-sm text-white/80 space-y-2 font-mono">
          <p>
            <span className="text-white/50">Education:</span> Guru Nanak Dev Engineering College (GNDEC), B.Tech CSE (8 CGPA)
          </p>
          <p>
            <span className="text-white/50">Appointments:</span> Lupex Space (ML R&D Lead) • 3S Scholars (Contractual Dev) • Punjab AI Excellence (Research Fellow)
          </p>
          <p>
            <span className="text-white/50">Publication:</span> ICAAV 2026 (DRDO-organized, Paper 090) · Accepted for presentation
          </p>
        </div>
      </div>
    </section>
  );
}
