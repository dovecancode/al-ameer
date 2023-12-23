import PropTypes from 'prop-types'
import { FormButton } from './style'

function SubmitButton({ children, type }) {
  return <FormButton type={type}>{children}</FormButton>
}

SubmitButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
}

export default SubmitButton
