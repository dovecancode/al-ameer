import styled from '@emotion/styled'
import { Stack } from '@mui/material'

export const StatusCardSection = styled(Stack)(({ theme }) => ({
  flexWrap: 'wrap',
  gap: 30,
  '& > *': {
    flex: 1,
  },
}))
