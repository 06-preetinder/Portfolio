import { appreciation } from "../data/content";

export default function AppreciationSection() {
  return (
    <div className="relative z-10 flex items-center justify-center px-4 pt-8 md:px-16 lg:px-24 pb-4">
      <div className="vignette-pod max-w-5xl w-full p-4 md:p-12 rounded-3xl">
        <p className="text-white text-sm md:text-base leading-relaxed mb-8 px-4 md:px-0 font-serif lowercase">
          appreciation section. many kind words have been{" "}
          <a href="#questions" className="underline hover:opacity-80">
            anonymously (or non-anonymously lol) submitted about my work
          </a>{" "}
          and i thought i'd create a section to honor them. thank you for enjoying.
        </p>

        {/* Dynamic tilted index cards matching jia.build */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 px-2 md:px-0 font-serif">
          {appreciation.map((card, i) => (
            <div
              key={i}
              className="appreciation-card text-white p-3 break-words"
              style={{
                width: i % 2 === 0 ? "clamp(170px, 60vw, 220px)" : "clamp(200px, 80vw, 270px)",
                fontSize: "clamp(0.7rem, 2.8vw, 0.82rem)",
                lineHeight: "1.4",
                "--rot": card.rot,
              }}
            >
              <p className="lowercase">“{card.quote}”</p>
              <p className="mt-2 text-white/60 font-mono" style={{ fontSize: "0.82em" }}>
                [{card.date}]
              </p>
              <p className="mt-1 flex items-center gap-1.5 flex-wrap text-white/80 lowercase">
                <span>— {card.author}</span>
                {/* Clean country badge */}
                <span className="font-mono text-[10px] px-1 border-hairline-dim text-white/70">
                  {card.country}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
