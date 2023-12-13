import { ThemeProvider, createTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/index'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1F2B6C',
      light: '#159EEC',
      accent: '#BFD2F8',
      dark: '#212124',
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
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Navbar />
        <h1>Navigation</h1>
      </div>

      <main>
        <Outlet />
      </main>

      <div>
        <h2>Footer</h2>
      </div>
    </ThemeProvider>
  )
}

export default App
