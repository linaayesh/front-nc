import { useEffect } from 'react';

import { getUser } from 'store/auth/thunk';
import { message } from 'components/AntDesign';
import { HTTP_EXCEPTIONS_MESSAGES } from 'shared/constants';
import { useAppDispatch, useAppSelector } from './useRedux';

export default function useAuth() {
  const dispatch = useAppDispatch();
  const { user, error, isLoading } = useAppSelector((state) => state.checkAuth);

  useEffect(() => {
    (async () => {
      await dispatch(getUser());
      if (!isLoading && error) {
        message.error(HTTP_EXCEPTIONS_MESSAGES[error]);
      }
    })();
  }, []);

  return user;
}
