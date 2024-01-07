import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import PropTypes from 'prop-types'

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
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
                title={article.title}
              >
                {article.title.substring(0, 20) + '...'}
              </Typography>
            </CardContent>
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
