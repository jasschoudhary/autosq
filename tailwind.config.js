/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Adjust these globs to match where your components/pages live:
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // your custom theme values go here
    },
  },
  plugins: [
    // e.g. require('@tailwindcss/forms'),
  ],
}
