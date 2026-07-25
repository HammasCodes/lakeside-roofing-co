import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "Lakeside replaced our entire roof after the hail storm in 3 days. They handled the whole insurance claim for us and the crew was incredibly professional.",
    author: "Sarah M.",
    location: "Plano",
  },
  {
    quote:
      "From the free inspection to the final walkthrough, everything was handled exactly as promised. Our new roof looks incredible and the gutters work perfectly.",
    author: "Mark T.",
    location: "Frisco",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-5 font-sans text-base text-ink-soft sm:text-lg">
            The relationships we build are the true measure of our work.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-12">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.author}
              delay={i * 0.12}
              className="group flex flex-col rounded-lg p-2 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="font-display text-6xl leading-none text-ink-soft/40 transition-colors duration-300 group-hover:text-accent/60">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
