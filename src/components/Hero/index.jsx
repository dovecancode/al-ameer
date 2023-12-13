// import { Container, Typography } from '@mui/material'
import { Box, Container, Typography } from '@mui/material'
import ButtonLink from '../shared/ButtonLink'
import { HeroSection, Span } from './style'

function Hero() {
  return (
    <HeroSection component="section">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'inherit',
          textAlign: 'center',
          '@media (width >= 40rem)': {
            textAlign: 'left',
          },
        }}
      >
        <Container>
          <Box>
            <Span variant="span">caring for life</Span>
          </Box>
          <Box sx={{ marginTop: '0.2rem', marginBottom: '3rem' }}>
            <Typography variant="h1">
              Leading the Way <br />
              in Medical Excellence
            </Typography>
          </Box>
          <Box>
            {/* <RouterLink to="services">
              <Link component="span">our services</Link>
            </RouterLink> */}
            <ButtonLink path="services" htmlELType="span">
              our services
            </ButtonLink>
          </Box>
        </Container>
      </Box>
    </HeroSection>
  )
}

export default Hero
