import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Box, Container } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';

function AboutUsTestimonial() {
  return (
    <>
      <Box>
        <Swiper
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <Container></Container>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
export default AboutUsTestimonial;
