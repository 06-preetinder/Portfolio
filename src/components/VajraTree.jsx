import { useEffect, useRef, useState } from "react";

export default function VajraTree() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
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
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

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

    const handleClick = () => {
      // Trigger lightning surge pulse
      spawnSurge();
      setPulseKey((k) => k + 1);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleClick);

    // --- Procedural Generation of Vajra Dendritic Tree ---
    let seed = 42;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const branches = [];
    const nodes = [];

    const buildTree = (x, y, length, angle, depth, maxDepth, parentIdx = -1) => {
      if (depth > maxDepth || length < 4) return;

      const angleJitter = (random() - 0.5) * 0.45;
      const finalAngle = angle + angleJitter;
      const x2 = x + Math.cos(finalAngle) * length;
      const y2 = y + Math.sin(finalAngle) * length;

      const branchIdx = branches.length;
      branches.push({
        x1: x,
        y1: y,
        x2: x2,
        y2: y2,
        originalAngle: finalAngle,
        length: length,
        depth: depth,
        progress: 0,
        parentIdx: parentIdx,
        thickness: Math.max(0.6, (maxDepth - depth + 1) * 0.55),
      });

      if (depth === maxDepth || length < 7) {
        nodes.push({
          x: x2,
          y: y2,
          phase: random() * Math.PI * 2,
          size: random() * 1.5 + 1.2,
        });
      }

      const childCount = depth < 2 ? 3 : random() > 0.35 ? 2 : 1;
      const spread = depth < 2 ? 0.75 : 0.6;

      for (let i = 0; i < childCount; i++) {
        const branchSpread = (i / (childCount - 1 || 1) - 0.5) * spread;
        const nextLength = length * (0.68 + random() * 0.18);
        buildTree(
          x2,
          y2,
          nextLength,
          finalAngle + branchSpread,
          depth + 1,
          maxDepth,
          branchIdx
        );
      }
    };

    // Root starts at bottom center and branches upwards like sacred lightning
    const rootX = width / 2;
    const rootY = height - 28;
    buildTree(rootX, rootY, height * 0.24, -Math.PI / 2, 0, 7);

    // Active electrical signal surges
    const surges = [];
    const spawnSurge = () => {
      surges.push({
        currentBranch: 0,
        progress: 0,
        speed: 0.08 + Math.random() * 0.04,
        alpha: 1.0,
      });
    };

    let lastSurgeTime = Date.now();
    let growthProgress = inView ? 0 : 0;
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Progressive scroll growth animation
      if (inView && growthProgress < 1) {
        growthProgress += 0.015;
      }

      // Periodic natural electrical discharge traveling up the branches
      const now = Date.now();
      if (now - lastSurgeTime > 1600 && inView) {
        spawnSurge();
        lastSurgeTime = now;
      }

      // Draw Root Anchor Node
      ctx.beginPath();
      ctx.arc(rootX, rootY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.shadowColor = "rgba(196, 167, 231, 0.8)";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw Branches
      branches.forEach((b) => {
        const depthThreshold = b.depth / 7.5;
        if (growthProgress < depthThreshold) return;

        const branchGrowth = Math.min(1, (growthProgress - depthThreshold) / 0.12);
        const sway = Math.sin(time + b.depth * 0.6) * (0.015 * b.depth);

        let mouseBendX = 0;
        let mouseBendY = 0;
        if (mouse.active) {
          const dx = mouse.x - b.x2;
          const dy = mouse.y - b.y2;
          const dist = Math.hypot(dx, dy);
          if (dist < 180 && dist > 10) {
            const pull = (1 - dist / 180) * 8 * (b.depth / 7);
            mouseBendX = (dx / dist) * pull;
            mouseBendY = (dy / dist) * pull;
          }
        }

        const curX2 = b.x1 + (b.x2 - b.x1 + mouseBendX) * branchGrowth;
        const curY2 = b.y1 + (b.y2 - b.y1 + mouseBendY + sway) * branchGrowth;

        ctx.beginPath();
        ctx.moveTo(b.x1, b.y1);
        ctx.lineTo(curX2, curY2);

        // Lightning-fine ethereal hairlines
        ctx.lineWidth = b.thickness;
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.35 + (1 - b.depth / 8) * 0.45})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.35)";
        ctx.shadowBlur = 4;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Draw Terminal Nodes / Synaptic Buds
      if (growthProgress > 0.85) {
        const nodeAlpha = Math.min(1, (growthProgress - 0.85) / 0.15);
        nodes.forEach((n) => {
          const pulse = Math.sin(time * 2.5 + n.phase) * 0.5 + 0.5;
          const r = n.size + pulse * 0.8;

          ctx.beginPath();
          ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(196, 167, 231, ${nodeAlpha * (0.5 + pulse * 0.5)})`;
          ctx.shadowColor = "rgba(196, 167, 231, 0.8)";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      // Update and Draw Electrical Surges
      for (let s = surges.length - 1; s >= 0; s--) {
        const surge = surges[s];
        surge.progress += surge.speed;

        if (surge.progress >= 1) {
          const children = branches
            .map((b, i) => (b.parentIdx === surge.currentBranch ? i : -1))
            .filter((i) => i !== -1);

          if (children.length > 0) {
            surge.currentBranch =
              children[Math.floor(Math.random() * children.length)];
            surge.progress = 0;
          } else {
            surges.splice(s, 1);
            continue;
          }
        }

        const b = branches[surge.currentBranch];
        if (b) {
          const sx = b.x1 + (b.x2 - b.x1) * surge.progress;
          const sy = b.y1 + (b.y2 - b.y1) * surge.progress;

          ctx.beginPath();
          ctx.arc(sx, sy, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
          ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [inView, pulseKey]);

  return (
    <div
      ref={containerRef}
      className="relative z-10 flex flex-col items-center justify-center py-16 px-4"
    >
      {/* Frame pod matching jia.build aesthetic */}
      <div
        className="relative border-hairline-dim bg-black/70 p-4 md:p-6 transition-all duration-500 hover:border-white group"
        style={{ width: "min(100%, 460px)" }}
      >
        {/* Corner tags */}
        <div className="flex justify-between items-center text-[10px] font-mono text-white/40 mb-2 select-none">
          <span>[ vajra · dendritic aggregation ]</span>
          <span className="text-[#c4a7e7] group-hover:text-white transition-colors">
            tap to surge
          </span>
        </div>

        {/* Dynamic canvas */}
        <div className="w-full h-[320px] md:h-[360px] relative overflow-hidden bg-black/40 border-hairline-dim">
          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-crosshair block"
            style={{ touchAction: "none" }}
          />
        </div>

        {/* Bottom marginalia note */}
        <div className="mt-3 flex justify-between items-baseline text-[10px] font-mono text-white/40 select-none">
          <span>stochastic l-system · depth 07</span>
          <span>signals under uncertainty</span>
        </div>
      </div>

      {/* Atmospheric caption under the art */}
      <p className="mt-6 text-white text-xs md:text-sm font-serif italic tracking-wide lowercase glow-text text-center">
        recursive branching under uncertainty. nature and lightning solve for minimum energy paths.
      </p>
    </div>
  );
}
