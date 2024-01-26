import styled from '@emotion/styled'
import { Toolbar } from '@mui/material'

export const TheToolBar = styled(Toolbar)(({ theme, iselectitem }) => ({
  background: iselectitem ? theme.palette.secondary.main : '',
  color: '#fff',
}))
