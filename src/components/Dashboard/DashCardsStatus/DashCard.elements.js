import styled from '@emotion/styled'
import { Stack } from '@mui/material'

export const StatusCardSection = styled(Stack)(() => ({
  flexWrap: 'wrap',
  paddingBlock: '2rem',
  gap: 30,
  '& > *': {
    flex: 1,
  },
}))
