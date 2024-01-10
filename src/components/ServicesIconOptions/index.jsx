import PropTypes from 'prop-types'
import servicesOptionIcons from './data'
import { OptionContainer, OptionIcons } from './style'

import { Box, Button, Typography } from '@mui/material'

function ServicesIconOptions({ onSelectItem, selectedID }) {
  return (
    <OptionContainer>
      <Box
        sx={{
          border: '1px solid  #c4c7d3',
          borderBottom: 0,
          borderRadius: '0.3125rem',
        }}
      >
        <Box
          className="container-icon"
          sx={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {servicesOptionIcons.map((option, idx) => (
            <OptionIcons
              isActive={idx + 1 === selectedID}
              key={option.text}
              onClick={() => onSelectItem(idx + 1)}
            >
              <Box>
                <option.icon />
              </Box>
              <Typography component="p">{option.text}</Typography>
            </OptionIcons>
          ))}
        </Box>
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

ServicesIconOptions.propTypes = {
  onSelectItem: PropTypes.func,
  selectedID: PropTypes.number,
}

export default ServicesIconOptions
