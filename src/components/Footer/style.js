import { Box, Link, Stack, TextField, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const FooterSection = styled('footer')(() => ({
  background: '#1F2B6C',
  paddingTop: '3rem',
}))

export const FooterTop = styled(Stack)(({}) => ({
  flexWrap: 'wrap',
  gap: 3,
}))

export const FooterHeading = styled(Typography)(({}) => ({
  fontWeight: 'bold',
}))

export const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  // marginBottom: theme.spacing(2),
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  flex: 1,

  // '@media (width >= 40em )': {
  //   flex: '1 1 calc(100% / 2 - 5rem)',
  // },

  // '@media(width >= 60rem)': {
  //   flex: '1 1 calc(100% / 2 - 5rem)',
  // },

  // flex: '1 1 calc(100% / 4 - 2rem)',

  '@media(width <= 80rem)': {
    flex: '1 1 calc(100% / 2 - 5rem)',
  },

  '@media(width >= 80rem)': {
    '&:nth-of-type(3)': {
      flex: 1.5,
    },
    '&:nth-of-type(4)': {
      flex: 2,
    },
  },
}))

export const Footerlink = styled(Link)(({ theme }) => ({
  color: '#fff',
  fontFamily: "'Work Sans', sans-serif",
  textDecoration: 'none',
  fontSize: '1.6rem',
  display: 'block',
  marginBottom: '1rem',
  '&: hover': {
    color: theme.palette.secondary.main,
  },
}))

export const NewsTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  background: theme.palette.accent.main,
  borderRadius: '0.5rem',
  color: theme.palette.primary.main,
}))

export const FooterBootom = styled(Stack)(({ theme }) => ({
  color: '#fff',
  paddingBlock: theme.spacing(4),
  alignItems: 'center',
  justifyContent: 'space-between',
  rowGap: 10,
}))

export const SocialIcon = styled(Box)(({ theme }) => ({
  background: theme.palette.accent.main,
  display: 'inline-block',
  borderRadius: '10rem',
  padding: theme.spacing(1),
  marginInline: theme.spacing(1),
  lineHeight: 1,
  cursor: 'pointer',
  transition: 'background 0.5s ease-in',
  '&:hover': {
    background: theme.palette.secondary.main,
  },
}))
