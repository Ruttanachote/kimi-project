/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'brand-blue': '#2563eb',
        'dark-navy': '#0f172a',
        
        // Neutral Gray
        'gray-50': '#f8fafc',
        'gray-100': '#f1f5f9',
        'gray-200': '#e2e8f0',
        'gray-400': '#94a3b8',
        'gray-600': '#475569',
        'gray-900': '#0f172a',
        
        // Semantic
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
        
        // Kimi shortcuts
        kimi: {
          bg: '#f8fafc',         // Gray 50 - page background
          card: '#ffffff',        // White
          border: '#e2e8f0',      // Gray 200
          'text-primary': '#0f172a',  // Dark Navy / Gray 900
          'text-secondary': '#475569', // Gray 600
          'text-muted': '#94a3b8',    // Gray 400
          accent: '#2563eb',      // Brand Blue
          'accent-hover': '#1d4ed8',
          hover: '#f1f5f9',       // Gray 100
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.25', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'tiny': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px rgba(0,0,0,0.05)',
        'elevation-2': '0 4px 6px -1px rgba(0,0,0,0.1)',
        'elevation-3': '0 10px 15px -3px rgba(0,0,0,0.1)',
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
