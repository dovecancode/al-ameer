import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

export const Logo = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#1F2B6C',
  fontSize: 'clamp(1.6rem, 5vw, 3.5rem)',
  marginBlock: '3rem',
}))

export const RoleContainer = styled(Box)(() => ({ marginBlock: '2rem' }))
