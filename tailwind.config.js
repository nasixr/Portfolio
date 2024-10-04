/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this path according to your project structure
    "./public/index.html", // If you have an index.html in the public directory
  ],
  theme: {
    extend: {
      fontFamily: {
        shantell: ['"ShantellSans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
