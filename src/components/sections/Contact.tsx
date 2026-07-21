export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl text-cream sm:text-5xl">
          Ready to Build Something Extraordinary?
        </h2>
        <p className="mt-5 font-sans text-base text-cream/70 sm:text-lg">
          Schedule a consultation with our team. We&apos;ll walk you through
          every step of the process.
        </p>

        <form className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 text-left md:grid-cols-2">
          <div>
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
              className="mt-3 w-full border-0 border-b border-cream/25 bg-transparent pb-3 font-sans text-cream placeholder:text-cream/30 focus:border-accent focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          <div>
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
              className="mt-3 w-full border-0 border-b border-cream/25 bg-transparent pb-3 font-sans text-cream placeholder:text-cream/30 focus:border-accent focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div className="md:col-span-2">
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
              className="mt-3 w-full border-0 border-b border-cream/25 bg-transparent pb-3 font-sans text-cream placeholder:text-cream/30 focus:border-accent focus:outline-none"
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="md:col-span-2">
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
              className="mt-3 w-full resize-none border-0 border-b border-cream/25 bg-transparent pb-3 font-sans text-cream placeholder:text-cream/30 focus:border-accent focus:outline-none"
              placeholder="Tell us about your project"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="button"
              className="w-full rounded-full bg-accent px-8 py-4 font-sans text-sm font-medium tracking-wide text-cream transition-colors hover:bg-accent-dark sm:w-auto"
            >
              Book a Consultation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
