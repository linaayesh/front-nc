import { useEffect } from 'react';

import { getUser } from 'store/auth/thunk';
import { useAppDispatch, useAppSelector } from './useRedux';

export default function useAuth() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.checkAuth);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return user;
}
