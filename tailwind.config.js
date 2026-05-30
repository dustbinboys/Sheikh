export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Make sure this line exists
  ],
  theme: {
    extend: {
      colors: {
        gotham: '#0d0f12',
        gothamLight: '#1a1d24',
        olive: '#4a5d23',
        watermelon: '#e07a5f',
        warmWhite: '#f4f1de',
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}