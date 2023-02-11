/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        books: "url('../src/image/bookstore-shelves-hero-image.jpg')",
      },
    },
  },
  plugins: [],
};
