import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'orange-color':'#FFB258',
        'blue-color':'#60C6FF',
        'green-color':'#2BC46F',
        'pink-color':'#FFB1C3',
        'yellow-color':'#F7E96A',
        'link-color':'#3B7DFF',
      },
      screens: {
        'clg':'1225px',
        'cmd':'900px',
      },
    },
  },
  plugins: [],
}
export default config
