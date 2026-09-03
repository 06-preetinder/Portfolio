import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroReveal() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem("intro-seen"));

useEffect(() => {
  if (!visible) return;
  sessionStorage.setItem("intro-seen", "true");
  const t = setTimeout(() => setVisible(false), 2000);
  return () => clearTimeout(t);
}, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center pointer-events-none overflow-hidden">
      {/* catalog mark, fades early */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.1, times: [0, 0.3, 0.6, 1] }}
        className="absolute font-mono text-xs uppercase tracking-[0.3em] text-brass z-10"
      >
        PS · CAT. PS-000
      </motion.span>

      {/* expanding window : transparent box with a huge black shadow around it */}
      <motion.div
        initial={{ width: 6, height: 6 }}
        animate={{ width: "220vmax", height: "220vmax" }}
        transition={{ duration: 1.1, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
        style={{ boxShadow: "0 0 0 100vmax #0b0b0d" }}
        className="rounded-sm"
      />
    </div>
  );
}