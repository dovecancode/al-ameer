import { Typography } from '@mui/material'
import { ButtonTextUI } from './style'

function ButtonLink({ children, path, htmlELType }) {
  return (
    <ButtonTextUI to={path}>
      <Typography component={htmlELType}>{children}</Typography>
    </ButtonTextUI>
  )
}

export default ButtonLink
