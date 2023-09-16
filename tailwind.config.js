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
        'grid': 'url("/grid.svg")'
      },
      colors: {
        'primary': '#060919',
        'secondary': '#F7F5ED'
      },
      fontFamily: {
        'primary': ['Space Grotesk', 'sans-serif']
      },
      dropShadow: {
        glowBefore: [
          "0 1px 3px rgba(246, 87, 20, 30)",
        ],
        glowAfter: [
          "0 1px 5px rgba(246, 87, 20, 30)",
        ],
      },
      aspectRatio: {
        'poster': '3/4'
      }
    },
  },
  plugins: [],
}
