"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  label: string;
  hintDelay?: number;
}

export default function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  label,
  hintDelay = 0,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [animateTransition, setAnimateTransition] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const hintTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const timers = hintTimers.current;
    const schedule = (delay: number, fn: () => void) => {
      timers.push(setTimeout(fn, delay));
    };

    schedule(600 + hintDelay, () => {
      setAnimateTransition(true);
      setPosition(62);
    });
    schedule(1000 + hintDelay, () => setPosition(38));
    schedule(1500 + hintDelay, () => setPosition(50));
    schedule(1900 + hintDelay, () => setAnimateTransition(false));

    return () => timers.forEach(clearTimeout);
  }, [hintDelay]);

  const cancelHint = () => {
    hintTimers.current.forEach(clearTimeout);
    setAnimateTransition(false);
  };

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    cancelHint();
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      cancelHint();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      cancelHint();
      setPosition((p) => Math.min(100, p + 5));
    }
  };

  const transitionStyle = animateTransition
    ? "left 0.55s cubic-bezier(0.16,1,0.3,1), clip-path 0.55s cubic-bezier(0.16,1,0.3,1)"
    : "none";

  return (
    <div className="group flex flex-col gap-4">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-lg shadow-md shadow-ink/10 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-ink/20"
      >
        {/* After image (base layer, fully visible) */}
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="pointer-events-none object-cover"
        />

        {/* Before image (clipped overlay) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
            transition: transitionStyle,
          }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="pointer-events-none object-cover grayscale-[15%] brightness-90"
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-sans text-xs text-cream">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-sans text-xs text-cream">
          After
        </span>

        {/* Drag handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-cream"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
            transition: transitionStyle,
          }}
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label={`${label} before and after comparison`}
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={handleKeyDown}
            className="pointer-events-auto absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-cream text-ink shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 3L2 8l4 5M10 3l4 5-4 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <p className="text-center font-display text-xl text-ink">{label}</p>
    </div>
  );
}
