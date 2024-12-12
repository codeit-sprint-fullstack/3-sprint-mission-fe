import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "744px",
      xl: "1280px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          DEFAULT: "var(--blue)",
          text: "var(--blue-text)",
        },
        gray: {
          DEFAULT: "var(--gray)",
          light: "var(--gray-light)",
          dark: "var(--gray-dark)",
          border: "var(--gray-border)",
          bg_card: "var(--gray-bg-card)",
          bg_list: "var(--gray-bg-list)",
          heart_number: "var(--gray-heart-number)",
          footer_text: "var(--gray-footer-text)",
        },
        "custom-black": {
          DEFAULT: "var(--black)",
        },
        "custom-white": {
          DEFAULT: "var(--white)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
