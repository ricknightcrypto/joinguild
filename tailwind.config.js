/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'k2': '1920px',
    },
    container: {
      center: true,
      padding: 'var(--gap)',
      maxWidth: 'var(--width-container)',
      screens: {
        sm: '1440px',
      },
    },
    fontFamily: {
      'primary': 'var(--family)'
    },
    fontSize: {
      'h1': ['var(--h1)', {
        lineHeight: '1.15',
        fontWeight: '700',
        letterSpacing: '-0.01em',
      }],
      'h2': ['var(--h2)', {
        lineHeight: '1.1',
        fontWeight: '700',
        letterSpacing: '-0.01em',
      }],
      'h3': ['var(--h3)', {
        lineHeight: '1.2',
        fontWeight: '700',
        letterSpacing: '-0.02em',
      }],
      'h4': ['var(--h4)', {
        lineHeight: '1.2',
        fontWeight: '700',
        letterSpacing: '-0.05em',
      }],
      'h5': ['var(--h5)', {
        lineHeight: '1.2',
        fontWeight: '700',
        letterSpacing: '-0.05em',
      }],
      'h6': ['var(--h6)', {
        lineHeight: '1.55',
        fontWeight: '500',
        letterSpacing: '-0.05em',
      }],
      'p': ['var(--p)', {
        lineHeight: '1.5',
        fontWeight: '500',
        letterSpacing: '-0.05em',
      }],
      'btn': ['16px', {
        lineHeight: '12px',
        fontWeight: '500',
        letterSpacing: '-0.035em',
      }],
      'copyright': ['14px', {
        lineHeight: '1.3',
        fontWeight: '500',
        letterSpacing: '-0.05em',
      }],
    },
    extend: {
      backgroundImage: {
        circle: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)',
        circle2: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
        line: 'url(./assets/img/line.svg)',
        loader: 'linear-gradient(90deg, #0B0B0B 30%, rgba(49, 49, 49, .5) 50%, #0B0B0B 70%) '
      },
      backgroundSize: {
        '400': '400%',
      },
      animation: {
        'loader': 'loading 1.2s ease-in-out infinite',
      },
      gridTemplateRows: {
        'hide': '0fr',
      },
      maxWidth: {
        logo: 'var(--logo)',
        small: '960px',
        title: '1191px',
        icon: '22px',
        review: 'var(--review)',
        calendar: '640px',
        video: '920px'
      },
      minWidth: {
        icon: '22px',
        review: 'var(--review)'
      },
      maxHeight: {
        pattern: '92%',
      },
      height: {
        "150": '150%',
      },
      minHeight: {
        calendar: '640px',
      },
      width: {
        "2/4": "calc(50% - 20px)",
        "150": '150%',
        '75': '72%'
      },
      spacing: {
        "18": 'var(--header-gap)',
        "10px": '10px',
        "66": '66px',
        "76": '76px',
        "180": '180px',
        "150": '150px',
        "30": '30px',
        footerY: 'var(--footer-gap)',
      },
      colors: {
        primary: 'var(--primary)',
        black: 'var(--black)',
        white: 'var(--white)',
        gray: 'var(--gray)',
        white20: 'var(--white20)',
        white50: 'var(--white50)',
        dark: 'var(--dark)'
      },
    },
  },
  plugins: [],
}

