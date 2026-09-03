import { useState } from "react";
import { resumeData } from "../data/content";

export default function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="relative z-10 flex items-center justify-center px-4 py-12 md:px-16 lg:px-24">
      <div className="vignette-pod max-w-4xl w-full p-6 md:p-12 rounded-3xl text-white font-serif">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/20">
          <div>
            <h2 className="text-xl md:text-2xl lowercase glow-text mb-1">
              curriculum vitae / resume
            </h2>
            <p className="text-sm text-white/70 font-mono">
              [last updated: {resumeData.lastUpdated}]
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={resumeData.downloadUrl}
              download="Preetinderjeet_Singh_Resume.pdf"
              className="px-4 py-2 border-hairline text-sm lowercase hover:bg-white hover:text-black transition-all cursor-pointer flex items-center gap-2 drop-glow"
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
              <span>download pdf</span>
            </a>

            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-4 py-2 border-hairline-dim text-sm lowercase hover:border-white transition-all cursor-pointer"
            >
              {showPreview ? "close overview" : "quick overview"}
            </button>
          </div>
        </div>

        {/* Quick Credentials Overview */}
        {showPreview && (
          <div className="mt-8 space-y-6 text-sm leading-relaxed">
            <div>
              <p className="text-white/60 font-mono text-xs uppercase tracking-wider mb-2">
                Core Competencies & Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 border-hairline-dim font-mono text-xs text-white/90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/60 font-mono text-xs uppercase tracking-wider mb-2">
                Track Record & Appointments
              </p>
              <div className="space-y-3">
                {resumeData.highlights.map((h, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-white/10 pb-2">
                    <div>
                      <span className="text-white font-medium">{h.title}</span> —{" "}
                      <span className="text-white/80">{h.role}</span>
                    </div>
                    <span className="font-mono text-xs text-white/50">{h.span}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/60 font-mono text-xs uppercase tracking-wider mb-1">
                Education
              </p>
              <p className="text-white/90">{resumeData.education.institution}</p>
              <p className="text-white/60 text-xs">{resumeData.education.focus}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
