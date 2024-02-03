module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,,scss}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code'],
    },
    extend: {
      colors: {
        brand: {
          dark: '#030826',
          light: '#fffef3',
          primary: '#fca311',
          secondary: '#664b7C',
          accent: '#FFD700',
        },
        transparent: 'transparent',
      },
      backgroundImage: {
        'effect-granula': "url('/effectgranula.png')",
      },
      minHeight: {
        'screen-nav': 'calc(100vh - 7rem)',
      },
    },
  },
}
