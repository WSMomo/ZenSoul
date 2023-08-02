/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "lake-background-sm":
          "url('./assets/background/lake-background-sm.jpg')",
        "lake-background-md":
          "url('./assets/background/lake-background-md.jpg')",
        "grass-background-sm":
          "url('./assets/background/grass-background-sm.jpg')",
        "grass-background-md":
          "url('./assets/background/grass-background-md.jpg')",
        "relax-background-sm":
          "url('./assets/background/relax-background-sm.jpg')",
        "relax-background-md":
          "url('./assets/background/relax-background-md.jpg')",
        "sea-background-sm": "url('./assets/background/sea-background-sm.jpg')",
        "sea-background-md": "url('./assets/background/sea-background-md.jpg')",
        "woods-background-sm":
          "url('./assets/background/woods-background-sm.jpg')",
        "woods-background-md":
          "url('./assets/background/woods-background-md.jpg')",
      },
    },
  },
  plugins: [],
};
