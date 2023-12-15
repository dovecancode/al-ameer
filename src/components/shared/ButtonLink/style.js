import { Link as RouterLink } from 'react-router-dom'

import { styled } from '@mui/material/styles'

export const ButtonTextUI = styled(RouterLink)(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  textTransform: 'capitalize',
  background: theme.palette.primary.accent,
  padding: '1rem 3rem',
  borderRadius: '5rem',
  color: theme.palette.primary.main,
  transition: '.4s ease',
  '& > span, a': {
    fontSize: '1.7rem',
    fontWeight: '500',
    fontFamily: "'Work Sans', sans-serif",
  },
  '&:hover': {
    background: '#159EEC',
    color: '#fff',
  },
}));
