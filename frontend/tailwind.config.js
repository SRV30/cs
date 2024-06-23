/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        bounceIn: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-30px)',
          },
          '60%': {
            transform: 'translateY(-15px)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        bounceIn: 'bounceIn 1s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
