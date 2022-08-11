import { useEffect, useState } from 'react';

import { setAuth } from 'store/auth/slice';
import userService from 'services/user';
import { DEFAULT_USER_STATE } from 'constants';
import { message } from 'components/AntDesign';
import { useAppDispatch, useAppSelector } from './useRedux';

export default function useAuth() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => userService
      .getUser()
      .then(
        ((res) => {
          const {
            id, username, email, roleId, image,
          } = res.data;
          dispatch(setAuth({
            id,
            username,
            email,
            roleId,
            isLoggedIn: true,
            isLoading: false,
            image,
          }));

          setIsLoading(false);
        }),
      ).catch((err) => {
        if (!isLoading) {
          message.error(err.message);
        }
        return dispatch(setAuth(DEFAULT_USER_STATE));
      });

    fetchData();
  }, [dispatch]);

  return useAppSelector(({ checkAuth }) => checkAuth.auth);
}
