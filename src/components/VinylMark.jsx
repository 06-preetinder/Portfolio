import { motion } from "framer-motion";

// The site's signature element: a rotating catalog label, styled like a
// vinyl record's center label — ties the "record label" concept to something
// concrete instead of decorative gold-on-black.
export default function VinylMark({ size = 220 }) {
  return (
    <motion.div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <circle cx="100" cy="100" r="98" fill="#131316" stroke="#c8a24d" strokeWidth="1" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="#c8a24d" strokeOpacity="0.25" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="64" fill="none" stroke="#c8a24d" strokeOpacity="0.25" strokeWidth="0.5" />
        <path
          id="circlePath"
          d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          fill="none"
        />
        <text fill="#c8a24d" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="3">
          <textPath href="#circlePath" startOffset="0%">
            PREETINDERJEET SINGH · CAT. PS-001 · MACHINE LEARNING · RESEARCH ·
          </textPath>
        </text>
        <circle cx="100" cy="100" r="30" fill="#0b0b0d" stroke="#c8a24d" strokeWidth="1" />
        <circle cx="100" cy="100" r="4" fill="#c8a24d" />
      </svg>
    </motion.div>
  );
}
