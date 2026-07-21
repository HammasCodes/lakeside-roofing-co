const steps = [
  {
    number: "01",
    title: "Discover",
    body: "We start with your vision. Every detail of your lifestyle, aesthetic, and needs shapes the foundation of the design.",
  },
  {
    number: "02",
    title: "Design",
    body: "Our architects translate your vision into precise plans. You see every space before we break ground.",
  },
  {
    number: "03",
    title: "Build",
    body: "Our master craftsmen bring the design to life with uncompromising quality and obsessive attention to detail.",
  },
  {
    number: "04",
    title: "Deliver",
    body: "We hand you the keys to a home that exceeds expectations, built to last for generations.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            How We Build
          </h2>
          <p className="mt-5 font-sans text-base text-ink-soft sm:text-lg">
            A considered, transparent process from first conversation to
            final walkthrough.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 divide-y divide-line md:mt-24 md:grid-cols-4 md:divide-y-0 md:divide-x">
          {steps.map((step) => (
            <div key={step.number} className="px-0 py-10 first:pt-0 last:pb-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0">
              <span className="font-display text-5xl text-ink-soft/70">
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
