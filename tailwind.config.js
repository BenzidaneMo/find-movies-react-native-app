/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./app/(tabs)/*.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      primary: "#0F0D23",
      accent: "#AB8BFF",
      secondary: "#151312",
      light: {
        100: '#d6c6ff',
        200: '#a8b5db',
        300: '#9ca4ab'
      },
      dark: {
        100: "#403A74",
        200: "#221f3d",
        300: "#0f0d23"
      },
      light_secondary: "#f5f5f5",
      dark_secondary: "#1a1a1a",
    },
  },
  plugins: [],
}