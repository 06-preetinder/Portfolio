/**
 * Celestial Black Hole & Rotating Galaxy Favicon Animator
 * Lightweight, battery-friendly, cross-browser tab icon animator.
 * Uses DOM node replacement to guarantee real-time Chrome & WebKit tab icon repainting.
 */

class FaviconAnimator {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.angle = 0;
    this.timer = null;
    this.fps = 14; // ~71ms interval for silky rotation with near-zero CPU usage
    this.size = 32;
    this.isInitialized = false;
    this.prefersReducedMotion = false;
  }

  init() {
    if (this.isInitialized || typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    this.isInitialized = true;

    // Check system reduced motion preferences
    if (window.matchMedia) {
      const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      this.prefersReducedMotion = motionQuery.matches;
      motionQuery.addEventListener?.("change", (e) => {
        this.prefersReducedMotion = e.matches;
        if (this.prefersReducedMotion) {
          this.stop();
          this.renderStatic();
        } else {
          this.start();
        }
      });
    }

    // Clean up competing static favicon links so Chrome listens to the dynamic one
    const staticIcons = document.querySelectorAll("link[rel*='icon']");
    staticIcons.forEach((el) => {
      if (el.id !== "dynamic-favicon") {
        el.remove();
      }
    });

    // Ensure our dynamic favicon element exists
    let dynamicLink = document.getElementById("dynamic-favicon");
    if (!dynamicLink) {
      dynamicLink = document.createElement("link");
      dynamicLink.id = "dynamic-favicon";
      dynamicLink.rel = "shortcut icon";
      dynamicLink.type = "image/png";
      document.head.appendChild(dynamicLink);
    }

    // Setup offscreen canvas
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    this.ctx = this.canvas.getContext("2d");

    // Pause when browser tab is inactive to preserve battery & CPU
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.stop();
      } else if (!this.prefersReducedMotion) {
        this.start();
      }
    });

    if (this.prefersReducedMotion) {
      this.renderStatic();
    } else {
      this.start();
    }
  }

  draw(angle) {
    const ctx = this.ctx;
    if (!ctx) return;
    const size = this.size;
    const cx = size / 2;
    const cy = size / 2;

    ctx.clearRect(0, 0, size, size);

    // Deep cosmic circular background
    ctx.beginPath();
    ctx.arc(cx, cy, 15.5, 0, Math.PI * 2);
    ctx.fillStyle = "#05030a";
    ctx.fill();
    ctx.strokeStyle = "rgba(196, 167, 231, 0.4)";
    ctx.lineWidth = 0.75;
    ctx.stroke();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);

    // 4 spiral accretion arms
    const arms = [
      { offset: 0, color: "rgba(196, 167, 231, 0.92)", width: 2.3 },
      { offset: Math.PI, color: "rgba(246, 193, 119, 0.92)", width: 2.3 },
      { offset: Math.PI * 0.5, color: "rgba(156, 207, 216, 0.75)", width: 1.6 },
      { offset: Math.PI * 1.5, color: "rgba(224, 222, 244, 0.75)", width: 1.6 },
    ];

    arms.forEach((arm) => {
      ctx.beginPath();
      const steps = 18;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const theta = arm.offset + t * 2.5;
        const r = 5.2 + t * 9.2;
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = arm.color;
      ctx.lineWidth = arm.width;
      ctx.lineCap = "round";
      ctx.stroke();
    });

    // Orbiting starlight nodes
    const stars = [
      { r: 12.0, th: 0.8, color: "#ffffff", size: 1.2 },
      { r: 13.5, th: 3.8, color: "#ffffff", size: 1.1 },
      { r: 9.8, th: 2.1, color: "#f6c177", size: 1.0 },
      { r: 9.8, th: 5.2, color: "#c4a7e7", size: 1.0 },
      { r: 14.0, th: 1.5, color: "#9ccfd8", size: 0.8 },
      { r: 13.0, th: 4.6, color: "#e0def4", size: 0.8 },
    ];

    stars.forEach((s) => {
      ctx.beginPath();
      ctx.arc(s.r * Math.cos(s.th), s.r * Math.sin(s.th), s.size, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.fill();
    });

    ctx.restore();

    // Gravitational Lensing Halo (Photon Ring Glow)
    const glowGrad = ctx.createRadialGradient(cx, cy, 3.5, cx, cy, 7.5);
    glowGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
    glowGrad.addColorStop(0.4, "rgba(246, 193, 119, 0.85)");
    glowGrad.addColorStop(0.8, "rgba(196, 167, 231, 0.65)");
    glowGrad.addColorStop(1, "rgba(196, 167, 231, 0)");

    ctx.beginPath();
    ctx.arc(cx, cy, 7.5, 0, Math.PI * 2);
    ctx.fillStyle = glowGrad;
    ctx.fill();

    // Inner photon ring boundary
    ctx.beginPath();
    ctx.arc(cx, cy, 5.0, 0, Math.PI * 2);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Event Horizon (Central Cosmic Singularity Void)
    ctx.beginPath();
    ctx.arc(cx, cy, 4.2, 0, Math.PI * 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
  }

  updateFavicon() {
    if (!this.canvas) return;
    try {
      const dataUrl = this.canvas.toDataURL("image/png");
      const current = document.getElementById("dynamic-favicon");
      const newLink = document.createElement("link");
      newLink.id = "dynamic-favicon";
      newLink.rel = "shortcut icon";
      newLink.type = "image/png";
      newLink.href = dataUrl;

      if (current && current.parentNode) {
        current.parentNode.replaceChild(newLink, current);
      } else {
        document.head.appendChild(newLink);
      }
    } catch (e) {
      // ignore
    }
  }

  renderStatic() {
    this.draw(0);
    this.updateFavicon();
  }

  start() {
    if (this.timer || this.prefersReducedMotion) return;
    const intervalMs = Math.round(1000 / this.fps);
    this.timer = setInterval(() => {
      this.angle = (this.angle + 0.08) % (Math.PI * 2);
      this.draw(this.angle);
      this.updateFavicon();
    }, intervalMs);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}

export const faviconAnimator = new FaviconAnimator();
