"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINE_ONE = "The roof you never think about.";
const LINE_TWO = "That's the one we build.";

function Words({ text }: { text: string }) {
  return (
    <span aria-hidden="true">
      {text.split(" ").map((word, i, words) => (
        <span key={i} className="inline-block whitespace-nowrap">
          <span
            className={`manifesto-word inline-block will-change-transform ${
              word === "we" || word === "build." ? "text-accent" : ""
            }`}
          >
            {word}
          </span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

export default function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top 72%",
              once: true,
            },
          })
          .from(".manifesto-kicker", {
            y: 16,
            opacity: 0,
            duration: 0.7,
            ease: "power4.out",
          })
          .from(
            ".manifesto-word",
            {
              y: "0.6em",
              opacity: 0,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.04,
            },
            "-=0.35"
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="manifesto"
      className="bg-cream px-6 py-28 md:py-40 lg:px-10"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="manifesto-kicker font-sans text-xs font-medium uppercase tracking-[0.3em] text-accent">
          Our Promise
        </p>
        <h2 className="mt-8 font-display text-4xl leading-[1.15] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="sr-only">
            {LINE_ONE} {LINE_TWO}
          </span>
          <Words text={LINE_ONE} /> <Words text={LINE_TWO} />
        </h2>
      </div>
    </section>
  );
}
