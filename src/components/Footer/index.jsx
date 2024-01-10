import {
  Box,
  Container,
  Divider,
  InputAdornment,
  Typography,
} from '@mui/material'
import {
  FooterBootom,
  FooterHeading,
  FooterSection,
  FooterTop,
  Footerlink,
  Item,
  NewsTextField,
  SocialIcon,
} from './style'

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

import { IoIosSend } from 'react-icons/io'

function Footer() {
  return (
    <FooterSection>
      <Container>
        <Box sx={{ width: '100%' }}>
          <FooterTop
            className="content"
            direction={{ sm: 'row', md: 'row', lg: 'row' }}
          >
            <Item>
              <Typography
                variant="h2"
                component="h3"
                sx={{
                  color: '#BFD2F8',
                }}
              >
                Al-
                <Box component="span" sx={{ color: '#FCFEFE' }}>
                  Ameer
                </Box>
              </Typography>
              <Typography>
                Leading the Way in Medical Execellence, Trusted Care.
              </Typography>
            </Item>
            <Item>
              <FooterHeading component="h3">Important Links</FooterHeading>
              <Box>
                <Footerlink href="/">Appointment</Footerlink>
                <Footerlink href="/">Doctors</Footerlink>
                <Footerlink href="/">Services</Footerlink>
                <Footerlink href="/">About Us</Footerlink>
              </Box>
            </Item>
            <Item>
              <FooterHeading component="h3">Contact Us</FooterHeading>
              <Box>
                <Typography component="p" fontSize={16}>
                  Call: (237) 681-812-255 <br />
                  Email: fildineesoe@gmail.com Address: 0123 Some place Some
                  country
                </Typography>
              </Box>
            </Item>
            <Item>
              <FooterHeading component="h3">Newsletter</FooterHeading>
              <Box>
                <NewsTextField
                  variant="filled"
                  label="Enter your email address..."
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '100%' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IoIosSend color="#1F2B6C" size={30} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: '#1F2B6C' },
                  }}
                />
              </Box>
            </Item>
          </FooterTop>
          <Divider color="#fff" />
        </Box>
        <FooterBootom direction={{ md: 'row' }}>
          <Typography component="p">
            © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
          </Typography>
          <Box>
            <SocialIcon component="span">
              <FaLinkedinIn color="#1F2B6C" size={15} />
            </SocialIcon>
            <SocialIcon component="span">
              <FaFacebookF color="#1F2B6C" size={15} />
            </SocialIcon>
            <SocialIcon component="span">
              <GrInstagram color="#1F2B6C" size={15} />
            </SocialIcon>
          </Box>
        </FooterBootom>
      </Container>
    </FooterSection>
  )
}

export default Footer
