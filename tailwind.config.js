/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        brand: "rgb(255, 247, 145)",
        shade: "rgba(0, 0, 0, 0.45)",
        bgshade: "rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        sans: ["basier_square", "Helvetica", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
        mono: ["basier_square_mono", "monospace"],
      },
      fontSize: {
        // sm: '1.8rem',
        base: '2.3rem',
        lg: '3rem',
        xl: '4rem',
        "2xl": '6rem',
        "3xl": '10rem',
      }
    },
  },
  plugins: [],
}
