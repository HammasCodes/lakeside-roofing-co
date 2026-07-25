import Reveal from "@/components/ui/Reveal";

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
  return (
    <section id="process" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-5 font-sans text-base text-ink-soft sm:text-lg">
            A straightforward, transparent process from first inspection to
            final walkthrough.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 divide-y divide-line md:mt-24 md:grid-cols-4 md:divide-y-0 md:divide-x">
          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 0.1}
              className="group px-0 py-10 first:pt-0 last:pb-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
