module.exports = {
    darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // si usas la carpeta /app
  ],
  theme: {
     extend: {
      colors: {
        'green-light': '#5BB543',
        'green-dark': '#469137',
      },
    },
  },
  plugins: [],
}
