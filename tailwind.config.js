// import { keyframes } from 'motion'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow : {
        'glow' : [
          '10px 10px 200px rgba(0,0,255)',
        ]
      },
      animation : {
        'spin-slow' : 'spin 3s linear infinite',
        'glow' : 'glow 2s ease-in-out infinite alternate'
      },
      keyframes : {
        glow : {
          '0%' : {
            filter : 'drop-shadow(0 0 10px rgba(0,0,255))'
          },
          '50%' : {
            filter : 'drop-shadow(0 0 100px rgba(0,0,255))'
          },
          '100%' : {
            filter : 'drop-shadow(0 0 10px rgba(0,0,255))'
          }
        }
        
      }
    },
  },
  plugins: [],
}

