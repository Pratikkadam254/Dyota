"use client";

import { useEffect, useRef } from "react";

export const DotPattern = ({ className = "", ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas full width/height
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Updated values for more visibility
    const dotSize = 2.5; // Increased from 2 to 2.5
    const spacing = 40; // Increased spacing slightly

    const cols = Math.floor(canvas.width / spacing);
    const rows = Math.floor(canvas.height / spacing);

    ctx.fillStyle = "#0066FF";
    ctx.globalAlpha = 0.15; // Increased from 0.15 to 0.25 for more visibility

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        ctx.beginPath();
        ctx.arc(
          i * spacing,
          j * spacing,
          dotSize,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      {...props}
    />
  );
};