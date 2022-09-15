/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-gray": "#94A3B8",
        "blue-gray": "#334155",
        "dark-green": "#0F766E",
        "blue-gray-300": "#64748B",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
