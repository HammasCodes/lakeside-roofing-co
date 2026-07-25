"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const fieldClasses =
  "peer mt-3 w-full border-0 border-b border-cream/25 bg-transparent pb-3 font-sans text-cream placeholder:text-cream/30 focus:outline-none";

const underlineClasses =
  "pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out peer-focus:scale-x-100";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="font-display text-4xl text-cream sm:text-5xl">
            Schedule Your Free Roof Inspection
          </h2>
          <p className="mt-5 font-sans text-base text-cream/70 sm:text-lg">
            Get a free, no-obligation inspection from our team. We&apos;ll
            walk you through every step of the process.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 text-left md:grid-cols-2">
            <div className="relative">
              <label
                htmlFor="name"
                className="font-sans text-xs uppercase tracking-widest text-cream/60"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className={fieldClasses}
                placeholder="Your full name"
              />
              <span className={underlineClasses} />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="font-sans text-xs uppercase tracking-widest text-cream/60"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={fieldClasses}
                placeholder="you@example.com"
              />
              <span className={underlineClasses} />
            </div>

            <div className="relative md:col-span-2">
              <label
                htmlFor="phone"
                className="font-sans text-xs uppercase tracking-widest text-cream/60"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className={fieldClasses}
                placeholder="(555) 123-4567"
              />
              <span className={underlineClasses} />
            </div>

            <div className="relative md:col-span-2">
              <label
                htmlFor="message"
                className="font-sans text-xs uppercase tracking-widest text-cream/60"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className={`${fieldClasses} resize-none`}
                placeholder="Tell us about your roof and what's going on"
              />
              <span className={underlineClasses} />
            </div>

            <div className="md:col-span-2">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-full bg-accent px-8 py-4 font-sans text-sm font-medium tracking-wide text-cream shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark sm:w-auto"
              >
                Schedule Inspection
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
