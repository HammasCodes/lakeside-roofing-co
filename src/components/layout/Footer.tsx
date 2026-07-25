import Reveal from "@/components/ui/Reveal";

const quickLinks = [
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-display text-xl text-cream">
              Lakeside Roofing Co.
            </p>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-cream/60">
              Trusted roofing experts serving the Dallas-Fort Worth
              Metroplex. Personal. Reliable. Professional.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-cream/40">
              Quick Links
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-cream/40">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3 font-sans text-sm text-cream/70">
              <li>(972) 365-1216</li>
              <li>jason@lakesideroofco.com</li>
              <li>
                Serving the DFW Metroplex (Dallas, Richardson, Plano,
                Frisco, McKinney)
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-16 border-t border-cream/10 pt-8">
          <p className="font-sans text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Lakeside Roofing Co. All
            rights reserved.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
