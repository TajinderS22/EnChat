/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}', // 👈 this is key
  ],
  safelist: [
    'bg-purple-500',
    'hover:bg-purple-600',
    'text-white',
    'p-2',
    'border',
    'border-white',
    'rounded-lg',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-purple-300',
    'transition-colors',
  ],
   theme: {
    extend: {
      keyframes: {
        dropDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { transform: 'translateY(0)', opacity: '1' },
          '90%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        dropDown: 'dropDown 4 ease forwards',
      },
    },
  },
  plugins: [],
};
