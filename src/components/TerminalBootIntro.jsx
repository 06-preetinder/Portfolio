import { useState, useEffect } from "react";

const BOOT_LOGS = [
  "boot indraOS v2.6.10 [x86_64-luna-linux] ... [ OK ]",
  "allocating GPU tensor cores & PyTorch 2.5 context ... [ OK ]",
  "establishing coordinates: 30.901° N, 75.857° E ... [ OK ]",
  "mounting The Epoch weekly AI archive [11 issues active] ... [ OK ]",
  "loading Preetinder Singh engineering portfolio ... [ OK ]",
  "entering systems interface ...",
];

export default function TerminalBootIntro() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [renderedLogs, setRenderedLogs] = useState([]);

  const dismiss = () => {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem("indra_boot_seen", "true");
      } catch {
        // ignore
      }
    }, 500);
  };

  const startBoot = () => {
    setVisible(true);
    setFading(false);
    setRenderedLogs([]);

    let step = 0;
    const interval = setInterval(() => {
      if (step < BOOT_LOGS.length) {
        const line = BOOT_LOGS[step];
        setRenderedLogs((prev) => [...prev, line]);
        step++;
      } else {
        clearInterval(interval);
        setTimeout(dismiss, 450);
      }
    }, 240);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const hasSeen = typeof window !== "undefined" && sessionStorage.getItem("indra_boot_seen");
    if (!hasSeen) {
      startBoot();
    }

    const handleManualTrigger = () => startBoot();
    window.addEventListener("trigger-boot-sequence", handleManualTrigger);

    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === " ") {
        dismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("trigger-boot-sequence", handleManualTrigger);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={dismiss}
      role="dialog"
      aria-label="System Boot Sequence"
      className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4 font-mono select-none cursor-pointer transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-lg p-6 bg-black/90 border border-white/20 rounded-xl shadow-[0_0_30px_rgba(196,167,231,0.15)] backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c4a7e7] animate-pulse" />
            <span className="text-white/80 font-mono">indraOS :: boot</span>
          </div>
          <span className="text-[10px] text-white/40">[esc / click to skip]</span>
        </div>

        <div className="space-y-2 text-xs">
          {renderedLogs.map((log, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-[#c4a7e7] select-none">{">"}</span>
              <span
                className={`${
                  idx === renderedLogs.length - 1 ? "text-white" : "text-white/70"
                }`}
              >
                {log}
              </span>
            </div>
          ))}

          {renderedLogs.length < BOOT_LOGS.length && (
            <div className="flex items-center gap-1 text-[#c4a7e7] text-xs">
              <span>{">"}</span>
              <span className="w-2 h-3.5 bg-[#c4a7e7] animate-pulse inline-block" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
