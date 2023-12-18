// import { Container, Typography } from '@mui/material'
import { Box, Container, Grid } from '@mui/material'
import HeroBookAppt from '../HeroBookAppt'
import ButtonLink from '../shared/ButtonLink'
import SectionHeader from '../shared/SectionHeader'
import { HeroSection } from './style'

function Hero() {
  return (
    <HeroSection className="hero" component="section">
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
          <Grid container>
            <Grid item md={6}>
              <SectionHeader
                headingTag={1}
                spanText="caring for life"
                headingText={'Leading the Way Medical Excellence'}
              />
              <Box>
                <ButtonLink path="services" htmlELType="span">
                  our services
                </ButtonLink>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container>
        <HeroBookAppt />
      </Container>
    </HeroSection>
  )
}

export default Hero
