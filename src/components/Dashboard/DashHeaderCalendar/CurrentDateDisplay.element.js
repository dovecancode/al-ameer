import styled from '@emotion/styled'
import { Box, Stack } from '@mui/material'

export const CalendarContainer = styled('div')({
  textAlign: 'right',
})

export const DateStack = styled(Stack)({
  alignItems: 'center',
  gap: '2rem',
})

export const Calendar = styled(Box)(() => ({
  background: '#F8F8F8',
  border: '0.1rem #E5EAF8 solid',
  borderRadius: '0.5rem',
  padding: '2rem',
}))
