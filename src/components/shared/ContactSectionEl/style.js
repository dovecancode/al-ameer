import { Paper, Stack } from '@mui/material'
import { styled } from '@mui/system'

export const ContactSection = styled('section')({
  marginBlock: '5rem',
})

export const StackContainer = styled(Stack)({
  flexWrap: 'wrap',
  marginBlock: '2rem',
})

export const Item = styled(Paper)(({ theme }) => ({
  flex: 1,
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

  '@media(width >= 37rem)': {
    flex: '1 0 25rem',
  },
}))
