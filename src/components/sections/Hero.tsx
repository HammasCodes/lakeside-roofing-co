import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop"
        alt="Modern luxury custom home with pool at dusk"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/20" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h1 className="font-display text-4xl leading-tight text-white sm:text-6xl md:text-7xl">
          Built for a Life Well Lived.
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base text-white/85 sm:text-lg">
          Custom luxury homes crafted with uncompromising attention to
          detail.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-accent px-8 py-3.5 text-center font-sans text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark sm:w-auto"
          >
            Book a Consultation
          </a>
          <a
            href="#portfolio"
            className="w-full rounded-full border border-white/60 px-8 py-3.5 text-center font-sans text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
