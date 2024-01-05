import { Box, Container, Typography } from '@mui/material';
import { SubHead } from './style';
import { ColorBarImage } from '../HomeWelcome/style';
import LinkMap from '../shared/LinkMap';
import PropTypes from 'prop-types';

function TitlePage({ pageTitle, bgimage }) {
  return (
    <>
      <SubHead bgimage={bgimage}>
        <Box sx={{ textAlign: 'left', margin: 'auto 0' }}>
          <Container>
            <LinkMap />
            <Typography variant="h1" component="h1">
              {pageTitle}
            </Typography>
          </Container>
        </Box>
      </SubHead>
      <ColorBarImage>
        <span></span>
        <span></span>
        <span></span>
      </ColorBarImage>
    </>
  );
}

TitlePage.propTypes = {
  pageTitle: PropTypes.string,
  bgimage: PropTypes.string,
};

export default TitlePage;