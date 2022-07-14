import { useEffect, useState } from 'react';
import axios from 'axios';

export default function userAuthHook() {
  const [userAuth, setUserAuth] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/v1/auth/userAuth');
      setUserAuth(result.data.data);
    };
    fetchData();
  }, []);

  return userAuth;
}
