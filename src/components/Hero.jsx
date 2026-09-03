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

  // Particle Starfield / Telemetry Canvas
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

    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.6 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

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
      {/* Canvas ambient backdrop */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Atmospheric center text */}
      <div className="relative z-20 text-center px-6 select-none">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif font-normal lowercase tracking-tight glow-text mb-4">
          {profile.shortName}
        </h1>
        <p className="text-white/70 text-base md:text-lg font-serif lowercase italic max-w-xl mx-auto drop-glow">
          "{profile.tagline}"
        </p>
      </div>

      {/* Atmospheric bottom gradient fade to black */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,1) 100%)",
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
              filter: activeTrack === idx && !isMuted ? "drop-shadow(0 0 12px rgba(255,255,255,0.8))" : "none",
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
          /* Muted Volume Icon (lucide volume-x) */
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
          /* Active Volume Icon */
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
