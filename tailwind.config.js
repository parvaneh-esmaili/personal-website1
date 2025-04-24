/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0e7490',  // Cyan 700
        'primary-dark': '#083344',  // Dark Cyan
        'dark-cyan': '#004d4d',  // Dark Cyan
        'gray-light': '#f1f5f9',  // Light Gray
        'text-dark': '#333333',  // Dark Gray
        'border-gray': '#e0e0e0',  // Light Gray for borders
      },
    },
  },
  plugins: [],
}
