import { useEffect, useRef, useState, useMemo } from "react";
import { epoch } from "../data/content";

export default function EpochConstellation({ onSelectPost }) {
  const canvasRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Hub clusters that categorize the dispatches
  const hubs = useMemo(
    () => [
      { id: "hub-safety", label: "AI Safety & Alignment", color: "#c4a7e7", x: 0.28, y: 0.32 },
      { id: "hub-arch", label: "Frontier Architecture", color: "#9ccfd8", x: 0.72, y: 0.30 },
      { id: "hub-agents", label: "Autonomous Agents", color: "#f6c177", x: 0.36, y: 0.72 },
      { id: "hub-policy", label: "Frontier Governance", color: "#eb6f92", x: 0.68, y: 0.70 },
    ],
    []
  );

  // Map each dispatch to one or two hubs based on its themes
  const nodes = useMemo(() => {
    return epoch.dispatches.map((post, idx) => {
      let hubId = "hub-arch";
      const titleLower = post.title.toLowerCase();
      const signalLower = (post.signal || "").toLowerCase();

      if (
        titleLower.includes("safety") ||
        titleLower.includes("alignment") ||
        signalLower.includes("deception") ||
        signalLower.includes("safety")
      ) {
        hubId = "hub-safety";
      } else if (
        titleLower.includes("agent") ||
        titleLower.includes("swarm") ||
        titleLower.includes("aide") ||
        signalLower.includes("autonomous")
      ) {
        hubId = "hub-agents";
      } else if (
        titleLower.includes("act") ||
        titleLower.includes("pacing") ||
        titleLower.includes("regulation") ||
        signalLower.includes("congress")
      ) {
        hubId = "hub-policy";
      }

      return {
        id: post.id || `node-${idx}`,
        post,
        hubId,
        radius: post.type === "issue" ? 6 : 4.5,
        color: post.type === "issue" ? "#ffffff" : "#c4a7e7",
        // Normalized coordinates initialized around their hub
        orbitAngle: (idx / epoch.dispatches.length) * Math.PI * 2,
        orbitRadius: 0.12 + (idx % 3) * 0.04,
        speed: (idx % 2 === 0 ? 1 : -1) * (0.0015 + (idx % 4) * 0.0006),
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = 440);

    let animationId;
    let angleOffset = 0;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 440;
    };
    window.addEventListener("resize", handleResize);

    const getHubPos = (hub) => ({
      x: hub.x * width,
      y: hub.y * height,
    });

    const getNodePos = (node) => {
      const hub = hubs.find((h) => h.id === node.hubId) || hubs[0];
      const hPos = getHubPos(hub);
      const curAngle = node.orbitAngle + angleOffset * node.speed * 80;
      return {
        x: hPos.x + Math.cos(curAngle) * (node.orbitRadius * Math.min(width, height)),
        y: hPos.y + Math.sin(curAngle) * (node.orbitRadius * Math.min(width, height)),
      };
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angleOffset += 0.015;

      // Draw faint hub interconnecting filaments
      for (let i = 0; i < hubs.length; i++) {
        for (let j = i + 1; j < hubs.length; j++) {
          const p1 = getHubPos(hubs[i]);
          const p2 = getHubPos(hubs[j]);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw nodes and filament connections to their parent hub
      for (const node of nodes) {
        const hub = hubs.find((h) => h.id === node.hubId);
        const hPos = getHubPos(hub);
        const nPos = getNodePos(node);

        const isHovered = hoveredNode && hoveredNode.id === node.id;
        const isSelected = selectedNode && selectedNode.id === node.id;

        // Filament line
        ctx.beginPath();
        ctx.moveTo(hPos.x, hPos.y);
        ctx.lineTo(nPos.x, nPos.y);
        ctx.strokeStyle =
          isHovered || isSelected
            ? `${hub.color}cc`
            : "rgba(255, 255, 255, 0.12)";
        ctx.lineWidth = isHovered || isSelected ? 1.5 : 0.8;
        ctx.stroke();

        // Node circle
        ctx.beginPath();
        ctx.arc(nPos.x, nPos.y, isHovered || isSelected ? node.radius * 1.5 : node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered || isSelected ? "#ffffff" : node.color;
        if (isHovered || isSelected) {
          ctx.shadowColor = hub.color;
          ctx.shadowBlur = 14;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label if hovered
        if (isHovered) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.font = "10px monospace";
          ctx.fillText(node.post.issueNumber, nPos.x + 8, nPos.y - 4);
        }
      }

      // Draw Hubs
      for (const hub of hubs) {
        const pos = getHubPos(hub);

        // Subtle pulsing halo
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 16, 0, Math.PI * 2);
        ctx.fillStyle = `${hub.color}15`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = hub.color;
        ctx.shadowColor = hub.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Hub Title
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.font = "10px monospace";
        ctx.textAlign = "center";
        ctx.fillText(hub.label, pos.x, pos.y + 24);
        ctx.textAlign = "start";
      }

      animationId = requestAnimationFrame(render);
    };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let found = null;
      for (const node of nodes) {
        const nPos = getNodePos(node);
        const dist = Math.hypot(nPos.x - mouseX, nPos.y - mouseY);
        if (dist <= node.radius + 8) {
          found = node;
          break;
        }
      }
      setHoveredNode(found);
    };

    const handleClick = () => {
      if (hoveredNode) {
        setSelectedNode(hoveredNode);
        if (onSelectPost) onSelectPost(hoveredNode.post);
      }
    };

    canvas.addEventListener("mousemove", handlePointerMove);
    canvas.addEventListener("click", handleClick);
    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handlePointerMove);
      canvas.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationId);
    };
  }, [hubs, nodes, hoveredNode, selectedNode, onSelectPost]);

  const activePost = selectedNode ? selectedNode.post : hoveredNode ? hoveredNode.post : null;

  return (
    <div className="w-full bg-black/60 rounded-2xl border border-white/15 p-4 relative overflow-hidden backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 font-mono text-xs text-white/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c4a7e7] animate-pulse" />
          <span>The Epoch: Thematic Signal Constellation</span>
        </div>
        <span className="text-[11px] text-white/40">
          hover or click any celestial node to inspect
        </span>
      </div>

      {/* Canvas */}
      <div className="relative w-full h-[440px] flex items-center justify-center cursor-crosshair">
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Selected or Hovered Node Card overlay */}
        {activePost && (
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-black/90 border border-[#c4a7e7] p-3.5 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.9)] backdrop-blur-md font-mono text-xs transition-all pointer-events-auto">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[#c4a7e7] font-semibold">
                {activePost.issueNumber} • {activePost.date}
              </span>
              <span className="text-white/40 text-[10px]">{activePost.readTime}</span>
            </div>
            <p className="text-white font-medium mb-1 line-clamp-1 lowercase font-serif text-sm">
              {activePost.title}
            </p>
            <p className="text-white/70 text-[11px] line-clamp-2 mb-2 lowercase leading-relaxed">
              "{activePost.signal}"
            </p>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-white/40">type: {activePost.type}</span>
              <a
                href={activePost.linkedinPostUrl || epoch.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#9ccfd8] hover:underline"
              >
                read full dispatch →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
