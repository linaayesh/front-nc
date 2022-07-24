import React, { useEffect } from 'react';
import {
  message,
} from 'antd';
import { GoogleLogin } from 'react-google-login';
import PropsTypes from 'prop-types';
import { gapi } from 'gapi-script';
import axios from 'axios';

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

  const successResponse = async (response) => {
    const { tokenId } = response;
    try {
      const responseAPI = await axios.post('/api/v1/auth/sign/google', { tokenId });
      console.log('response', responseAPI.data);
    } catch (error) {
      message.warning(error.response.data.message);
    }
  };

  const failureResponse = (response) => {
    message.error(response);
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
