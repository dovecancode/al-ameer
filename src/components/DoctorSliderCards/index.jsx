import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Container } from '@mui/material';
import DoctorCard from '../DoctorCard';
import SectionHeader from '../../components/shared/SectionHeader';
import { doctorInfo } from '../../Screens/AboutScreen/data';
import 'swiper/css';
import 'swiper/css/pagination';

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
            <Container sx={{ marginBottom: '-3.5rem' }}>
              <DoctorCard doctorData={doctorData} />
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default DoctorSliderCard;
