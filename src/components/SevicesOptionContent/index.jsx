import { Box, Typography } from '@mui/material'
import { ContentArea, ImageArea, OptionContent } from './style'

import PropTypes from 'prop-types'
import ListStyleInside from '../shared/ListStyleInside'

import { featured1, featured2 } from '../../assets/img/home'

import ColorBarImage from '../shared/ColorBarImageUI'

function SevicesOptionContent({ title, bulletContent, content }) {
  return (
    <OptionContent direction={{ md: 'row', lg: 'row' }}>
      <ContentArea>
        <Typography component="h3" fontSize={30}>
          {title}
        </Typography>

        <Box sx={{ columnCount: 2, marginBlock: '2rem' }}>
          {bulletContent.map((item, idx) => (
            <Box
              key={`list-dot-${idx}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <ListStyleInside />
              <Typography variant="body1">{item}</Typography>
            </Box>
          ))}
        </Box>
        <Box>
          <Typography>{content}</Typography>
        </Box>
      </ContentArea>
      <ImageArea direction={{ sm: 'row', md: 'column', lg: 'column' }}>
        <Box>
          <Box
            component="img"
            src={featured1}
            sx={{ display: 'block', width: '100%' }}
          />
          <ColorBarImage />
        </Box>
        <Box>
          <Box
            component="img"
            src={featured2}
            sx={{ display: 'block', width: '100%' }}
          />
          <ColorBarImage />
        </Box>
      </ImageArea>
    </OptionContent>
  )
}

SevicesOptionContent.propTypes = {
  title: PropTypes.string,
  bulletContent: PropTypes.array,
  content: PropTypes.string,
  images: PropTypes.string,
}

export default SevicesOptionContent
