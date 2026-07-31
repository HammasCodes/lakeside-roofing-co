/**
 * Generates on-brand SVG placeholders for the portfolio grid and the
 * before/after slider.
 *
 * These exist only so the layout can be built and verified with correct
 * aspect ratios locked in. When real photography arrives, drop the files into
 * src/assets/projects/ with the same basenames and aspect ratios and the page
 * will render at CLS 0 — then delete this script.
 *
 *   node scripts/gen-placeholders.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '../src/assets/projects');

const INK = '#191919';
const MIST = '#F4F3F3';
const CLAY = '#A8552F';

/** Deterministic PRNG so regenerating produces identical files. */
function rng(seed) {
	let s = seed;
	return () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
}

/**
 * Draws an abstract roofline: a horizon, a few pitched masses, and a sky
 * gradient. Enough structure to read as architecture at thumbnail size
 * without pretending to be a photograph.
 */
function roofline({ w, h, seed, sky, roof, accent, label }) {
	const r = rng(seed);
	const horizon = h * (0.62 + r() * 0.08);
	const id = `g${seed}`;

	let masses = '';
	let x = -w * 0.05;
	while (x < w * 1.05) {
		const bw = w * (0.16 + r() * 0.2);
		const bh = h * (0.14 + r() * 0.26);
		const peak = x + bw / 2;
		const top = horizon - bh;
		const eave = horizon - bh * 0.34;
		masses += `<path d="M${x.toFixed(1)} ${horizon.toFixed(1)} L${x.toFixed(1)} ${eave.toFixed(1)} L${peak.toFixed(1)} ${top.toFixed(1)} L${(x + bw).toFixed(1)} ${eave.toFixed(1)} L${(x + bw).toFixed(1)} ${horizon.toFixed(1)} Z" fill="${roof}" opacity="${(0.55 + r() * 0.45).toFixed(2)}"/>`;
		x += bw * (0.82 + r() * 0.2);
	}

	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${sky}"/>
      <stop offset="1" stop-color="${MIST}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${id})"/>
  ${masses}
  <rect y="${horizon.toFixed(1)}" width="${w}" height="${(h - horizon).toFixed(1)}" fill="${INK}" opacity="0.9"/>
  <circle cx="${(w * 0.8).toFixed(1)}" cy="${(h * 0.2).toFixed(1)}" r="${(h * 0.05).toFixed(1)}" fill="${accent}" opacity="0.5"/>
</svg>`;
}

const projects = [
	{ file: '01-hillside', w: 800, h: 1000, seed: 11, sky: '#DED9D4', roof: INK, accent: CLAY, label: 'Hillside residence' },
	{ file: '02-oakmont', w: 1200, h: 675, seed: 23, sky: '#E4DFDA', roof: '#2C2C2C', accent: CLAY, label: 'Oakmont estate' },
	{ file: '03-cedar', w: 900, h: 900, seed: 37, sky: '#E9E2DA', roof: CLAY, accent: INK, label: 'Cedar shake restoration' },
	{ file: '04-ranch', w: 900, h: 1125, seed: 41, sky: '#DCD7D2', roof: INK, accent: CLAY, label: 'Ranch property' },
	{ file: '05-slate', w: 1200, h: 900, seed: 59, sky: '#E1DCD7', roof: '#242424', accent: CLAY, label: 'Slate roof' },
	{ file: '06-copper', w: 900, h: 675, seed: 67, sky: '#EBE3DB', roof: CLAY, accent: INK, label: 'Copper standing seam' },
	// Before/after pair shares a seed so the geometry matches across the wipe.
	{ file: 'ba-before', w: 1400, h: 900, seed: 83, sky: '#CFCAC4', roof: '#4A4643', accent: '#6E6A66', label: 'Storm damaged roof before restoration' },
	{ file: 'ba-after', w: 1400, h: 900, seed: 83, sky: '#EDE7E0', roof: INK, accent: CLAY, label: 'Completed roof after restoration' },
];

mkdirSync(OUT, { recursive: true });
for (const p of projects) {
	writeFileSync(resolve(OUT, `${p.file}.svg`), roofline(p), 'utf8');
}
console.log(`Wrote ${projects.length} placeholders to src/assets/projects/`);
