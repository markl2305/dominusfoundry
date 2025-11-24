// tailwind.config.js
// Add this to your existing Tailwind configuration

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        crimson: ['var(--font-crimson)'],
      },
      colors: {
        // Dominus Foundry Brand Colors
        navy: {
          DEFAULT: '#2A3A4B',
          50: '#f6f7f8',
          100: '#e1e5e7',
          200: '#c3cdd2',
          300: '#9ba9b1',
          400: '#6f838b',
          500: '#2A3A4B', // Primary shield color
          600: '#273a40',
          700: '#1f2f34',
          800: '#18262a',
          900: '#121d20',
        },
        tan: {
          DEFAULT: '#E7DFCF',
          50: '#fefdfb',
          100: '#faf5ec',
          200: '#E7DFCF', // Primary background color
          300: '#f0e3d0',
          400: '#e5d3bb',
          500: '#d8c1a3',
          600: '#c9ab87',
          700: '#b59368',
          800: '#987a54',
          900: '#7a6143',
        },
        bronze: {
          DEFAULT: '#C2B9A3',
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#e4dace',
          300: '#d8cbb8',
          400: '#C2B9A3', // Primary accent color
          500: '#baa890',
          600: '#a89376',
          700: '#8f7b60',
          800: '#75644e',
          900: '#5d503f',
        },
        orange: {
          DEFAULT: '#ea580c',
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c', // Primary CTA color
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        forge: {
          50: '#f7f6f4',
          100: '#e8e4dc',
          200: '#d4cab9',
          300: '#bfad92',
          400: '#a8926f',
          500: '#8b7655',
          600: '#6e5d45',
          700: '#594a38',
          800: '#4a3e30',
          900: '#3d342a',
        },
        steel: {
          500: '#4A5568',
          600: '#374151',
          700: '#2D3748',
        },
      },
    },
  },
  plugins: [],
}
