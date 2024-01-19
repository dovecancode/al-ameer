import { Box, Paper, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { StatusCard } from './DashCard.elements'

function DashCard({ width = '100%', title, count, icon, bgColor = '#BFD2F8' }) {
  return (
    <StatusCard width={width} elevation={0}>
      <Box>
        <Typography color="#1F2B6C" fontSize={35}>
          {count}
        </Typography>
        <Typography fontWeight="bold" fontSize={20}>
          {title}
        </Typography>
      </Box>
      <Paper
        elevation={0}
        sx={{ padding: '2rem', background: bgColor, borderRadius: '1rem' }}
      >
        {icon}
      </Paper>
    </StatusCard>
  )
}

DashCard.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.number,
}

export default DashCard
