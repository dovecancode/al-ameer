import { Box, Typography } from '@mui/material'
import DashCard from '../DashCard'
import { StatusCardSection } from './DashCard.elements'
import statusData from './data'

function DashCardsStatus() {
  return (
    <Box component="section">
      <Typography sx={{ fontSize: '2.5rem', fontWeight: '500' }} component="h2">
        Status
      </Typography>
      <StatusCardSection direction={{ xs: 'column', sm: 'row' }}>
        {statusData.map((item, idx) => (
          <DashCard key={`item-${idx}`} {...item} />
        ))}
      </StatusCardSection>
    </Box>
  )
}

export default DashCardsStatus
