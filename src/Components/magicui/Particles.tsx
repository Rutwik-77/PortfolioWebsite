 
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

function hexToRgb(hex: string): number[] {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map((char) => char + char).join("");
  }
  const hexInt = parseInt(hex, 16);
  return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255];
}

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 10000,
//   staticity = 50,
//   ease = 50,
  size = 0.4,
//   refresh = false,
  color = "#ffffff",
  vx = 0.2,
  vy = 0.2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
//   const mousePosition = useMousePosition();
//   const mouse = useRef<MousePosition>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = window.devicePixelRatio || 1;
  const rafID = useRef<number | null>(null);

  useEffect(() => {
    context.current = canvasRef.current?.getContext("2d") || null;
    initCanvas();
    animate();

    const handleResize = () => initCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafID.current) cancelAnimationFrame(rafID.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [color]);

  const initCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      const { offsetWidth, offsetHeight } = canvasContainerRef.current;
      canvasSize.current = { w: offsetWidth, h: offsetHeight };

      canvasRef.current.width = offsetWidth * dpr;
      canvasRef.current.height = offsetHeight * dpr;
      canvasRef.current.style.width = `${offsetWidth}px`;
      canvasRef.current.style.height = `${offsetHeight}px`;
      context.current.scale(dpr, dpr);

      circles.current = Array.from({ length: quantity }, circleParams);
    }
  };

  const circleParams = (): Circle => {
    const x = Math.random() * canvasSize.current.w;
    const y = Math.random() * canvasSize.current.h;
    const translateX = 0;
    const translateY = 0;
    const pSize = Math.random() * size + size;
    const alpha = 0;
    const targetAlpha = Math.random() * 0.6 + 0.1;
    const dx = (Math.random() - 0.5) * 0.1;
    const dy = (Math.random() - 0.5) * 0.1;
    const magnetism = 0.1 + Math.random() * 4;
    return { x, y, translateX, translateY, size: pSize, alpha, targetAlpha, dx, dy, magnetism };
  };

  const drawCircle = (circle: Circle) => {
    if (context.current) {
      const { x, y, size, alpha } = circle;
      context.current.beginPath();
      context.current.arc(x, y, size, 0, Math.PI * 2);
      context.current.fillStyle = `rgba(${hexToRgb(color).join(",")}, ${alpha})`;
      context.current.fill();
    }
  };

  const animate = () => {
    if (!context.current) return;
    context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    circles.current.forEach((circle) => {
      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;
      drawCircle(circle);
    });
    rafID.current = requestAnimationFrame(animate);
  };

  return (
    <div className={className} ref={canvasContainerRef}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Particles;
