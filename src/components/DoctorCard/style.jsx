import styled from '@emotion/styled'
import { Box, Container } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'

export const ViewProfileContainer = styled(Box)({
  backgroundColor: '#1F2B6C',
  height: '4.6rem',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
})

export const ViewProfileContent = styled(Box)({
  color: '#BFD2F8',
  fontSize: '1.6rem',
  marginTop: '1.2rem',
  fontFamily: "'Work Sans', sans-serif",
})

export const CardContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
})

export const CardHolder = styled(Container)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '3rem',
})

export const SocialMediaBox = ({ backgroundColor, iconComponent, link }) => {
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
