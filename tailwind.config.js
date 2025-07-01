/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#1E1E2F',
        card: '#2D2D44',
        primary: '#FACC15',
        secondary: '#3B82F6',
      },
    },
  },
  plugins: [],
}

