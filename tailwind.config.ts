import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary-blue)',
        text: {
          black: {
            primary: 'var(--text-primary-black)',
            secondary: 'var(--text-secondary-black)',
          },
          charcoal: {
            primary: 'var(--text-primary-charcoal)',
          },
          gray: {
            primary: 'var(--text-primary-gray)',
            secondary: 'var(--text-secondary-gray)',
          },
          white: {
            DEFAULT: 'var(--text-primary-white)',
            secondary: 'var(--text-secondary-white)',
          },
          blue: 'var(--text-primary-blue)',
          red: 'var(--text-error-red)',
        },
        bg: {
          input: 'var(--input-background)',
          inputGlass: 'var(--input-glass)',
          article: {
            best: 'var(--best-article-background)',
            normal: 'var(--normal-article-background)',
          },
          badge: {
            best: 'var(--best-badge-background)',
          },
          button: {
            active: 'var(--button-active-background)',
            disabled: 'var(--button-disabled-background)',
          },
          footer: 'var(--footer-background)',
          tag: 'var(--tag-background)',
          'close-button': 'var(--close-background)',
          banner: 'var(--banner-background)',
          'content-section': 'var(--content-section-background)',
        },

        border: {
          gnb: 'var(--gnb-border)',
          normalArticle: 'var(--normal-article-border)',
          image: 'var(--card-image-border)',
          select: 'var(--select-border)',
          'like-button': 'var(--like-button-border)',
          'index-button': 'var(--index-button-border)',
          'input-error': 'var(--input-error-border)',
        },
      },
    },
    screens: {
      sm: '375px',
      md: '744px',
      xl: '1200px',
    },
    fontFamily: {
      sans: ['var(--font-pretendard-variable)', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
