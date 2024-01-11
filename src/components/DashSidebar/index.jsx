import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { dashBoardButton } from './data'
import { Logo, RoleContainer } from './DashSidebar.Element'

function DashSidebar() {
  const location = useLocation()

  return (
    <>
      <Box
        component="section"
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Box>
          <Logo variant="h1">
            Al-
            <Box component="span" sx={{ color: '#159EEC' }}>
              Ameer
            </Box>
          </Logo>
          <RoleContainer>
            <Typography
              sx={{ textAlign: 'center', fontSize: '2rem', fontWeight: '600' }}
            >
              Administrator
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: '300',
              }}
            >
              admin@al-ameer.com
            </Typography>
          </RoleContainer>
        </Box>
        <Divider />
        <List sx={{ margin: '0 auto', color: '#159EEC' }}>
          {dashBoardButton.map(({ id, path, label, icon }) => (
            <Link
              key={id}
              to={path}
              style={{
                color: location.pathname === path ? '#1F2B6C' : '#159EEC',
              }}
            >
              <ListItem>
                <ListItemButton>
                  <ListItemIcon sx={{ marginRight: '-.5rem' }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </>
  )
}

export default DashSidebar
