import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			pecano: ['Playpen Sans'],
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1280px',
		},
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				light_green: '#62AB00',
				off_white: '#F6F5FA',
				deep_ash: '#333333',
			},
		},
	},
	plugins: [require("daisyui")],
};
export default config;
