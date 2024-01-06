import { OptionContainer, OptionIcons } from './style'

import { Box, Button, Typography } from '@mui/material'
import servicesOptionIcons from './data.js'

console.log(servicesOptionIcons)

function ServicesIconOptions() {
  return (
    <OptionContainer>
      <Box
        className="container-icon"
        sx={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {servicesOptionIcons.map((option) => (
          <OptionIcons key={option.text}>
            <Box>
              <option.icon />
            </Box>
            <Typography component="p">{option.text}</Typography>
          </OptionIcons>
        ))}
      </Box>

      <Button
        sx={{
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          color: 'accent.main',
          fontSize: '1rem',
          paddingBlock: '1rem',
        }}
        variant="contained"
      >
        View All
      </Button>
    </OptionContainer>
  )
}

export default ServicesIconOptions
