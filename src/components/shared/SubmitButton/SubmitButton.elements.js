import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const FormButton = styled(Button)(
  ({
    width = '100%',
    height = '100%',
    backgroundnonhover = '#bfd2f8',
    colornonhover = '#1f2b6c',
    colorhover = '#fff',
    backgroundhover = '#159eec',
  }) => ({
    height,
    width,
    fontSize: '1.6rem',
    color: colornonhover,
    background: backgroundnonhover,
    fontFamily: "'Work Sans', sans-serif",
    '&:hover': {
      color: colorhover,
      background: backgroundhover,
    },
  })
)
