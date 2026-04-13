import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — deep teal
        teal: {
          50:  "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        // Neutral — warm gray (not sandy, not blue)
        gray: {
          50:  "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
        // Dark sections — teal-tinted dark, NOT blue navy
        dark: {
          700: "#0d2b27",
          800: "#091f1c",
          900: "#061512",
          950: "#030d0b",
        },
        // Accent — warm amber/gold for highlights only
        amber: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        // Legacy aliases — keep so nothing breaks
        sand: {
          50:  "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
        },
        navy: {
          800: "#0d2b27",
          900: "#091f1c",
          950: "#030d0b",
        },
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      boxShadow: {
        sm:   "0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)",
        md:   "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05)",
        lg:   "0 10px 24px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)",
        teal: "0 8px 32px rgba(15,118,110,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
