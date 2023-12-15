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
      fontSize: '2rem',
      fontWeight: '400',
    },
    subtitle1: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: 'clamp(1.6rem, 4vw, 2rem)',
      fontWeight: '700',
      textTransform: 'uppercase',
      color: '#159EEC',
    },
    // style for paragraph
    body1: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: '1.6rem',
      fontWeight: '400',
    },
  },
})

export default theme
