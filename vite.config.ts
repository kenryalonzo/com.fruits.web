import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#de2c4d',
        secondary: '#fb923c',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        averia: ['Averia Serif Libre', 'serif'],
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    },
  },
})
