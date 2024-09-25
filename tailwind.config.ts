import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(61, 207, 182, 1)',
          light: 'rgba(61, 207, 182, 0.1)',
          dark: 'rgba(61, 207, 182, 0.5)'
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        karla: ['var(--font-karla)'],
        fira: ['var(--font-fira)']
      }
    }
  },
  plugins: []
}
export default config
