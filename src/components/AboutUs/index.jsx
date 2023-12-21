import { Box } from '@mui/material';
import { SubHead } from './style';
import LinkMap from '../shared/LinkMap';
import SubHeadText from '../shared/SubHeadText';
import GridColor from '../shared/GridColor';

function AboutUs() {
  return (
    <>
      <SubHead>
        <Box sx={{ textAlign: 'left', margin: 'auto 0' }}>
          <LinkMap />
          <SubHeadText text="About Us" />
        </Box>
      </SubHead>
      <GridColor />
    </>
  );
}

export default AboutUs;
