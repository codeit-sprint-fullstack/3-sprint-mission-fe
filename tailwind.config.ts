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
        // Core colors
        black: "var(--color-black)",
        white: "var(--color-white)",
        "white-10": "var(--color-white-10)",
        "black-50": "var(--color-black-50)",
        // Grays
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
        },

        // Brand colors
        main: "var(--color-main)",
        red: "var(--color-red)",
        blue: "var(--color-blue)",
        purple: "var(--color-purple)",
        pink: "var(--color-pink)",
      },

      fontFamily: {
        noto: ["var(--font-noto-sans-kr)"],
        baskin: ["var(--font-baskin-robbins)"],
      },

      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      screens: {
        sm: "375px",
        md: "744px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
