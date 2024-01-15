import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo, RoleContainer } from './DashSidebar.Element'
import { dashBoardButton } from './data'

function DashSidebar() {
  const location = useLocation()
  const isLaptop = useMediaQuery('(max-width:1024px)')
  const [boxVisible, setBoxVisible] = useState(false)

  const clickIcon = () => {
    setBoxVisible(!boxVisible)
    console.log('Box Visibility:', boxVisible)
  }

  const itemClick = () => {
    setBoxVisible(false)
  }

  return (
    <>
      {!isLaptop && (
        <Box
          component="section"
          sx={{ display: 'flex', flexDirection: 'column', width: '30rem' }}
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
                sx={{
                  textAlign: 'center',
                  fontSize: '2rem',
                  fontWeight: '600',
                }}
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
      )}
      {isLaptop && (
        <>
          {boxVisible ? (
            <CancelOutlinedIcon
              onClick={clickIcon}
              sx={{
                fontSize: '3.5rem',
                color: '#159EEC',
                margin: '2rem',
                zIndex: '1',
              }}
            />
          ) : (
            <SignalCellularAltIcon
              onClick={clickIcon}
              sx={{
                fontSize: '3.5rem',
                color: '#159EEC',
                margin: '2rem',
                transform: 'rotate(90deg) scaleX(-1)',
                zIndex: '1',
              }}
            />
          )}
        </>
      )}
      {boxVisible && (
        <Box
          component="section"
          sx={{ display: 'flex', flexDirection: 'column', width: '30rem' }}
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
                sx={{
                  textAlign: 'center',
                  fontSize: '2rem',
                  fontWeight: '600',
                }}
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
                <ListItem onClick={itemClick}>
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
      )}
    </>
  )
}

export default DashSidebar
