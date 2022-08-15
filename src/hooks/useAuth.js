import { useEffect } from 'react';

import { getUser } from 'store/auth/thunk';
import { message } from 'components/AntDesign';
import { useAppDispatch, useAppSelector } from './useRedux';

export default function useAuth() {
  const dispatch = useAppDispatch();
  const {
    user, error,
  } = useAppSelector((state) => state.checkAuth);

  useEffect(() => {
    dispatch(getUser());
    message.error(error);
  }, []);
  return user;
}
