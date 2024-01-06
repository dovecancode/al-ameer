import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, CardContent, Card } from '@mui/material';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { doctorInfo } from './data';
import {
  ViewProfileContainer,
  ViewProfileContent,
  CardContainer,
  CardHolder,
} from './style';

const SocialMediaBox = ({ backgroundColor, iconComponent, link }) => {
  const marginRight =
    iconComponent.type === FaLinkedinIn || iconComponent.type === FaFacebookF
      ? '3rem'
      : '0';
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        height: '4rem',
        width: '4rem',
        fontSize: '2rem',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: marginRight,
        cursor: 'pointer',
      }}
    >
      {React.cloneElement(iconComponent, {
        src: link,
        style: { color: '#BFD2F8' },
      })}
    </Box>
  );
};

SocialMediaBox.propTypes = {
  backgroundColor: PropTypes.string,
  iconComponent: PropTypes.element,
  link: PropTypes.string,
};

export default function DoctorCard() {
  return (
    <CardContainer>
      <CardHolder>
        {doctorInfo.map(
          ({
            id,
            image,
            name,
            specialist,
            linkedinLink,
            fbLink,
            instaLink,
          }) => (
            <Card key={id} sx={{ maxWidth: 400, backgroundColor: '#BFD2F8' }}>
              <Box
                component="img"
                src={image}
                title={name}
                sx={{ width: '100%' }}
              />
              <Box sx={{ textAlign: 'center', paddingTop: '1rem' }}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: '1.8rem', color: '#1F2B6C' }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: '1.8rem', letterSpacing: '.28rem' }}
                >
                  {specialist}
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
                  link={linkedinLink}
                />
                <SocialMediaBox
                  backgroundColor="#1F2B6C"
                  iconComponent={<FaFacebookF />}
                  link={fbLink}
                />
                <SocialMediaBox
                  backgroundColor="#1F2B6C"
                  iconComponent={<FiInstagram />}
                  link={instaLink}
                />
              </CardContent>
              <ViewProfileContainer>
                <ViewProfileContent component="a" href="">
                  View Profile
                </ViewProfileContent>
              </ViewProfileContainer>
            </Card>
          )
        )}
      </CardHolder>
    </CardContainer>
  );
}
