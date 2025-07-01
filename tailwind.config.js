/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Adjust these globs to match where your components/pages live:
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        'exo-2': ['var(--font-exo-2)'],
        audiowide: ['var(--font-audiowide)'],
      },
    },
  },
  plugins: [
    // e.g. require('@tailwindcss/forms'),
  ],
}
