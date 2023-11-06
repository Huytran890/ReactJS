/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffb43a",
        header: "#292841",
        body: "#1e1e2a",
      },
      screens: {
        mobile: {
          max: "768px",
        },
      },
      transitionProperty: {
        margin: "margin",
        opacity: "opacity",
        transform: "transform",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
