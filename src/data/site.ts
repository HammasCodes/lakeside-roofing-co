/**
 * Single source of truth for business facts and page copy.
 *
 * The FAQ array below is consumed twice: once to render the <details> markup
 * and once to emit FAQPage JSON-LD. Keeping them from drifting apart matters,
 * because Google treats structured data that doesn't match visible page
 * content as a policy violation.
 */

export const site = {
	name: 'Apex Roofing',
	legalName: 'Apex Roofing LLC',
	tagline: 'Premium roofing and storm restoration for Texas homeowners.',
	/**
	 * SERP-facing strings. Keep the title at or under ~60 characters and the
	 * description at 150-160, or Google truncates them. Primary keyword and
	 * locality lead; the brand goes last.
	 */
	seoTitle: 'Roofing & Storm Restoration in Austin, TX | Apex Roofing',
	description:
		'Premium roof replacement and storm damage restoration for Central Texas homeowners. Free inspections, insurance claims handled, lifetime workmanship warranty.',
	// TODO: replace placeholder contact details with the real business records
	// before launch. These flow into the LocalBusiness schema.
	phone: '+1-512-555-0142',
	phoneDisplay: '(512) 555-0142',
	email: 'hello@apexroofing.example.com',
	address: {
		street: '2100 Wentworth Avenue',
		city: 'Austin',
		region: 'TX',
		postalCode: '78704',
		country: 'US',
	},
	geo: { latitude: 30.2504, longitude: -97.7546 },
	areaServed: ['Austin', 'Round Rock', 'Georgetown', 'San Marcos', 'New Braunfels'],
	openingHours: [
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00' },
		{ days: ['Saturday'], opens: '08:00', closes: '14:00' },
	],
	priceRange: '$$$',
	founded: 2009,
} as const;

export const nav = [
	{ label: 'Process', href: '#process' },
	{ label: 'Work', href: '#work' },
	{ label: 'Reviews', href: '#reviews' },
	{ label: 'FAQ', href: '#faq' },
] as const;

export const stats = [
	{ value: '1,400+', label: 'Roofs completed' },
	{ value: '16', label: 'Years in Central Texas' },
	{ value: 'Lifetime', label: 'Workmanship warranty' },
	{ value: '4.9', label: 'Average homeowner rating' },
] as const;

export const process = [
	{
		step: '01',
		title: 'Discover',
		body: 'A senior estimator walks the property, documents every plane and penetration, and photographs damage for your file. No subcontracted inspectors.',
	},
	{
		step: '02',
		title: 'Design',
		body: 'We specify the system, from decking to underlayment to ventilation and flashing, then model it against your roof pitch, exposure and HOA requirements.',
	},
	{
		step: '03',
		title: 'Build',
		body: 'One dedicated crew, one job at a time. Daily site photos, a magnetic sweep every evening, and a project lead who answers the phone.',
	},
	{
		step: '04',
		title: 'Deliver',
		body: 'Final inspection with you on site, a full documentation package for your records, and a lifetime workmanship warranty.',
	},
] as const;

export const testimonials = [
	{
		quote:
			'They found hail bruising two other companies missed, documented all of it, and carried the claim through underwriting. The roof went on in a day and a half and the yard was cleaner than when they arrived.',
		author: 'Marissa Elgin',
		detail: 'Standing seam replacement, Tarrytown',
	},
	{
		quote:
			'We interviewed four builders for the cedar restoration. Apex was the only one who talked about ventilation before they talked about price. Three storm seasons later, not one issue.',
		author: 'David Okonkwo',
		detail: 'Full cedar shake restoration, Georgetown',
	},
] as const;

export const faqs = [
	{
		question: 'Do you handle insurance claims?',
		answer:
			'Yes. We document the damage with dated photographs and a written scope, meet your adjuster on site, and handle supplement requests directly with the carrier. You are never asked to argue line items on your own. We do not waive or absorb deductibles, because that is insurance fraud in Texas and any contractor offering it is a liability to you.',
	},
	{
		question: 'How long does a roof replacement take?',
		answer:
			'Most asphalt shingle replacements on a single family home are complete in one to two days. Standing seam metal and cedar shake typically run three to five days. Steep or highly cut up roofs add time. We give you a firm window before work begins and we do not start a job we cannot staff to completion.',
	},
	{
		question: 'What warranty do you provide?',
		answer:
			'A lifetime workmanship warranty on installation, transferable once if you sell the home. Manufacturer material warranties run separately and range from 30 years to lifetime depending on the system specified. Both are handed over in writing at final walkthrough.',
	},
	{
		question: 'Can you work with my HOA and architectural committee?',
		answer:
			'Routinely. We prepare the submittal package, including product data sheets, colour samples and elevation drawings where required, and correspond with the committee directly. In most Central Texas neighbourhoods we already have approved system specifications on file.',
	},
] as const;
