import { Box, Container, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import DashFooter from '../components/DashFooter'
import DashHeader from '../components/DashHeader'
import DashSidebar from '../components/DashSidebar'

function DashboardLayout() {
  return (
    <Stack direction="row" sx={{ height: '100vh' }}>
      <Box sx={{ flex: 1, background: '#FFF' }}>
        <DashSidebar />
      </Box>
      <Box sx={{ flex: 5, background: 'teal' }}>
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
