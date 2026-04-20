"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export function CountUp({ from = 0, to, duration = 1.8, decimals = 0, suffix = "", prefix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const [val, setVal] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let rafId = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      setVal(from + (to - from) * ease(t));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, from, to, duration]);

  const formatted = decimals > 0 ? val.toFixed(decimals).replace(".", ",") : Math.round(val).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
