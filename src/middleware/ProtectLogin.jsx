import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from 'hooks';

export default function Pro({ children }) {
  const { isLoading, isLoggedIn } = useAppSelector(({ checkAuth }) => checkAuth);

  if (!isLoading && isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}

Pro.propTypes = {
  children: PropTypes.node.isRequired,
};
