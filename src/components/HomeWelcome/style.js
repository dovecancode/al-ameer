import styled from '@emotion/styled'
import { Typography } from '@mui/material'

export const WelcomeHomeSection = styled('section')({
  textAlign: 'center',
  paddingTop: '9rem',
  paddingBottom: '6rem',
})

export const Span = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
}))

export const ImageContain = styled('div')({
  background: "url('welcome-doctors.jpg') no-repeat",
  backgroundSize: 'cover',
  height: '30rem',
})
