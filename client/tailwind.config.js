const colors = require("tailwindcss/colors")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    fontFamily: {
      sans: ["Inter var", "system-ui", "sans-serif"],
    },
    minHeight: {
      "0": "0",
      "1/4": "25vh",
      "1/2": "50vh",
      "3/4": "75%",
      full: "100%",
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "last"],
  },
  colors: {
    purple: colors.violet,
    gray: colors.coolGray,
  },
}
