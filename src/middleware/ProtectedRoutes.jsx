import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from 'hooks';

export default function ProtectedRoute({ children }) {
  const { isLoading, isLoggedIn } = useAppSelector(({ checkAuth }) => checkAuth);
  const { pathname: path } = useLocation();

  if (isLoading && !isLoggedIn) {
    return <Navigate to="/" state={{ path }} />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
