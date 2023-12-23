import styled from '@emotion/styled'
import { Link } from '@mui/material'

export const Item = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexGrow: 1,
  color: '#fff',
  paddingBlock: '2rem',
  paddingInline: '1rem',
  position: 'relative',
  top: '4.5rem',
  borderRadius: '0.3125rem',
  textDecoration: 'none',
}))
