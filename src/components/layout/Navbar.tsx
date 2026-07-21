"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-cream/95 border-b border-line backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#"
          className={`font-display text-xl tracking-wide transition-colors ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          Marlowe Homes
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm tracking-wide transition-colors ${
                solid ? "text-ink-soft hover:text-ink" : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Book a Consultation
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 transition-transform ${
              solid ? "bg-ink" : "bg-white"
            } ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-transform ${
              solid ? "bg-ink" : "bg-white"
            } ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-cream px-6 pb-8 pt-2 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-base text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-accent px-6 py-3 text-center font-sans text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
