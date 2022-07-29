import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAuth } from '../Store/Slices/checkAuthSlice';
import userService from '../Services/user';
import { DEFAULT_USER_STATE } from '../Constants';

export default function useAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      userService
        .getUser()
        .then(
          () => (({
            data: {
              data: {
                id, username, email, roleId,
              },
            },
          }) => {
            dispatch(
              setAuth({
                id,
                username,
                email,
                roleId,
                isLoggedIn: true,
                isLoading: false,
              }),
            );
          }),
        ).catch(() => {
          dispatch(setAuth(DEFAULT_USER_STATE));
        });
    };
    fetchData();
  }, [dispatch]);

  return useSelector(({ checkAuth }) => checkAuth.auth);
}
