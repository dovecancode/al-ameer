import styled from '@emotion/styled'
import { Paper } from '@mui/material'

export const StatusCard = styled(Paper)(({ width }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem',
  borderRadius: '1.6rem',
  columnGap: 20,
  maxWidth: width,

  boxShadow:
    'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px',

  '@media (width >= 40em )': {
    flex: '1 1 calc(100% / 2 - 5rem)',
  },

  '@media(width >= 90rem)': {
    flex: '1 1 calc(100% / 4 - 5rem)',
  },
}))
