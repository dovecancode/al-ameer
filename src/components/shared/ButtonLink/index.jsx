import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { ButtonTextUI } from './style'

function ButtonLink({ children, path }) {
  return (
    <ButtonTextUI component={RouterLink} to={path}>
      {children}
    </ButtonTextUI>
  )


ButtonLink.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
};

export default ButtonLink;
