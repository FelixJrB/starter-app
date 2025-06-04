/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};

// Project structure:
// starter-app/
// ├── app/
// │   ├── src/
// │   │   ├── css/
// │   │   │   └── style.css
// │   │   ├── index.html
// │   │   └── main.js (or main.ts)
// ├── tailwind.config.js
// ├── postcss.config.js
// ├── package.json
// ├── vite.config.js
// └── node_modules/