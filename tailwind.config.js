/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "500": "#4053FC"
        },
        dark: {
          "500": "#111429"
        }
      }
    },
    borderRadius: {
      DEFAULT: "8px",
      lg: "12px",
      full: "99px"
    }
  },
  plugins: [],
}
