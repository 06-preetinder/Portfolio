import { useEffect, useRef, useState } from "react";

export default function VajraTree() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Retina display scaling
    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    // Mouse coordinates relative to canvas
    let mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e) => {
      const b = canvas.getBoundingClientRect();
      mouse.x = e.clientX - b.left;
      mouse.y = e.clientY - b.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    let shockwave = 0;
    const handleClick = () => {
      shockwave = 1.0;
      spawnBigSurge();
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleClick);

    // --- Procedural Generation of Grand Vajra Tree ---
    // Deterministic random seed
    let seed = 108;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    // Subdivide a branch into jagged lightning segments
    const createJaggedPath = (x1, y1, x2, y2, segments = 5, jitter = 12) => {
      const points = [{ x: x1, y: y1 }];
      const dx = (x2 - x1) / segments;
      const dy = (y2 - y1) / segments;
      const angle = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2;

      for (let i = 1; i < segments; i++) {
        const offset = (random() - 0.5) * jitter;
        const px = x1 + dx * i + Math.cos(angle) * offset;
        const py = y1 + dy * i + Math.sin(angle) * offset;
        points.push({ x: px, y: py });
      }
      points.push({ x: x2, y: y2 });
      return points;
    };

    const branches = [];
    const buds = [];

    const generateTree = (x, y, length, angle, depth, maxDepth, parentIdx = -1) => {
      if (depth > maxDepth || length < 5) return;

      const angleJitter = (random() - 0.5) * 0.42;
      const finalAngle = angle + angleJitter;
      const x2 = x + Math.cos(finalAngle) * length;
      const y2 = y + Math.sin(finalAngle) * length;

      const branchIdx = branches.length;
      const jitterAmount = Math.max(3, (maxDepth - depth) * 2.8);
      const points = createJaggedPath(x, y, x2, y2, 5, jitterAmount);

      branches.push({
        x1: x,
        y1: y,
        x2: x2,
        y2: y2,
        points: points,
        depth: depth,
        length: length,
        parentIdx: parentIdx,
        thickness: Math.max(0.65, Math.pow((maxDepth - depth + 1) / maxDepth, 1.4) * 2.8),
      });

      if (depth >= maxDepth - 1 || length < 10) {
        buds.push({
          x: x2,
          y: y2,
          phase: random() * Math.PI * 2,
          size: random() * 1.8 + 1.2,
        });
      }

      const childCount = depth < 2 ? 3 : random() > 0.4 ? 2 : 1;
      const spreadAngle = depth < 3 ? 0.78 : 0.62;

      for (let i = 0; i < childCount; i++) {
        const branchSpread = (i / (childCount - 1 || 1) - 0.5) * spreadAngle;
        const lengthFactor = 0.72 + random() * 0.16;
        generateTree(
          x2,
          y2,
          length * lengthFactor,
          finalAngle + branchSpread,
          depth + 1,
          maxDepth,
          branchIdx
        );
      }
    };

    // Build grand tree from bottom center reaching up high
    const rootX = width / 2;
    const rootY = height - 20;
    generateTree(rootX, rootY, height * 0.28, -Math.PI / 2, 0, 8);

    // Floating micro-plasma sparks / embers
    const embers = Array.from({ length: 45 }, () => ({
      x: rootX + (random() - 0.5) * width * 0.7,
      y: rootY - random() * height * 0.85,
      vx: (random() - 0.5) * 0.35,
      vy: -0.2 - random() * 0.4,
      size: random() * 1.4 + 0.8,
      alpha: random() * 0.7 + 0.2,
      pulseSpeed: random() * 0.05 + 0.02,
    }));

    // Traveling electrical signal packets
    const surges = [];
    const spawnSurge = (branchIdx = 0, speedMult = 1) => {
      surges.push({
        currentBranch: branchIdx,
        progress: 0,
        speed: (0.07 + Math.random() * 0.05) * speedMult,
        life: 1.0,
      });
    };

    const spawnBigSurge = () => {
      // Spawn multiple pulses on root and immediate children
      for (let i = 0; i < 4; i++) {
        spawnSurge(0, 1.4);
      }
    };

    let growthProgress = 0;
    let time = 0;
    let lastSurgeTime = Date.now();

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, width, height);

      // Smooth scroll reveal growth
      if (inView && growthProgress < 1) {
        growthProgress += 0.012;
      }

      // Shockwave fade
      if (shockwave > 0) {
        shockwave *= 0.92;
      }

      // Automatic periodic electrical sparks
      const now = Date.now();
      if (now - lastSurgeTime > 1400 && inView) {
        spawnSurge(0, 1.0);
        lastSurgeTime = now;
      }

      // --- Draw Ambient Floating Embers ---
      embers.forEach((emb) => {
        emb.x += emb.vx;
        emb.y += emb.vy;
        if (emb.y < 10) {
          emb.y = rootY - random() * 40;
          emb.x = rootX + (random() - 0.5) * width * 0.5;
        }
        const pulse = Math.sin(time * 2 + emb.x) * 0.25 + 0.75;
        ctx.beginPath();
        ctx.arc(emb.x, emb.y, emb.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${emb.alpha * pulse * growthProgress * 0.6})`;
        ctx.fill();
      });

      // --- Draw Root Base Light ---
      const baseGlow = ctx.createRadialGradient(rootX, rootY, 2, rootX, rootY, 35);
      baseGlow.addColorStop(0, "rgba(255, 255, 255, 0.8)");
      baseGlow.addColorStop(0.4, "rgba(196, 167, 231, 0.35)");
      baseGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = baseGlow;
      ctx.beginPath();
      ctx.arc(rootX, rootY, 35, 0, Math.PI * 2);
      ctx.fill();

      // --- Draw Branches with Multi-layer Ethereal Bloom ---
      branches.forEach((b) => {
        const depthRatio = b.depth / 8.5;
        if (growthProgress < depthRatio) return;

        const branchProgress = Math.min(1, (growthProgress - depthRatio) / 0.1);
        const pts = b.points;
        const totalPts = pts.length;
        const visiblePtsCount = Math.max(2, Math.floor(totalPts * branchProgress));

        // Gentle organic wind sway
        const sway = Math.sin(time * 0.8 + b.depth * 0.5) * (0.012 * b.depth * b.depth);

        // Interactive mouse attraction
        let pullX = 0;
        let pullY = 0;
        if (mouse.active) {
          const dx = mouse.x - b.x2;
          const dy = mouse.y - b.y2;
          const dist = Math.hypot(dx, dy);
          if (dist < 220 && dist > 15) {
            const factor = (1 - dist / 220) * 12 * (b.depth / 8);
            pullX = (dx / dist) * factor;
            pullY = (dy / dist) * factor;
          }
        }

        ctx.beginPath();
        for (let i = 0; i < visiblePtsCount; i++) {
          const pt = pts[i];
          const ratio = i / (totalPts - 1);
          const px = pt.x + pullX * ratio;
          const py = pt.y + pullY * ratio + sway * ratio;

          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        // Layer 1: Ethereal outer glow
        ctx.lineWidth = b.thickness + 2.5;
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 + shockwave * 0.25})`;
        ctx.stroke();

        // Layer 2: Core razor-sharp lightning filament
        ctx.lineWidth = b.thickness;
        const alpha = 0.45 + (1 - b.depth / 9) * 0.45 + shockwave * 0.4;
        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(1, alpha)})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
        ctx.shadowBlur = 6 + shockwave * 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // --- Draw Synaptic Terminal Buds ---
      if (growthProgress > 0.8) {
        const budAlpha = Math.min(1, (growthProgress - 0.8) / 0.2);
        buds.forEach((bud) => {
          const pulse = Math.sin(time * 2.8 + bud.phase) * 0.5 + 0.5;
          const r = bud.size + pulse * 1.0 + shockwave * 2;

          ctx.beginPath();
          ctx.arc(bud.x, bud.y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${budAlpha * (0.6 + pulse * 0.4)})`;
          ctx.shadowColor = "rgba(196, 167, 231, 0.9)";
          ctx.shadowBlur = 8 + pulse * 4;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      // --- Draw Electrical Surges ---
      for (let s = surges.length - 1; s >= 0; s--) {
        const surge = surges[s];
        surge.progress += surge.speed;

        if (surge.progress >= 1) {
          const children = branches
            .map((b, i) => (b.parentIdx === surge.currentBranch ? i : -1))
            .filter((i) => i !== -1);

          if (children.length > 0) {
            surge.currentBranch = children[Math.floor(Math.random() * children.length)];
            surge.progress = 0;
          } else {
            surges.splice(s, 1);
            continue;
          }
        }

        const b = branches[surge.currentBranch];
        if (b && b.points) {
          const pts = b.points;
          const idxFloat = (pts.length - 1) * surge.progress;
          const idxFloor = Math.floor(idxFloat);
          const frac = idxFloat - idxFloor;
          const p1 = pts[idxFloor];
          const p2 = pts[Math.min(pts.length - 1, idxFloor + 1)];

          if (p1 && p2) {
            const sx = p1.x + (p2.x - p1.x) * frac;
            const sy = p1.y + (p2.y - p1.y) * frac;

            ctx.beginPath();
            ctx.arc(sx, sy, 2.5 + shockwave * 2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
            ctx.shadowColor = "rgba(255, 255, 255, 1)";
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [inView]);

  return (
    <div
      ref={containerRef}
      className="relative z-10 flex flex-col items-center justify-center py-20 px-4 select-none"
    >
      {/* Frameless grand generative canvas */}
      <div className="w-full max-w-2xl h-[440px] md:h-[520px] relative flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-crosshair block"
          style={{ touchAction: "none" }}
        />
      </div>

      {/* Sleek minimalist telemetry captions matching jia.build aesthetic */}
      <div className="mt-4 flex items-center justify-center gap-4 font-mono text-[10px] md:text-xs text-white/40 tracking-wider">
        <span>[ vajra · dendritic field ]</span>
        <span className="text-white/20">/</span>
        <span>stochastic l-system · depth 08</span>
        <span className="text-white/20">/</span>
        <span className="text-[#c4a7e7] hover:text-white transition-colors cursor-pointer">
          click to surge
        </span>
      </div>

      <p className="mt-3 text-white text-xs md:text-sm font-serif italic tracking-wide lowercase glow-text text-center max-w-md mx-auto">
        recursive branching under uncertainty. nature and lightning solve for minimum energy paths.
      </p>
    </div>
  );
}
