/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkPrimary: "#0d1117",
        darkSecondary: "#161b22",
      },
      borderColor: {
        darkPrimary: "#21262d",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
