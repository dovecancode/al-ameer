import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const TopMostContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: theme.spacing(3, 0),
}));

export const TopMostLogo = styled(Typography)(() => ({
  '@media (max-width: 1024px)': { fontSize: '4.5rem' },
  '@media (max-width: 768px)': { fontSize: '3rem' },
  '@media (max-width: 425px)': { display: 'none' },
}));

export const SpanWord = styled(Box)(() => ({
  display: 'inline-block',
  color: '#159EEC',
}));

export const TopMostRightContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  color: '#1F2B6C',
}));

export const TopMostRightContents = styled(Box)(() => ({
  display: 'flex',
  '@media (max-width: 425px)': { margin: '0 auto' },
}));

export const TopMostIcon = styled(Typography)(() => ({
  paddingRight: 1,
}));

export const TopMostRight = styled(Box)(() => ({
  paddingRight: 2,
}));

export const TopMostText = styled(Typography)(() => ({
  fontSize: '2rem',
  fontFamily: "'Work Sans', sans-serif",
  '@media (max-width: 1024px)': { fontSize: '1.7rem' },
  '@media (max-width: 768px)': { fontSize: '1.3rem' },
}));

export const TopMostInfo = styled(Typography)(() => ({
  fontSize: '2rem',
  color: '#159EEC',
  fontFamily: "'Work Sans', sans-serif",
  '@media (max-width: 1024px)': { fontSize: '1.7rem' },
  '@media (max-width: 768px)': { fontSize: '1.3rem' },
}));
