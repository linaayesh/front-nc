import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Pro({ children }) {
  const auth = useSelector(({ checkAuth }) => checkAuth.auth);
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
