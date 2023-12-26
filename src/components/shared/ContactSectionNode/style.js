import { Paper, Stack } from '@mui/material'
import { styled } from '@mui/system'

export const ContactSection = styled('section')({
  marginBlock: '5rem',
})

export const StackContainer = styled(Stack)({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBlock: '2rem',
})

export const Item = styled(Paper)(({ theme }) => ({
  // flex: '1 1 calc(100% / 2 - 5rem)',
  flex: '1 1 auto',
  background: theme.palette.accent.main,
  padding: '3rem',
  marginInline: '1rem',
  marginBlock: '1rem',
  transition: '0.5s',
  '&:hover': {
    background: theme.palette.primary.main,
  },
  '&:hover svg': {
    fill: theme.palette.primary.main,
  },

  '&:hover svg path': {
    stroke: theme.palette.accent.main,
  },

  '&:hover > * ': {
    color: theme.palette.accent.main,
  },

  // '@media(width >= 37rem)': {
  //   flex: '1 0 40rem',
  // },

  '@media(width >= 40rem)': {
    flex: '1 1 calc(100% / 2 - 5rem)',
  },

  '@media(width >= 60rem)': {
    flex: '1 1 calc(100% / 4 - 5rem)',
  },
}))
