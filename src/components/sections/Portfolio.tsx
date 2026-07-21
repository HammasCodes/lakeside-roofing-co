import Image from "next/image";

const projects = [
  {
    name: "The Hillside Estate",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
    alt: "Modern luxury hillside home exterior at dusk",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    name: "Lakeside Modern",
    location: "Lake Travis, TX",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern lakeside home exterior with clean lines",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    name: "The Canyon House",
    location: "Sedona, AZ",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    alt: "Luxury modern living room interior with natural light",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    name: "Meadowbrook Retreat",
    location: "Aspen, CO",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    alt: "Contemporary custom home nestled in a wooded retreat",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    name: "Cedar Ridge Residence",
    location: "Boulder, CO",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    alt: "Luxury kitchen interior with custom cabinetry",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    name: "The Coastal Modern",
    location: "Malibu, CA",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2000&auto=format&fit=crop",
    alt: "Modern coastal home exterior with expansive glass",
    span: "md:col-span-6 md:row-span-1",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Featured Work
          </h2>
          <p className="mt-5 font-sans text-base text-ink-soft sm:text-lg">
            A selection of homes built with the same care and precision we
            bring to every project.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-6 md:auto-rows-[220px] md:gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`group relative aspect-[4/5] overflow-hidden md:aspect-auto ${project.span}`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 md:group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <h3 className="font-display text-xl text-white sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-white/80">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
