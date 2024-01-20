import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { ButtonTextUI } from './ButtonLink.elements'

function ButtonLink({ children, path, bRadius, tTransform, width, position }) {
  return (
    <ButtonTextUI
      component={RouterLink}
      to={path}
      bradius={bRadius}
      transformtext={tTransform}
      width={width}
      position={position}
    >
      {children}
    </ButtonTextUI>
  )
}
ButtonLink.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
  bRadius: PropTypes.string,
  tTransform: PropTypes.string,
  width: PropTypes.string,
  position: PropTypes.string,
}

export default ButtonLink
