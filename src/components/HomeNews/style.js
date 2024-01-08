import { Stack } from '@mui/material'
import { styled } from '@mui/system'

export const HomeNewSection = styled('section')(() => ({
  paddingBlock: '5rem',
}))

export const AricleCardContainer = styled(Stack)(() => ({
  marginBlock: '3rem',
}))

export const CustomPaginationBullet = styled('div')(() => ({
  // marginBlock: '3rem',
  background: 'red',
  width: 200,
  height: 200,
}))
