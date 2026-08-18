/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vista: {
          dark: '#030712', // Deep dark backdrop
          card: '#0B0F19', // Lighter dark card color
          accent: '#10B981', // Emerald glow
          indigo: '#6366F1', // Indigo glow
          violet: '#8B5CF6', // Violet glow
          muted: '#9CA3AF',  // Text muted
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Syne', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
