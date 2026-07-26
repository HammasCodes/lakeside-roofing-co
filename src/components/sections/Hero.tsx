"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrameSequence } from "@/hooks/useFrameSequence";

gsap.registerPlugin(ScrollTrigger);

const TITLE = "DFW's Trusted Roofing Experts";

function TitleChars() {
  const words = TITLE.split(" ");
  return (
    <span aria-hidden="true">
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((ch, ci) => (
            <span key={ci} className="hero-char inline-block will-change-transform">
              {ch}
            </span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cap1 = useRef<HTMLDivElement>(null);
  const cap2 = useRef<HTMLDivElement>(null);
  const cap3 = useRef<HTMLDivElement>(null);
  const railFill = useRef<HTMLDivElement>(null);
  const cue = useRef<HTMLDivElement>(null);
  const fadeOut = useRef<HTMLDivElement>(null);

  const { ready, draw, lastProgress } = useFrameSequence("hero");
  const drawRef = useRef(draw);

  useEffect(() => {
    drawRef.current = draw;
  }, [draw]);

  useEffect(() => {
    if (!ready) return;
    drawRef.current(canvasRef.current, lastProgress.current, "cover");
  }, [ready, lastProgress]);

  useEffect(() => {
    const onResize = () =>
      drawRef.current(canvasRef.current, lastProgress.current, "cover");
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [lastProgress]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" }, delay: 0.3 })
          .from(".hero-kicker", { y: 16, opacity: 0, duration: 0.7 })
          .from(".hero-char", { y: "0.7em", opacity: 0, duration: 1, stagger: 0.025 }, "-=0.45")
          .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, stagger: 0.12 }, "-=0.55")
          .from(cue.current, { opacity: 0, duration: 0.8 }, "-=0.3");

        const proxy = { t: 0 };

        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.5,
            },
          })
          .to(
            proxy,
            {
              t: 1,
              duration: 3,
              ease: "none",
              onUpdate: () => drawRef.current(canvasRef.current, proxy.t, "cover"),
            },
            0
          )
          .to(railFill.current, { scaleY: 1, duration: 3, ease: "none" }, 0)
          .to(cue.current, { opacity: 0, duration: 0.2, ease: "none" }, 0)
          .to(cap1.current, { yPercent: -18, opacity: 0, duration: 0.5, ease: "none" }, 0.35)
          .fromTo(
            cap2.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "none" },
            0.9
          )
          .to(cap2.current, { y: -60, opacity: 0, duration: 0.5, ease: "none" }, 1.7)
          .fromTo(
            cap3.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "none" },
            2.2
          )
          .to(fadeOut.current, { opacity: 1, duration: 0.22, ease: "none" }, 2.78);
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[300vh] bg-ink md:h-[400vh]">
      <div className="sticky top-0 h-svh min-h-[560px] overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/video/hero-3d-poster.jpg"
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              ready ? "opacity-0" : "opacity-100"
            }`}
          />
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/40" />
          <div className="grain absolute inset-0 opacity-[0.08] mix-blend-overlay" />
        </div>

        <div
          ref={cap1}
          className="absolute inset-0 z-10 flex items-end px-6 pb-24 will-change-transform md:items-center md:px-16 lg:px-24"
        >
          <div className="max-w-4xl">
            <p className="hero-kicker font-sans text-xs font-medium uppercase tracking-[0.3em] text-white/70 sm:text-sm">
              Lakeside Roofing Co. — Dallas · Fort Worth
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="sr-only">{TITLE}</span>
              <TitleChars />
            </h1>
            <p className="hero-sub mt-6 max-w-lg font-sans text-base text-white/85 sm:text-lg">
              Serving the Metroplex with the highest quality roofing products
              and workmanship. Personal. Reliable. Professional.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="hero-cta rounded-full bg-accent px-8 py-3.5 text-center font-sans text-sm font-medium tracking-wide text-white shadow-lg shadow-accent/20 transition-[scale,background-color] duration-200 hover:scale-[1.03] hover:bg-accent-dark active:scale-[0.97]"
              >
                Schedule Inspection
              </a>
              <a
                href="#portfolio"
                className="hero-cta rounded-full border border-white/60 px-8 py-3.5 text-center font-sans text-sm font-medium tracking-wide text-white transition-[scale,background-color] duration-200 hover:scale-[1.03] hover:bg-white/10 active:scale-[0.97]"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

        <div
          ref={cap2}
          className="absolute inset-0 z-10 flex items-end px-6 pb-24 opacity-0 will-change-transform md:items-center md:px-16 lg:px-24"
        >
          <div className="max-w-xl">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-white/70 sm:text-sm">
              <span className="text-accent">02</span> — The System
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Built for Texas weather.
            </h2>
            <p className="mt-5 max-w-md font-sans text-base text-white/85 sm:text-lg">
              Architectural shingles over synthetic underlayment. Ice &amp;
              water shield in every valley. Ventilation calculated to your
              attic, not a template.
            </p>
          </div>
        </div>

        <div
          ref={cap3}
          className="absolute inset-0 z-10 flex items-end justify-end px-6 pb-24 opacity-0 will-change-transform md:items-center md:px-16 lg:px-24"
        >
          <div className="max-w-xl md:text-right">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-white/70 sm:text-sm">
              <span className="text-accent">03</span> — The Turnaround
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Done before the forecast turns.
            </h2>
            <p className="mt-5 font-sans text-base text-white/85 sm:text-lg md:ml-auto md:max-w-md">
              Most roofs replaced in one to two days — then a final
              walkthrough, magnet-swept cleanup, and a 25-year workmanship
              warranty.
            </p>
            <div className="mt-9 md:flex md:justify-end">
              <a
                href="#contact"
                className="inline-block rounded-full bg-accent px-8 py-3.5 text-center font-sans text-sm font-medium tracking-wide text-white shadow-lg shadow-accent/20 transition-[scale,background-color] duration-200 hover:scale-[1.03] hover:bg-accent-dark active:scale-[0.97]"
              >
                Schedule Inspection
              </a>
            </div>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 md:block">
          <div className="relative h-44 w-px bg-white/25">
            <div
              ref={railFill}
              className="absolute inset-0 origin-top scale-y-0 bg-accent"
            />
            <span className="absolute -left-[3px] -top-[3px] h-[7px] w-[7px] rounded-full bg-white/60" />
            <span className="absolute -left-[3px] top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-white/60" />
            <span className="absolute -bottom-[3px] -left-[3px] h-[7px] w-[7px] rounded-full bg-white/60" />
          </div>
        </div>

        <div
          ref={cue}
          className="absolute bottom-8 right-8 z-20 hidden flex-col items-center gap-3 md:flex"
        >
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
            Scroll
          </span>
          <span className="animate-cue-bob block h-8 w-px bg-white/60" />
        </div>

        <div
          ref={fadeOut}
          className="pointer-events-none absolute inset-0 z-30 bg-cream opacity-0"
        />
      </div>
    </section>
  );
}
