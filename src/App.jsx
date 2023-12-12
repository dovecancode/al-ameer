import AcUnitIcon from '@mui/icons-material/AcUnit'
import { Typography } from '@mui/material'
import { FaHome } from 'react-icons/fa'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <h1>Navigation</h1>
      </div>

      <Outlet />

      <div>
        <h2>Footer</h2>
      </div>
    </>
  )
}

export default App
