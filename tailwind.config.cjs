import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
				jetmono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
			},
			keyframes: {
				blink: { '50%': { opacity: 0 } }
			},
			animation: {
				blinking: 'blink 1.5s ease-in-out infinite'
			}
		}
	},

	plugins: []
};

module.exports = config;
