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

export const ColorBarImage = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  '& > *': {
    display: 'block',
    height: '0.8rem',
    width: '100%',
  },
  '& span:nth-of-type(1)': {
    background: theme.palette.accent.main,
    flex: 1,
  },
  '& span:nth-of-type(2)': {
    background: theme.palette.primary.main,
    flex: 3,
  },
  '& span:nth-of-type(3)': {
    background: theme.palette.secondary.main,
    flex: 1,
  },
}))
