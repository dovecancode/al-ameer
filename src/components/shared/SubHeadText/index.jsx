import { Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function SubHeadText({ text }) {
  return (
    <Container>
      <Typography variant='h1'>{text}</Typography>
    </Container>
  );
}

SubHeadText.propTypes = {
  text: PropTypes.string,
};

export default SubHeadText;
