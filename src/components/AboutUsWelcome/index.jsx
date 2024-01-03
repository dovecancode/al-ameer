import { Stack, Box, Typography } from '@mui/material';
import { WelcomeAboutUsSection } from './style';
import SectionHeader from '../shared/SectionHeader';
import WelcomingStaff from '../../assets/img/aboutus/welcome-staff.jpg';

function AboutUsWelcome() {
  const CircleWithText = () => (
    <span
      style={{
        display: 'inline-block',
        backgroundColor: '#159EEC',
        borderRadius: '50%',
        width: '1.5rem',
        height: '1.5rem',
        marginRight: '1rem',
      }}
    ></span>
  );

  const items = [
    'A Passion for Healing',
    'All our best',
    'Always Caring',
    '5-Star Care',
    'Believe in Us',
    'A Legacy of Excellence',
  ];

  return (
    <WelcomeAboutUsSection>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
        <img
          src={WelcomingStaff}
          alt="Welcoming Staff"
          style={{
            height: '60rem',
            '@media (maxWidth >= 768px)': { display: 'none' },
          }}
        />
        <Box>
          <SectionHeader
            headingTag={1}
            spanText="welcome to al-ameer"
            headingText="Best Care for Your Good Health"
          />
          <Stack direction="row">
            {[0, 1].map((column) => (
              <Box
                key={column}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginRight: column === 0 ? '10rem' : 0,
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
            Legacy of Excellence, we`&apos`re not just your healthcare provider
            – we`&apos`re your partner in wellness.
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
  );
}
export default AboutUsWelcome;
