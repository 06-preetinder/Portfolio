import { useEffect, useRef } from "react";

export default function AmbientCursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let animationId;
    let particles = [];
    let mouse = { x: -100, y: -100, moving: false };
    let idleTimer = null;

    const colors = [
      "rgba(196, 167, 231, ", // lavender #c4a7e7
      "rgba(156, 207, 216, ", // cyan #9ccfd8
      "rgba(246, 193, 119, ", // warm gold #f6c177
      "rgba(255, 255, 255, ", // white
    ];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.moving = true;

      // Spawn 1 to 2 subtle motes per movement
      const count = Math.random() > 0.4 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        const colorBase = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;
        particles.push({
          x: mouse.x + (Math.random() * 6 - 3),
          y: mouse.y + (Math.random() * 6 - 3),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.2, // gentle cosmic drift upward
          radius: Math.random() * 1.8 + 0.8,
          alpha: Math.random() * 0.45 + 0.35,
          decay: Math.random() * 0.02 + 0.015,
          colorBase,
        });
      }

      // Cap particles for peak 60fps performance
      if (particles.length > 55) {
        particles.splice(0, particles.length - 55);
      }

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        mouse.moving = false;
      }, 120);
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle with gentle soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${p.alpha})`;
        ctx.shadowColor = `${p.colorBase}${p.alpha * 0.8})`;
        ctx.shadowBlur = p.radius * 3.5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-40"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
