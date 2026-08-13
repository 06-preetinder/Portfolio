export default function Marquee({ items, speed = 28 }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-paper/10 bg-ink-2 py-3">
      <div
        className="flex gap-10 whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs uppercase tracking-[0.2em] text-paper-dim flex items-center gap-10"
          >
            {item}
            <span className="text-brass">◆</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .will-change-transform { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
