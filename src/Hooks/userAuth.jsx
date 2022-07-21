import { useEffecf } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setAuth } from '../Store/Slices/checkAuthSlice';

export default function userAuthHook() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      axios.get('/api/v1/auth/userAuth').then(
        (result) => {
          dispatch(
            setAuth({
              id: result.data.id,
              username: result.data.username,
              email: result.data.email,
              roleId: result.data.roleId,
              isLoggedIn: true,
            }),
          );
        },
      ).catch((error) => {
        console.log(error);
      });
    };
    fetchData();
  }, [dispatch]);

  return useSelector(({ checkAuth }) => checkAuth.auth);
}
