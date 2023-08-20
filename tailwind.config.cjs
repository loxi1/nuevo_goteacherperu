const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        principal: {
					100: '#f7cf91',
					200: '#f7cf91',
					300: '#f7cf91',
					400: '#f7cf91',
					500: '#f6c882',
					600: '#f6c172',
					700: '#f4ba61',
					800: '#f3b350',
					900: '#f2ab3f',
					DEFAULT: '#f2aa3c'
				},
				'marron': {
					100: '#bebfc0',
					200: '#a8aaab',
					300: '#989a9c',
					400: '#8b8e90',
					500: '#7d7f82',
					600: '#717476',
					700: '#5d6063',
					800: '#525659',
					900: '#474b4d',
					DEFAULT: '#424649'
				},
				'principal-dark': '#424649',
      },
      fontSize: {
				xxs: '.625rem'
			},
      fontFamily: {
        body: ['Archivo', 'system-ui', 'sans-serif'],
				title: ['Archivo Black', 'system-ui', 'sans-serif'],
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
    },
    listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		},
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
