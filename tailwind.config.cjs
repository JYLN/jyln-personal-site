import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
				jetmono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
			}
		}
	},

	plugins: []
};

module.exports = config;
