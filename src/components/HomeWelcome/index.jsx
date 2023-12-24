import { Box, Container, Link, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { FaArrowRight } from 'react-icons/fa6'
import { Link as ReactRouterLink } from 'react-router-dom'
// import { WelcomeDoc } from '../../assets/img/home'
import { WelcomeDoc } from '../../assets/img/home'
import SectionHeader from '../shared/SectionHeader'
import { ColorBarImage, ImageContain, WelcomeHomeSection } from './style'

function HomeWelcome() {
  const theme = useTheme()
  const matches = useMediaQuery('(width >= 47em)')

  return (
    <WelcomeHomeSection className="welcome-home">
      <Container>
        <Box className="content" sx={{ marginBottom: '7rem' }}>
          <SectionHeader
            position="center"
            headingTag={2}
            spanText="welcome to al-ameer"
            headingText="A Great Place to Receive Care"
          />

          <Typography
            sx={{
              marginBlock: '3rem',

              margin: '0 auto',
              marginTop: '2rem',
              marginBottom: '3rem',
              '@media(width >= 60rem)': {
                width: '90rem',
              },
            }}
          >
            Nestled in the heart of our community lies a haven for healing, a
            place where compassion intertwines with expertise—a beacon of hope
            and solace for those in need. Our facility stands as a testament to
            unwavering commitment, where every individual is embraced with
            warmth and understanding.
          </Typography>

          <Link
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5em',
              ...theme.typography.linkTag,
              color: theme.palette.secondary.main,
            }}
            component={ReactRouterLink}
            to="/"
          >
            Learn More <FaArrowRight size={15} color="#1F2B6C" />
          </Link>
        </Box>
        {matches && (
          <Box>
            <ImageContain></ImageContain>
            <ColorBarImage>
              <span></span>
              <span></span>
              <span></span>
            </ColorBarImage>
          </Box>
        )}
      </Container>

      {!matches && (
        <>
          <Box
            sx={{ width: '100%', display: 'block' }}
            component="img"
            src={WelcomeDoc}
            alt=""
          />
          <ColorBarImage>
            <span></span>
            <span></span>
            <span></span>
          </ColorBarImage>
        </>
      )}
      {/* */}
    </WelcomeHomeSection>
  )
}

export default HomeWelcome
