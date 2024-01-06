import { useTheme } from '@emotion/react'
import { Box, Container, Stack, useMediaQuery } from '@mui/material'
import ServicesIconOptions from '../ServicesIconOptions'
import SevicesOptionContent from '../SevicesOptionContent'
import SectionHeader from '../shared/SectionHeader'
import { HomeServicesSection } from './style'

import { useState } from 'react'
import optionContents from './data'

function HomeServices() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const [itemID, setItemID] = useState(2)

  const singleContent = optionContents.find((item) => item.id === itemID)

  function handleClick(id) {
    setItemID(id)
  }

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
            <ServicesIconOptions
              onSelectItem={handleClick}
              selectedID={itemID}
            />
            {isDesktop && <SevicesOptionContent {...singleContent} />}
          </Stack>
        </Box>
      </Container>
    </HomeServicesSection>
  )
}

export default HomeServices
