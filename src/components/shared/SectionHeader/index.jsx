import PropTypes from 'prop-types'
import { Heading, Heading1, Heading2, Span } from './style'

function SectionHeader({
  spanText,
  headingText = 'your heading h2 here',
  headingTag,
  position = 'left',
  headingSize,
}) {
  const HeadingEl = headingTag === 1 ? Heading1 : Heading2
  return (
    <Heading position={position}>
      {spanText && <Span component="span">{spanText}</Span>}
      <HeadingEl size={headingSize} variant={`h${headingTag}`}>
        {headingText}
      </HeadingEl>
    </Heading>
  )
}

SectionHeader.propTypes = {
  headingTag: PropTypes.number,
  spanText: PropTypes.string,
  headingText: PropTypes.string,
  position: PropTypes.string,
  headingSize: PropTypes.string,
}

export default SectionHeader
