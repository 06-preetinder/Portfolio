import { profile } from "../data/content";

export default function PersonalStory() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center px-3 sm:px-4 pt-8 md:px-16 lg:px-24 pb-8 font-serif overflow-hidden">
      {/* Manifesto Pod */}
      <div className="vignette-pod max-w-4xl w-full p-4 sm:p-6 md:p-12 rounded-2xl md:rounded-3xl mb-8 overflow-hidden">
        <div className="text-white text-sm md:text-base leading-relaxed space-y-4 px-2 sm:px-4 md:px-0 break-words">
          <div className="flex items-center justify-between text-white/50 font-mono text-xs border-b border-white/10 pb-2">
            <span>august updates, 8/28/26, 3:14am</span>
            <span>// raw notes</span>
          </div>
          {profile.personalManifesto.split("\n\n").map((para, i) => (
            <p key={i} className="lowercase leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Candid Chess & Discipline Section with subtle Jia-style tilt */}
      <div className="max-w-4xl w-full px-2 sm:px-4 md:px-12 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 items-start w-full">
          <div
            className="flex-1 w-full flex flex-col gap-3 min-w-0"
            style={{ transform: "rotate(-0.8deg)" }}
          >
            <p className="text-white text-sm md:text-base leading-relaxed lowercase">
              {profile.chessNote}
            </p>
            <div className="border-hairline overflow-hidden max-w-sm">
              <img
                src="/candid/dark_academia_chess.jpg"
                alt="Chessboard with Dostoevsky and dark tea"
                className="w-full h-auto object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed lowercase font-mono">
              anticipation of adversarial states. classical chess carries into simulation safety.
            </p>
          </div>

          <div
            className="w-full md:w-[360px] flex-shrink-0 flex flex-col gap-3"
            style={{ transform: "rotate(1deg)" }}
          >
            <div className="border-hairline overflow-hidden">
              <img
                src="/candid/dark_academia_library.jpg"
                alt="Historic dark academia library"
                className="w-full h-auto object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
            <p className="text-white/60 text-xs leading-relaxed lowercase font-mono">
              [ 30.901° N ] late night walks between neural simulation runs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
