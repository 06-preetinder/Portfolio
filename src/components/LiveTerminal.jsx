import { useState, useEffect, useRef } from "react";
import { profile } from "../data/content";

const PRESET_COMMANDS = [
  { cmd: "status", label: "system status" },
  { cmd: "ml-stack", label: "neural stack" },
  { cmd: "the-epoch", label: "epoch telemetry" },
  { cmd: "neofetch", label: "neofetch" },
  { cmd: "clear", label: "clear" },
];

const COMMAND_OUTPUTS = {
  status: [
    { text: "[sys::check] querying active inference clusters...", color: "text-white/50" },
    { text: "● host: indra-luna-node01 // 30.901° N, 75.857° E", color: "text-[#c4a7e7]" },
    { text: "● role: Lead AI/ML & Autonomous Systems Researcher", color: "text-white/90" },
    { text: "● active focus: low-latency vision embeddings & multi-agent reasoning", color: "text-[#9ccfd8]" },
    { text: "● current status: online, compiling papers, monitoring GPU telemetry", color: "text-emerald-400" },
  ],
  "ml-stack": [
    { text: "[kernel::frameworks] PyTorch 2.5.1 + CUDA 12.4 + TensorRT-LLM", color: "text-[#c4a7e7]" },
    { text: "[core::models] Transformers, Diffusion Policy, Mamba / SSMs, FlashAttention-3", color: "text-white/90" },
    { text: "[hardware::edge] Jetson Orin Nano, TPU v5e, quantized INT4/FP8 backends", color: "text-[#f6c177]" },
    { text: "[languages] Python 3.10+, C++20, Rust, TypeScript", color: "text-[#9ccfd8]" },
    { text: "[infra] Ray Train, Slurm, Docker, vLLM, DeepSpeed ZeRO-3", color: "text-white/70" },
  ],
  "the-epoch": [
    { text: "[digest::meta] The Epoch — Weekly Frontier AI Digest", color: "text-[#c4a7e7]" },
    { text: "● dispatches published: 11 weekly issues + 10 research dossiers", color: "text-white/90" },
    { text: "● schedule: bi-weekly every Friday (08:00 EST + 18:00 EST)", color: "text-[#9ccfd8]" },
    { text: "● latest: Issue 11 (Ban ASI Act, AIDE² recursive self-improvement)", color: "text-white/80" },
    { text: "● next sync: Issue 12 queue loaded & validating citations", color: "text-emerald-400" },
  ],
  neofetch: [
    { text: "        /\\         indra@luna-node", color: "text-[#c4a7e7]" },
    { text: "       /  \\        ---------------", color: "text-[#c4a7e7]" },
    { text: "      / /\\ \\       os: indraOS 2.6.10-arch", color: "text-white/90" },
    { text: "     / /  \\ \\      host: Lupex Research Cluster [node-01]", color: "text-white/90" },
    { text: "    / / /\\ \\ \\     kernel: 6.12.4-luna-ai", color: "text-[#9ccfd8]" },
    { text: "   /_/_/  \\_\\_\\    uptime: continuous since 2024", color: "text-[#f6c177]" },
    { text: "                   shell: zsh 5.9 (ai-enhanced)", color: "text-white/70" },
    { text: "                   memory: 128GB Unified / 24GB VRAM active", color: "text-emerald-400" },
  ],
  whoami: [
    { text: `preetinderjeet singh ("indra") — AI/ML systems engineer & researcher.`, color: "text-[#c4a7e7]" },
    { text: `contact: ${profile.email}`, color: "text-white/70" },
  ],
  help: [
    { text: "available commands:", color: "text-[#c4a7e7]" },
    { text: "  status     - query system & ML R&D status", color: "text-white/80" },
    { text: "  ml-stack   - inspect neural architecture & edge stack", color: "text-white/80" },
    { text: "  the-epoch  - view The Epoch digest telemetry", color: "text-white/80" },
    { text: "  neofetch   - display system & hardware summary", color: "text-white/80" },
    { text: "  whoami     - display researcher profile", color: "text-white/80" },
    { text: "  clear      - clear terminal screen", color: "text-white/80" },
  ],
};

export default function LiveTerminal() {
  const [history, setHistory] = useState([
    { text: "indraOS v2.6.10 (x86_64-luna-linux)", color: "text-white/40" },
    { text: 'type "help" or select a preset module below to inspect live telemetry.', color: "text-white/60" },
    { text: "---", color: "text-white/20" },
    ...COMMAND_OUTPUTS.status,
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalBottomRef = useRef(null);

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    const commandEntry = { text: `indra@luna:~$ ${trimmed}`, color: "text-white font-semibold" };

    if (COMMAND_OUTPUTS[trimmed]) {
      setHistory((prev) => [...prev, commandEntry, ...COMMAND_OUTPUTS[trimmed]]);
    } else if (trimmed === "contact") {
      setHistory((prev) => [
        ...prev,
        commandEntry,
        { text: `dispatch email: ${profile.email}`, color: "text-[#c4a7e7]" },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        commandEntry,
        {
          text: `command not found: "${trimmed}". type "help" for available commands.`,
          color: "text-rose-400",
        },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
      setInputVal("");
    }
  };

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  return (
    <section className="relative z-10 flex justify-center px-4 md:px-16 lg:px-24 py-8">
      <div className="max-w-4xl w-full p-4 md:p-8 rounded-2xl bg-black/90 border border-white/20 shadow-[0_0_24px_rgba(0,0,0,0.8)] backdrop-blur-md font-mono text-xs">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f6c177]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#9ccfd8]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#c4a7e7]/80 inline-block" />
            <span className="text-white/60 ml-2 text-[11px]">
              [ indra@luna-node01: ~ ]
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>live telemetry</span>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
          <span className="text-white/40 text-[10px] mr-1">presets:</span>
          {PRESET_COMMANDS.map((item) => (
            <button
              key={item.cmd}
              type="button"
              onClick={() => executeCommand(item.cmd)}
              className="px-2 py-0.5 border border-white/15 hover:border-[#c4a7e7] text-white/70 hover:text-white bg-white/5 rounded text-[11px] transition-colors cursor-pointer"
            >
              $ {item.cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Body */}
        <div
          className="thoughts-scroll overflow-y-auto space-y-1.5 pr-2"
          style={{ maxHeight: "240px", minHeight: "160px" }}
        >
          {history.map((line, idx) => (
            <div key={idx} className={`${line.color} leading-relaxed font-mono`}>
              {line.text}
            </div>
          ))}
          <div ref={terminalBottomRef} />
        </div>

        {/* Interactive Prompt Input */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
          <span className="text-[#c4a7e7] font-semibold">indra@luna:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type command (e.g. status, ml-stack, whoami)..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-white/30"
          />
        </div>
      </div>
    </section>
  );
}
