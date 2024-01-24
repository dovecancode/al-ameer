import { TableCell } from '@mui/material'
import { styled } from '@mui/material/styles'

export const TCell = styled(TableCell)(() => ({
  fontSize: '1.4rem',
  '&:last-child': { textAlign: 'right' },
}))
