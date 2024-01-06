import styled from '@emotion/styled';
import { Box, Container } from '@mui/material';

export const ViewProfileContainer = styled(Box)({
  backgroundColor: '#1F2B6C',
  height: '4.6rem',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
});

export const ViewProfileContent = styled(Box)({
  color: '#BFD2F8',
  fontSize: '1.6rem',
  marginTop: '1.2rem',
  fontFamily: "'Work Sans', sans-serif",
});

export const CardContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

export const CardHolder = styled(Container)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '3rem',
});