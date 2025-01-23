import React, { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';

// Particle class
class Particle {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.pastX = this.x;
    this.pastY = this.y;
  }

  init() {
    this.x = this.pastX = window.innerWidth * Math.random();
    this.y = this.pastY = window.innerHeight * Math.random();
  }
}

const Animation = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(0);

  useEffect(() => {
    let isActive = true;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const noise3D = createNoise3D();
    let zNoiseOffset = 0;

    const config = {
      particlesNb: 15,
      step: 10,
      base: 50,
      angleCoef: 3,
      strokeColor: "#f1f1f1",
      zNoiseStep: 0.001,
      noiseOctave: 500,
      noiseFallOut: 0.5,
      timeLimit: 15 * 1000 // 15 seconds
    };

    // Initialize canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Generate particles
    for (let i = 0; i < config.particlesNb; i++) {
      const particle = new Particle();
      particle.init();
      particles.push(particle);
    }

    // Noise function
    const getNoise = (x, y, z) => {
      const octaves = config.noiseOctave;
      const fallout = config.noiseFallOut;
      let amplitude = 0.5;
      let f = 0.5;
      let sum = 0;

      for (let i = 0; i < octaves; ++i) {
        amplitude *= fallout;
        sum += amplitude * (noise3D(x * f, y * f, z * f) + 1);
        f *= 2;
      }
      return sum;
    };

    // Animation function
    const animate = (timestamp) => {
      if (!isActive) return;
      
      const deltaTime = timestamp - previousTimeRef.current;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(p => {
        p.pastX = p.x;
        p.pastY = p.y;

        const angle = Math.PI * config.angleCoef * getNoise(
          p.x / config.base,
          p.y / config.base,
          zNoiseOffset
        );

        p.x += Math.cos(angle) * config.step;
        p.y += Math.sin(angle) * config.step;

        ctx.beginPath();
        ctx.strokeStyle = config.strokeColor;
        ctx.moveTo(p.pastX, p.pastY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        if (
          p.x < 0 ||
          p.x > canvas.width ||
          p.y < 0 ||
          p.y > canvas.height
        ) {
          p.init();
        }
      });

      zNoiseOffset += config.zNoiseStep;
      previousTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    requestRef.current = requestAnimationFrame(animate);

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      isActive = false;
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
};

export default Animation;