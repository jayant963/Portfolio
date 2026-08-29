import React, { useEffect, useRef } from "react";

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame;
    let width = 0;
    let height = 0;

    let particles = [];
    let lightBeams = [];
    let orbs = [];

    const mouse = {
      x: 0.5,
      y: 0.5,
      targetX: 0.5,
      targetY: 0.5,
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const particleCount = window.innerWidth < 768 ? 25 : 55;

    // ---------------------------------------
    // RESIZE
    // ---------------------------------------

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // ---------------------------------------
    // PARTICLES
    // ---------------------------------------

    function createParticles() {
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,

          size: Math.random() * 1.8 + 0.4,

          // Faster than your previous version
          speedX: (Math.random() - 0.5) * 0.45,
          speedY: (Math.random() - 0.5) * 0.35,

          opacity: Math.random() * 0.55 + 0.15,

          depth: Math.random(),

          pulse: Math.random() * Math.PI * 2,
        });
      }
    }

    // ---------------------------------------
    // LIGHT BEAMS
    // ---------------------------------------

    function createLightBeams() {
      lightBeams = [];

      for (let i = 0; i < 5; i++) {
        lightBeams.push({
          x: Math.random() * width,

          y: Math.random() * height,

          length: Math.random() * 350 + 250,

          speed: Math.random() * 0.25 + 0.15,

          angle: Math.random() * 0.5 - 0.25,

          opacity: Math.random() * 0.035 + 0.015,
        });
      }
    }

    // ---------------------------------------
    // ATMOSPHERIC ORBS
    // ---------------------------------------

    function createOrbs() {
      orbs = [];

      orbs.push({
        x: width * 0.25,
        y: height * 0.35,
        radius: Math.max(width, height) * 0.32,
        speed: 0.00035,
        phase: 0,
        color: "cyan",
      });

      orbs.push({
        x: width * 0.75,
        y: height * 0.25,
        radius: Math.max(width, height) * 0.25,
        speed: 0.00025,
        phase: 2,
        color: "blue",
      });

      orbs.push({
        x: width * 0.55,
        y: height * 0.75,
        radius: Math.max(width, height) * 0.28,
        speed: 0.0003,
        phase: 4,
        color: "cyan",
      });
    }

    // ---------------------------------------
    // BACKGROUND
    // ---------------------------------------

    function drawBackground(time) {
      ctx.clearRect(0, 0, width, height);

      // ---------------------------------------
      // BASE
      // ---------------------------------------

      const baseGradient = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      baseGradient.addColorStop(0, "#01040b");
      baseGradient.addColorStop(0.45, "#020914");
      baseGradient.addColorStop(1, "#01030a");

      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      // ---------------------------------------
      // ATMOSPHERIC GLOW
      // ---------------------------------------

      orbs.forEach((orb) => {
        const movementX =
          Math.sin(time * orb.speed + orb.phase) * width * 0.25;

        const movementY =
          Math.cos(time * orb.speed * 0.8 + orb.phase) *
          height *
          0.16;

        const mouseX =
          (mouse.x - 0.5) * width * 0.08;

        const mouseY =
          (mouse.y - 0.5) * height * 0.08;

        const x = orb.x + movementX + mouseX;
        const y = orb.y + movementY + mouseY;

        const gradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          orb.radius
        );

        if (orb.color === "cyan") {
          gradient.addColorStop(
            0,
            "rgba(34, 211, 238, 0.10)"
          );

          gradient.addColorStop(
            0.35,
            "rgba(34, 211, 238, 0.035)"
          );
        } else {
          gradient.addColorStop(
            0,
            "rgba(59, 130, 246, 0.09)"
          );

          gradient.addColorStop(
            0.35,
            "rgba(59, 130, 246, 0.03)"
          );
        }

        gradient.addColorStop(
          1,
          "rgba(0, 0, 0, 0)"
        );

        ctx.fillStyle = gradient;

        ctx.fillRect(
          x - orb.radius,
          y - orb.radius,
          orb.radius * 2,
          orb.radius * 2
        );
      });

      // ---------------------------------------
      // LIGHT BEAMS
      // ---------------------------------------

      lightBeams.forEach((beam) => {
beam.x +=
  beam.speed *
  (1 + Math.sin(time * 0.001 + beam.phase) * 0.35);
        if (beam.x > width + beam.length) {
          beam.x = -beam.length;
          beam.y = Math.random() * height;
        }

        ctx.save();

        ctx.translate(
          beam.x,
          beam.y
        );

ctx.rotate(
  beam.angle +
  Math.sin(time * 0.0005 + beam.phase) * 0.08
);
        const beamGradient =
          ctx.createLinearGradient(
            -beam.length,
            0,
            beam.length,
            0
          );

        beamGradient.addColorStop(
          0,
          "rgba(34, 211, 238, 0)"
        );

        beamGradient.addColorStop(
          0.5,
          `rgba(34, 211, 238, ${beam.opacity})`
        );

        beamGradient.addColorStop(
          1,
          "rgba(34, 211, 238, 0)"
        );

        ctx.fillStyle = beamGradient;

        ctx.fillRect(
          -beam.length,
          -1,
          beam.length * 2,
          2
        );

        ctx.restore();
      });

      // ---------------------------------------
      // PARTICLES
      // ---------------------------------------

      particles.forEach((particle) => {
// ---------------------------------------
// DEPTH MOVEMENT
// ---------------------------------------

const depthSpeed = 0.35 + particle.depth * 1.8;

particle.x += particle.speedX * depthSpeed;
particle.y += particle.speedY * depthSpeed;
        if (particle.x < -20) {
          particle.x = width + 20;
        }

        if (particle.x > width + 20) {
          particle.x = -20;
        }

        if (particle.y < -20) {
          particle.y = height + 20;
        }

        if (particle.y > height + 20) {
          particle.y = -20;
        }

       // ---------------------------------------
// MOUSE INTERACTION
// ---------------------------------------

const mouseOffsetX = mouse.x - 0.5;
const mouseOffsetY = mouse.y - 0.5;

const parallaxX =
  mouseOffsetX *
  particle.depth *
  45;

const parallaxY =
  mouseOffsetY *
  particle.depth *
  45;

// ---------------------------------------
// SLOW PREMIUM BLINK
// ---------------------------------------

const pulse = Math.sin(
  time * 0.003 + particle.pulse
);

// Keeps particles visible while gently blinking
const blink = 0.25 + pulse * 0.75;

const px = particle.x + parallaxX;
const py = particle.y + parallaxY;

const sharpSize = particle.size * 3.2;

ctx.beginPath();

ctx.moveTo(px, py - sharpSize);

ctx.lineTo(px + sharpSize * 0.45, py);

ctx.lineTo(px, py + sharpSize);

ctx.lineTo(px - sharpSize * 0.45, py);

ctx.closePath();

ctx.fillStyle =
  `rgba(180, 220, 255, ${particle.opacity * blink})`;

ctx.fill();
      });

      // ---------------------------------------
      // CONNECTING PARTICLES
      // ---------------------------------------

      for (let i = 0; i < particles.length; i++) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance =
            Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity =
              (1 - distance / 120) *
              0.055;

            ctx.beginPath();

            ctx.moveTo(a.x, a.y);

            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle =
              `rgba(34, 211, 238, ${opacity})`;

            ctx.lineWidth = 0.5;

            ctx.stroke();
          }
        }
      }

      // ---------------------------------------
      // CINEMATIC SCAN
      // ---------------------------------------

      const scanY =
        ((time * 0.025) %
          (height + 400)) -
        200;

      const scanGradient =
        ctx.createLinearGradient(
          0,
          scanY - 100,
          0,
          scanY + 100
        );

      scanGradient.addColorStop(
        0,
        "rgba(34, 211, 238, 0)"
      );

      scanGradient.addColorStop(
        0.5,
        "rgba(34, 211, 238, 0.035)"
      );

      scanGradient.addColorStop(
        1,
        "rgba(34, 211, 238, 0)"
      );

      ctx.fillStyle = scanGradient;

      ctx.fillRect(
        0,
        scanY - 100,
        width,
        200
      );
    }

    // ---------------------------------------
    // ANIMATION
    // ---------------------------------------

    function animate(time) {
      mouse.x +=
        (mouse.targetX - mouse.x) *
        0.035;

      mouse.y +=
        (mouse.targetY - mouse.y) *
        0.035;

      drawBackground(time);

      animationFrame =
        requestAnimationFrame(animate);
    }

    // ---------------------------------------
    // MOUSE
    // ---------------------------------------

    function handleMouseMove(event) {
      mouse.targetX =
        event.clientX / window.innerWidth;

      mouse.targetY =
        event.clientY / window.innerHeight;
    }

    // ---------------------------------------
    // START
    // ---------------------------------------

    resizeCanvas();

    createParticles();

    createLightBeams();

    createOrbs();

    window.addEventListener(
      "resize",
      () => {
        resizeCanvas();

        createParticles();

        createLightBeams();

        createOrbs();
      }
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    if (prefersReducedMotion) {
      drawBackground(0);
    } else {
      animationFrame =
        requestAnimationFrame(animate);
    }

    // ---------------------------------------
    // CLEANUP
    // ---------------------------------------

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed
        inset-0
        w-full
        h-full
        pointer-events-none
        z-0
      "
      aria-hidden="true"
    />
  );
}

export default AnimatedBackground;