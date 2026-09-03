import { thoughts } from "../data/content";

export default function ThoughtsSection() {
  return (
    <div className="relative z-10 flex justify-center px-4 md:px-16 lg:px-24 pb-12">
      <div className="max-w-4xl w-full p-4 md:p-12 space-y-6">
        <div className="text-white text-sm md:text-base leading-relaxed w-full p-4 border-hairline font-serif">
          <p className="font-serif lowercase text-white/90 mb-3">current thoughts</p>

          <div
            className="space-y-2 thoughts-scroll overflow-y-scroll pr-2"
            style={{ maxHeight: "240px" }}
          >
            {thoughts.map((t, idx) => (
              <div key={idx} className="p-3 border-hairline-dim bg-black/40">
                <p className="text-xs text-white/50 font-mono">{t.date}</p>
                <p className="mt-1 lowercase text-white/90 text-sm leading-relaxed">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
