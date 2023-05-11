/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          100: "#F6F9FD",
          200: "#DDE7F8",
          300: "#004CCC",
          400: "#FAFAFA",
          500: "#EEF3FC",
          600: "#0D0630",
        },
        green: {
          100: "#C8EED3",
          200: "#24753A",
        },
        orange: {
          100: "#FFE6C3",
          200: "#FFA620",
        },
        black: {
          100: "#222222",
        },
        gray: "#959595",
      },
      fontSize: {
        sm: "12px",
        base: "16px",
      },
    },
  },
  plugins: [],
};
