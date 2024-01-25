import styled from '@emotion/styled'
import { TableCell, tableCellClasses } from '@mui/material'

export const TCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: theme.palette.accent.main,
    fontSize: '1.3rem',
  },
}))
