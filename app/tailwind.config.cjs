/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      height: {
        'title-bar': 'var(--title-bar-height)',
        'navigation': 'var(--navigation-height)',
        'main-view': 'var(--main-view-height)',
        'main-view-height-minus-layout-border':
          'var(--main-view-height-minus-layout-border)',
      },
      fontFamily: {
        'dotgothic16': ['DotGothic16'],
        'barcode128': ['"Libre Barcode 128 Text"'],
      },
      colors: {
        primary: 'rgb(var(--colors-primary))',
        background: 'rgb(var(--colors-background))',
        container: 'rgb(var(--colors-container))',
        'on-background': 'rgb(var(--colors-on-background))',
        'on-container': 'rgb(var(--colors-on-container))',
      },
    },
  },
  plugins: [],
}
