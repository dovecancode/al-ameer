import { Container } from '@mui/material'
import { AricleCardContainer, HomeNewSection } from './style'

// import { NewsFeaturedImage } from '../../assets/img/home'
import SectionHeader from '../../components/shared/SectionHeader'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import newsArticles from './data'

// import required modules
import { Pagination } from 'swiper/modules'
import ArticleCard from '../ArticleCard'

function HomeNews() {
  const swiperSlideColumn = Array.from({ length: 3 }, (_, i) => i)

  return (
    <HomeNewSection>
      <Container>
        <SectionHeader
          spanText="better information, better health"
          headingTag={2}
          headingText="News"
          position="center"
        />
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {swiperSlideColumn.map((_, colidx) => (
            <SwiperSlide key={`col-${colidx}`}>
              <AricleCardContainer
                className="article-container"
                direction={{ md: 'row', lg: 'row' }}
                flexWrap="wrap"
                gap={3}
              >
                {newsArticles.slice(0, 4).map((article, idx) => (
                  <ArticleCard key={`article-${idx}`} article={article} />
                ))}
              </AricleCardContainer>
            </SwiperSlide>
          ))}

          {/* {newsArticles.map((articles, idx) => (
            <AricleCardContainer
              key={`article-${idx}`}
              className="article-container"
              direction={{ md: 'row', lg: 'row' }}
              flexWrap="wrap"
              gap={3}
            >
              <ArticleCard {...articles} />
            </AricleCardContainer>
          ))} */}
        </Swiper>
      </Container>
    </HomeNewSection>
  )
}

export default HomeNews
