module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
      mono: ['IBM Plex Mono', 'mono'],
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
