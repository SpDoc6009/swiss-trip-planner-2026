import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lake: {
          50: "#eef8fb",
          100: "#d6eef5",
          500: "#2b8da8",
          700: "#16566d",
          900: "#082f3d"
        },
        swiss: {
          red: "#d52b1e",
          snow: "#f8fafc",
          slate: "#334155"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(8, 47, 61, 0.12)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans TC",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
