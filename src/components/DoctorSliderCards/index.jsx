import { Container } from '@mui/material'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../../components/shared/SectionHeader'
import DoctorCard from '../DoctorCard'
import { doctorInfo } from './data'

function DoctorSliderCard() {
  return (
    <>
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
            <Container sx={{ margin: '-6rem auto' }}>
              <DoctorCard doctorData={doctorData} />
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default DoctorSliderCard
