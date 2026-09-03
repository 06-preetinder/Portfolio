import { useEffect, useState } from "react";
import { epoch } from "../data/content";
import { fetchEpochLinkedInPosts } from "../utils/linkedinFetcher";

export default function EpochSection() {
  const [feedState, setFeedState] = useState({
    source: "curated",
    posts: epoch.dispatches,
    lastSync: "Checking...",
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

  return (
    <section id="epoch" className="relative z-10 flex justify-center px-4 md:px-16 lg:px-24 py-12">
      <div className="vignette-pod max-w-4xl w-full p-4 md:p-12 rounded-3xl font-serif text-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-white/20 pb-4">
          <div>
            <h2 className="text-2xl md:text-3xl lowercase glow-text">the epoch</h2>
            <p className="text-white/60 italic text-sm md:text-base mt-1">
              "{epoch.tagline}"
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="flex items-center gap-1.5 text-white/70">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {feedState.source === "live" ? "linkedin live sync" : "synced from linkedin"}
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
              page →
            </a>
          </div>
        </div>

        <p className="text-white/80 text-sm leading-relaxed mb-8">
          every friday, regardless of whether the week deserved it, an issue goes out. we dissect the signal, and publish the case against it.
        </p>

        {/* Weekly Dispatches list */}
        <div className="space-y-4">
          {feedState.posts.map((post) => (
            <div
              key={post.id}
              className="border-hairline p-4 md:p-5 bg-black/40 hover:border-white transition-colors"
            >
              <div className="flex justify-between items-baseline gap-2 mb-2">
                <span className="font-mono text-xs text-white/50">{post.issueNumber} • {post.date}</span>
                <span className="font-mono text-xs text-white/40">{post.readTime}</span>
              </div>

              <h3 className="text-base md:text-lg font-medium lowercase text-white glow-text mb-3">
                {post.title}
              </h3>

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

              {post.linkedinPostUrl && (
                <div className="mt-3 text-right">
                  <a
                    href={post.linkedinPostUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] underline text-white/60 hover:text-white"
                  >
                    read dispatch on linkedin →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
