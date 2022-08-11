import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from 'hooks';

export default function Pro({ children }) {
  const auth = useAppSelector(({ checkAuth }) => checkAuth.auth);
  if (auth.isLoading) {
    if (!auth.isLoggedIn) {
      return <Navigate to="/dashboard" />;
    }
  }

  return children;
}

Pro.propTypes = {
  children: PropTypes.node.isRequired,
};
