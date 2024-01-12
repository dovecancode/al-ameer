import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Container, TextField, Typography, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ConstructionPageImage from '../ConstructionPageImage'
import TopLogo from '../TopLogo'
import SubmitButton from '../shared/SubmitButton'
import { Item } from './style'

export default function UnderConstractionUI() {
  const isDesktop = useMediaQuery('(min-width:769px)')

  return (
    <Container sx={{ flexGrow: 1, mt: 10 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        comlumns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
      >
        <Grid item sm={12} md={6}>
          <Item>
            <Box sx={{ mt: 4, mb: 7 }}>
              <TopLogo />
            </Box>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h2">Building something amazing</Typography>
            </Box>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h3">
                Welcome! We are currently working behind the scenes to bring you
                an exciting new experience. Our website is undergoing some
                enhancements and will be back soon with fresh content and
                exciting features. Feel free to subscribe to our mailing list
                for notifications.
              </Typography>
            </Box>
            <Box sx={{ mb: 5 }}>
              <Grid item xs={12} md={12} sx={{ mb: 2 }}>
                <TextField
                  required
                  id="outlined-required"
                  label="email"
                  defaultValue="example@email.com"
                  sx={{ width: isDesktop ? '22rem' : '100%' }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <SubmitButton
                  width={isDesktop ? '22rem' : '100%'}
                  height="5.5rem"
                  backgroundnonhover="#1f2b6c"
                  colornonhover="#fff"
                >
                  Subscribe
                </SubmitButton>
              </Grid>
            </Box>
            <Box>
              <Typography variant="h3">You can also follow us on</Typography>
              <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
                <Box>
                  <FacebookIcon sx={{ fontSize: '4rem', color: '#3B5998' }} />
                </Box>
                <Box>
                  <InstagramIcon sx={{ fontSize: '4rem', color: '#833AB4' }} />
                </Box>
                <Box>
                  <LinkedInIcon sx={{ fontSize: '4rem', color: '#0077B5' }} />
                </Box>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item sm={12} md={6}>
          <Item>
            <ConstructionPageImage />
          </Item>
        </Grid>
        <Grid item xs={6} md={12}>
          <Item>
            <Box>
              <Typography variant="h6">
                &#169; Copyrights Al-Ameer | All Rights Reserved
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Container>
  )
}
