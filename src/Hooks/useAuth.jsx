import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../Store/Slices/checkAuthSlice';
import axiosCall from '../Services/ApiCall';

export default function useAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      axiosCall('/api/v1/auth/user', 'get', null)
        .then(
          ({
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
          },
        ).catch(() => {
          dispatch(
            setAuth({
              id: null,
              username: null,
              email: null,
              roleId: null,
              isLoggedIn: false,
              isLoading: false,
            }),
          );
        });
    };
    fetchData();
  }, [dispatch]);

  return useSelector(({ checkAuth }) => checkAuth.auth);
}
