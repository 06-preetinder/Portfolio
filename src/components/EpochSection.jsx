import { useEffect, useState } from "react";
import { epoch } from "../data/content";
import { fetchEpochLinkedInPosts } from "../utils/linkedinFetcher";

export default function EpochSection() {
  const [filter, setFilter] = useState("all"); // "all", "issue", "papers"
  const [feedState, setFeedState] = useState({
    source: "curated",
    posts: epoch.dispatches,
    lastSync: "Verified Archive",
  });
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    fetchEpochLinkedInPosts().then((res) => {
      setFeedState(res);
    });
  }, []);

  const handleManualSync = async () => {
    setIsSyncing(true);
    try {
      localStorage.removeItem("epoch_linkedin_feed_cache");
      const res = await fetchEpochLinkedInPosts();
      setFeedState(res);
    } finally {
      setTimeout(() => setIsSyncing(false), 500);
    }
  };

  const filteredPosts = feedState.posts.filter((post) => {
    if (filter === "all") return true;
    return post.type === filter;
  });

  const issueCount = feedState.posts.filter((p) => p.type === "issue").length;
  const paperCount = feedState.posts.filter((p) => p.type === "papers").length;

  return (
    <section id="epoch" className="relative z-10 flex justify-center px-4 md:px-16 lg:px-24 py-12">
      <div className="vignette-pod max-w-4xl w-full p-4 md:p-12 rounded-3xl font-serif text-white">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-white/20 pb-4">
          <div>
            <h2 className="text-2xl md:text-3xl lowercase glow-text">the epoch</h2>
            <p className="text-white/60 italic text-sm md:text-base mt-1">
              "{epoch.tagline}"
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono text-xs">
            <span className="flex items-center gap-1.5 text-white/70">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {feedState.source === "live" ? "linkedin live sync" : "synced archive"}
              </span>
            </span>
            <button
              onClick={handleManualSync}
              disabled={isSyncing}
              className="px-2.5 py-1 border-hairline text-white/80 hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              {isSyncing ? "syncing..." : "sync"}
            </button>
            <a
              href={epoch.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="underline hover:opacity-70 text-white/80"
            >
              linkedin page →
            </a>
          </div>
        </div>

        {/* Cadence Explainer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs md:text-sm text-white/80 mb-6 bg-white/5 p-4 rounded-xl border border-white/10 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[#c4a7e7]">⚡ cadence:</span>
            <span>two dispatches every friday (morning issue + evening research)</span>
          </div>
          <span className="text-white/50 text-[11px]">
            {issueCount} issues published to date
          </span>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6 font-mono text-xs">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 border transition-colors cursor-pointer ${
              filter === "all"
                ? "border-white bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                : "border-white/20 text-white/60 hover:text-white hover:border-white/50"
            }`}
          >
            all releases ({feedState.posts.length})
          </button>
          <button
            onClick={() => setFilter("issue")}
            className={`px-3 py-1.5 border transition-colors cursor-pointer ${
              filter === "issue"
                ? "border-white bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                : "border-white/20 text-white/60 hover:text-white hover:border-white/50"
            }`}
          >
            weekly issues ({issueCount})
          </button>
          <button
            onClick={() => setFilter("papers")}
            className={`px-3 py-1.5 border transition-colors cursor-pointer ${
              filter === "papers"
                ? "border-[#c4a7e7] bg-[#c4a7e7]/10 text-[#c4a7e7] shadow-[0_0_10px_rgba(196,167,231,0.2)]"
                : "border-white/20 text-white/60 hover:text-white hover:border-white/50"
            }`}
          >
            research papers ({paperCount})
          </button>
        </div>

        {/* Dispatches List (Contained scrollable feed to keep page length elegant) */}
        <div className="max-h-[640px] overflow-y-auto thoughts-scroll pr-1.5 sm:pr-2 space-y-4">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="border-hairline p-4 md:p-6 bg-black/40 hover:border-white transition-colors"
            >
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span
                    className={`px-2 py-0.5 border text-[10px] uppercase tracking-wider ${
                      post.type === "papers"
                        ? "border-[#c4a7e7] text-[#c4a7e7]"
                        : "border-white/40 text-white/90"
                    }`}
                  >
                    {post.issueNumber}
                  </span>
                  <span className="text-white/50">• {post.date}</span>
                </div>
                <span className="font-mono text-xs text-white/40">{post.readTime}</span>
              </div>

              <h3 className="text-base md:text-lg font-medium lowercase text-white glow-text mb-3">
                {post.title}
              </h3>

              {/* Topic tags */}
              {post.topics && post.topics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3 font-mono text-[10px] text-white/50">
                  {post.topics.map((t, idx) => (
                    <span key={idx} className="bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      #{t}
                    </span>
                  ))}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm leading-relaxed mt-2 pt-2 border-t border-white/10">
                <div className="border-l-2 border-white/60 pl-3">
                  <p className="font-mono text-[10px] uppercase text-white/50 tracking-wider mb-1">
                    The Signal
                  </p>
                  <p className="text-white/90 lowercase">{post.signal}</p>
                </div>
                <div className="border-l-2 border-[#c4a7e7] pl-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: "#c4a7e7" }}>
                    The Case Against It
                  </p>
                  <p className="text-white/80 lowercase">{post.caseAgainstIt}</p>
                </div>
              </div>

              {/* Footer action links */}
              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center font-mono text-[11px]">
                <span className="text-white/40">the epoch archive</span>
                <a
                  href={post.linkedinPostUrl || epoch.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-[#c4a7e7]/80 hover:text-[#c4a7e7]"
                >
                  read on linkedin →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll cue and archive counter footer */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-white/40">
          <span>showing {filteredPosts.length} releases in archive</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4a7e7] animate-pulse" />
            <span>scroll feed · two releases every friday</span>
          </span>
        </div>
      </div>
    </section>
  );
}
