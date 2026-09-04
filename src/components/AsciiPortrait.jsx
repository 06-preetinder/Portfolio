import { useEffect, useState, useRef } from "react";

export default function AsciiPortrait() {
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility percentage around center of viewport
      const centerDist = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
      const maxDist = windowHeight * 0.7;
      const visibleFactor = Math.max(0, 1 - centerDist / maxDist);

      setOpacity(visibleFactor);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 flex flex-col items-center justify-center py-20 px-4 max-w-full overflow-hidden">
      <div
        className="transition-opacity duration-300 border-hairline-dim p-4 bg-black/60"
        style={{ opacity: Math.min(1, opacity * 1.4), width: "fit-content" }}
      >
        <img
          src="/ascii-portrait.svg"
          alt="ASCII portrait"
          className="max-w-[494px] w-full h-auto grayscale"
        />
      </div>

      <p
        className="mt-6 text-white text-sm md:text-base font-mono lowercase tracking-wide glow-text"
        style={{ opacity: Math.min(1, opacity * 1.5) }}
      >
        signals under uncertainty
      </p>
    </div>
  );
}
