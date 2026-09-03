import { profile } from "../data/content";

export default function PersonalStory() {
  return (
    <div className="relative z-10 flex items-center justify-center px-4 pt-8 md:px-16 lg:px-24 pb-8">
      <div className="vignette-pod max-w-4xl w-full p-4 md:p-12 rounded-3xl">
        <div className="text-white text-sm md:text-base leading-relaxed space-y-4 px-4 md:px-0 break-words font-serif">
          <p className="text-white/60 font-mono text-xs">
            august updates, 8/28/26, 3:14am:
          </p>
          {profile.personalManifesto.split("\n\n").map((para, i) => (
            <p key={i} className="lowercase leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Candid Life & Research Photography Section matching jia.build */}
      <div className="max-w-4xl w-full px-4 md:px-12 mt-8">
        <div className="flex flex-col md:flex-row gap-6 items-start w-full font-serif">
          <div className="flex-1 w-full flex flex-col gap-4 min-w-0">
            <p className="text-white text-sm md:text-base leading-relaxed lowercase">
              i played chess competitively for years before shifting focus to mathematical modeling and machine learning. getting back into classical time controls alongside speedcubing.
            </p>
            <div className="border-hairline overflow-hidden max-w-sm">
              <img
                src="/candid/chess-youth.jpg"
                alt="Competitive chess"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed lowercase">
              the rigor carries directly into simulation: anticipating adversarial failure states before executing an action.
            </p>
          </div>

          <div className="w-full md:w-[380px] flex-shrink-0 flex flex-col gap-3">
            <div className="border-hairline overflow-hidden">
              <img
                src="/candid/city-walk.jpg"
                alt="Night walks"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed lowercase">
              late night walks in the city between simulation batches. clears the mind for C++ memory optimizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
