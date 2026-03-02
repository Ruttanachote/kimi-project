/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kimi Real Colors (from statics.moonshot.cn CSS)
        'kimi-bg': {
          primary: '#000000',      // --Bg-Primary
          secondary: '#0d0d0d',    // --Bg-Secondary (sidebar)
          tertiary: '#1a1a1a',     // --Bg-Tertiary (cards, inputs)
          quaternary: '#262626',   // --Bg-Tertiary-Hover
        },
        'kimi-text': {
          primary: '#ffffff',      // --Labels-Primary
          secondary: '#b4b4b4',    // --Labels-Secondary
          tertiary: '#6b6b6b',     // --Labels-Tertiary
        },
        'kimi-border': {
          DEFAULT: '#2d2d2d',      // --Separators-S1
          light: '#404040',        // --Separators-S2
          subtle: '#1a1a1a',       // --Separators-S3
        },
        'kimi-fill': {
          f1: '#262626',           // --Fills-F1 (button bg, hover)
          f2: '#333333',           // --Fills-F2
          f3: '#404040',           // --Fills-F3
        },
        'kimi-message': {
          assistant: '#1a1a1a',    // --Message-Bubble-Bg
          user: '#333333',         // --Message-Bubble-User
        },
        'kimi-blue': '#2563eb',    // --Colors-KMBlue
        
        // Legacy mappings (for compatibility)
        'brand-blue': '#2563eb',
        'dark-navy': '#0f172a',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1', fontWeight: '700' }],
        'h1': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h2': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'tiny': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        'sidebar': '260px',
        'header': '56px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'full': '9999px',
      },
      boxShadow: {
        'none': 'none',
      },
    },
  },
  plugins: [],
}
