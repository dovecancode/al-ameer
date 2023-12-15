import { ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import theme from './ThemeChanger'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Navbar />
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
