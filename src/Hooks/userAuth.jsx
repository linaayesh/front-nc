import { useEffect, useState } from 'react';
import axios from 'axios';

export default function userAuthHook() {
  const [userAuth, setUserAuth] = useState('');

  useEffect(() => {
    const fetchData = () => {
      axios.get('/api/v1/auth/userAuth').then(
        (result) => setUserAuth(result.data.data),
      );
    };
    fetchData();
  }, []);

  return userAuth;
}
