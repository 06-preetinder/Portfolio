import { useEffect, useRef, useState } from "react";
import { ambientAudio } from "../utils/ambientAudio";
import { profile } from "../data/content";

export default function Hero() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const canvasRef = useRef(null);

  const tracks = [
    { id: 0, label: "golden brown" },
    { id: 1, label: "stan" },
    { id: 2, label: "babydoll" },
    { id: 3, label: "far from any road" },
    { id: 4, label: "music to watch boys to" },
  ];

  // Celestial Canvas: Starfield + Big Dipper + Virgo + Cassiopeia + Shooting Stars + Indra's Divine Lightning
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // 1. Ambient Background Twinkling Stars
    const backgroundStars = Array.from({ length: 95 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.3 + 0.35,
      baseAlpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    // 2. Big Dipper (Ursa Major) Coordinates (normalized [0, 1])
    const bigDipperRaw = [
      { name: "Alkaid", x: 0.12, y: 0.18 },
      { name: "Mizar", x: 0.17, y: 0.22 },
      { name: "Alioth", x: 0.22, y: 0.25 },
      { name: "Megrez", x: 0.28, y: 0.29 },
      { name: "Phecda", x: 0.27, y: 0.38 },
      { name: "Merak", x: 0.35, y: 0.41 },
      { name: "Dubhe", x: 0.36, y: 0.31 },
    ];
    const bigDipperEdges = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3],
    ];

    // 3. Virgo Constellation (♍) with Spica α
    const virgoRaw = [
      { name: "Spica", x: 0.82, y: 0.36, isSpica: true },
      { name: "Heze", x: 0.77, y: 0.28 },
      { name: "Porrima", x: 0.73, y: 0.22 },
      { name: "Auva", x: 0.69, y: 0.24 },
      { name: "Vindemiatrix", x: 0.71, y: 0.16 },
      { name: "Zavijava", x: 0.64, y: 0.21 },
      { name: "Zaniah", x: 0.67, y: 0.28 },
      { name: "Syrma", x: 0.86, y: 0.44 },
    ];
    const virgoEdges = [
      [0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [6, 2], [0, 7],
    ];

    // 4. Cassiopeia (Queen of the Northern Sky - Iconic W-shape)
    const cassiopeiaRaw = [
      { name: "Caph", x: 0.45, y: 0.14 },
      { name: "Schedar", x: 0.49, y: 0.19 },
      { name: "Navi", x: 0.53, y: 0.13 },
      { name: "Ruchbah", x: 0.57, y: 0.18 },
      { name: "Segin", x: 0.61, y: 0.14 },
    ];
    const cassiopeiaEdges = [
      [0, 1], [1, 2], [2, 3], [3, 4],
    ];

    // 5. Shooting Stars (Meteors)
    const shootingStars = [];
    let lastMeteorTime = Date.now();

    const spawnMeteor = () => {
      const startX = Math.random() * (width * 0.85) + width * 0.1;
      const startY = Math.random() * (height * 0.35);
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.35;
      const speed = Math.random() * 8 + 12;

      shootingStars.push({
        x: startX,
        y: startY,
        vx: -Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 80 + 75,
        life: 1.0,
        decay: Math.random() * 0.02 + 0.015,
        thickness: Math.random() * 1.5 + 1.2,
      });
    };

    // 6. Indra's Divine Lightning (Vajra) Generator
    let activeLightning = null;
    let skyFlashAlpha = 0;
    let lastLightningTime = Date.now();

    const createLightningBolt = (startX, startY, endX, endY) => {
      const segments = [];
      const generateBranch = (x1, y1, x2, y2, depth) => {
        if (depth <= 0) {
          segments.push({ x1, y1, x2, y2 });
          return;
        }
        const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * Math.abs(x2 - x1) * 0.6;
        const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * 25;
        generateBranch(x1, y1, midX, midY, depth - 1);
        generateBranch(midX, midY, x2, y2, depth - 1);

        // Sub-fork branch
        if (depth === 3 && Math.random() < 0.6) {
          const forkX = midX + (Math.random() - 0.5) * 90;
          const forkY = midY + Math.random() * 60 + 20;
          generateBranch(midX, midY, forkX, forkY, depth - 2);
        }
      };
      generateBranch(startX, startY, endX, endY, 5);
      return segments;
    };

    const triggerLightning = () => {
      // Indra's celestial strike from high atmosphere
      const startX = Math.random() * (width * 0.7) + width * 0.15;
      const startY = Math.random() * (height * 0.15);
      const endX = startX + (Math.random() - 0.5) * (width * 0.25);
      const endY = startY + Math.random() * (height * 0.45) + (height * 0.25);

      activeLightning = {
        segments: createLightningBolt(startX, startY, endX, endY),
        life: 1.0,
      };
      skyFlashAlpha = 0.16; // soft atmospheric illumination
    };

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // --- Ambient Sky Flash from Divine Lightning ---
      if (skyFlashAlpha > 0.005) {
        ctx.fillStyle = `rgba(255, 255, 255, ${skyFlashAlpha * 0.22})`; // subtle white ambient illumination
        ctx.fillRect(0, 0, width, height);
        skyFlashAlpha *= 0.78;
      }

      // --- Draw Twinkling Background Stars ---
      backgroundStars.forEach((star) => {
        const alpha = star.baseAlpha + Math.sin(time * star.pulseSpeed + star.phase) * 0.25;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(1, alpha))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- Helper: Draw Constellation ---
      const drawConstellation = (rawStars, edges, lineStroke, label, labelXOffset, labelYOffset, isVirgo = false) => {
        const points = rawStars.map((s) => ({
          x: s.x * width,
          y: s.y * height,
          name: s.name,
          isSpica: s.isSpica,
        }));

        // Dashed constellation lines
        ctx.strokeStyle = lineStroke;
        ctx.lineWidth = 0.75;
        ctx.setLineDash([3, 4]);
        edges.forEach(([i, j]) => {
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        });
        ctx.setLineDash([]);

        // Stars
        points.forEach((p) => {
          if (p.isSpica) {
            // Spica bright star with lavender/gold aura
            const spicaGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 11);
            spicaGlow.addColorStop(0, "rgba(255, 245, 210, 0.95)");
            spicaGlow.addColorStop(0.4, "rgba(247, 215, 115, 0.5)");
            spicaGlow.addColorStop(1, "rgba(196, 167, 231, 0)");
            ctx.fillStyle = spicaGlow;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 11, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.font = "9px monospace";
            ctx.fillStyle = "rgba(247, 215, 115, 0.85)";
            ctx.fillText("spica α", p.x + 8, p.y + 3);
          } else {
            ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.7, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // Constellation Label
        ctx.font = "10px monospace";
        ctx.fillStyle = lineStroke.replace("0.22", "0.45").replace("0.28", "0.5");
        ctx.fillText(label, points[0].x + labelXOffset, points[0].y + labelYOffset);
      };

      // Draw Big Dipper (Ursa Major)
      drawConstellation(bigDipperRaw, bigDipperEdges, "rgba(255, 255, 255, 0.22)", "[ ursa major ]", -15, -12);

      // Draw Virgo (♍)
      drawConstellation(virgoRaw, virgoEdges, "rgba(196, 167, 231, 0.28)", "[ virgo ♍ ]", -25, 26, true);

      // Draw Cassiopeia (Queen W)
      drawConstellation(cassiopeiaRaw, cassiopeiaEdges, "rgba(255, 255, 255, 0.22)", "[ cassiopeia ]", -20, -10);

      // --- Draw Indra's Divine Lightning Bolt ---
      const now = Date.now();
      if (now - lastLightningTime > 5500 + Math.random() * 4500) {
        triggerLightning();
        lastLightningTime = now;
      }

      if (activeLightning && activeLightning.life > 0) {
        const lAlpha = activeLightning.life;
        ctx.lineWidth = 1.4;
        ctx.strokeStyle = `rgba(255, 255, 255, ${lAlpha * 0.95})`; // ethereal white core
        ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
        ctx.shadowBlur = 10;

        activeLightning.segments.forEach((seg) => {
          ctx.beginPath();
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
          ctx.stroke();
        });

        // Reset shadow
        ctx.shadowBlur = 0;
        activeLightning.life -= 0.12; // fast lightning fade
        if (activeLightning.life <= 0) activeLightning = null;
      }

      // --- Spawn and Draw Shooting Stars ---
      if (now - lastMeteorTime > 2600 + Math.random() * 2200) {
        spawnMeteor();
        lastMeteorTime = now;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const m = shootingStars[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life -= m.decay;

        if (m.life <= 0 || m.x < -100 || m.y > height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = m.x - (m.vx / Math.hypot(m.vx, m.vy)) * m.length;
        const tailY = m.y - (m.vy / Math.hypot(m.vx, m.vy)) * m.length;

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, "rgba(255, 255, 255, 0)");
        grad.addColorStop(0.7, `rgba(255, 255, 255, ${m.life * 0.35})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${m.life * 0.95})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = m.thickness;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${m.life})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.thickness * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  // Autoplay music on initial load once, unblocking seamlessly on first gesture if restricted
  useEffect(() => {
    ambientAudio.setMuted(false);
    ambientAudio.playTrack(0);

    const checkPlayState = () => {
      if (ambientAudio.audio && !ambientAudio.audio.paused) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    };

    const interval = setInterval(checkPlayState, 300);

    const unlockAudio = () => {
      if (!ambientAudio.isMuted) {
        if (!ambientAudio.audio || ambientAudio.audio.paused) {
          ambientAudio.playTrack(ambientAudio.currentTrack);
        }
      }
      setIsPlaying(true);
      ["click", "mousedown", "pointerdown", "touchstart", "keydown"].forEach((evt) => {
        window.removeEventListener(evt, unlockAudio);
      });
    };

    ["click", "mousedown", "pointerdown", "touchstart", "keydown"].forEach((evt) => {
      window.addEventListener(evt, unlockAudio, { passive: true });
    });

    return () => {
      clearInterval(interval);
      ["click", "mousedown", "pointerdown", "touchstart", "keydown"].forEach((evt) => {
        window.removeEventListener(evt, unlockAudio);
      });
    };
  }, []);

  const handleTrackChange = (idx) => {
    setActiveTrack(idx);
    setIsMuted(false);
    setIsPlaying(true);
    ambientAudio.setMuted(false);
    ambientAudio.playTrack(idx);
  };

  const handleToggleMute = () => {
    const nextMuted = ambientAudio.toggleMute();
    setIsMuted(nextMuted);
    setIsPlaying(!nextMuted);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center">
      {/* Canvas ambient backdrop with constellations, shooting stars & Indra lightning */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Clean minimalist center text matching jia.build */}
      <div className="relative z-20 text-center px-6 select-none max-w-xl mx-auto">
        {/* Title: Clean minimalist Indra */}
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight glow-text mb-2">
          Indra
        </h1>

        {/* Subtitle: Clean ethereal white lowercase italic */}
        <p className="text-white/60 text-xs md:text-sm font-serif italic tracking-wider lowercase">
          one who is blessed with love and victory.
        </p>
      </div>

      {/* Atmospheric bottom gradient fade to black */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* 30s Executive Speedrun cue bottom-left */}
      <button
        onClick={() => window.dispatchEvent(new CustomEvent("open-dossier"))}
        aria-label="Open 30-second Recruiter Dossier"
        className="absolute bottom-20 sm:bottom-9 left-4 sm:left-6 md:left-10 z-30 flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-[11px] text-white/75 hover:text-white border-hairline-dim px-2.5 py-1 sm:px-3 sm:py-1.5 bg-black/70 hover:bg-white/10 hover:border-white/50 backdrop-blur-md rounded-full transition-all cursor-pointer glow-text shadow-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#c4a7e7] animate-pulse" />
        <span>[ 30s recruiter speedrun ]</span>
        <kbd className="hidden sm:inline-block text-[9px] text-white/40 bg-white/10 px-1 rounded">⌘K</kbd>
      </button>

      {/* If browser blocked autoplay before user's first gesture, show sleek cue */}
      {!isPlaying && !isMuted && (
        <div className="absolute bottom-16 right-3 sm:right-6 md:right-10 z-30 font-mono text-[9px] sm:text-[10px] text-white/70 border-hairline-dim px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/80 tracking-wider flex items-center gap-1.5 sm:gap-2 pointer-events-none animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c4a7e7] animate-ping" />
          <span>[ click anywhere to start music ]</span>
        </div>
      )}

      {/* Track selector buttons at bottom right */}
      <div className="absolute bottom-9 right-11 sm:right-16 md:right-24 z-30 flex items-center gap-2.5 sm:gap-4 md:gap-6 glow-text">
        {tracks.map((t, idx) => (
          <button
            key={t.id}
            onClick={() => handleTrackChange(idx)}
            aria-label={t.label}
            className="text-white text-xs md:text-sm font-mono hover:opacity-100 transition-opacity cursor-pointer px-0.5"
            style={{
              opacity: activeTrack === idx && !isMuted ? 1 : 0.55,
              filter:
                activeTrack === idx && !isMuted
                  ? "drop-shadow(0 0 12px rgba(255,255,255,0.8))"
                  : "none",
            }}
          >
            <span className="md:hidden">{idx + 1}</span>
            <span className="hidden md:inline">{t.label}</span>
          </button>
        ))}
      </div>

      {/* Volume toggle icon button */}
      <button
        onClick={handleToggleMute}
        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        className="absolute bottom-9 right-3 sm:right-6 md:right-10 text-white hover:opacity-80 transition-opacity z-30 cursor-pointer drop-glow"
      >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
            <line x1="22" x2="16" y1="9" y2="15" />
            <line x1="16" x2="22" y1="9" y2="15" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
      </button>
    </div>
  );
}
