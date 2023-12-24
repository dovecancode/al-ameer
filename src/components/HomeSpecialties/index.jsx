import { Box, Container, Stack, Typography } from '@mui/material'

import SectionHeader from '../shared/SectionHeader'
import { Item, SpeciaTiesSection } from './style'

import HeartIcon from '../shared/HeartIcon'
import specialties from './data'

function HomeSpecialties() {
  return (
    <SpeciaTiesSection>
      <Container>
        <SectionHeader
          position="center"
          headingTag={2}
          spanText="always caring"
          headingText="Our Specialties"
        />

        <Stack
          sx={{
            borderLeft: '0.1rem solid rgba(0, 0, 0, 0.12)',
            borderTop: '0.1rem solid rgba(0, 0, 0, 0.12)',
            width: '100%',
            marginBlock: '5rem',
            flexFlow: 'wrap',
          }}
          direction={{ xs: 'column', sm: 'row', md: 'row', xl: 'row' }}
        >
          {specialties.map((specialty) => {
            return (
              <Item key={specialty.forte} className="heart">
                {/* <Box component="img" src={specialty.icon} /> */}
                <Box>
                  <HeartIcon />
                </Box>
                <Typography component="p">{specialty.forte}</Typography>
              </Item>
            )
          })}
        </Stack>
      </Container>
    </SpeciaTiesSection>
  )
}

export default HomeSpecialties
