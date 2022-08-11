import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAuth } from 'store/auth/slice';
import userService from 'services/user';
import { DEFAULT_USER_STATE } from 'constants';
import { message } from 'components/AntDesign';

export default function useAuth() {
  const dispatch = useDispatch();
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

  return useSelector(({ checkAuth }) => checkAuth.auth);
}
