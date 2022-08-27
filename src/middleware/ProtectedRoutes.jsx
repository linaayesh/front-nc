import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from 'hooks';

export default function ProtectedRoute({ children }) {
  const { isLoading, isLoggedIn } = useAppSelector(({ checkAuth }) => checkAuth);

  if (isLoading && !isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
