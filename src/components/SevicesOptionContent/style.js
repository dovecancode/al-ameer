import { Box, Stack } from '@mui/material'
import { styled } from '@mui/system'

export const OptionContent = styled(Stack)(({ theme }) => ({
  flex: 5,
  gap: '2rem',

  '@media (width >= 60em)': {
    paddingBlock: '2rem',
  },
}))
export const ContentArea = styled(Box)(({ theme }) => ({
  flex: 1,
}))

export const ImageArea = styled(Stack)(({ theme }) => ({
  flex: 0.6,
  gap: '1.6rem',
}))
