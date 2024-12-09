import type { Config } from 'tailwindcss';


export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-pretendard)',
        title: 'var(--font-nanumsquareneo)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand_blue: 'var(--brand-blue)',
        // gray_50: 'var(--gray-50)',
      },
      content: {
        medal: 'url("/medal.svg")',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.center-img': {
          top: '50% !important',
          left: '50% !important',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
        },
      });
    },
  ],
} satisfies Config;
