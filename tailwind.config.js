/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F2744',
        secondary: '#2E5EAA',
        accent: '#E66A1F',
        background: '#FAFAF8',
        surface: '#FFFFFF',
        'muted-background': '#F3F6F8',
        'text-primary': '#111827',
        'text-secondary': '#6B7280',
        border: '#E5E7EB',
        success: '#16A34A',
        error: '#DC2626',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        technical: ['IBM Plex Sans', 'monospace'],
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-lg-mobile': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-technical': ['12px', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '500' }],
      },
      spacing: {
        'margin-mobile': '20px',
        'margin-desktop': '64px',
        gutter: '24px',
        'section-gap': '120px',
        'container-max': '1440px',
        'stack-sm': '8px',
        'stack-md': '16px',
        'stack-lg': '40px',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};