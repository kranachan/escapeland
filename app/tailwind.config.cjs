/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'dotgothic16': ['DotGothic16'],
        'bungee-shade': ['Bungee Shade'],
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
