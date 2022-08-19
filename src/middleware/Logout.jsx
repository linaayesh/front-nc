import { useAppDispatch } from 'hooks';
import { Navigate } from 'react-router-dom';
import { logoutUser } from 'store/auth/thunk';

export default function Logout() {
  const dispatch = useAppDispatch();
  (async () => {
    await dispatch(logoutUser());
  })();
  return <Navigate to="/" />;
}
