import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
				jetmono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
				inter: ['Inter', ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				blink: { '50%': { opacity: 0 } },
				wiggle: {
					'0%, 50%': { transform: 'rotate(-5deg)' },
					'25%': { transform: 'rotate(5deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				gap: { '0%': { gap: '0.5rem' }, '100%': { gap: '1rem' } }
			},
			animation: {
				blinking: 'blink 1.5s ease-in-out infinite',
				wiggle: 'wiggle 0.5s ease-in-out',
				gap: 'gap 0.5s ease-in-out'
			}
		}
	},

	plugins: []
};

module.exports = config;
