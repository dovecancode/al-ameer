import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'

export const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: 30,
})

export const AddBtn = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 3,
  paddingInline: theme.spacing(3),
  background: theme.palette.primary.main,
  color: '#fff',
  fontSize: '1.6rem',
  fontFamily: "'Work Sans', sans-serif",

  '&:hover': {
    color: '#fff',
    background: '#159eec',
  },
}))
