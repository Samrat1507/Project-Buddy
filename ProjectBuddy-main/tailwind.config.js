/** @type {import('tailwindcss').Config} */
module.exports = {
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
        black: '#060707',
        blue: '#8FA6C9',
        white: '#F5F7FA',
        otherBlue: '#99AECE',
        otherWhite: '#EDF1F6',
        lightBlue: '#C3CFE2'
      },

      // fontFamily: {
      //   merryweather: ["Merryweather", "serif"],
      // },
    },
  },
  plugins: [],
  darkMode: 'class',
}
