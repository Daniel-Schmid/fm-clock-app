module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'desktop-day': "url('./assets/desktop/bg-image-daytime.jpg')",
        'desktop-night': "url('./assets/desktop/bg-image-nighttime.jpg')",
       })
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
