import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

function DashboardPrivateRoute({ children }) {
  const user = true
  return user ? children : <Navigate to="/" replace />
}

DashboardPrivateRoute.propTypes = {
  children: PropTypes.element,
}

export default DashboardPrivateRoute
