# Design Spec — Custom Home Builder Template

## 1. Overview
A premium, high-converting one-page marketing site for a **high-end custom home builder**, targeting affluent clients ($1M+ builds) whose decisions are driven by trust, craftsmanship, and portfolio quality. Primary conversion goal: **book a consultation call**.

## 2. Design Style — "Modern Luxury Minimal"
- Generous white space; content breathes, nothing feels crowded.
- Large, full-bleed, high-quality photography as the dominant visual element (architecture/interiors).
- Typography pairing: a refined serif (or high-contrast display font) for headlines + a clean neutral sans for body/UI text.
- Muted, earthy, neutral palette — off-white/cream backgrounds, charcoal/near-black text, one warm accent (e.g. clay, brass, or deep olive) used sparingly for CTAs and highlights. No loud colors.
- Subtle, restrained motion (fade/slide-in on scroll, gentle hover states) — never flashy.
- Feels like a high-end architecture firm's site, not a generic contractor template.

## 3. Target Audience
High-end custom home buyers. Messaging and imagery should emphasize craftsmanship, exclusivity, a guided/white-glove process, and proof (portfolio + testimonials) over price-shopping or DIY framing.

## 4. Site Structure (single page, sections in order)
1. **Navbar** — logo, minimal nav links (Process, Portfolio, Testimonials, Contact), sticky, transparent-over-hero → solid on scroll, primary CTA button ("Book a Consultation").
2. **Hero** — full-bleed lifestyle/architecture image or video background, short powerful headline + subheadline, primary CTA ("Book a Consultation"), secondary CTA (e.g. "View Our Work" scrolling to Portfolio).
3. **Process** — "How We Build" step-by-step (e.g. Discover → Design → Build → Deliver), numbered/iconographic, reinforces trust and clarity of what working together looks like.
4. **Portfolio** — featured project gallery, large-format images, grid or asymmetric editorial layout, hover reveals project name/location, links out to a project (detail pages out of scope for v1 per current decision).
5. **Testimonials** — client quotes with name/location/photo, credibility-focused, minimal card or carousel treatment.
6. **CTA / Contact** — closing conversion section: strong headline, consultation booking CTA (form or scheduler embed placeholder), contact details.
7. **Footer** — logo, nav links repeat, social/contact info, legal links.

_Out of scope for this build (may be added later): dedicated project detail pages, About/Team page, pricing/estimate calculator._

## 5. Conversion Strategy
- Primary CTA "Book a Consultation" appears in: Navbar, Hero, and closing CTA section (minimum 3 touchpoints).
- Secondary/soft CTA in Hero ("View Our Work") to capture visitors not ready to convert yet.
- Testimonials and Portfolio placed before the final CTA to build trust momentum right before the ask.

## 6. Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Component-driven section architecture (each section = isolated component for easy iteration)

## 7. Content Tone
Confident, understated, craftsmanship-forward copy. Avoid generic contractor language ("Quality you can trust!"); prefer specific, premium phrasing that speaks to discerning buyers.
