"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const specs = [
  {
    term: "Shingles",
    detail: "GAF Timberline HDZ® or Owens Corning Duration® architectural",
  },
  {
    term: "Underlayment",
    detail: "Synthetic base; ice & water shield at eaves, valleys and penetrations",
  },
  {
    term: "Ventilation",
    detail: "Balanced ridge-and-intake system, calculated to your attic volume",
  },
  {
    term: "Flashing",
    detail: "New step flashing at every wall; drip edge on all eaves and rakes",
  },
  {
    term: "Warranty",
    detail: "25-year workmanship, backed by up to 50-year manufacturer coverage",
  },
  {
    term: "Timeline",
    detail: "Most replacements completed in one to two days, weather permitting",
  },
];

export default function Specs() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top 75%",
              once: true,
            },
          })
          .from(".specs-header", {
            y: 28,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          })
          .from(
            ".spec-row",
            {
              y: 20,
              opacity: 0,
              duration: 0.7,
              ease: "power4.out",
              stagger: 0.08,
            },
            "-=0.4"
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-cream-dark py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="specs-header">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Specifications
          </p>
          <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
            In every roof we install
          </h2>
        </div>

        <dl className="mt-14 border-t border-line md:mt-20">
          {specs.map((spec) => (
            <div
              key={spec.term}
              className="spec-row grid grid-cols-1 gap-2 border-b border-line py-6 md:grid-cols-[220px_1fr] md:gap-8 md:py-7"
            >
              <dt className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-soft md:pt-1">
                {spec.term}
              </dt>
              <dd className="font-sans text-base leading-relaxed text-ink sm:text-lg">
                {spec.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
