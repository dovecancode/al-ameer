import { SpanWord, TopMostLogo } from './TopMostLogo.element'
import PropTypes from 'prop-types'

function TopLogo({ logoDisplay }) {
  return (
    <TopMostLogo show={logoDisplay} variant="h1">
      Al-
      <SpanWord variant="span">Ameer</SpanWord>
    </TopMostLogo>
  )
}

TopLogo.propTypes = {
  logoDisplay: PropTypes.string,
}
export default TopLogo
