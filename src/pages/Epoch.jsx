import EpochSection from "../components/EpochSection";
import { epoch } from "../data/content";

export default function Epoch() {
  return (
    <div className="min-h-screen bg-black text-white font-serif px-3 sm:px-6 md:px-16 lg:px-24 pt-28 pb-24 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lowercase glow-text mb-2">the epoch</h1>
        <p className="text-white/70 italic text-base md:text-lg mb-8">
          "{epoch.tagline}"
        </p>

        <div className="border-hairline p-4 sm:p-6 md:p-8 bg-black/40 text-white/85 text-sm md:text-base leading-relaxed space-y-4 mb-8">
          {epoch.description.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <EpochSection />
      </div>
    </div>
  );
}
