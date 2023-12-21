import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Span } from './style';

function pathName(pathname) {
  return pathname
    .replace(/\//g, '')
    .replace(/-/g, ' ')
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}

function LinkMap() {
  const location = useLocation();
  const cleanedPathname = pathName(location.pathname);

  return (
    <Container>
      <Span>
        <Link to="/" style={{ color: '#1F2B6C' }}>
          Home
        </Link>{' '}
        /{' '}
        <Link to={{ cleanedPathname }} style={{ color: '#1F2B6C' }}>
          {cleanedPathname}
        </Link>
      </Span>
    </Container>
  );
}
export default LinkMap;
