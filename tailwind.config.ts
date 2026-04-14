import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#FAF4ED",       // The warm cream background
          red: "#780606",       // "chosenred" from your screenshot
          charcoal: "#2A3132",  // "Dark Charcoal"
          beigeHover: "#D6C5B4", // "hover mail"
          beigePress: "#C7B5A3", // "pressed mail"
        },
      },
      fontFamily: {
        serif: ["var(--font-libre)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;