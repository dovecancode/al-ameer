import { Stack, Typography } from '@mui/material'

import { styled } from '@mui/material/styles'

export const HeroSection = styled(Stack)({
  position: 'relative',
  background: "url('hero.jpg') 90% -5rem no-repeat",
  height: '70rem',
})

export const Span = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
}))
