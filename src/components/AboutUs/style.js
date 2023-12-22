import { Stack } from '@mui/material';
import styled from '@emotion/styled';

export const SubHead = styled(Stack)(() => ({
  position: 'relative',
  width: '100%',
  height: '25rem',
  '&::before': {
    content: "''",
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    opacity: '0.4',
    backgroundImage: "url('subhero-aboutus.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: '-1',
  },
}));
