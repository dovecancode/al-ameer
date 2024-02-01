import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ButtonLink from '../shared/ButtonLink'
import { pageLinks } from './pagelinks'

function Navbar() {
  const location = useLocation()
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [isToggle, setIsToggle] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  // handles the scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // handles toggle effect
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
    setIsToggle(!isToggle)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
    setIsToggle(false)
  }

  return (
    <AppBar position={scrolling ? 'fixed' : 'static'} top={0}>
      <Container>
        <Toolbar
          sx={{
            '@media (min-width: 319px)': {
              paddingLeft: 0,
              paddingRight: 0,
              display: 'flex',
              justifyContent: 'space-between',
            },
          }}
        >
          <Typography
            variant="h1"
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: '#BFD2F8',
              textDecoration: 'none',
              '@media (max-width: 768px)': { fontSize: '3rem' },
            }}
          >
            Al-
            <Box component="span" sx={{ color: '#FCFEFE' }}>
              Ameer
            </Box>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pageLinks.map(({ id, link, text }) => (
              <Link
                key={id}
                to={link}
                style={{
                  marginRight: '1.5rem',
                  color: location.pathname === link ? '#159EEC' : 'white',
                  display: 'block',
                  fontFamily: 'Work Sans',
                  fontSize: '1.8rem',
                  '&:hover': { color: '#159EEC' },
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
          <IconButton sx={{ p: 0 }}>
            <SearchIcon
              sx={{
                fontSize: 35,
                marginRight: '1.5rem',
                color: '#FCFEFE',
                cursor: 'pointer',
                display: { xs: 'none', md: 'flex' },
              }}
            />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <ButtonLink path="appointment" htmlELType="a">
              appointment
            </ButtonLink>
          </Box>

          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            {isToggle ? (
              <CloseIcon
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  fontSize: '3.5rem',
                  color: '#FCFEFE',
                }}
              />
            ) : (
              <MenuIcon
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  fontSize: '3.5rem',
                  color: '#FCFEFE',
                }}
              />
            )}
          </IconButton>
          <Menu
            sx={{ mt: '48px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Box
              sx={{
                padding: '1rem 10rem',
                '@media (max-width: 425px)': { padding: '1rem 5rem' },
              }}
            >
              {pageLinks.map(({ id, link, text }) => (
                <MenuItem key={id} onClick={handleCloseUserMenu}>
                  <Link
                    to={link}
                    style={{
                      color: '#1F2B6C',
                      fontSize: '1.8rem',
                      fontWeight: location.pathname === link ? '700' : '',
                      margin: '0 auto',
                    }}
                  >
                    {text}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseUserMenu}>
                <ButtonLink path="/appointment" htmlELType="a">
                  appointment
                </ButtonLink>
              </MenuItem>
            </Box>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Link.propTypes = {
  id: PropTypes.number,
  link: PropTypes.string,
  text: PropTypes.string,
}

export default Navbar
