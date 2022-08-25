import { useEffect } from 'react';
import { gapi } from 'gapi-script';

import { CLIENT_ID } from 'shared/constants/config';

export default function useGapi() {
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'email',
      });
    };
    gapi.load('client:auth2', start);
  }, []);
}
