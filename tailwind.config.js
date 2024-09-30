/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html, js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
         500: 'var(--primary-500)',
        },
        secondary: {
         500: 'var(--secondary-500)',
         600: 'var(--secondary-600)',
         700: 'var(--secondary-700)',
        } 
      },
      // backgroundColor: {
      //   background: {
      //     2: 'var(--background-2: #FFF2DB)';
      //   }
      // }
      // fontSize: {
      //   h1: '64px',
      // },
    },
  },
  plugins: [],
}