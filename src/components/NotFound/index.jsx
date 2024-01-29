import { Box, Container, Stack, Typography } from '@mui/material'
import { notfound } from '../../assets/img/pageNotFound'
import ButtonLink from '../shared/ButtonLink'

import PropTypes from 'prop-types'

function NotFound({ btnText }) {
  return (
    <Container>
      <Stack
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          pt: 2,
        }}
      >
        <Box>
          <Box width="100%" component="img" src={notfound} />
        </Box>
        <Box>
          <Typography sx={{ pt: '2rem' }} variant="h1">
            Page Not Found
          </Typography>
          <Box sx={{ py: '2rem' }}>
            <Typography variant="body1">
              The page you are looking for may have been deleted, its name could
            </Typography>
            <Typography variant="body1">
              have been modified, or it might be temporarily inaccessible.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mb: 2 }}>
          <ButtonLink path="/">{btnText}</ButtonLink>
        </Box>
      </Stack>
    </Container>
  )
}

NotFound.propTypes = {
  btnText: PropTypes.string,
}

export default NotFound
