import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

export const TopMostLogo = styled(Typography)(({ show }) => ({
  '@media (max-width: 1024px)': { fontSize: '4.5rem' },
  '@media (max-width: 768px)': { display: show },
}))

export const SpanWord = styled(Box)(() => ({
  display: 'inline-block',
  color: '#159EEC',
}))
