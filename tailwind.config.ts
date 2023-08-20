import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(circle, #2e3c51 2px, transparent 0)'
      // },
      keyframes: {
        dotScroll: {
          '0%': {"background-position-y": "200px"},
          '100%': {"background-position-y": "0"}
        }
      },
      animation: {
        "dot-scrolling": "dotScroll 8s linear infinite"
      },
    },
  },
  plugins: [],
}
export default config
