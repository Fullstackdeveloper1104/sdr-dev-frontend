/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/img/sidebar-bg.jpg')",
        heroblur: "url('/src/assets/bgmainblur.jpg')",
        oldhero: "url('/src/assets/toyotawall.jpg')",
      }
    },
  },
  plugins: [],
}

