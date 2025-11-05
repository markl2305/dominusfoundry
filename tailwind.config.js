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
      colors: {
        // Dominus Foundry Brand Colors
        navy: {
          DEFAULT: '#2f434a',
          50: '#f6f7f8',
          100: '#e1e5e7',
          200: '#c3cdd2',
          300: '#9ba9b1',
          400: '#6f838b',
          500: '#2f434a', // Primary shield color
          600: '#273a40',
          700: '#1f2f34',
          800: '#18262a',
          900: '#121d20',
        },
        tan: {
          DEFAULT: '#33454E',
          50: '#fefdfb',
          100: '#faf5ec',
          200: '#33454E', // Primary background color
          300: '#f0e3d0',
          400: '#e5d3bb',
          500: '#d8c1a3',
          600: '#c9ab87',
          700: '#b59368',
          800: '#987a54',
          900: '#7a6143',
        },
        bronze: {
          DEFAULT: '#cdbda9',
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#e4dace',
          300: '#d8cbb8',
          400: '#cdbda9', // Primary accent color
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
      },
    },
  },
  plugins: [],
}
