import { authorCollage } from "../data/content";

export default function AuthorsCollage() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-12 md:px-16 lg:px-24 pb-16 font-serif">
      {/* Pod container */}
      <div className="vignette-pod max-w-5xl w-full p-6 md:p-12 rounded-3xl">
        {/* Header with divine gold accent */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-8 px-2 md:px-0">
          <div>
            <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase block mb-1">
              [ literary grounding & philosophy ]
            </span>
            <h3 className="text-2xl md:text-3xl text-white glow-gold-divine lowercase">
              books, absurdism & the authors who shaped the mind
            </h3>
          </div>
          <span className="font-mono text-xs text-white/40 italic">
            * (what an ML researcher reads at 2am)
          </span>
        </div>

        {/* Pinterest-style Staggered Scrapbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {authorCollage.map((item, idx) => (
            <div
              key={idx}
              className="relative p-5 bg-black/70 border-hairline transition-all duration-300 hover:scale-[1.02] hover:z-20 group"
              style={{
                transform: `rotate(${item.rot})`,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.8)",
              }}
            >
              {/* Tape / Pin snippet in top corner */}
              <div className="absolute -top-2 left-6 px-2 py-0.5 bg-white/10 border border-white/20 text-[9px] font-mono text-white/60 tracking-wider">
                {item.year}
              </div>

              {/* Author image with dark academia grayscale styling */}
              <div className="w-full h-44 overflow-hidden border-hairline-dim mb-4 bg-white/5">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>

              {/* Author name & book works */}
              <div className="flex items-baseline justify-between gap-2 mb-2">
                <h4 className="text-base text-white font-medium glow-text">
                  {item.author}
                </h4>
                <span className="font-mono text-[10px] text-[#c4a7e7]">
                  [{item.tag}]
                </span>
              </div>

              <p className="font-mono text-[11px] text-white/50 mb-3 truncate">
                {item.works}
              </p>

              {/* The Famous Work-Inspired Quote */}
              <blockquote className="text-xs md:text-sm text-white/90 italic leading-relaxed pl-3 border-l border-[#f7d77e]/60 mb-3 glow-gold-subtle">
                "{item.quote}"
              </blockquote>

              {/* Candid annotation in Jia's idiosyncratic handwriting/monospace style */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/40">
                <span>// {item.annotation}</span>
                <span className="text-[#f7d77e]/50">§</span>
              </div>
            </div>
          ))}

          {/* Bonus Organic Note Card to fill grid balance & perfect randomness ratio */}
          <div
            className="p-5 bg-black/60 border border-dashed border-white/25 flex flex-col justify-between self-stretch"
            style={{
              transform: "rotate(1.2deg)",
            }}
          >
            <div>
              <span className="font-mono text-[10px] text-white/40 block mb-2">
                // why literature matters to code:
              </span>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed italic lowercase">
                math gives you the certainty of a gradient step. literature gives you the humility to remember humans build systems with contradictory motives.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/10 font-mono text-[10px] text-white/40 flex justify-between">
              <span>[ dark academia shelf ]</span>
              <span>30.9° N</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
