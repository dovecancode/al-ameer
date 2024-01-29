import styled from '@emotion/styled'
import { TableCell, tableCellClasses } from '@mui/material'

export const TBodyCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.4rem',
  },
}))
