import { useEffect, useRef, useState } from "react";
import { ambientAudio } from "../utils/ambientAudio";
import { profile } from "../data/content";

export default function Hero() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const canvasRef = useRef(null);

  const tracks = [
    { id: 0, label: "things i am afraid of (august)" },
    { id: 1, label: "hiawatha hill, favorite place in the world" },
    { id: 2, label: "signals under uncertainty" },
    { id: 3, label: "nocturnal sf (calm night)" },
  ];

  // Celestial Canvas: Starfield + Big Dipper + Virgo Constellation + Shooting Stars
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
    const backgroundStars = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.4,
      baseAlpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    // 2. Big Dipper (Ursa Major) Coordinates (normalized [0, 1])
    // Placed in upper left-center
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
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 3],
    ];

    // 3. Virgo Constellation Coordinates (normalized [0, 1])
    // Placed in right quadrant, centered around Spica (alpha Virginis)
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
      [0, 1], // Spica to Heze
      [1, 2], // Heze to Porrima
      [2, 3], // Porrima to Auva
      [3, 4], // Auva to Vindemiatrix
      [3, 5], // Auva to Zavijava
      [5, 6], // Zavijava to Zaniah
      [6, 2], // Zaniah to Porrima
      [0, 7], // Spica to Syrma
    ];

    // 4. Shooting Stars (Meteors) Engine
    const shootingStars = [];
    let lastMeteorTime = Date.now();

    const spawnMeteor = () => {
      // Spawn from top or top-right towards bottom-left
      const startX = Math.random() * (width * 0.8) + width * 0.1;
      const startY = Math.random() * (height * 0.35);
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3; // roughly 45 degrees
      const speed = Math.random() * 8 + 12;

      shootingStars.push({
        x: startX,
        y: startY,
        vx: -Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 80 + 70,
        life: 1.0,
        decay: Math.random() * 0.02 + 0.015,
        thickness: Math.random() * 1.5 + 1.2,
      });
    };

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // --- Draw Twinkling Background Stars ---
      backgroundStars.forEach((star) => {
        const alpha = star.baseAlpha + Math.sin(time * star.pulseSpeed + star.phase) * 0.25;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(1, alpha))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- Draw Big Dipper ---
      const bdPoints = bigDipperRaw.map((s) => ({
        x: s.x * width,
        y: s.y * height,
        name: s.name,
      }));

      // Constellation lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
      ctx.lineWidth = 0.75;
      ctx.setLineDash([3, 4]);
      bigDipperEdges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(bdPoints[i].x, bdPoints[i].y);
        ctx.lineTo(bdPoints[j].x, bdPoints[j].y);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // Stars
      bdPoints.forEach((p) => {
        // Outer subtle glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 6);
        glow.addColorStop(0, "rgba(255, 255, 255, 0.9)");
        glow.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Big Dipper Label
      ctx.font = "10px monospace";
      ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
      ctx.fillText("[ ursa major ]", bdPoints[3].x - 10, bdPoints[3].y - 12);

      // --- Draw Virgo Constellation ---
      const virgoPoints = virgoRaw.map((s) => ({
        x: s.x * width,
        y: s.y * height,
        name: s.name,
        isSpica: s.isSpica,
      }));

      // Constellation lines
      ctx.strokeStyle = "rgba(196, 167, 231, 0.28)"; // subtle lavender tint
      ctx.lineWidth = 0.75;
      ctx.setLineDash([3, 4]);
      virgoEdges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(virgoPoints[i].x, virgoPoints[i].y);
        ctx.lineTo(virgoPoints[j].x, virgoPoints[j].y);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // Stars
      virgoPoints.forEach((p) => {
        if (p.isSpica) {
          // Bright Spica star with lavender halo
          const spicaGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 10);
          spicaGlow.addColorStop(0, "rgba(215, 195, 255, 0.95)");
          spicaGlow.addColorStop(0.4, "rgba(196, 167, 231, 0.45)");
          spicaGlow.addColorStop(1, "rgba(196, 167, 231, 0)");
          ctx.fillStyle = spicaGlow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.font = "9px monospace";
          ctx.fillStyle = "rgba(196, 167, 231, 0.85)";
          ctx.fillText("spica α", p.x + 8, p.y + 3);
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Virgo Label
      ctx.font = "10px monospace";
      ctx.fillStyle = "rgba(196, 167, 231, 0.45)";
      ctx.fillText("[ virgo ♍ ]", virgoPoints[0].x - 30, virgoPoints[0].y + 24);

      // --- Spawn and Draw Shooting Stars ---
      const now = Date.now();
      if (now - lastMeteorTime > 2400 + Math.random() * 2000) {
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

        // Tail calculation
        const tailX = m.x - (m.vx / Math.hypot(m.vx, m.vy)) * m.length;
        const tailY = m.y - (m.vy / Math.hypot(m.vx, m.vy)) * m.length;

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, "rgba(255, 255, 255, 0)");
        grad.addColorStop(0.7, `rgba(196, 167, 231, ${m.life * 0.4})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${m.life * 0.95})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = m.thickness;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Meteor Head Spark
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

  const handleTrackChange = (idx) => {
    setActiveTrack(idx);
    setIsMuted(false);
    ambientAudio.setMuted(false);
    ambientAudio.playTrack(idx);
  };

  const handleToggleMute = () => {
    const nextMuted = ambientAudio.toggleMute();
    setIsMuted(nextMuted);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center">
      {/* Canvas ambient backdrop with constellations & shooting stars */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Atmospheric center text */}
      <div className="relative z-20 text-center px-6 select-none max-w-2xl mx-auto">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-normal lowercase tracking-tight glow-text mb-2">
          {profile.shortName}
        </h1>

        {/* Name Meaning & Identity subtitle directly under indra */}
        <p className="text-white/70 text-xs md:text-sm font-serif italic lowercase tracking-wider mb-4 drop-glow">
          (preetinderjeet) — one who is blessed with love and victory.
        </p>

        <p className="text-white/80 text-base md:text-lg font-serif lowercase italic max-w-xl mx-auto drop-glow">
          "{profile.tagline}"
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

      {/* Track selector buttons at bottom right */}
      <div className="absolute bottom-9 right-16 md:right-24 z-30 flex items-center gap-4 md:gap-6 glow-text">
        {tracks.map((t, idx) => (
          <button
            key={t.id}
            onClick={() => handleTrackChange(idx)}
            aria-label={t.label}
            className="text-white text-xs md:text-sm font-mono hover:opacity-100 transition-opacity cursor-pointer"
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
        className="absolute bottom-9 right-6 md:right-10 text-white hover:opacity-80 transition-opacity z-30 cursor-pointer drop-glow"
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
            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
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
