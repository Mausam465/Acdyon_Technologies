/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          600: '#2D3748', // Exact dark charcoal paragraph from screenshot
        },
        vista: {
          // Brand Colors (Dark Theme - legacy)
          black: '#020408',      // Deep void background
          dark: '#050811',       // Base backdrop
          panel: '#090E1A',      // Premium container fill
          border: '#161F30',     // Subtle elegant borders

          // Brand Colors (Light Theme)
          lightBg: '#F8FAFC',
          lightPanel: '#FFFFFF',
          lightBorder: '#E2E8F0',
          blue: '#0B52D6',       // Vibrant royal blue accent matching screenshot
          blueDark: '#0044CC',   // Darker shade for hover states
          
          // Environment / Ambient Glows (calm and sophisticated)
          nature: '#0D9488',     // Calm Teal (Forests, Oceans)
          cosmic: '#4F46E5',     // Intellectual Deep Indigo (Space, Stars)
          mystic: '#7C3AED',     // Soft Violet (Atmosphere, Aurora)
          sunset: '#D97706',     // Warm Amber (Sunsets, Sand, Autumn)
          
          // Text states
          primary: '#061022',    // Exact very dark navy black heading from screenshot
          secondary: '#2D3748',  // Exact slate body text
          muted: '#64748B',      // Low-contrast slate for details
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],        // Broad, artistic, premium display font
        technical: ['Space Grotesk', 'sans-serif'], // Technical, technical-futuristic accents
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'premium': '1.25rem',   // Reusable sophisticated border radius
        'pill': '9999px',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
