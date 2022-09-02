import PropTypes from 'prop-types';

import logo from 'assets/images/NextUpLogo.png';
import './style.css';

export default function Logo({ className }) {
  return (
    <img
      src={logo}
      alt="logo of NextUpComedy"
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};
