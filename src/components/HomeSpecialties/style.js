import { Box } from '@mui/material'
import { styled } from '@mui/system'

export const SpeciaTiesSection = styled('section')({
  textAlign: 'center',
})

export const Item = styled(Box)(({ theme }) => {
  return {
    flex: '1',
    padding: '4rem',
    cursor: 'pointer',
    transition: '0.5s',
    borderBottom: '0.1rem solid rgba(0, 0, 0, 0.12)',
    borderRight: '0.1rem solid rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.accent.main,
      borderRadius: '0.3125rem',
    },
    '&:hover svg': {
      fill: theme.palette.accent.main,
    },

    '@media(width >= 37rem)': {
      flex: '1 0 25rem',
    },
  }
})
