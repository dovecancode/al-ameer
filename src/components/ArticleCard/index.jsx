import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import PropTypes from 'prop-types'

import { FaRegHeart } from 'react-icons/fa'
import { LuEye } from 'react-icons/lu'

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function ArticleCard({ articlesSet }) {
  // rename article_set to articles
  const { article_set: articles } = articlesSet

  return (
    <>
      {articles.map((article) => (
        <Card
          className="article-card"
          key={`article-${article.id}`}
          sx={{ display: 'flex', flexBasis: '48%' }}
        >
          <CardMedia
            component="img"
            sx={{ width: '50%' }}
            image={article.urlToImage}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="articleDate">
                {formatDate(article.publishedAt)} | By {article.author}
              </Typography>
              <Typography variant="h3" component="h3" title={article.title}>
                {article.title.substring(0, 30) + '...'}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1.6,
                pb: 1,
                gap: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LuEye size={25} color="#526AE9" fontWeight="bold" />
                <Typography component="span" variant="body1">
                  {article.views}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FaRegHeart size={20} color="#E2315C" fontWeight="bold" />
                <Typography component="span" variant="body1">
                  {article.likes}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      ))}
    </>
  )
}

ArticleCard.propTypes = {
  articlesSet: PropTypes.object,
}

export default ArticleCard
