import { useState, useEffect, useRef } from "react";

const AXIOMS = [
  "ambition without calculation is mere ruin. calculate in the dark.",
  "we solve for minimum energy paths under chaotic bounds.",
  "greatness inspires envy, envy engenders spite, spite spawns truth.",
  "one must imagine sisyphus happy before the gradient converges.",
  "to master the serpent, one must think in loops that never break.",
  "blessed with love and victory, yet the cunning never sleeps.",
];

const GLYPHS = "@#%&*+=~:./\\<>[]{}01_§‡🐍";

export default function PhilosophyScrambler() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(AXIOMS[0]);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);

  // Canvas references for 3D occlusion (back canvas behind text, front canvas over text)
  const backCanvasRef = useRef(null);
  const frontCanvasRef = useRef(null);
  const containerRef = useRef(null);

  // Audio synthesis for realistic whisper hiss
  const audioCtxRef = useRef(null);

  const playHiss = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Generate 0.35s of shaped white noise with bandpass filter (whisper hiss)
      const bufferSize = ctx.sampleRate * 0.35;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      // Bandpass filter to simulate snake sibilance (6500 Hz)
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 6800;
      filter.Q.value = 3.5;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.045, ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch (e) {
      // Audio context might be restricted before user gesture
    }
  };

  const scrambleTo = (targetText) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsScrambling(true);
    playHiss();

    let iteration = 0;
    const maxIterations = targetText.length * 3;

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return targetText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 3) {
              return targetText[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");
      });

      iteration += 1;

      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(targetText);
        setIsScrambling(false);
      }
    }, 28);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % AXIOMS.length;
    setCurrentIndex(nextIdx);
    scrambleTo(AXIOMS[nextIdx]);
  };

  const handleHover = () => {
    if (!isScrambling) {
      scrambleTo(AXIOMS[currentIndex]);
    }
  };

  // --- 3D SLYTHERIN COILED SNAKE RENDER ENGINE ---
  useEffect(() => {
    const backCanvas = backCanvasRef.current;
    const frontCanvas = frontCanvasRef.current;
    if (!backCanvas || !frontCanvas) return;

    const backCtx = backCanvas.getContext("2d");
    const frontCtx = frontCanvas.getContext("2d");
    let animationFrameId;

    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = backCanvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      backCanvas.width = width * dpr;
      backCanvas.height = height * dpr;
      frontCanvas.width = width * dpr;
      frontCanvas.height = height * dpr;

      backCtx.scale(dpr, dpr);
      frontCtx.scale(dpr, dpr);
    };
    resize();

    // Mouse tracking for snake head attention
    let mouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e) => {
      const b = frontCanvas.getBoundingClientRect();
      mouse.x = e.clientX - b.left;
      mouse.y = e.clientY - b.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    // Number of articulated body segments
    const NUM_SEGMENTS = 76;
    let time = 0;
    let tongueTimer = 0;
    let tongueLength = 0;

    // Poison mist particles
    const mists = Array.from({ length: 28 }, () => ({
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -0.3 - Math.random() * 0.4,
      life: Math.random(),
      size: Math.random() * 2 + 1,
    }));

    const render = () => {
      time += 0.024;
      tongueTimer += 0.024;

      backCtx.clearRect(0, 0, width, height);
      frontCtx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Elliptical 3D coil geometry around the text box
      const radiusX = Math.min(width * 0.45, 340);
      const radiusY = Math.min(height * 0.38, 70);
      const radiusZ = 125;

      // Tongue flicking cycles
      if (Math.sin(tongueTimer * 1.5) > 0.85) {
        tongueLength = Math.sin(tongueTimer * 12) * 16 + 10;
        if (Math.random() < 0.03) playHiss();
      } else {
        tongueLength = 0;
      }

      // Compute 3D positions along a helical serpentine spline
      const segments = [];
      const coilTurns = 2.4; // Loops 2.4 times around the scrambler

      for (let i = 0; i < NUM_SEGMENTS; i++) {
        const u = i / NUM_SEGMENTS; // 0 = head, 1 = tail
        // Traveling wave parameter along the body
        const theta = u * Math.PI * 2 * coilTurns - time * 0.85;

        // Base elliptical helical path
        let x = cx + Math.cos(theta) * radiusX;
        let y = cy + Math.sin(theta) * radiusY + (u - 0.5) * 35;
        let z = Math.sin(theta) * radiusZ;

        // Serpentine undulation lateral waves
        const wave = Math.sin(time * 3 - i * 0.22) * 14 * (1 - u * 0.3);
        const waveAngle = theta + Math.PI / 2;
        x += Math.cos(waveAngle) * wave * 0.5;
        y += Math.sin(waveAngle) * wave * 0.3;

        // Head tracking mouse
        if (i < 8 && mouse.active) {
          const headWeight = (8 - i) / 8;
          x += (mouse.x - x) * 0.12 * headWeight;
          y += (mouse.y - y) * 0.12 * headWeight;
        }

        // Tapering body radius: sleek neck, thick muscular mid-body, tapered tail
        let r = 0;
        if (u < 0.06) {
          r = 10 + u * 40; // Viper head shape
        } else if (u < 0.6) {
          r = 13 + Math.sin((u - 0.06) / 0.54 * Math.PI) * 4; // Main body
        } else {
          r = Math.max(1.8, 13 * (1 - (u - 0.6) / 0.4)); // Tapered tail
        }

        // 3D Perspective Projection (FOV)
        const fov = 420;
        const scale = fov / (fov + z);
        const screenX = cx + (x - cx) * scale;
        const screenY = cy + (y - cy) * scale;
        const screenR = r * scale;

        segments.push({
          idx: i,
          u: u,
          x: screenX,
          y: screenY,
          z: z,
          r: screenR,
          scale: scale,
        });
      }

      // Draw function for individual snake vertebrae / scales
      const drawSegment = (ctx, seg, isFront) => {
        const u = seg.u;

        // Slytherin Metallic Emerald Palette
        // Outer dark emerald green fading to luminous silver highlight
        const grad = ctx.createRadialGradient(
          seg.x - seg.r * 0.3,
          seg.y - seg.r * 0.3,
          seg.r * 0.1,
          seg.x,
          seg.y,
          seg.r
        );

        if (isFront) {
          // Front passes: gleaming silver & bright emerald scales
          grad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
          grad.addColorStop(0.28, "rgba(167, 243, 208, 0.9)"); // Light mint silver
          grad.addColorStop(0.65, "rgba(16, 185, 129, 0.85)"); // Slytherin emerald
          grad.addColorStop(1, "rgba(6, 78, 59, 0.95)"); // Deep serpentine shadow
        } else {
          // Back passes: darkened serpentine shadow behind the text
          grad.addColorStop(0, "rgba(52, 211, 153, 0.45)");
          grad.addColorStop(0.5, "rgba(6, 78, 59, 0.4)");
          grad.addColorStop(1, "rgba(2, 44, 34, 0.5)");
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(seg.x, seg.y, Math.max(1, seg.r), 0, Math.PI * 2);
        ctx.fill();

        // Cross-hatch diamond scale texture on front segments
        if (isFront && seg.idx % 3 === 0 && seg.r > 5) {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.28)";
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.arc(seg.x, seg.y, seg.r * 0.85, 0, Math.PI);
          ctx.stroke();
        }
      };

      // --- PASS 1: BACK CANVAS (z < 0: Coiling BEHIND text) ---
      for (let i = segments.length - 1; i >= 0; i--) {
        const seg = segments[i];
        if (seg.z < 0) {
          drawSegment(backCtx, seg, false);
        }
      }

      // --- PASS 2: FRONT CANVAS (z >= 0: Coiling IN FRONT of text) ---
      for (let i = segments.length - 1; i >= 0; i--) {
        const seg = segments[i];
        if (seg.z >= 0) {
          drawSegment(frontCtx, seg, true);
        }
      }

      // --- DRAW VIPER HEAD & EYES & HISSING FORKED TONGUE ---
      const head = segments[0];
      const neck = segments[2];

      if (head && neck) {
        const headCtx = head.z >= 0 ? frontCtx : backCtx;
        const angle = Math.atan2(head.y - neck.y, head.x - neck.x);

        // Piercing Emerald Slit Eyes
        const eyeDist = head.r * 0.65;
        const eyeAngle = angle + Math.PI / 2;
        const leftEyeX = head.x + Math.cos(angle) * head.r * 0.35 + Math.cos(eyeAngle) * eyeDist;
        const leftEyeY = head.y + Math.sin(angle) * head.r * 0.35 + Math.sin(eyeAngle) * eyeDist;
        const rightEyeX = head.x + Math.cos(angle) * head.r * 0.35 - Math.cos(eyeAngle) * eyeDist;
        const rightEyeY = head.y + Math.sin(angle) * head.r * 0.35 - Math.sin(eyeAngle) * eyeDist;

        // Draw Left Eye
        headCtx.save();
        headCtx.shadowColor = "rgba(16, 185, 129, 0.95)";
        headCtx.shadowBlur = 8;
        headCtx.fillStyle = "#10b981"; // Bright emerald
        headCtx.beginPath();
        headCtx.arc(leftEyeX, leftEyeY, 2.6, 0, Math.PI * 2);
        headCtx.fill();

        // Left Eye Black Slit Pupil
        headCtx.fillStyle = "#000000";
        headCtx.beginPath();
        headCtx.ellipse(leftEyeX, leftEyeY, 0.8, 2.2, angle, 0, Math.PI * 2);
        headCtx.fill();

        // Draw Right Eye
        headCtx.fillStyle = "#10b981";
        headCtx.beginPath();
        headCtx.arc(rightEyeX, rightEyeY, 2.6, 0, Math.PI * 2);
        headCtx.fill();

        // Right Eye Black Slit Pupil
        headCtx.fillStyle = "#000000";
        headCtx.beginPath();
        headCtx.ellipse(rightEyeX, rightEyeY, 0.8, 2.2, angle, 0, Math.PI * 2);
        headCtx.fill();
        headCtx.restore();

        // Hissing Forked Tongue
        if (tongueLength > 2) {
          const tipX = head.x + Math.cos(angle) * (head.r + tongueLength);
          const tipY = head.y + Math.sin(angle) * (head.r + tongueLength);
          const forkAngle1 = angle + 0.35;
          const forkAngle2 = angle - 0.35;

          headCtx.save();
          headCtx.strokeStyle = "#e11d48"; // Crimson serpent tongue
          headCtx.lineWidth = 1.2;
          headCtx.beginPath();
          headCtx.moveTo(head.x + Math.cos(angle) * head.r, head.y + Math.sin(angle) * head.r);
          headCtx.lineTo(tipX, tipY);
          headCtx.lineTo(tipX + Math.cos(forkAngle1) * 7, tipY + Math.sin(forkAngle1) * 7);
          headCtx.moveTo(tipX, tipY);
          headCtx.lineTo(tipX + Math.cos(forkAngle2) * 7, tipY + Math.sin(forkAngle2) * 7);
          headCtx.stroke();
          headCtx.restore();

          // Spurt a mist particle from the mouth
          const m = mists[Math.floor(Math.random() * mists.length)];
          m.x = tipX;
          m.y = tipY;
          m.life = 1.0;
        }

        // Draw Poison Mist Particles
        frontCtx.save();
        mists.forEach((m) => {
          if (m.life > 0) {
            m.x += m.vx;
            m.y += m.vy;
            m.life -= 0.02;
            frontCtx.fillStyle = `rgba(52, 211, 153, ${m.life * 0.5})`;
            frontCtx.shadowColor = "rgba(52, 211, 153, 0.8)";
            frontCtx.shadowBlur = 6;
            frontCtx.beginPath();
            frontCtx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
            frontCtx.fill();
          }
        });
        frontCtx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 flex flex-col items-center justify-center py-20 px-6 select-none overflow-hidden"
    >
      {/* Container holding the back canvas, the scrambler text, and the front canvas */}
      <div
        className="relative w-full max-w-3xl flex flex-col items-center text-center cursor-pointer group"
        onClick={handleNext}
        onMouseEnter={handleHover}
        style={{ minHeight: "220px" }}
      >
        {/* LAYER 1: BACK CANVAS (Snake segments coiled BEHIND text) */}
        <canvas
          ref={backCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 block"
        />

        {/* LAYER 2: SCRAMBLER TYPOGRAPHY (Sitting in the middle of the 3D coil) */}
        <div className="relative z-10 flex flex-col items-center py-8 px-4 w-full">
          {/* Header Telemetry */}
          <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs text-emerald-400/60 tracking-widest uppercase mb-4">
            <span className="text-emerald-400 glow-text">// SLYTHERIN COIL</span>
            <span>·</span>
            <span>AXIOM {String(currentIndex + 1).padStart(2, "0")} / {String(AXIOMS.length).padStart(2, "0")}</span>
            <span>·</span>
            <span className="hidden sm:inline group-hover:text-emerald-300 transition-colors">
              tap to strike
            </span>
          </div>

          {/* Scrambler Sentence */}
          <div className="min-h-[72px] md:min-h-[88px] flex items-center justify-center px-4 max-w-2xl mx-auto">
            <p
              className={`font-mono text-base md:text-2xl text-white tracking-tight leading-relaxed transition-all duration-300 ${
                isScrambling ? "text-emerald-300/80" : "glow-text"
              }`}
            >
              {displayText}
            </p>
          </div>

          {/* Subtle prompt */}
          <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-white/30 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:animate-ping" />
            <span>[ coiled in ℝ³ · click or hover to uncoil next axiom ]</span>
          </div>
        </div>

        {/* LAYER 3: FRONT CANVAS (Snake segments coiled IN FRONT of text) */}
        <canvas
          ref={frontCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-20 block"
        />
      </div>
    </div>
  );
}
