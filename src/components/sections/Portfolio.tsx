import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import Reveal from "@/components/ui/Reveal";

const projects = [
  {
    label: "Roof Replacement",
    beforeSrc:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
    beforeAlt: "Two-story house with a dark shingle roof at golden hour",
    afterSrc:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1600&auto=format&fit=crop",
    afterAlt: "Red brick home with a clean new shingle roof on a sunny day",
  },
  {
    label: "Storm Damage Repair",
    beforeSrc:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1600&auto=format&fit=crop",
    beforeAlt: "A-frame cabin with a steep dark roof in a forest at dusk",
    afterSrc:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop",
    afterAlt: "Classic white house with a black shingle roof at night",
  },
  {
    label: "Gutter Installation",
    beforeSrc:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1600&auto=format&fit=crop",
    beforeAlt: "Modern coastal home with a light gray metal roof",
    afterSrc:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1600&auto=format&fit=crop",
    afterAlt: "Red cottage with a red metal roof on a grassy hill",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Featured Work
          </h2>
          <p className="mt-5 font-sans text-base text-ink-soft sm:text-lg">
            Drag the slider to see the difference our work makes.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-3 md:gap-10">
          {projects.map((project, i) => (
            <Reveal key={project.label} delay={i * 0.1}>
              <BeforeAfterSlider
                label={project.label}
                beforeSrc={project.beforeSrc}
                beforeAlt={project.beforeAlt}
                afterSrc={project.afterSrc}
                afterAlt={project.afterAlt}
                hintDelay={i * 250}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
