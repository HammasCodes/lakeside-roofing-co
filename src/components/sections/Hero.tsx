"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/20" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.h1
          variants={item}
          className="font-display text-4xl leading-tight text-white sm:text-6xl md:text-7xl"
        >
          DFW&apos;s Trusted Roofing Experts
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-xl font-sans text-base text-white/85 sm:text-lg"
        >
          Serving the Dallas-Fort Worth Metroplex with the highest quality
          roofing products and workmanship. Personal. Reliable.
          Professional.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-full bg-accent px-8 py-3.5 text-center font-sans text-sm font-medium tracking-wide text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark sm:w-auto"
          >
            Schedule Inspection
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-full border border-white/60 px-8 py-3.5 text-center font-sans text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            View Our Work
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
