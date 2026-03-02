/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kimi colors from actual HTML
        kimi: {
          bg: '#ffffff',
          'bg-secondary': '#f9fafb', // sidebar
          'bg-hover': '#f3f4f6',
          border: '#e5e7eb',
          'text-primary': '#111827',
          'text-secondary': '#6b7280',
          'text-muted': '#9ca3af',
          accent: '#3b82f6',
          'accent-hover': '#2563eb',
        }
      },
      spacing: {
        'sidebar': '260px',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
