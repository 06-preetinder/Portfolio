import { useEffect, useRef } from "react";

export default function ParallaxStarfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let animationId;
    let scrollY = window.scrollY || 0;

    // Generate 3 depth layers of celestial stars
    const generateStars = (count, minR, maxR, speedMultiplier) => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height * 3, // span beyond one viewport for smooth scroll parallax
        baseY: 0,
        radius: Math.random() * (maxR - minR) + minR,
        alpha: Math.random() * 0.4 + 0.15,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        speedMultiplier,
      })).map((s) => ({ ...s, baseY: s.y }));
    };

    const distantStars = generateStars(70, 0.4, 0.8, 0.03);
    const midStars = generateStars(35, 0.8, 1.2, 0.07);
    const nearStars = generateStars(16, 1.2, 1.8, 0.14);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      scrollY = window.scrollY || 0;
    };

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 1;

      const layers = [
        { stars: distantStars, color: "rgba(255, 255, 255, " },
        { stars: midStars, color: "rgba(230, 225, 245, " },
        { stars: nearStars, color: "rgba(196, 167, 231, " },
      ];

      for (const { stars, color } of layers) {
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];

          // Compute parallax Y with wrap-around
          const totalY = s.baseY - scrollY * s.speedMultiplier;
          const wrappedY = ((totalY % height) + height) % height;

          // Subtle twinkle calculation
          const currentAlpha = Math.max(
            0.08,
            s.alpha + Math.sin(tick * s.twinkleSpeed + s.twinklePhase) * 0.15
          );

          ctx.beginPath();
          ctx.arc(s.x, wrappedY, s.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${color}${currentAlpha})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
