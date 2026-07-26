"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Free Inspection",
    body: "We assess your roof's condition and document any damage, at no cost and with no obligation.",
  },
  {
    number: "02",
    title: "Insurance Claim Help",
    body: "We work directly with your insurance adjuster to make sure your claim reflects the full scope of the repair.",
  },
  {
    number: "03",
    title: "Roof Installation",
    body: "Our certified crews install your new roof with premium materials and obsessive attention to every detail.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    body: "We walk the finished job with you to confirm every detail meets our standards, and yours.",
  },
];

export default function Process() {
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
          .from(".process-header", {
            y: 28,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          })
          .from(
            ".process-step",
            {
              y: 32,
              opacity: 0,
              duration: 0.8,
              ease: "power4.out",
              stagger: 0.12,
            },
            "-=0.4"
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={root} className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="process-header mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-5 font-sans text-base text-ink-soft sm:text-lg">
            A straightforward, transparent process from first inspection to
            final walkthrough.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 divide-y divide-line md:mt-24 md:grid-cols-4 md:divide-y-0 md:divide-x">
          {steps.map((step) => (
            <div
              key={step.number}
              className="process-step group px-0 py-10 first:pt-0 last:pb-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0"
            >
              <span className="font-display text-5xl text-ink-soft/70 transition-colors duration-300 group-hover:text-accent">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-2xl text-ink">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft sm:text-base">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
