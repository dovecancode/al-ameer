import styled from '@emotion/styled'
import { Box, TextField } from '@mui/material'

export const AppointmentSection = styled('section')({
  backgroundImage:
    "linear-gradient(to right bottom, rgb(255 255 255 / 77%), rgb(255 247 247 / 32%)), url('appt-bg.jpg')",
  backgroundSize: 'cover',
  paddingBlock: '5rem',

  '& .col': {
    flex: '1',
  },
})

export const Content = styled('div')({
  '& h2': {
    color: '#159EEC',
  },
})

export const FormElement = styled(Box)({
  width: '100%',
  borderRadius: '0.5rem',
  overflow: 'hidden',
})

export const TextInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  background: theme.palette.primary.main,
  border: 0,
  outline: 0,
  borderBottom: `0.1rem solid ${theme.palette.accent.main}`,
  borderRight: `0.1rem solid ${theme.palette.accent.main}`,
  color: '#fff',
  '.MuiSvgIcon-root ': {
    fill: 'white !important',
  },
}))
