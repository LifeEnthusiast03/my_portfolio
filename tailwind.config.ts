
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}", // ✅ Aceternity content path added
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value:any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value:any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value:any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
          "bg-dot-thick": (value:any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColors(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// ✅ Custom function to replace `flattenColorPalette`
function flattenColors(colorsObj, prefix = "") {
  return Object.entries(colorsObj).reduce((acc, [key, value]) => {
    if (typeof value === "object" && value !== null) {
      Object.assign(acc, flattenColors(value, `${prefix}${key}-`));
    } else {
      acc[`${prefix}${key}`] = value;
    }
    return acc;
  }, {});
}

// ✅ Adds Tailwind colors as CSS variables
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColors(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
