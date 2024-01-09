import { Navigate } from 'react-router-dom'

function DashboardPrivateRoute({ children }) {
  const user = true
  return user ? children : <Navigate to="/" replace />
}

export default DashboardPrivateRoute
