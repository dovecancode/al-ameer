import { Link } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ButtonTextUI = styled(Link)(({ theme }) => ({
  ...theme.typography.linkTag,
  textTransform: 'capitalize',
  borderRadius: '5rem',
  padding: '1rem 3rem',
  color: theme.palette.primary.main,
  background: theme.palette.accent.main,
  transition: '.4s ease',
  '&:hover': {
    background: '#159EEC',
    color: '#fff',
  },
}))
