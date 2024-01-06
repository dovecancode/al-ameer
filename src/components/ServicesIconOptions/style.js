import { Box, Stack } from '@mui/material'
import { styled } from '@mui/system'

export const OptionContainer = styled(Stack)(() => ({
  flex: 1,
  border: '1px solid  #c4c7d3',
  borderRadius: '0.3125rem',
}))

export const OptionIcons = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '3rem',
  cursor: 'pointer',

  flex: 1,

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
