import { Box, Container, useMediaQuery } from '@mui/material'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../../components/shared/SectionHeader'
import DoctorCard from '../DoctorCard'
import DoctorSingleCard from '../DoctorSingleCard'
import { doctorInfo, doctorInfoIndividual } from './data'

function DoctorSliderCard() {
  const isTablet = useMediaQuery('(min-width:769px)')

  return (
    <>
      <Container sx={{ marginTop: '5rem' }}>
        <SectionHeader
          spanText="trusted care"
          headingTag={2}
          headingText="Our Doctors"
          position="center"
        />

        {/* for mobile view */}
        {!isTablet && (
          <Swiper
            spaceBetween={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {doctorInfoIndividual.map((doctorInfoIndividual, idx) => (
              <SwiperSlide key={idx}>
                <Box>
                  <DoctorSingleCard
                    doctorInfoIndividual={[doctorInfoIndividual]}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* for desktop view */}
        {isTablet && (
          <Swiper
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {doctorInfo.map((doctorData, idx) => (
              <SwiperSlide key={idx}>
                <Box>
                  <DoctorCard doctorData={doctorData} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </>
  )
}

export default DoctorSliderCard
