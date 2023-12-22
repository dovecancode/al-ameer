import PropTypes from 'prop-types';
import { ButtonTextUI } from './style';

function ButtonLink({ children, path }) {
  return <ButtonTextUI to={path}>{children}</ButtonTextUI>;
}

ButtonLink.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
};

export default ButtonLink;
