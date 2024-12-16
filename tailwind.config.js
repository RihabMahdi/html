module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: 'var(--navy-900)',
          800: 'var(--navy-800)',
          700: 'var(--navy-700)',
        },
        teal: {
          400: 'var(--teal-400)',
          500: 'var(--teal-500)',
          600: 'var(--teal-600)',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


