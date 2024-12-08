/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'], 
      },
      colors : {
        custom_blue: '#3692FF',
        primary: '#4B5563',
        custom_coolGray900: '#111827',
        custom_coolGray50: '#F9FAFB',
      }
    },
  },
  plugins: [],
};
