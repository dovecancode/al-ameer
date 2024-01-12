import PropTypes from 'prop-types'
import { FormButton } from './style'

function SubmitButton({
  children,
  type,
  width,
  height,
  backgroundnonhover,
  colornonhover,
}) {
  return (
    <FormButton
      height={height}
      width={width}
      type={type}
      backgroundnonhover={backgroundnonhover}
      colornonhover={colornonhover}
    >
      {children}
    </FormButton>
  )
}

SubmitButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundnonhover: PropTypes.string,
  colornonhover: PropTypes.string,
}

export default SubmitButton
