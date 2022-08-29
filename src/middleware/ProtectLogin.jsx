import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from 'hooks';

export default function Pro({ children }) {
  const { isLoading, isLoggedIn } = useAppSelector(({ checkAuth }) => checkAuth);
  const { state } = useLocation();
  if (!isLoading && isLoggedIn) {
    return <Navigate to={state?.path || '/dashboard'} />;
  }

  return children;
}

Pro.propTypes = {
  children: PropTypes.node.isRequired,
};
