import { Stack } from '@mui/material'
import { styled } from '@mui/system'

export const OptionContainer = styled(Stack)(() => ({
  flex: 1,
}))

export const OptionIcons = styled('div')(({ theme, isActive }) => ({
  backgroundColor: isActive ? theme.palette.primary.main : '',
  color: isActive ? theme.palette.accent.main : '',
  textAlign: 'center',
  padding: '3rem',
  cursor: 'pointer',
  transition: '0.5s',
  borderRadius: '0.3125rem',
  flex: 1,

  '& svg': {
    fill: isActive ? theme.palette.accent.main : '',
  },

  // '@media (width <= 40em)': {
  //   flexBasis: '10rem',
  // },
  // '@media (width <= 60em)': {
  //   flexBasis: '20rem',
  // },

  // '@media (width >= 20em) and  (width <= 60em)': {
  //   flexBasis: '20rem',
  // },

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.accent.main,
  },

  '&:hover svg': {
    fill: theme.palette.accent.main,
  },
}))
