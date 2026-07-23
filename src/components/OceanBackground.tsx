'use client';

import { useEffect, useRef } from 'react';

export default function OceanBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const stars: { x: number; y: number; size: number; speed: number }[] = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * (canvas?.width || window.innerWidth),
        y: Math.random() * (canvas?.height || window.innerHeight) * 0.5,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1
      });
    }

    const resize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const drawOcean = () => {
      if (!canvas || !ctx) return;
      const w = canvas.width;
      const h = canvas.height;
      time += 0.02;

      // Sky gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.4);
      skyGrad.addColorStop(0, '#0a0a2e');
      skyGrad.addColorStop(0.5, '#0f2b5c');
      skyGrad.addColorStop(1, '#1a4a8a');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h * 0.4);

      // Stars
      stars.forEach(star => {
        const twinkle = Math.sin(time * 3 + star.x) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Moon
      const moonX = w * 0.8;
      const moonY = h * 0.15;
      ctx.beginPath();
      ctx.arc(moonX, moonY, 40, 0, Math.PI * 2);
      ctx.fillStyle = '#f4d03f';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(moonX - 15, moonY - 10, 35, 0, Math.PI * 2);
      ctx.fillStyle = '#0a0a2e';
      ctx.fill();

      // Ocean layers
      const colors = ['#0a1628', '#0f2b5c', '#1a4a8a', '#2a6ab0'];
      const baseY = h * 0.4;

      colors.forEach((color, i) => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        const amplitude = 25 + i * 10;
        const frequency = 0.01 + i * 0.003;
        const yOffset = baseY + i * (h * 0.08);

        for (let x = 0; x <= w; x += 2) {
          const y1 = Math.sin(x * frequency + time * (1 + i * 0.3)) * amplitude;
          const y2 = Math.sin(x * frequency * 1.5 + time * 0.7 + i) * amplitude * 0.5;
          const y = yOffset + y1 + y2;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.6 + i * 0.1;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Moon reflection on water
      const reflectionGrad = ctx.createLinearGradient(moonX - 30, baseY + 20, moonX + 30, h);
      reflectionGrad.addColorStop(0, 'rgba(244, 208, 63, 0.15)');
      reflectionGrad.addColorStop(0.5, 'rgba(244, 208, 63, 0.05)');
      reflectionGrad.addColorStop(1, 'rgba(244, 208, 63, 0)');
      ctx.fillStyle = reflectionGrad;
      ctx.fillRect(moonX - 30, baseY + 20, 60, h - baseY - 20);

      animationId = requestAnimationFrame(drawOcean);
    };

    drawOcean();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
}