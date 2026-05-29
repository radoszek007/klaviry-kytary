import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12100E",
        ivory: "#F5EFE6",
        brass: "#B88746",
        wood: "#6B3F24",
        charcoal: "#2B2B2B",
        cream: "#FFF9EF",
        line: "rgba(245, 239, 230, 0.16)"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(184, 135, 70, 0.18)",
        card: "0 24px 70px rgba(18, 16, 14, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
