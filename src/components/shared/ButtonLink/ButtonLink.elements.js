import { Link } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ButtonTextUI = styled(Link)(
  ({
    theme,
    bradius = '5rem',
    transformtext = 'capitalize',
    width,
    position,
  }) => ({
    ...theme.typography.linkTag,
    textTransform: transformtext,
    textAlign: position,
    borderRadius: bradius,
    padding: '1rem 3rem',
    width,
    color: theme.palette.primary.main,
    background: theme.palette.accent.main,
    transition: '.4s ease',
    '&:hover': {
      background: '#159EEC',
      color: '#fff',
    },
  })
)
