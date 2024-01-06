import { useTheme } from '@emotion/react'
import { Box, Container, Stack, useMediaQuery } from '@mui/material'
import ServicesIconOptions from '../ServicesIconOptions'
import SevicesOptionContent from '../SevicesOptionContent'
import SectionHeader from '../shared/SectionHeader'
import { HomeServicesSection } from './style'

function HomeServices() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <HomeServicesSection className="services-section">
      <Container>
        <SectionHeader
          headingTag={2}
          headingText="Our Services"
          spanText="care you can believe in"
          position="center"
        />

        <Box sx={{ width: '100%', paddingBlock: '5rem' }}>
          <Stack spacing={{ sm: 2 }} direction="row" flexWrap="wrap">
            <ServicesIconOptions>Item 1</ServicesIconOptions>
            {isDesktop && <SevicesOptionContent>Item 2</SevicesOptionContent>}
          </Stack>
        </Box>

        {/* <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>xs=8</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>xs=4</Typography>
            </Grid>
          </Grid>
        </Box> */}
      </Container>
    </HomeServicesSection>
  )
}

export default HomeServices
