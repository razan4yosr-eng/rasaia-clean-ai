import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF3FF",
          100: "#DDE6FF",
          200: "#BFD0FF",
          300: "#93AEFF",
          400: "#5E82F6",
          500: "#3A60EC",
          600: "#2347D9",
          700: "#1B37B4",
          800: "#18308F",
          900: "#142663",
        },
        navy: "#0B1734",
        ai: { DEFAULT: "#6E59F2", soft: "#ECE8FF" },
        ok: { DEFAULT: "#0E9F6E", soft: "#DDF6EC" },
        warn: { DEFAULT: "#C2810A", soft: "#FBF1D8" },
        danger: { DEFAULT: "#D64550", soft: "#FBE3E5" },
        ink: { DEFAULT: "#0C1526", 2: "#33415C", 3: "#67748C" },
        line: { DEFAULT: "#E4E9F2", 2: "#EEF1F7" },
        surface: { DEFAULT: "#FFFFFF", 2: "#F7F9FC", 3: "#F1F4FA" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "22px",
        "3xl": "30px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(12,21,38,.06)",
        sm: "0 2px 6px rgba(12,21,38,.06), 0 1px 2px rgba(12,21,38,.05)",
        md: "0 6px 18px rgba(12,21,38,.08), 0 2px 6px rgba(12,21,38,.05)",
        lg: "0 18px 44px rgba(12,21,38,.12), 0 6px 14px rgba(12,21,38,.07)",
        xl: "0 34px 80px rgba(11,23,52,.20), 0 10px 24px rgba(12,21,38,.10)",
        blue: "0 12px 30px rgba(35,71,217,.30)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
