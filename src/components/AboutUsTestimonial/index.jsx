import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Container, Typography, Box } from '@mui/material'
import { IoMdQuote } from 'react-icons/io'
import { TestimonialBg, TestimonialBgColor } from './AboutUsTestimonial.Element'
import { reviews } from './data'
import 'swiper/css'
import 'swiper/css/pagination'

function AboutUsTestimonial() {
  const renderBullet = (index, className) => {
    return `<span class="custom-pagination ${className}"></span>`
  }
  return (
    <>
      <TestimonialBgColor>
        <TestimonialBg>
          <Container sx={{ marginBlock: 'auto' }}>
            <Swiper
              spaceBetween={1}
              pagination={{
                clickable: true,
                renderBullet: renderBullet,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {reviews.map(({ id, reviewer, review }) => (
                <SwiperSlide key={id}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      width: '65%',
                      margin: 'auto',
                    }}
                  >
                    <IoMdQuote style={{ fontSize: '7rem', color: '#BFD2F8' }} />
                    <Typography sx={{ color: '#FCFEFE', marginBlock: '2rem' }}>
                      {review}
                    </Typography>
                    <hr
                      style={{
                        width: '40rem',
                        borderTop: '1px solid ##BFD2F8',
                        margin: '2.5rem auto',
                      }}
                    />
                    <Typography sx={{ color: '#FCFEFE', marginBottom: '3rem' }}>
                      {reviewer}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </TestimonialBg>
      </TestimonialBgColor>
    </>
  )
}
export default AboutUsTestimonial
