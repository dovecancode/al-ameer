import { Box, Container, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import DashFooter from '../components/DashFooter'
import DashHeader from '../components/DashHeader'
import DashMenuIcon from '../components/DashMenuIcon'
import DashSidebar from '../components/DashSidebar'

function DashboardLayout() {
  return (
    <Stack direction="row" sx={{ height: '100vh' }}>
      <Box
      // sx={{ flex: 1, background: '#FFF' }}
      >
        <DashMenuIcon />
        <DashSidebar />
      </Box>
      <Box
        sx={{
          //   flex: 5,
          background: 'teal',
          width: '100%',
          //   '@media (max-width: 1024px)': { width: '100%', flex: '1' },
        }}
      >
        <DashHeader />
        <Box component="main">
          <Container>
            <Outlet />
          </Container>
        </Box>
        <DashFooter />
      </Box>
    </Stack>
  )
}

export default DashboardLayout
