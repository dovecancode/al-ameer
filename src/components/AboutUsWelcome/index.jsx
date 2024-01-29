import { Stack, Box, Typography, useMediaQuery } from '@mui/material'
import { WelcomeAboutUsSection, CircleWithText } from './AboutUsWelcome.Element'
import SectionHeader from '../shared/SectionHeader'
import WelcomingStaff from '../../assets/img/aboutus/welcome-staff.jpg'
import { items } from './data.js'

function AboutUsWelcome() {
  // handles the media query
  const isMobile = useMediaQuery('(max-width:425px)')
  const isTablet = useMediaQuery('(max-width:768px)')
  const isLaptop = useMediaQuery('(max-width:1024px)')
  const isDesktop = useMediaQuery('(max-width:1440px)')

  return (
    <WelcomeAboutUsSection>
      <Stack direction={isTablet ? 'column' : 'row'} spacing={4}>
        <Box
          sx={{
            marginRight: isTablet ? 'auto' : 0,
            marginLeft: isTablet ? 'auto' : 0,
            textAlign: isTablet ? 'center' : 'left',
          }}
        >
          <Box
            component="img"
            src={WelcomingStaff}
            alt="Welcoming Staff"
            sx={{
              width: isMobile
                ? '30rem'
                : isLaptop
                ? '50rem'
                : isDesktop
                ? '60rem'
                : 'auto',
              margin: isMobile ? '0 auto' : '0',
            }}
          />
        </Box>
        <Box>
          <SectionHeader
            headingTag={1}
            spanText="welcome to al-ameer"
            headingText="Best Care for Your Good Health"
          />
          <Stack direction={isMobile ? 'column' : 'row'}>
            {[0, 1].map((column) => (
              <Box
                key={column}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginRight:
                    (column === 0 && isMobile && 'unset') ||
                    (column === 0 && isLaptop && '2rem') ||
                    (column === 1 && '0') ||
                    '10rem',
                  marginTop: isMobile && column === 1 ? '1rem' : 'unset',
                }}
              >
                {items.slice(column * 3, column * 3 + 3).map((item, idx) => (
                  <Typography key={idx}>
                    <CircleWithText />
                    {item}
                  </Typography>
                ))}
              </Box>
            ))}
          </Stack>
          <Typography sx={{ marginTop: '3rem' }}>
            A At Al-Ameer, our passion for healing goes beyond conventional
            healthcare. With values like Always Caring, 5-Star Care, and a
            Legacy of Excellence, we{"'"}re not just your healthcare provider –
            we{"'"}re your partner in wellness.
          </Typography>
          <Typography sx={{ marginTop: '2rem' }}>
            Believe in us for healthcare beyond expectations. Our dedicated team
            ensures the highest quality service, emphasizing compassion and
            individual attention. At Al-Ameer, your well-being is in capable
            hands, and your health and happiness are our top priorities. Welcome
            to an exceptional healthcare experience.
          </Typography>
        </Box>
      </Stack>
    </WelcomeAboutUsSection>
  )
}
export default AboutUsWelcome
