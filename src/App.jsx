import { ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import theme from './ThemeChanger'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </ThemeProvider>
  )
}

export default App
