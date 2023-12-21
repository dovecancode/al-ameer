import PropTypes from 'prop-types'
import { Heading, Heading1, Heading2, Span } from './style'

function SectionHeader({
  spanText = 'Your span text here',
  headingText = 'your heading h2 here',
  headingTag,
}) {
  const HeadingEl = headingTag === 1 ? Heading1 : Heading2
  return (
    <Heading>
      <Span component="span">{spanText}</Span>
      <HeadingEl variant={`h${headingTag}`}>{headingText}</HeadingEl>
    </Heading>
  )
}

SectionHeader.propTypes = {
  headingTag: PropTypes.number,
  spanText: PropTypes.string,
  headingText: PropTypes.string,
}

export default SectionHeader
