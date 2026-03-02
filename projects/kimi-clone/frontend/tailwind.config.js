/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kimi AI Color Palette - จาก HTML จริง
        kimi: {
          // Backgrounds
          'bg': '#ffffff',           // Light mode bg
          'bg-dark': '#0d0d0d',      // Dark mode bg
          'sidebar': '#f9fafb',      // Sidebar light
          'sidebar-dark': '#111111', // Sidebar dark
          
          // UI Elements
          'card': '#ffffff',
          'card-dark': '#1a1a1a',
          'hover': '#f3f4f6',
          'hover-dark': '#262626',
          'border': '#e5e7eb',
          'border-dark': '#2d2d2d',
          
          // Accent (Kimi blue)
          'primary': '#3b82f6',
          'primary-hover': '#2563eb',
          
          // Text
          'text': '#111827',
          'text-dark': '#ffffff',
          'text-secondary': '#6b7280',
          'text-secondary-dark': '#9ca3af',
          'text-muted': '#9ca3af',
          'text-muted-dark': '#6b7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        'sidebar': '260px',
      }
    },
  },
  plugins: [],
}
