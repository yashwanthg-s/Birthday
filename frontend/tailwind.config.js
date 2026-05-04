/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 105, 180, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 105, 180, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
