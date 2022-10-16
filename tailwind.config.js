/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#1b1b1b",
        dark_one: "rgb(255 255 255 / 0.05)",
      },
      borderColor: {
        gray: "rgb(255 255 255 / 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
