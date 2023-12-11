import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
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
