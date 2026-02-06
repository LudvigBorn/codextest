/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f6f7',
          100: '#ececee',
          200: '#d4d5d8',
          300: '#b6b8bd',
          400: '#92959d',
          500: '#737780',
          600: '#5c5f66',
          700: '#4a4d52',
          800: '#3d3f43',
          900: '#323336',
        },
        gold: {
          400: '#f6c343',
          500: '#f3b21b',
          600: '#de9b0d',
        },
        ruby: {
          500: '#f2364c',
          600: '#df1d3a',
        },
      },
      boxShadow: {
        soft: '0 8px 20px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
