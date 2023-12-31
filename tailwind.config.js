/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				'128': '32rem',
				'132': '36rem',
			}
		},
	},
	plugins: [],
}

