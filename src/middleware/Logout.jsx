import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppDispatch } from 'hooks';
import { logoutUser } from 'store/auth/thunk';

export default function Logout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logoutUser());
  }, []);

  return <Navigate to="/" />;
}
