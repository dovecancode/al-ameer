import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

export const Heading = styled(Box)(({ position }) => ({
  textAlign: position,
}))

export const Span = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  display: 'block',
}))

export const Heading1 = styled(Typography)(({ theme, size }) => ({
  ...theme.typography.h1,
  marginBottom: '2rem',
  fontSize: size,
}))

export const Heading2 = styled(Typography)(({ theme, size }) => ({
  ...theme.typography.h2,
  fontSize: size,
}))
