import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Box, Container } from '@mui/material'
import DoctorCard from '../DoctorCard'
import SectionHeader from '../../components/shared/SectionHeader'
import { doctorInfo } from './data'
import 'swiper/css'
import 'swiper/css/pagination'

function DoctorSliderCard() {
  return (
    <>
      <Container sx={{ marginTop: '5rem'}}>
        <SectionHeader
          spanText="trusted care"
          headingTag={2}
          headingText="Our Doctors"
          position="center"
        />
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
      </Container>
    </>
  )
}

export default DoctorSliderCard
