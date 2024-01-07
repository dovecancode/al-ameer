import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import PropTypes from 'prop-types'
function ArticleCard({ article }) {
  console.log(article)
  return (
    <Card
      className="article-card"
      // key={`article-${article.id}`}
      sx={{ display: 'flex', flexBasis: '48%' }}
    >
      <CardMedia
        component="img"
        sx={{ width: '40%' }}
        image={article.urlToImage}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
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
    // <>
    //   {articles.map((article) => (
    //     <Card
    //       className="article-card"
    //       key={`article-${article.id}`}
    //       sx={{ display: 'flex', flexBasis: '48%' }}
    //     >
    //       <CardMedia
    //         component="img"
    //         sx={{ width: 151 }}
    //         image={article.urlToImage}
    //       />
    //       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //         <CardContent sx={{ flex: '1 0 auto' }}>
    //           <Typography component="div" variant="h5">
    //             Live From Space
    //           </Typography>
    //           <Typography
    //             variant="subtitle2"
    //             color="text.secondary"
    //             component="div"
    //             title={article.title}
    //           >
    //             {article.title.substring(0, 20) + '...'}
    //           </Typography>
    //         </CardContent>
    //       </Box>
    //     </Card>
    //   ))}
    // </>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.object,
}
export default ArticleCard
