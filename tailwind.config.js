/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html, js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },
        secondary: {
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
        },
        background: {
          y: "var(--background-y)",
          2: "var(--background-2)",

        },
        grey: {

          50: "var()"
        },
      },
      fontFamily: {
        sans: ["Noto Sans TC", "sans-serif"],
      },
      dropShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.3)",


      },
    },
  },
  plugins: [],
};
