/**
 * Bakes the hero boomerang.
 *
 *   node scripts/build-hero.mjs
 *
 * Takes public/hero-roofer.mp4 (1920x1080, 11.3s, 19.7 MB) and produces a
 * short, seamlessly ping-ponging loop small enough to keep a 100 Lighthouse
 * Performance score:
 *
 *   public/hero/boomerang-960.webm   565 KB  AV1
 *   public/hero/boomerang-960.mp4    774 KB  H.264 (Safari / older browsers)
 *   src/assets/hero-poster.jpg       source for astro:assets to optimise
 *
 * Why bake rather than capture frames at runtime: ping-ponging 272 frames on a
 * canvas would hold ~564 MB of bitmap data (272 x 960 x 540 x 4 bytes) and
 * crashes mobile Safari. Concatenating the clip with a reversed copy moves the
 * entire effect into the file, so a plain `loop` attribute reproduces it for
 * zero JavaScript and zero memory.
 *
 * Requires ffmpeg on PATH with libx264 and libsvtav1.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const WORK = resolve(ROOT, '.work');
const SOURCE = resolve(ROOT, 'public/hero-roofer.mp4');

// Window of the source clip to use, and the loop's working resolution.
// CAPTURE_WIDTH is 960 because the video is a backdrop behind a scrim — extra
// resolution costs bytes and buys nothing at this blur/opacity.
const START = 1.0;
const DURATION = 4.0;
const WIDTH = 960;
const FPS = 24;

const ff = (args) => execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });
const probeFrames = (file) =>
	Number(
		execFileSync('ffprobe', [
			'-v', 'error', '-count_frames', '-select_streams', 'v:0',
			'-show_entries', 'stream=nb_read_frames', '-of', 'csv=p=0', file,
		]).toString().trim(),
	);

mkdirSync(WORK, { recursive: true });
mkdirSync(resolve(ROOT, 'public/hero'), { recursive: true });

// 1. Trim the window, scale down, drop audio.
console.log('· forward segment');
ff([
	'-ss', String(START), '-t', String(DURATION), '-i', SOURCE, '-an',
	'-vf', `scale=${WIDTH}:-2:flags=lanczos,fps=${FPS}`,
	'-c:v', 'libx264', '-crf', '20', '-preset', 'slow', '-pix_fmt', 'yuv420p',
	resolve(WORK, 'fwd.mp4'),
]);

const frames = probeFrames(resolve(WORK, 'fwd.mp4'));

// 2. Reverse, dropping the first and last frames of the reversed segment.
//    Without this the turnaround frames appear twice and the loop visibly
//    stutters at each end.
console.log(`· reversed segment (${frames} frames in, dropping 2 duplicates)`);
ff([
	'-i', resolve(WORK, 'fwd.mp4'), '-an',
	'-vf', `reverse,trim=start_frame=1:end_frame=${frames - 1},setpts=PTS-STARTPTS`,
	'-c:v', 'libx264', '-crf', '20', '-preset', 'slow', '-pix_fmt', 'yuv420p',
	resolve(WORK, 'rev.mp4'),
]);

// 3. Concatenate into the boomerang master.
console.log('· concat');
writeFileSync(resolve(WORK, 'list.txt'), "file 'fwd.mp4'\nfile 'rev.mp4'\n");
ff(['-f', 'concat', '-safe', '0', '-i', resolve(WORK, 'list.txt'), '-c', 'copy', resolve(WORK, 'boom.mp4')]);

// 4. Delivery encodes. WebM/AV1 is listed first in the <source> order; Safari
//    lacks broad AV1 support and falls through to the H.264 MP4.
//    `+faststart` moves the moov atom to the front so playback can begin
//    before the file finishes downloading.
console.log('· AV1 webm');
ff([
	'-i', resolve(WORK, 'boom.mp4'), '-an',
	'-c:v', 'libsvtav1', '-crf', '50', '-preset', '4', '-pix_fmt', 'yuv420p',
	resolve(ROOT, 'public/hero/boomerang-960.webm'),
]);

console.log('· H.264 mp4');
ff([
	'-i', resolve(WORK, 'boom.mp4'), '-an',
	'-c:v', 'libx264', '-crf', '30', '-preset', 'slow', '-profile:v', 'main',
	'-pix_fmt', 'yuv420p', '-movflags', '+faststart',
	resolve(ROOT, 'public/hero/boomerang-960.mp4'),
]);

// 5. Poster source. Kept in src/assets/ (not public/) so astro:assets can
//    generate AVIF/WebP variants — the <video poster> attribute takes a single
//    URL and cannot negotiate formats.
console.log('· poster source');
ff([
	'-ss', '0', '-i', resolve(WORK, 'boom.mp4'), '-frames:v', '1',
	'-vf', 'scale=1600:-2', '-q:v', '2',
	resolve(ROOT, 'src/assets/hero-poster.jpg'),
]);

rmSync(WORK, { recursive: true, force: true });

const kb = (p) => `${(statSync(p).size / 1024).toFixed(0)} KB`;
console.log('\nDone.');
console.log(`  boomerang-960.webm  ${kb(resolve(ROOT, 'public/hero/boomerang-960.webm'))}`);
console.log(`  boomerang-960.mp4   ${kb(resolve(ROOT, 'public/hero/boomerang-960.mp4'))}`);
console.log(`  hero-poster.jpg     ${kb(resolve(ROOT, 'src/assets/hero-poster.jpg'))} (source)`);
