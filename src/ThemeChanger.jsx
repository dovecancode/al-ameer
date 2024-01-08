import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1F2B6C',
    },
    secondary: {
      main: '#159EEC',
    },
    accent: {
      main: '#BFD2F8',
    },
    dark: {
      main: '#212124',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Yeseva One', serif",
      fontSize: 'clamp(3rem, 5vw, 6rem)',
      fontWeight: '400',
      color: '#1F2B6C',
    },
    h2: {
      fontFamily: "'Yeseva One', serif",
      fontSize: 'clamp(2.5rem, 4vw, 3.2rem)',
      fontWeight: '400',
      color: '#1F2B6C',
    },
    h3: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: 'clamp(1.6rem, 4vw, 2rem)',
    },
    h5: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: '1.6rem',
      fontWeight: '700',
      color: '#1F2B6C',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: 'clamp(1.6rem, 4vw, 1.8rem)',
      fontWeight: '700',
      textTransform: 'uppercase',
      color: '#159EEC',
    },
    articleDate: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: 'clamp(1.6rem, 4vw, 1.8rem)',
      color: '#159EEC',
    },
    subtitle2: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: 'clamp(1.6rem, 4vw, 2rem)',
      textTransform: 'capitalize',
      color: '#1F2B6C',
    },
    // style for paragraph
    body1: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: '1.6rem',
      fontWeight: '400',
    },
    linkTag: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: '400',
      fontSize: '1.8rem',
      textDecoration: 'none',
      display: 'inline-block',
    },
  },
})

export default theme
