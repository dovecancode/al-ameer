import { Box, Container, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import LinkMap from '../shared/LinkMap'
import { SubHead } from './style'

import ColorBarImageUI from '../shared/ColorBarImageUI'

function TitlePage({ pageTitle, bgimage }) {
  return (
    <>
      <SubHead bgimage={bgimage}>
        <Box sx={{ textAlign: 'left', margin: 'auto 0' }}>
          <Container>
            <LinkMap />
            <Typography variant="h1" component="h1">
              {pageTitle}
            </Typography>
          </Container>
        </Box>
      </SubHead>
      <ColorBarImageUI />
    </>
  )
}

TitlePage.propTypes = {
  pageTitle: PropTypes.string,
  bgimage: PropTypes.string,
}

export default TitlePage
