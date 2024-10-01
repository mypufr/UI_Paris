/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html, js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "var(--primary-500)",
        },
        secondary: {
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
        },
        background: {
          y: "var(--background-y)",
          2: "var(--background-2)"
        
        },
      },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    }
    },
  },
  plugins: [],
};
