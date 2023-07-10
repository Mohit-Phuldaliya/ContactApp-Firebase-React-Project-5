/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        red: "#D01C28",
        yellow: "#FFEAAE",
        "dark-yello": "#FCCA3F",
        orange: "#F6820C",
      },
    },
  },
  plugins: [],
};
