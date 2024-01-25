import { Box, Container, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import DashHeader from '../../../components/Dashboard/DashHeader'
import DashSidebar from '../../../components/Dashboard/DashSidebar'

function DashboardLayout() {
  return (
    <Stack direction="row" sx={{ background: '#F7F9FA' }}>
      <Box sx={{ borderRight: '0.2rem #eee solid' }}>
        <DashSidebar />
      </Box>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Container
          className="dashboard-container"
          maxWidth={false}
          sx={{ maxWidth: '98%' }}
        >
          <DashHeader />
          <Box component="main">
            <Outlet />
          </Box>
        </Container>
      </Box>
    </Stack>
  )
}

export default DashboardLayout