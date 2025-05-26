/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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