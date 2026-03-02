/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kimi AI Color Palette - จากการวิเคราะห์จริง
        kimi: {
          // Backgrounds
          'bg-primary': '#0d0d0d',      // หลัก - เกือบดำสนิท
          'bg-secondary': '#1a1a1a',     // Sidebar, Cards
          'bg-tertiary': '#262626',      // Input, hover
          'bg-hover': '#333333',         // Button hover
          
          // Accents
          'accent-blue': '#3b82f6',
          'accent-blue-hover': '#2563eb',
          'accent-purple': '#8b5cf6',
          
          // Text
          'text-primary': '#ffffff',
          'text-secondary': '#a3a3a3',
          'text-muted': '#737373',
          
          // Borders
          'border': '#262626',
          'border-hover': '#404040',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'message-user': '18px 18px 4px 18px',
        'message-ai': '18px 18px 18px 4px',
      },
      spacing: {
        'sidebar': '260px',
      }
    },
  },
  plugins: [],
}
