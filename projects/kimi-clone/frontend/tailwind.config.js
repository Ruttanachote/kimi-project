/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kimi: {
          primary: '#4285f4',
          secondary: '#34a853',
          accent: '#ea4335',
          dark: '#1a1a2e',
          darker: '#16162a',
          card: '#252545',
          text: '#e8e8f0',
          'text-muted': '#9ca3af',
          border: '#3d3d5c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
