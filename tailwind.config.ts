const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColors(theme("backgroundColor")), type: "color" } // 🔥 Fixed: Use custom flattenColors function
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColors(theme("colors")); // 🔥 Fixed: Use custom flattenColors function
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

// 🔥 Custom function to flatten Tailwind's color palette
function flattenColors(colorsObj, prefix = "") {
  return Object.entries(colorsObj).reduce((acc, [key, value]) => {
    if (typeof value === "object") {
      Object.assign(acc, flattenColors(value, `${prefix}${key}-`));
    } else {
      acc[`${prefix}${key}`] = value;
    }
    return acc;
  }, {});
}
