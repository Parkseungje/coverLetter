/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Pretendard',
          'ui-sans-serif',
          'system-ui',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'sans-serif',
        ],
      },
      colors: {
        ink: '#08090b',
        cloud: '#f5f7fb',
        signal: '#34d399',
        ocean: '#38bdf8',
        violet: '#a78bfa',
      },
      boxShadow: {
        glow: '0 28px 80px rgba(52, 211, 153, 0.20)',
        panel: '0 24px 80px rgba(8, 9, 11, 0.12)',
      },
    },
  },
  plugins: [],
};
