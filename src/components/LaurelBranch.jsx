import { motion } from "framer-motion";

export default function LaurelBranch() {
  const drawTransition = {
    duration: 1.8,
    ease: [0.25, 0.1, 0.25, 1],
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 select-none">
      {/* Delicate floating botanical sprig */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2 }}
      >
        <motion.svg
          viewBox="0 0 520 420"
          className="w-64 md:w-80 h-auto overflow-visible"
          animate={{
            rotate: [-0.6, 0.6, -0.6],
            y: [-2, 2, -2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.22))",
          }}
        >
          {/* Main Arched Stem */}
          <motion.path
            d="M 120 390 C 135 310, 168 220, 250 140 C 295 95, 350 65, 410 45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="1.2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, duration: 2.2 }}
          />

          {/* Leaf Pair 1 (Base) */}
          <motion.path
            d="M 142 325 C 105 320, 78 298, 70 270 C 92 276, 124 298, 142 325"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.2 }}
          />
          <motion.path
            d="M 142 325 Q 106 298, 70 270"
            fill="none"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.3 }}
          />

          <motion.path
            d="M 150 312 C 185 296, 212 274, 222 248 C 200 258, 168 285, 150 312"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.3 }}
          />
          <motion.path
            d="M 150 312 Q 186 280, 222 248"
            fill="none"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.4 }}
          />

          {/* Leaf Pair 2 */}
          <motion.path
            d="M 172 250 C 128 234, 104 206, 98 175 C 120 186, 154 218, 172 250"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.45 }}
          />
          <motion.path
            d="M 172 250 Q 135 212, 98 175"
            fill="none"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.55 }}
          />

          <motion.path
            d="M 184 238 C 224 216, 255 190, 266 158 C 238 174, 204 206, 184 238"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.5 }}
          />
          <motion.path
            d="M 184 238 Q 225 198, 266 158"
            fill="none"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.6 }}
          />

          {/* Leaf Pair 3 */}
          <motion.path
            d="M 215 185 C 172 164, 152 132, 154 100 C 176 116, 202 148, 215 185"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.65 }}
          />
          <motion.path
            d="M 215 185 Q 184 142, 154 100"
            fill="none"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.75 }}
          />

          <motion.path
            d="M 230 172 C 274 146, 305 114, 316 82 C 290 100, 252 136, 230 172"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.7 }}
          />
          <motion.path
            d="M 230 172 Q 273 127, 316 82"
            fill="none"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.8 }}
          />

          {/* Leaf Pair 4 */}
          <motion.path
            d="M 276 128 C 238 100, 226 68, 236 36 C 254 58, 272 90, 276 128"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.85 }}
          />
          <motion.path
            d="M 276 128 Q 256 82, 236 36"
            fill="none"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.95 }}
          />

          <motion.path
            d="M 296 112 C 340 84, 372 52, 382 20 C 354 40, 318 74, 296 112"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 0.9 }}
          />
          <motion.path
            d="M 296 112 Q 339 66, 382 20"
            fill="none"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 1.0 }}
          />

          {/* Terminal Apex Leaf */}
          <motion.path
            d="M 385 52 C 418 36, 452 24, 480 16 C 462 42, 428 64, 385 52"
            fill="rgba(255, 255, 255, 0.03)"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 1.1 }}
          />
          <motion.path
            d="M 385 52 Q 432 34, 480 16"
            fill="none"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ ...drawTransition, delay: 1.2 }}
          />

          {/* Delicate Botanical Olive / Laurel Berries */}
          <motion.circle
            cx="198"
            cy="274"
            r="2.2"
            fill="rgba(255, 255, 255, 0.7)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          />
          <motion.circle
            cx="256"
            cy="196"
            r="2.2"
            fill="rgba(255, 255, 255, 0.7)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.85 }}
          />
          <motion.circle
            cx="326"
            cy="132"
            r="2.2"
            fill="rgba(255, 255, 255, 0.7)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.05 }}
          />
        </motion.svg>
      </motion.div>

      {/* Quiet Classical Caption */}
      <motion.p
        className="mt-6 text-white/50 text-xs font-mono tracking-widest lowercase text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        [ laurus nobilis · blessed with love and victory ]
      </motion.p>
    </div>
  );
}
