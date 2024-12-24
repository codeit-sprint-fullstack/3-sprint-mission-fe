import daisyui from "daisyui";
import * as tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "744px",
      desktop: "1920px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-100)",
          50: "var(--primary-50)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
        },
        secondary: {
          DEFAULT: "var(--secondary-100)",
          200: "var(--secondary-200)",
          400: "var(--secondary-400)",
          900: "var(--secondary-900)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      spacing: {
        "13": "52px",
        "27": "108px",
        "50": "200px",
      },
      // borderRadius: {},
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          color: "var(--secondary-700)",
          primary: "#3692FF",
          "primary-content": "#F9FAFB",
          ".btn": {
            "font-size": "1rem",
          },
          ".footer": {
            "font-size": "1rem",
            "font-weight": "400",
          },
        },
      },
    ],
  },
  plugins: [daisyui, tailwindcssAnimate],
} satisfies Config;
