import { Box, Card, CardContent, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'
import {
  CardContainer,
  CardHolder,
  ViewProfileContainer,
  ViewProfileContent,
} from './DoctorSingleCard.element'

function DoctorCard({ doctorInfoIndividual }) {
  // handles the style for the icons
  const SocialMediaBox = ({ backgroundColor, iconComponent, link }) => {
    const marginRight =
      iconComponent.type === FaLinkedinIn || iconComponent.type === FaFacebookF
        ? '3rem'
        : '0'
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
    )
  }

  SocialMediaBox.propTypes = {
    backgroundColor: PropTypes.string,
    iconComponent: PropTypes.element,
    link: PropTypes.string,
  }

  return (
    <CardContainer>
      <CardHolder>
        {doctorInfoIndividual.map((doctor) => (
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
  )
}

DoctorCard.propTypes = {
  doctorInfoIndividual: PropTypes.array,
}

export default DoctorCard
