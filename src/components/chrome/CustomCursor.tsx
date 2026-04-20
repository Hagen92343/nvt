"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || prefersReduced) return;

    document.body.classList.add("custom-cursor");

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onDown = () => ring.classList.add("cursor-down");
    const onUp = () => ring.classList.remove("cursor-down");

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        ring.classList.add("cursor-hover");
      } else {
        ring.classList.remove("cursor-hover");
      }
    };

    let rafId = 0;
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("custom-cursor");
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed -left-1 -top-1 z-[100] h-1.5 w-1.5 rounded-full bg-cocoa-900 dark:bg-cream-50 mix-blend-difference"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed -left-4 -top-4 z-[100] h-8 w-8 rounded-full border border-cocoa-900/40 dark:border-cream-50/40 mix-blend-difference transition-[width,height,opacity,border-color] duration-500 ease-apple data-[hover]:scale-150"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <style>{`
        .cursor-hover { width: 3rem !important; height: 3rem !important; margin-left: -1rem; margin-top: -1rem; border-color: rgb(241 170 76 / 0.7) !important; }
        .cursor-down { transform-origin: center; }
      `}</style>
    </>
  );
}
