import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Logo, RoleContainer } from './DashSidebar.Element'
import { dashBoardButton } from './data'

function DashSidebar() {
  const isLaptop = useMediaQuery('(max-width:1024px)')
  const [boxVisible, setBoxVisible] = useState(false)

  const clickIcon = () => {
    setBoxVisible(!boxVisible)
    console.log('Box Visibility:', boxVisible)
  }

  const userRole = 1

  return (
    <>
      {isLaptop ? (
        <>
          {boxVisible ? (
            <>
              <CancelOutlinedIcon
                onClick={clickIcon}
                sx={{
                  fontSize: '3.5rem',
                  color: '#159EEC',
                  margin: '2rem',
                  zIndex: '1',
                }}
              />
              <Box
                component="section"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '30rem',
                }}
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
                  {dashBoardButton[userRole].map(({ path, label, icon }) => (
                    <Link
                      key={label}
                      to={path}
                      sx={{
                        color: '#159EEC',
                        textDecoration: 'none',
                        '&.active, &.active .MuiSvgIcon-root': {
                          color: '#1F2B6C',
                        },
                      }}
                      component={RouterNavLink}
                    >
                      <ListItem>
                        <ListItemButton>
                          <ListItemIcon>{icon}</ListItemIcon>
                          <ListItemText primary={label} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </>
          ) : (
            <>
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
              <Box>
                <Divider />
                <List sx={{ margin: '0 auto', color: '#159EEC' }}>
                  {dashBoardButton[userRole].map(({ path, label, icon }) => (
                    <Link
                      key={label}
                      to={path}
                      sx={{
                        color: '#159EEC',
                        textDecoration: 'none',
                        '&.active, &.active .MuiSvgIcon-root': {
                          color: '#1F2B6C',
                        },
                      }}
                      component={RouterNavLink}
                    >
                      <ListItem>
                        <ListItemButton>
                          <ListItemIcon sx={{ marginRight: '-2.5rem' }}>
                            {icon}
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </>
          )}
        </>
      ) : (
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
          <Divider variant="middle" />
          <List sx={{ margin: '0 auto', color: '#159EEC' }}>
            {dashBoardButton[userRole].map(({ path, label, icon }) => (
              <Link
                key={label}
                to={path}
                sx={{
                  color: '#159EEC',
                  textDecoration: 'none',
                  '&.active, &.active .MuiSvgIcon-root': {
                    color: '#1F2B6C',
                  },
                }}
                component={RouterNavLink}
              >
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
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
