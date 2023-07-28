module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "false",
  theme: {
    extend: {
      fontFamily: {
        'vollkorn': ['Vollkorn', 'sans-serif']
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
}
