/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#1b3c4b",
      },
      width: {
        90: "90%",
      },
    },
  },
  plugins: [],
};
