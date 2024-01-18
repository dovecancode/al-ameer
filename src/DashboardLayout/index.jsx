import { Box, Container, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import DashFooter from '../components/DashFooter'
import DashHeader from '../components/DashHeader'
import DashSidebar from '../components/DashSidebar'

function DashboardLayout() {
  return (
    <Stack direction="row" sx={{ height: '100vh' }}>
      <Box sx={{ background: '#FFF' }}>
        <DashSidebar />
      </Box>
      <Box
        sx={{
          width: '100%',
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
