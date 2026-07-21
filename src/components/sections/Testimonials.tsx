const testimonials = [
  {
    quote:
      "Building our home with Marlowe was the most stress-free experience we've ever had. They handled every detail with absolute precision.",
    author: "Sarah & John Davidson",
    location: "Hill Country",
  },
  {
    quote:
      "The craftsmanship is unmatched. From the architectural details to the final finish, they delivered exactly what they promised, on time.",
    author: "Michael Reeves",
    location: "Lake Travis",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-5 font-sans text-base text-ink-soft sm:text-lg">
            The relationships we build are the true measure of our work.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="flex flex-col">
              <span className="font-display text-6xl leading-none text-ink-soft/40">
                &ldquo;
              </span>

              <p className="mt-4 font-display text-xl leading-relaxed text-ink sm:text-2xl">
                {testimonial.quote}
              </p>

              <div className="mt-8 border-t border-line pt-6">
                <p className="font-sans text-sm text-ink-soft">
                  {testimonial.author}
                </p>
                <p className="font-sans text-sm text-ink-soft">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
