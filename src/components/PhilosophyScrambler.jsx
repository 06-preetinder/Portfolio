import { useState, useEffect, useRef } from "react";

const AXIOMS = [
  "we solve for minimum energy paths under chaotic bounds.",
  "one must imagine sisyphus happy before the gradient converges.",
  "to think is to calculate in the dark until the trajectory holds.",
  "the psychology of spite versus cold mathematical optimization.",
  "blessed with love and victory, yet the loss function never rests.",
  "in the middle of winter, i found within me an invincible summer.",
];

const GLYPHS = "@#%&*+=~:./\\<>[]{}01_λ∂∇";

export default function PhilosophyScrambler() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(AXIOMS[0]);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);

  const scrambleTo = (targetText) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = targetText.length * 3;

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return targetText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 3) {
              return targetText[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");
      });

      iteration += 1;

      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(targetText);
        setIsScrambling(false);
      }
    }, 28);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % AXIOMS.length;
    setCurrentIndex(nextIdx);
    scrambleTo(AXIOMS[nextIdx]);
  };

  const handleHover = () => {
    if (!isScrambling) {
      scrambleTo(AXIOMS[currentIndex]);
    }
  };

  useEffect(() => {
    // Initial reveal scramble
    scrambleTo(AXIOMS[0]);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 select-none">
      <div
        className="w-full max-w-3xl flex flex-col items-center text-center cursor-pointer group"
        onClick={handleNext}
        onMouseEnter={handleHover}
      >
        {/* Minimal header coordinates */}
        <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs text-white/40 tracking-widest uppercase mb-4">
          <span className="text-[#c4a7e7]">// INDRA CIPHER</span>
          <span>·</span>
          <span>AXIOM {String(currentIndex + 1).padStart(2, "0")} / {String(AXIOMS.length).padStart(2, "0")}</span>
          <span>·</span>
          <span className="hidden sm:inline group-hover:text-white transition-colors">
            click to cycle
          </span>
        </div>

        {/* Large scrambler typography */}
        <div className="min-h-[72px] md:min-h-[88px] flex items-center justify-center px-2 sm:px-4 w-full max-w-full overflow-hidden">
          <p
            className={`font-mono text-sm sm:text-base md:text-2xl text-white tracking-tight leading-relaxed transition-all duration-300 break-words max-w-full ${
              isScrambling ? "text-white/80" : "glow-text"
            }`}
          >
            {displayText}
          </p>
        </div>

        {/* Marginalia bottom prompt */}
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-white/30 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4a7e7] group-hover:animate-ping" />
          <span>[ click or hover to decode next theorem ]</span>
        </div>
      </div>
    </div>
  );
}
