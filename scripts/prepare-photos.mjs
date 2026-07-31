/**
 * Normalises the supplied project photography into src/assets/projects/.
 *
 *   node scripts/prepare-photos.mjs
 *
 * The originals are 4300-8200px wide and 1-7 MB each. astro:assets can resize
 * them, but keeping multi-megabyte sources in the repo slows every build and
 * bloats git history for no benefit: nothing on the page is served above
 * 1600px. This downscales each source to 2400px wide at quality 82, which is
 * still generous headroom for retina crops.
 *
 * Also produces the before/after pair for the restoration slider.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'src/assets/projects');
const SRC = resolve(ROOT, 'public');

const ff = (args) =>
	execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });

/** original filename -> output slug */
const PHOTOS = [
	['pexels-rstephens-37677476.jpg', 'brick-reroof'],
	['pexels-rstephens-34304714.jpg', 'stone-teardown'],
	['pexels-ninobur-15964928.jpg', 'clay-tile'],
	['pexels-guvo59-31762405.jpg', 'heritage-tile'],
	['pexels-hansmiddendorp-8576025.jpg', 'dusk-delivery'],
	['pexels-crab-lens-179881567-33293448.jpg', 'skyline-tile'],
];

mkdirSync(OUT, { recursive: true });

for (const [file, slug] of PHOTOS) {
	const input = resolve(SRC, file);
	if (!existsSync(input)) {
		console.warn(`  skip ${file} (not found)`);
		continue;
	}
	console.log(`· ${slug}`);
	ff([
		'-i', input,
		'-vf', 'scale=2400:-2:flags=lanczos',
		'-q:v', '4',
		resolve(OUT, `${slug}.jpg`),
	]);
}

/**
 * Before/after pair for the restoration slider.
 *
 * IMPORTANT: the "before" is a colour-graded derivative of the same photograph,
 * not a genuine pre-restoration shot. It exists so the slider can be built and
 * demonstrated against matching framing (a real pair must share a camera
 * position or the wipe reads as a jump cut). Replace both files with an actual
 * before/after pair from a real job before this goes in front of customers.
 */
console.log('· before/after pair (before = graded derivative, see note in script)');
const baseline = resolve(OUT, 'brick-reroof.jpg');

ff(['-i', baseline, '-vf', 'scale=1800:-2:flags=lanczos', '-q:v', '4', resolve(OUT, 'ba-after.jpg')]);

ff([
	'-i', baseline,
	'-vf',
	[
		'scale=1800:-2:flags=lanczos',
		// Weathered look: drain the colour, cool it down, crush the highlights.
		'colorchannelmixer=.35:.38:.27:0:.32:.40:.28:0:.34:.38:.34',
		'eq=contrast=0.88:brightness=-0.06:saturation=0.55:gamma=0.94',
		'colorbalance=rs=-0.06:gs=-0.02:bs=0.08',
		// Light grain so it doesn't read as a flat filter.
		'noise=alls=6:allf=t',
	].join(','),
	'-q:v', '4',
	resolve(OUT, 'ba-before.jpg'),
]);

console.log('\nDone. Wrote 6 project photos + before/after pair to src/assets/projects/');
