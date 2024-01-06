import styled from '@emotion/styled'

export const ColorBarImage = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  '& > *': {
    display: 'block',
    height: '0.8rem',
    width: '100%',
  },
  '& span:nth-of-type(1)': {
    background: theme.palette.accent.main,
    flex: 1,
  },
  '& span:nth-of-type(2)': {
    background: theme.palette.primary.main,
    flex: 3,
  },
  '& span:nth-of-type(3)': {
    background: theme.palette.secondary.main,
    flex: 1,
  },
}))
