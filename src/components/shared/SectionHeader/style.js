import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

export const Heading = styled(Box)({})

export const Span = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
}))

export const Heading1 = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  marginBottom: '2rem',
}))

export const Heading2 = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
}))
