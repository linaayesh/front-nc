import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import PropsTypes from 'prop-types';
import { gapi } from 'gapi-script';

import {
  message,
} from 'components/AntDesign';

export default function GoogleAuth({ label }) {
  const clientID = process.env.REACT_APP_CLIENT_ID;
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientID,
        scope: 'email',
      });
    };

    gapi.load('client:auth2', start);
  }, []);
  const successResponse = (response) => {
    console.log(response);
    const { tokenId, profileObj: { email, name, imageUrl } } = response;
    console.log('User Data', email, name, imageUrl);
    console.log('tokenId', tokenId);
    // try {
    //   const response = await axios.post('/signUp/google', { tokenId });
    //   message.success(response.data.msg); // Sign up Successfully
    // } catch (err) {
    //   message.error(err.data.msg); // something went wrong try a gain later
    // }
  };

  const failureResponse = (response) => {
    message.error(response); // something went wrong try a gain later
  };
  return (
    <GoogleLogin
      className="google-sign-up-button"
      buttonText={label}
      clientId={clientID}
      onSuccess={successResponse}
      onFailure={failureResponse}
      cookiePolicy="single_host_origin"
    />

  );
}
GoogleAuth.propTypes = {
  label: PropsTypes.string.isRequired,
};
