// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Production origin. @astrojs/sitemap requires it, and it seeds every
	// canonical, OG and sitemap URL. Update this (and the Sitemap: line in
	// public/robots.txt) if a custom domain is attached to the project.
	site: 'https://lakeside-roofing-co.vercel.app',

	integrations: [sitemap()],

	build: {
		// The whole stylesheet is ~8 KB. Inlining it removes a render-blocking
		// request worth ~150 ms on throttled mobile; at this size the cost of
		// losing cross-page CSS caching is not worth paying.
		inlineStylesheets: 'always',
	},

	vite: {
		plugins: [tailwindcss()],
	},

	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Fraunces',
			// Deliberately NOT --font-display: Tailwind's @theme owns that name.
			// <Font> writes this onto :root, @theme aliases it (see global.css).
			cssVariable: '--ff-display',
			weights: [400],
			styles: ['normal'],
			subsets: ['latin'],
			// Astro builds a metric-adjusted @font-face from the first fallback.
			// Defaulting to Arial means a sans is used to approximate a display
			// serif, which leaves more swap shift than necessary.
			fallbacks: ['Georgia', 'Times New Roman', 'serif'],
		},
		{
			provider: fontProviders.fontsource(),
			name: 'Inter',
			cssVariable: '--ff-sans',
			weights: [400, 500],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['Arial', 'system-ui', 'sans-serif'],
		},
	],
});
