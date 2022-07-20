import { useDispatch } from 'react-redux';
import { setAuth } from '../Store/Slices/checkAuthSlice';
import userAuthHook from './userAuth';

export default function CheckToken() {
  const token = userAuthHook();
  const {
    id, username, email, roleId,
  } = token;
  const dispatch = useDispatch();

  dispatch(
    setAuth({
      id,
      username,
      email,
      roleId,
      isLoggedIn: true,
    }),
  );
}
