import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const FormButton = styled(Button)(({ theme }) => ({
  width: '100%',
  fontSize: '1.6rem',
  color: theme.palette.primary.main,
  background: theme.palette.accent.main,
  fontFamily: "'Work Sans', sans-serif",
  '&:hover': {
    color: '#fff',
    background: theme.palette.secondary.main,
  },
}))
