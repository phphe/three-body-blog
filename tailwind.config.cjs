/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				default: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'
			},
			colors: {
				a1: '#2c3e50',
				a2: '#2980B9',
				a3: '#33CCCC',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
