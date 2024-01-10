import { Box } from '@mui/material'
import styled from '@emotion/styled'

export const TestimonialBg = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '55rem',
    margin: '1.5rem auto 4.5rem',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundImage: `url('testimonial-bg.jpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: '-1',
    },
  }
})

export const TestimonialBgColor = styled(Box)(() => {
  return {
    position: 'relative',
    width: '100%',
    height: '55rem',
    margin: '1.5rem auto 4.5rem',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      opacity: '0.5',
      backgroundColor: `rgba(31,43,108,1)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  }
})
