import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
  const auth = useSelector(({ checkAuth }) => checkAuth.auth);

  if (!auth.isLoading) {
    if (!auth.isLoggedIn) {
      return <Navigate to="/" />;
    }
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
