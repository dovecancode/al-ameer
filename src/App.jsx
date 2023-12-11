import AcUnitIcon from '@mui/icons-material/AcUnit'
import { Typography } from '@mui/material'
import { FaHome } from 'react-icons/fa'
import Header from './components/Header/index'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Header />
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
