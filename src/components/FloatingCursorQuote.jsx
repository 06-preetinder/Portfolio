import { useEffect, useState } from "react";

export default function FloatingCursorQuote() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [visible]);

  return (
    <div
      className="fixed z-50 pointer-events-none transition-opacity duration-200 font-mono text-xs md:text-sm text-white/90 whitespace-nowrap glow-text"
      style={{
        left: `${pos.x + 16}px`,
        top: `${pos.y + 16}px`,
        opacity: visible ? 0.75 : 0,
      }}
    >
      <span style={{ color: "#c4a7e7" }}>•</span> there is no guarantee the model is right
    </div>
  );
}
