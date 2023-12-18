import styled from '@emotion/styled'
import { Typography } from '@mui/material'

export const WelcomeHomeSection = styled('section')({
  textAlign: 'center',
  paddingTop: '9rem',
})

export const Span = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
}))
