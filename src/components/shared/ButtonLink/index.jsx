import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { ButtonTextUI } from './style'

function ButtonLink({ children, path, htmlELType }) {
  return (
    <ButtonTextUI to={path}>
      <Typography component={htmlELType}>{children}</Typography>
    </ButtonTextUI>
  )
}

ButtonLink.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
  htmlELType: PropTypes.string,
}

export default ButtonLink
