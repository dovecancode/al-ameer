import PropTypes from 'prop-types';
import { Box, Typography, CardContent, Card } from '@mui/material';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import {
  SocialMediaBox,
  ViewProfileContainer,
  ViewProfileContent,
  CardContainer,
  CardHolder,
} from './style.jsx';

function DoctorCard({ doctorData }) {
  const { doctorGroup: doctors } = doctorData;
  return (
    <CardContainer>
      <CardHolder>
        {doctors.map((doctor) => (
          <Card
            key={doctor.id}
            sx={{ maxWidth: 400, backgroundColor: '#BFD2F8' }}
          >
            <Box
              component="img"
              src={doctor.image}
              title={doctor.name}
              sx={{ width: '100%' }}
            />
            <Box sx={{ textAlign: 'center', paddingTop: '1rem' }}>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.8rem', color: '#1F2B6C' }}
              >
                {doctor.name}
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: '1.8rem', letterSpacing: '.28rem' }}
              >
                {doctor.specialist}
              </Typography>
            </Box>
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <SocialMediaBox
                backgroundColor="#1F2B6C"
                iconComponent={<FaLinkedinIn />}
                link={doctor.linkedinLink}
              />
              <SocialMediaBox
                backgroundColor="#1F2B6C"
                iconComponent={<FaFacebookF />}
                link={doctor.fbLink}
              />
              <SocialMediaBox
                backgroundColor="#1F2B6C"
                iconComponent={<FiInstagram />}
                link={doctor.instaLink}
              />
            </CardContent>
            <ViewProfileContainer>
              <ViewProfileContent component="a" href="">
                View Profile
              </ViewProfileContent>
            </ViewProfileContainer>
          </Card>
        ))}
      </CardHolder>
    </CardContainer>
  );
}

DoctorCard.propTypes = {
  doctorData: PropTypes.object,
};

export default DoctorCard;
